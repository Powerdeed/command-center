"use client";

import AppLauncherProvider from "@features/app-launcher/context/AppLauncherProvider";
import DashboardView from "./components/DashboardView";

export default function Overview() {
  return (
    <AppLauncherProvider>
      <DashboardView />
    </AppLauncherProvider>
  );
}
