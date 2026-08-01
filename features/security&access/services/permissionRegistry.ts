import { identityApiRequest } from "@lib/api/identityApiRequest";

export type PermissionRegistry = {
  groups: Record<string, Record<string, string>>;
  permissions: Record<string, string>;
  roles: Record<string, string>;
  rolePermissions: Record<string, string[]>;
  keycloakCoarseRoles: string[];
};

export const getPermissionRegistry = () =>
  identityApiRequest<PermissionRegistry>({
    method: "GET",
    url: "/permissions/registry",
  });
