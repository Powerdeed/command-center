"use client";

import { useContext } from "react";
import { appLauncherSearchSortFilterContext } from "../context/AppLauncherSearchSortFilterContext";
import { appLauncherAppDataContext } from "../context/AppLauncherAppDataContext";

export default function useAppLauncherState() {
  const appLauncherSorterState = useContext(appLauncherSearchSortFilterContext);
  const appLauncherAppDataState = useContext(appLauncherAppDataContext);

  if (!appLauncherSorterState || !appLauncherAppDataState)
    throw new Error("Sorter or appData context must be within a provider.");

  return { ...appLauncherSorterState, ...appLauncherAppDataState };
}
