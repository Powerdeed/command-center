"use client";

import AppLauncherProvider from "@features/app-launcher/context/AppLauncherProvider";
import OverviewView from "./components/OverviewView";

export default function Overview() {
  return (
    <AppLauncherProvider>
      <OverviewView />
    </AppLauncherProvider>
  );
}
