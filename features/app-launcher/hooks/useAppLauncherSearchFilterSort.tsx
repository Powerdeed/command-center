"use client";

import { useContext, useLayoutEffect } from "react";
import { appLauncherSearchSortFilterContext } from "../context/AppLauncherSearchSortFilterContext";
import { appLauncherAppDataContext } from "../context/AppLauncherAppDataContext";
import { appsData } from "../services/appData";
import { ACCESS_OPTIONS, type AppData } from "../types/AppData";

const accessPriority: Record<string, number> = {
  [ACCESS_OPTIONS.FullAccess]: 0,
  [ACCESS_OPTIONS.Admin]: 1,
  [ACCESS_OPTIONS.ReadOnly]: 2,
  [ACCESS_OPTIONS.Restricted]: 3,
};

const getHiddenApps = (hiddenAppIds: string[]): AppData[] => {
  const seenAppIds = new Set<string>();

  return hiddenAppIds.reduce<AppData[]>((acc, id) => {
    const hiddenApp = appsData.find((app) => app.id === id);

    if (hiddenApp && !seenAppIds.has(hiddenApp.id)) {
      seenAppIds.add(hiddenApp.id);
      acc.push(hiddenApp);
    }

    return acc;
  }, []);
};

export default function useAppLauncherSearchFilterSort() {
  const searchFilterSortStates = useContext(appLauncherSearchSortFilterContext);
  const appDataStates = useContext(appLauncherAppDataContext);

  if (!searchFilterSortStates || !appDataStates)
    throw new Error(
      "AppSearchSortFilter and appdata context must be within a provider.",
    );

  const { setApps, hiddenApps, enableHiddenApps, starredApps } = appDataStates;
  const { searchedApp, selectedAccess, selectedStatus, selectedSortOptions } =
    searchFilterSortStates;

  useLayoutEffect(() => {
    const normalizedSearch = searchedApp.trim().toLowerCase();
    const hasPendingTasksSort = selectedSortOptions.includes(
      "pending tasks first",
    );
    const hasActiveSearch = normalizedSearch !== "";
    const hasActiveFilters = selectedAccess !== "" || selectedStatus !== "";
    const hasActiveSort = selectedSortOptions.length > 0;
    const shouldPrioritizeStarred =
      !hasActiveSearch && !hasActiveFilters && !hasActiveSort;
    const hiddenAppIds = new Set(hiddenApps);
    const starredAppIds = new Set(starredApps);
    const availableApps = [
      ...appsData.filter((app) => !hiddenAppIds.has(app.id)),
      ...(enableHiddenApps ? getHiddenApps(hiddenApps) : []),
    ];

    const filteredAndSortedApps = availableApps
      .filter((app) => {
        const matchesSearch =
          normalizedSearch === "" ||
          app.title.toLowerCase().includes(normalizedSearch);
        const matchesAccess =
          selectedAccess === "" || app.yourAccess === selectedAccess;
        const matchesStatus =
          selectedStatus === "" || app.liveStatus === selectedStatus;

        return matchesSearch && matchesAccess && matchesStatus;
      })
      .sort((a, b) => {
        if (shouldPrioritizeStarred) {
          const aIsStarred = starredAppIds.has(a.id);
          const bIsStarred = starredAppIds.has(b.id);

          if (aIsStarred !== bIsStarred) {
            return aIsStarred ? -1 : 1;
          }
        }

        if (a.type !== b.type) {
          return a.type === "internal" ? -1 : 1;
        }

        if (hasPendingTasksSort && a.openTasks !== b.openTasks) {
          return b.openTasks - a.openTasks;
        }

        const accessDifference =
          accessPriority[a.yourAccess] - accessPriority[b.yourAccess];

        if (accessDifference !== 0) {
          return accessDifference;
        }

        return a.title.localeCompare(b.title);
      });

    setApps(filteredAndSortedApps);
  }, [
    searchedApp,
    selectedAccess,
    selectedStatus,
    selectedSortOptions,
    enableHiddenApps,
    hiddenApps,
    starredApps,
    setApps,
  ]);

  return {};
}
