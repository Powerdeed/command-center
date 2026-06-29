"use client";

export default function useOverviewCard() {
  const overviewData = {
    "Pending Approvals": {
      value: "12",
      actions: "4 urgent",
    },
    "Open Tasks": {
      value: "24",
      actions: "6 assigned to you",
    },
    "Security Alerts": {
      value: "3",
      actions: "Review required",
    },
    "Active Users": {
      value: "89",
      actions: "142 staff",
    },
    "Failed Jobs": {
      value: "2",
      actions: "1 retrying",
    },
    "System Health": {
      value: "Good",
      actions: "99.8% uptime",
    },
  };

  return { overviewData };
}
