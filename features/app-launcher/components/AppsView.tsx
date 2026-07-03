"use client";

import { Dispatch, SetStateAction, useMemo, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@global-components/ui/Button";
import { AppData } from "../types/AppData";
import useAppLauncher from "../hooks/useAppLauncher";

export const liveTextStyle: Record<AppData["liveStatus"], string> = {
  Live: "text-(--primary-green)",
  Development: "text-(--primary-blue)",
  Maintenance: "text-(--primary-yellow)",
  Restricted: "text-(--primary-red)",
};

export const AccessTextStyle: Record<AppData["yourAccess"][number], string> = {
  "Full Access": "text-(--primary-green)",
  Admin: "text-(--primary-blue)",
  ReadOnly: "text-(--primary-yellow)",
  Restricted: "text-(--primary-red)",
};

export default function AppsView({
  renderAppInfo,
}: {
  renderAppInfo: Dispatch<SetStateAction<AppData | null>>;
}) {
  const { state } = useAppLauncher();

  const orderedApps = useMemo(() => {
    const hasActiveSearch = state.searchedApp.trim() !== "";
    const hasActiveFilters =
      state.selectedAccess !== "" || state.selectedStatus !== "";
    const hasActiveSort = state.selectedSortOptions.length > 0;

    if (hasActiveSearch || hasActiveFilters || hasActiveSort) {
      return state.apps;
    }

    return [...state.apps].sort((a, b) => {
      const aIsStarred = state.starredApps.includes(a.id);
      const bIsStarred = state.starredApps.includes(b.id);

      if (aIsStarred === bIsStarred) return 0;

      return aIsStarred ? -1 : 1;
    });
  }, [
    state.apps,
    state.searchedApp,
    state.selectedAccess,
    state.selectedStatus,
    state.selectedSortOptions,
    state.starredApps,
  ]);

  return (
    <div className="grid grid-cols-2 gap-5">
      {orderedApps.map((appData) => (
        <AppCard
          key={appData.id}
          appData={appData}
          renderAppInfo={renderAppInfo}
        />
      ))}
    </div>
  );
}

export function AppCard({
  renderAppInfo,
  appData,
}: {
  appData: AppData;
  renderAppInfo: Dispatch<SetStateAction<AppData | null>>;
}) {
  const { state } = useAppLauncher();

  const [optionsClicked, setOptionsClicked] = useState(false);

  return (
    <div className="feature-container-vertical min-h-60 shadow-on-hover">
      <div className="horizontal-layout">
        <div className="border w-10 h-10"></div>

        <div className="flex-1">
          <div className="horizontal-layout">
            <div className="text-style__subheading text-(--primary-blue)">
              {appData.title}
            </div>

            {appData.openTasks > 0 && (
              <div className="px-2 py-px rounded-[5px] bg-(--primary-red) text-style__small-text--bold text-white">
                {appData.openTasks}
              </div>
            )}
          </div>

          <div className="text-style__small-text">{appData.description}</div>
        </div>

        <div className="relative horizontal-layout">
          {state.starredApps.includes(appData.id) && (
            <FontAwesomeIcon icon={["fas", "star"]} />
          )}

          <FontAwesomeIcon
            icon={["fas", "ellipsis-vertical"]}
            className="buttonize hover:bg-(--terciary-grey)/30 hover:rounded-[10px] p-1"
            onClick={() => setOptionsClicked((prev) => !prev)}
          />

          {optionsClicked && (
            <AppCardOptions
              appData={appData}
              setOptionsClicked={setOptionsClicked}
            />
          )}
        </div>
      </div>

      <div className="vertical-layout__inner mt-auto">
        <div className="horizontal-layout">
          <div
            className={`containerize text-style__small-text ${liveTextStyle[appData.liveStatus]}`}
          >
            {appData.liveStatus}
          </div>
          <div
            className={`containerize text-style__small-text ${AccessTextStyle[appData.yourAccess]}`}
          >
            {appData.yourAccess}
          </div>
        </div>

        <div className="horizontal-layout text-(--primary-grey)">
          <div className="flex-1 text-style__small-text">
            <div className="horizontal-layout">
              <FontAwesomeIcon icon={["fas", "chart-line"]} />
              {appData.recentActivities.length
                ? appData.recentActivities[0].time
                : "no recent activities"}
            </div>
          </div>
          <div className="text-style__small-text">
            {appData.openTasks} open tasks
          </div>
        </div>

        <div className="horizontal-layout justify-between">
          <Link
            href={appData.appUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <Button buttonText="launch" className="w-full">
              <FontAwesomeIcon icon={["fas", "arrow-up-right-from-square"]} />
            </Button>
          </Link>

          <Button
            buttonText="Details"
            buttonType="light"
            className="w-full"
            clickAction={() => renderAppInfo(appData)}
          />
        </div>
      </div>
    </div>
  );
}

function AppCardOptions({
  appData,
  setOptionsClicked,
}: {
  appData: AppData;
  setOptionsClicked: Dispatch<SetStateAction<boolean>>;
}) {
  const { state } = useAppLauncher();
  return (
    <div
      className={`absolute ${state.starredApps.includes(appData.id) ? "-left-17.5" : "-left-25"} -top-3 text-style__small-text transition-all duration-300 delay-100 ease-out1`}
    >
      <ul className="absolute selector-dropdown w-30">
        <li
          className="selector-dropdown-option"
          onClick={() => {
            state.setStarredApps((prev) => {
              const appIsIncluded = prev.includes(appData.id);

              if (appIsIncluded) {
                return prev.filter((app) => app !== appData.id); // remove
              } else {
                return [...prev, appData.id]; // add
              }
            });

            setOptionsClicked((prev) => !prev);
          }}
        >
          <div>
            <FontAwesomeIcon icon={["fas", "star"]} /> star/unstar
          </div>
        </li>

        <li
          className="selector-dropdown-option"
          onClick={() => {
            state.setHiddenApps((prev) => {
              const appIsIncluded = prev.includes(appData.id);

              if (!appIsIncluded) {
                return [...prev, appData.id]; // add
              }

              return prev;
            });

            setOptionsClicked((prev) => !prev);
          }}
        >
          hide
        </li>
      </ul>
    </div>
  );
}
