"use client";

import useAppLauncherState from "./useAppLauncherState";

export default function useAppLauncher() {
  const state = useAppLauncherState();

  return { state };
}
