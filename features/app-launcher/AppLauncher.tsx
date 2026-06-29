"use client";

import AppLauncherProvider from "./context/AppLauncherProvider";
import AppLauncherView from "./components/AppLauncherView";

export default function AppLauncher() {
  return (
    <AppLauncherProvider>
      <AppLauncherView />
    </AppLauncherProvider>
  );
}
