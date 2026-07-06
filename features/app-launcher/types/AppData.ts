import { type UserPermission } from "@globals";

export const LIVE_STATUS_OPTIONS = {
  Live: "Live",
  Development: "Development",
  Restricted: "Restricted",
  Maintenance: "Maintenance",
} as const;

export const ACCESS_OPTIONS = {
  FullAccess: "Full Access",
  ReadOnly: "Read Only",
  Admin: "Admin",
  Restricted: "Restricted",
} as const;

export type LiveStatus = (typeof LIVE_STATUS_OPTIONS)[keyof typeof LIVE_STATUS_OPTIONS];
export type AccessLevel = (typeof ACCESS_OPTIONS)[keyof typeof ACCESS_OPTIONS];

export type AppData = {
  id: string;
  icon: string;
  title: string;
  description: string;
  teamsInCharge: string[];
  yourAccess: AccessLevel;
  requiredPermissions?: UserPermission[];
  readOnlyPermissions?: UserPermission[];
  openTasks: number;
  liveStatus: LiveStatus;
  recentActivities: {
    section: string;
    description: string;
    time: string;
  }[];
  starred: boolean;
  keyMetrics: Record<string, number | string>;
  type: "internal" | "external";
  appUrl: string;
};
