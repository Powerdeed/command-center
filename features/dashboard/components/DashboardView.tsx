"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "@features/dashboard/components/Header/Header";
import GreetingPrompts from "./GreetingPrompts";
import DashboardCard from "./DashboardCard";
// import AppCard from "@features/app-launcher/components/AppCard";
import useHome from "../hooks/useHome";

import { useGlobals } from "@/globals";
import AppsView from "@features/app-launcher/components/AppsView";
import useAppLauncher from "@features/app-launcher/hooks/useAppLauncher";
import AppInfo from "@features/app-launcher/components/AppInfo";

export default function DashboardView() {
  const { state } = useAppLauncher();
  const { globalStates } = useGlobals();
  const { user } = globalStates;
  const { actions } = useHome();

  return (
    <main className="vertical-layout__outer text-style__body">
      <Header />

      <div className="flex justify-between">
        <div>
          <div className="text-style__subheading">
            Welcome back,{" "}
            <strong className="text-(--secondary-blue)">
              {user?.name || "loading..."}
            </strong>
          </div>

          <GreetingPrompts />
        </div>

        <div className="flex gap-px items-center text-style__subheading">
          <FontAwesomeIcon
            icon={["fas", "table-cells"]}
            className="buttonize hover:bg-(--terciary-grey) hover:rounded-[10px] p-2"
          />
          |
          <FontAwesomeIcon
            icon={["fas", "border-all"]}
            className="buttonize hover:bg-(--terciary-grey) hover:rounded-[10px] p-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-5">
        {Object.entries(actions.overview.overviewData).map(
          ([dashboardKey, dashboardData]) => (
            <DashboardCard
              key={dashboardKey}
              title={dashboardKey}
              {...dashboardData}
            />
          ),
        )}
      </div>

      <div className="vertical-layout__outer">
        <div className="text-style__big-text text-(--primary-blue)">
          App Launcher
        </div>

        <AppsView renderAppInfo={state.setSelectedApp} />

        {state.selectedApp && (
          <div className="overlay" onClick={() => state.setSelectedApp(null)}>
            <AppInfo
              appData={state.selectedApp}
              cancelWindowFunc={state.setSelectedApp}
            />
          </div>
        )}
      </div>
    </main>
  );
}
