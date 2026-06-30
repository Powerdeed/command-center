"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appsData } from "../services/appsData";
import { AppData } from "../types/AppData";
import Button from "@global-components/ui/Button";
import { Dispatch, SetStateAction } from "@node_modules/@types/react";

export default function AppDisplay({
  renderAppInfo,
}: {
  renderAppInfo: Dispatch<SetStateAction<AppData | null>>;
}) {
  return (
    <div className="grid grid-cols-2 gap-5">
      {appsData.map((appData) => (
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
  return (
    <div className="feature-container-vertical min-h-60 shadow-on-hover">
      <div className="horizontal-layout">
        <div className="border w-10 h-10"></div>

        <div className="flex-1">
          <div className="horizontal-layout">
            <div className="text-style__subheading text-(--primary-blue)">
              {appData.title}
            </div>

            <div className="px-2 py-px rounded-[5px] bg-(--primary-red) text-style__small-text--bold text-white">
              {appData.openTasks}
            </div>
          </div>

          <div className="text-style__small-text">{appData.description}</div>
        </div>

        <div className="buttonize hover:bg-(--terciary-grey) hover:rounded-[10px] p-1">
          <FontAwesomeIcon icon={["fas", "ellipsis-vertical"]} />
        </div>
      </div>

      <div className="vertical-layout__inner mt-auto">
        <div className="horizontal-layout">
          <div className="containerize text-style__small-text">
            {appData.live ? "live" : "down"}
          </div>
          <div className="containerize text-style__small-text">
            {appData.yourAccess}
          </div>
        </div>

        <div className="horizontal-layout text-(--primary-grey)">
          <div className="flex-1 text-style__small-text">
            <div className="horizontal-layout">
              <FontAwesomeIcon icon={["fas", "chart-line"]} />
              {appData.lastActivity}
            </div>
          </div>
          <div className="text-style__small-text">
            {appData.openTasks} open tasks
          </div>
        </div>

        <div className="horizontal-layout justify-between">
          <Button buttonText="launch" className="w-full">
            <FontAwesomeIcon icon={["fas", "arrow-up-right-from-square"]} />
          </Button>

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
