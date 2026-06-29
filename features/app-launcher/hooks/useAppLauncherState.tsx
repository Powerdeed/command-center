"use client";

import { useContext } from "react";
import { appLauncherSorterContext } from "../context/AppLauncherSorterContext";

export default function useAppLauncherState() {
  const appLauncherSorterState = useContext(appLauncherSorterContext);

  if (!appLauncherSorterState)
    throw new Error("Sorter context must be within a provider.");

  return { ...appLauncherSorterState };
}
