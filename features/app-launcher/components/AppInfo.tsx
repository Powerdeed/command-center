"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ACCESS_OPTIONS, AppData } from "../types/AppData";
import Button from "@global-components/ui/Button";
import { AccessTextStyle, liveTextStyle } from "./AppsView";

export default function AppInfo({
  appData,
  cancelWindowFunc,
}: {
  appData: AppData;
  cancelWindowFunc: Dispatch<SetStateAction<AppData | null>>;
}) {
  const canLaunchApp = appData.yourAccess !== ACCESS_OPTIONS.Restricted;

  return (
    <div
      className="feature-container-vertical w-250 text-style__body"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="horizontal-layout justify-between pb-2 text-style__subheading border-b border-(--terciary-grey)">
        <div className="text-style__big-text">App Details</div>

        <FontAwesomeIcon
          icon={["fas", "xmark"]}
          className="buttonize transition-transform hover:text-(--secondary-blue) hover:rotate-90"
          onClick={() => cancelWindowFunc(null)}
        />
      </div>

      <div className="vertical-layout__inner">
        <div className="horizontal-layout">
          <div className="text-style__big-text">{appData.title}</div>
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

        <div className="text-(--primary-grey)">{appData.description}</div>
        <div className="flex gap-1">
          <div className="text-style__body--bold">teams in charge:</div>
          <div>{appData.teamsInCharge.join(", ")}</div>
        </div>
      </div>

      <div className="vertical-layout__inner">
        <div className="horizontal-layout">
          <FontAwesomeIcon icon={["fas", "arrow-trend-up"]} />
          <div className="text-style__body--bold">Key Metrics</div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {Object.keys(appData.keyMetrics).length ? (
            Object.entries(appData.keyMetrics).map(([key, metrics]) => (
              <div key={key} className="feature-container-vertical">
                <div className="vertical-layout__inner">
                  <div>{key}</div>
                  <div className="text-style__big-text">{metrics}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-style__small-text">Not available</div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="vertical-layout__inner">
          <div className="horizontal-layout">
            <FontAwesomeIcon icon={["far", "clock"]} />
            <div className="text-style__body--bold">Recent Activities</div>
          </div>

          {appData.recentActivities.length ? (
            appData.recentActivities.slice(0, 3).map((activity, key) => (
              <div
                key={key}
                className="horizontal-layout text-style__small-text"
              >
                <div className="h-2 w-2 rounded-full bg-(--primary-blue)"></div>
                <div className="vertical-layout__inner">
                  <div className="">{activity.description}</div>
                  <div className="horizontal-layout">
                    <div className="text-(--primary-grey)">
                      {activity.section}
                    </div>

                    <div className="h-1 w-1 rounded-full bg-(--primary-grey)"></div>
                    <div className="text-(--primary-grey)">{activity.time}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="horizontal-layout text-style__small-text">
              There are no recent activities
            </div>
          )}
        </div>

        <div className="vertical-layout__inner">
          <div className="text-style__body--bold">Open tasks</div>

          <div className="text-style__small-text">
            <strong className="text-(--primary-blue)">
              {appData.openTasks}
            </strong>{" "}
            tasks currently assigned across this application
          </div>
        </div>

        <div className="vertical-layout__inner">
          <div className="horizontal-layout">
            <FontAwesomeIcon icon={["fas", "shield-halved"]} />
            <div className="text-style__body--bold">Access Level</div>
          </div>

          <div className="vertical-layout__inner bg-(--terciary-grey)/30 rounded-[10px] text-style__small-text p-2">
            <div>Your Access</div>
            <div
              className={`containerize text-style__small-text ${AccessTextStyle[appData.yourAccess]}`}
            >
              {appData.yourAccess}
            </div>
          </div>

          <div className="vertical-layout__inner text-style__small-text">
            <div className="text-style__body--bold">Required permissions</div>
            <div className="text-(--primary-grey)">
              {(appData.requiredPermissions ?? []).join(", ") ||
                "No explicit permissions configured"}
            </div>
          </div>

          <Link href="/account">
            <div className="buttonize hover:bg-(--terciary-grey)/30 hover:font-bold w-full p-1 flex items-center justify-center gap-2.5 border rounded-[10px] text-center text-style__small-text">
              <FontAwesomeIcon icon={["fas", "shield-halved"]} />
              Manage permissions
            </div>
          </Link>
        </div>
      </div>

      {canLaunchApp ? (
        <Link
          href={appData.appUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full"
        >
          <Button buttonText="Launch" className="w-full">
            <FontAwesomeIcon icon={["fas", "arrow-up-right-from-square"]} />
          </Button>
        </Link>
      ) : (
        <Button buttonText="Restricted" buttonType="light" className="w-full" disabled>
          <FontAwesomeIcon icon={["fas", "lock"]} />
        </Button>
      )}
    </div>
  );
}
