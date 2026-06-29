"use client";

import { ReactNode, useState } from "react";
import { appLauncherSorterContext } from "./AppLauncherSorterContext";

export default function AppLauncherProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedAccess, setSelectedAccess] = useState("");

  return (
    <appLauncherSorterContext.Provider
      value={{
        selectedStatus,
        setSelectedStatus,
        selectedAccess,
        setSelectedAccess,
      }}
    >
      {children}
    </appLauncherSorterContext.Provider>
  );
}
