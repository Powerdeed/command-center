"use client";

// modules
import { use } from "react";

// utils
import { convertLinkToLabel, useGlobals } from "@globals";

// features
import { Activity } from "@features/activity";
import { AppLauncher } from "@features/app-launcher";
import { Approvals } from "@features/approvals";
import { Dashboard } from "@features/dashboard";
import { Reports } from "@features/reports";
import { SecurityAndAccess } from "@features/security&access";
import { Settings } from "@features/settings";
import { SystemHealth } from "@features/system-health";
import { Tasks } from "@features/tasks";
import { FeatureOptions } from "@lib";

export default function Section({
  params,
}: {
  params: Promise<{ section: FeatureOptions }>;
}) {
  const { section } = use(params);
  const sectionLabel = convertLinkToLabel(decodeURIComponent(section));
  const { globalStates } = useGlobals();

  const sectionMap: Record<FeatureOptions, React.ReactNode> = {
    Dashboard: <Dashboard />,
    "App Launcher": <AppLauncher />,
    Approvals: <Approvals />,
    Tasks: <Tasks />,
    Activity: <Activity />,
    Reports: <Reports />,
    "Security & Access": <SecurityAndAccess />,
    "System Health": <SystemHealth />,
    Settings: <Settings />,
  };

  const content = sectionMap[sectionLabel];

  return (
    <div
      className={`p-5 duration-150 ${globalStates.sideBarOpen ? "pl-70" : "pl-20"}`}
    >
      {content}
    </div>
  );
}
