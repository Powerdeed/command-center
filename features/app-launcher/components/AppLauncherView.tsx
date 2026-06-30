"use client";

import FeatureTitle from "@global-components/ui/FeatureTitle";
import Sorter from "./Sorter";
import AppDisplay from "./AppCard";

export default function AppLauncherView() {
  return (
    <div className="vertical-layout__outer">
      <FeatureTitle />

      <Sorter />

      <AppDisplay />
    </div>
  );
}
