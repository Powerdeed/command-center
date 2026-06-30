import { AppData } from "../types/AppData";

export const appsData: AppData[] = [
  {
    id: "1",
    icon: "PTR-CMS",
    title: "CMS",
    description: "Content management and publishing",
    teamsInCharge: ["content", "marketing"],
    yourAccess: "Full",
    openTasks: 4,
    live: true,
    lastActivity: "5 minutes ago",
    starred: true,
    keyMetrics: [
      {
        Services: 5,
        Projects: 10,
        Articles: 3,
        Editors: 12,
      },
    ],
    type: "internal", // workers use day-to-day or for public
    appUrl: "powerdeedtr.co.ke",
  },
  {
    id: "2",
    icon: "PTR-general",
    title: "PTR",
    description: "General Public application",
    teamsInCharge: ["all"],
    yourAccess: "Full",
    openTasks: 0,
    live: true,
    lastActivity: "5 minutes ago",
    starred: true,
    keyMetrics: [],
    type: "external", // workers use day-to-day or for public
    appUrl: "powerdeed.co.ke",
  },
];
