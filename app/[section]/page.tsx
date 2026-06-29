"use client";

// modules
import { use, useEffect } from "react";
import { useRouter } from "next/navigation";

// utils
import { convertLinkToLabel, useGlobals } from "@globals";

// constants

// features
import { Activity } from "@features/activity";
import { AppLauncher } from "@features/app-launcher";
import { Approvals } from "@features/approvals";
import { Overview } from "@features/overview";
import { Reports } from "@features/reports";
import { SecurityAndAccess } from "@features/security&access";
import { Settings } from "@features/settings";
import { SystemHealth } from "@features/system-health";
import { Tasks } from "@features/tasks";
import { NavLabels } from "@global-components/layout/SideBar";

export default function Section({
  params,
}: {
  params: Promise<{ section: NavLabels }>;
}) {
  const { section } = use(params);
  const sectionLabel = convertLinkToLabel(decodeURIComponent(section));
  const router = useRouter();
  const { globalStates } = useGlobals();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) router.push("/login");
  }, [router]);

  const sectionMap: Record<NavLabels, React.ReactNode> = {
    "Command Overview": <Overview />,
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
