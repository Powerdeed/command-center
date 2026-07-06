"use client";

import { ReactNode, useMemo, useState, useEffect } from "react";
import { appLauncherSearchSortFilterContext } from "./AppLauncherSearchSortFilterContext";
import { appLauncherAppDataContext } from "./AppLauncherAppDataContext";
import { ACCESS_OPTIONS, AppData } from "../types/AppData";
import { appsData } from "../services/appData";
import { getEffectivePermissions, useGlobals } from "@globals";

export default function AppLauncherProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { globalStates } = useGlobals();
  const [apps, setApps] = useState<AppData[]>(appsData);
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);
  const [starredApps, setStarredApps] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const starredAppsInStorage = localStorage.getItem("starredApps");
      return starredAppsInStorage ? JSON.parse(starredAppsInStorage) : [];
    } catch (e) {
      console.error("Error parsing starred apps from storage:", e);
      return [];
    }
  });
  const [hiddenApps, setHiddenApps] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const hiddenAppsInStorage = localStorage.getItem("hiddenApps");
      return hiddenAppsInStorage ? JSON.parse(hiddenAppsInStorage) : [];
    } catch (e) {
      console.error("Error parsing hidden apps from storage:", e);
      return [];
    }
  });
  const [enableHiddenApps, setEnableHiddenApps] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Ensure hydration completes before rendering
  useEffect(() => {
    const hydrate = () => setIsHydrated(true);
    hydrate();
  }, []);

  // Persist starred apps to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("starredApps", JSON.stringify(starredApps));
    } catch (e) {
      if (e instanceof Error) {
        console.error("Error saving starred apps to storage:", e.message);
      }
    }
  }, [starredApps]);

  // Persist hidden apps to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("hiddenApps", JSON.stringify(hiddenApps));
    } catch (e) {
      if (e instanceof Error) {
        console.error("Error saving hidden apps to storage:", e.message);
      }
    }
  }, [hiddenApps]);

  // Search, Filter, Sort
  const [searchedApp, setSearchedApp] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedAccess, setSelectedAccess] = useState("");
  const [selectedSortOptions, setSelectedSortOptions] = useState<string[]>([]);
  const permissionAwareApps = useMemo(() => {
    const userPermissions = getEffectivePermissions(globalStates.user);

    return apps.map((app) => {
      const requiredPermissions = app.requiredPermissions ?? [];
      const readOnlyPermissions = app.readOnlyPermissions ?? [];
      const hasFullAccess =
        requiredPermissions.length > 0 &&
        requiredPermissions.every((permission) =>
          userPermissions.includes(permission),
        );
      const hasReadOnlyAccess =
        readOnlyPermissions.length > 0 &&
        readOnlyPermissions.some((permission) =>
          userPermissions.includes(permission),
        );

      if (hasFullAccess) {
        return { ...app, yourAccess: ACCESS_OPTIONS.FullAccess };
      }
      if (hasReadOnlyAccess) {
        return { ...app, yourAccess: ACCESS_OPTIONS.ReadOnly };
      }

      return { ...app, yourAccess: ACCESS_OPTIONS.Restricted };
    });
  }, [apps, globalStates.user]);

  return (
    <appLauncherSearchSortFilterContext.Provider
      value={{
        searchedApp,
        setSearchedApp,
        selectedStatus,
        setSelectedStatus,
        selectedAccess,
        setSelectedAccess,
        selectedSortOptions,
        setSelectedSortOptions,
      }}
    >
      <appLauncherAppDataContext.Provider
        value={{
          apps: permissionAwareApps,
          setApps,
          selectedApp,
          setSelectedApp,
          starredApps,
          setStarredApps,
          hiddenApps,
          setHiddenApps,
          enableHiddenApps,
          setEnableHiddenApps,
        }}
      >
        {isHydrated ? children : null}
      </appLauncherAppDataContext.Provider>
    </appLauncherSearchSortFilterContext.Provider>
  );
}
