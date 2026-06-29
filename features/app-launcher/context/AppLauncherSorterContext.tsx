"use client";

import { createContext, Dispatch, SetStateAction } from "react";

type AppLauncherSorterContext = {
  selectedStatus: string;
  setSelectedStatus: Dispatch<SetStateAction<string>>;

  selectedAccess: string;
  setSelectedAccess: Dispatch<SetStateAction<string>>;
};

export const appLauncherSorterContext =
  createContext<AppLauncherSorterContext | null>(null);
