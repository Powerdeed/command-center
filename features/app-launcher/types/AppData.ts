export type AppData = {
  id: string;
  icon: string;
  title: string;
  description: string;
  teamsInCharge: string[];
  yourAccess: "Full" | "Admin";
  openTasks: number;
  live: boolean;
  lastActivity: string;
  starred: boolean;
  keyMetrics: Array<Record<string, number | string>>;
  type: "internal" | "external";
  appUrl: string;
};
