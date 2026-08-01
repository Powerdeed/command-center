"use client";

import { useEffect, useMemo, useState } from "react";
import FeatureTitle from "@global-components/ui/FeatureTitle";
import {
  getPermissionRegistry,
  PermissionRegistry,
} from "./services/permissionRegistry";

export default function SecurityAndAccess() {
  const [registry, setRegistry] = useState<PermissionRegistry | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getPermissionRegistry()
      .then((data) => {
        setRegistry(data);
        setError("");
      })
      .catch((err: unknown) => {
        setError(
          err instanceof Error
            ? err.message
            : "Could not load permission registry",
        );
      });
  }, []);

  const registryStats = useMemo(() => {
    if (!registry) {
      return {
        domains: 0,
        permissions: 0,
        roles: 0,
        keycloakRoles: 0,
      };
    }

    return {
      domains: Object.keys(registry.groups).length,
      permissions: Object.keys(registry.permissions).length,
      roles: Object.keys(registry.roles).length,
      keycloakRoles: registry.keycloakCoarseRoles.length,
    };
  }, [registry]);

  return (
    <div className="uniform-page-display">
      <FeatureTitle />

      <section className="grid gap-4 md:grid-cols-4">
        <RegistryStat label="Domains" value={registryStats.domains} />
        <RegistryStat label="Permissions" value={registryStats.permissions} />
        <RegistryStat label="Powerdeed roles" value={registryStats.roles} />
        <RegistryStat label="Keycloak roles" value={registryStats.keycloakRoles} />
      </section>

      {error && (
        <div className="rounded-[8px] border border-(--primary-red)/30 bg-(--primary-red)/10 p-4 text-style__body text-(--primary-red)">
          {error}
        </div>
      )}

      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="feature-container-vertical">
          <div>
            <div className="text-style__subheading text-(--primary-blue)">
              Permission Domains
            </div>
            <div className="text-style__body text-(--primary-grey)">
              Loaded from identity-service.
            </div>
          </div>

          <div className="grid gap-3">
            {registry
              ? Object.entries(registry.groups).map(([domain, permissions]) => (
                  <div
                    key={domain}
                    className="rounded-[8px] border border-(--terciary-grey) p-3"
                  >
                    <div className="text-style__body--bold text-(--primary-blue)">
                      {domain}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {Object.values(permissions).map((permission) => (
                        <span
                          key={permission}
                          className="rounded-border text-style__small-text"
                        >
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              : "Loading registry..."}
          </div>
        </div>

        <div className="feature-container-vertical">
          <div>
            <div className="text-style__subheading text-(--primary-blue)">
              Keycloak Coarse Roles
            </div>
            <div className="text-style__body text-(--primary-grey)">
              Keep Keycloak limited to these broad roles.
            </div>
          </div>

          <div className="grid gap-2">
            {(registry?.keycloakCoarseRoles ?? []).map((role) => (
              <div
                key={role}
                className="rounded-[8px] border border-(--terciary-grey) p-3 text-style__body--bold text-(--primary-blue)"
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function RegistryStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-[8px] border border-(--terciary-grey) bg-background p-4">
      <div className="text-style__small-text text-(--primary-grey)">
        {label}
      </div>
      <div className="text-style__heading text-(--primary-blue)">{value}</div>
    </div>
  );
}
