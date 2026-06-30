"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { AppData } from "../types/AppData";

type AppLauncherAppDataContext = {
  selectedApp: AppData | null;
  setSelectedApp: Dispatch<SetStateAction<AppData | null>>;
};

export const appLauncherAppDataContext =
  createContext<AppLauncherAppDataContext | null>(null);
