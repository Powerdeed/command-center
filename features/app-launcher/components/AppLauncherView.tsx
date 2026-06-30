"use client";

import FeatureTitle from "@global-components/ui/FeatureTitle";
import Sorter from "./Sorter";
import AppDisplay from "./AppDisplay";
import { AppData } from "../types/AppData";
import { useState } from "react";
import useAppLauncher from "../hooks/useAppLauncher";

export default function AppLauncherView() {
  const { state } = useAppLauncher();

  return (
    <div className="vertical-layout__outer">
      <FeatureTitle />

      <Sorter />

      <AppDisplay renderAppInfo={state.setSelectedApp} />

      {state.selectedApp && <div className="overlay" onClick={() => {}}></div>}
    </div>
  );
}
