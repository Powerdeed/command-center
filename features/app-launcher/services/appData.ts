import { AppData } from "../types/AppData";

export const appsData: AppData[] = [
  {
    id: "1",
    icon: "PTR-CMS",
    title: "CMS",
    description: "Content management and publishing",
    teamsInCharge: ["content", "marketing"],
    yourAccess: "Full Access",
    openTasks: 4,
    liveStatus: "Live",
    recentActivities: [
      {
        section: "Form Inquiry",
        description: "New contact form submission from Sarah Mitchell",
        time: "5 minutes ago",
      },
      {
        section: "Services Management",
        description: `Service page "Industrial Engineering" updated`,
        time: "1 hour ago",
      },
      {
        section: "Articles & Insights",
        description: `Article "Future of Renewable Energy" scheduled for publish`,
        time: "2 hours ago",
      },
      {
        section: "Projects",
        description: "New inquiry about Project Management services",
        time: "3 hours ago",
      },
      {
        section: "Website Content",
        description: "Homepage hero section content updated",
        time: "5 hours ago",
      },
    ],
    starred: true,
    keyMetrics: {
      Services: 5,
      Projects: 10,
      Articles: 3,
      Editors: 12,
    },

    type: "internal", // workers use day-to-day or for public
    appUrl: "https://powerdeedtr.co.ke",
  },
  {
    id: "2",
    icon: "PTR-general",
    title: "PTR",
    description: "General Public application",
    teamsInCharge: ["all"],
    yourAccess: "Full Access",
    openTasks: 0,
    liveStatus: "Live",
    recentActivities: [],
    starred: true,
    keyMetrics: {
      "Visits this month": 20,
      "Inquiries via website": 14,
      "Most viewed page": "projects page",
      "Content last edited": "2 days ago",
    },
    type: "external", // workers use day-to-day or for public
    appUrl: "https://powerdeed.co.ke",
  },
];
