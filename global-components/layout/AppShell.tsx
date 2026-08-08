"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { AuthGuard } from "@app/auth";
import { GlobalProvider } from "@globals";
import SideBar from "./SideBar/SideBar";
import {
  UnsavedChangesGuard,
  UnsavedChangesProvider,
} from "./unSavedChanges";

const isPublicRoute = (pathname: string) =>
  pathname.startsWith("/login") || pathname.startsWith("/forgot-password");

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (isPublicRoute(pathname)) return children;

  return (
    <AuthGuard>
      <GlobalProvider>
        <UnsavedChangesProvider>
          <SideBar />
          {children}
          <UnsavedChangesGuard />
        </UnsavedChangesProvider>
      </GlobalProvider>
    </AuthGuard>
  );
}
