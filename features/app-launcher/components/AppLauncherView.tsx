"use client";

import FeatureTitle from "@global-components/ui/FeatureTitle";
import Sorter from "./Sorter";

export default function AppLauncherView() {
  return (
    <div className="vertical-layout__outer">
      <FeatureTitle />

      <Sorter />
    </div>
  );
}
