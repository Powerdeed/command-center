"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appsData } from "../services/appsData";
import { AppData } from "../types/AppData";
import Button, { ButtonLight } from "@global-components/ui/Button";

export default function AppDisplay() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {appsData.map((appData) => (
        <AppCard key={appData.id} appData={appData} />
      ))}
    </div>
  );
}

export function AppCard({ appData }: { appData: AppData }) {
  return (
    <div className="feature-container-vertical min-w-80 min-h-60 shadow-on-hover">
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

        <FontAwesomeIcon icon={["fas", "ellipsis-vertical"]} />
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

          <ButtonLight
            buttonText="Details"
            className="w-full"
            clickAction={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
