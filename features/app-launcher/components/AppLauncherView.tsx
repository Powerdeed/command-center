"use client";

import { useState } from "react";
import FeatureTitle from "@global-components/ui/FeatureTitle";
import SearchFilterSort from "./SearchFilterSort";
import AppsView from "./AppsView";
import useAppLauncher from "../hooks/useAppLauncher";
import AppInfo from "./AppInfo";
import Button from "@global-components/ui/Button";
import { appsData } from "../services/appData";

export default function AppLauncherView() {
  const { state } = useAppLauncher();
  const [peakHiddenApps, setPeakHiddenApps] = useState(false);

  return (
    <div className="vertical-layout__outer">
      <FeatureTitle>
        <Button
          buttonText="Hidden Apps"
          clickAction={() => setPeakHiddenApps((prev) => !prev)}
        >
          {peakHiddenApps && <HiddenAppsView />}
        </Button>
      </FeatureTitle>

      <SearchFilterSort />

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
  );
}

function HiddenAppsView() {
  const { state } = useAppLauncher();
  const [showUnhideButton, setShowUnhideButton] = useState<string | null>(null);

  return (
    <div className="absolute flex flex-col bg-white border border-(--terciary-grey) rounded-[10px] p-1 right-0 top-12 w-40 z-2 text-(--primary-blue) text-left">
      <ul className="vertical-layout__inner">
        {state.hiddenApps.length ? (
          state.hiddenApps.map((hiddenApp) => {
            const targetApp = appsData.find((app) => app.id === hiddenApp);

            if (targetApp)
              return (
                <li
                  key={hiddenApp}
                  className="horizontal-layout justify-between h-8 p-1 hover:bg-(--terciary-grey)/30 rounded-[10px]"
                  onMouseEnter={() => setShowUnhideButton(targetApp.title)}
                  onMouseLeave={() => setShowUnhideButton(null)}
                >
                  {targetApp.title}{" "}
                  {showUnhideButton === targetApp.title && (
                    <div
                      className="buttonize containerize hover:bg-white"
                      onClick={() =>
                        state.setHiddenApps((prev) =>
                          prev.filter((id) => id !== hiddenApp),
                        )
                      }
                    >
                      unhide
                    </div>
                  )}
                </li>
              );

            return;
          })
        ) : (
          <div>No hidden apps available</div>
        )}
      </ul>
    </div>
  );
}
