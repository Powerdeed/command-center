"use client";

import { createContext, Dispatch, SetStateAction } from "react";

type AppLauncherSearchSortFilterContext = {
  searchedApp: string;
  setSearchedApp: Dispatch<SetStateAction<string>>;

  selectedStatus: string;
  setSelectedStatus: Dispatch<SetStateAction<string>>;

  selectedAccess: string;
  setSelectedAccess: Dispatch<SetStateAction<string>>;

  selectedSortOptions: string[];
  setSelectedSortOptions: Dispatch<SetStateAction<string[]>>;
};

export const appLauncherSearchSortFilterContext =
  createContext<AppLauncherSearchSortFilterContext | null>(null);
