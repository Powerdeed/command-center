"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { AppData } from "../types/AppData";

type AppLauncherAppDataContext = {
  apps: AppData[];
  setApps: Dispatch<SetStateAction<AppData[]>>;

  selectedApp: AppData | null;
  setSelectedApp: Dispatch<SetStateAction<AppData | null>>;

  starredApps: string[];
  setStarredApps: Dispatch<SetStateAction<string[]>>;

  hiddenApps: string[];
  setHiddenApps: Dispatch<SetStateAction<string[]>>;

  enableHiddenApps: boolean;
  setEnableHiddenApps: Dispatch<SetStateAction<boolean>>;
};

export const appLauncherAppDataContext =
  createContext<AppLauncherAppDataContext | null>(null);
