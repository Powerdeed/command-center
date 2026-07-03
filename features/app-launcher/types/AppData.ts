export enum LIVE_STATUS_OPTIONS {
  Live = "Live",
  Development = "Development",
  Restricted = "Restricted",
  Maintenance = "Maintenance",
}

export enum ACCESS_OPTIONS {
  FullAccess = "Full Access",
  ReadOnly = "Read Only",
  Admin = "Admin",
  Restricted = "Restricted",
}

export type AppData = {
  id: string;
  icon: string;
  title: string;
  description: string;
  teamsInCharge: string[];
  yourAccess: ACCESS_OPTIONS[number];
  openTasks: number;
  liveStatus: LIVE_STATUS_OPTIONS[number];
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
