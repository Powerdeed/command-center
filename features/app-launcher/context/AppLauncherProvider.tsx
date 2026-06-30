"use client";

import { ReactNode, useState } from "react";
import { appLauncherSorterContext } from "./AppLauncherSorterContext";
import { appLauncherAppDataContext } from "./AppLauncherAppDataContext";
import { AppData } from "../types/AppData";

export default function AppLauncherProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedAccess, setSelectedAccess] = useState("");
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);

  return (
    <appLauncherSorterContext.Provider
      value={{
        selectedStatus,
        setSelectedStatus,
        selectedAccess,
        setSelectedAccess,
      }}
    >
      <appLauncherAppDataContext.Provider
        value={{ selectedApp, setSelectedApp }}
      >
        {children}
      </appLauncherAppDataContext.Provider>
    </appLauncherSorterContext.Provider>
  );
}
