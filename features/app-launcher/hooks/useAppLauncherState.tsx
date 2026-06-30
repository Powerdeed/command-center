"use client";

import { useContext } from "react";
import { appLauncherSorterContext } from "../context/AppLauncherSorterContext";
import { appLauncherAppDataContext } from "../context/AppLauncherAppDataContext";

export default function useAppLauncherState() {
  const appLauncherSorterState = useContext(appLauncherSorterContext);
  const appLauncherAppDataState = useContext(appLauncherAppDataContext);

  if (!appLauncherSorterState || !appLauncherAppDataState)
    throw new Error("Sorter or appData context must be within a provider.");

  return { ...appLauncherSorterState, ...appLauncherAppDataState };
}
