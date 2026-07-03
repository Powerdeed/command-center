"use client";

import useAppLauncherSearchFilterSort from "./useAppLauncherSearchFilterSort";
import useAppLauncherState from "./useAppLauncherState";

export default function useAppLauncher() {
  const state = useAppLauncherState();

  const searchSortFilter = useAppLauncherSearchFilterSort();

  return { state, appLauncherActions: { ...searchSortFilter } };
}
