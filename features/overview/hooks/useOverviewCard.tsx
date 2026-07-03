"use client";

export default function useOverviewCard() {
  const overviewData = {
    "Pending Approvals": {
      value: "12",
      actions: "4 urgent",
      icon: ["far", "clock"],
      color: "text-(--primary-yellow)",
    },
    "Open Tasks": {
      value: "24",
      actions: "6 assigned to you",
      icon: ["fas", "arrow-trend-up"],
      color: "text-(--primary-blue)",
    },
    "Security Alerts": {
      value: "3",
      actions: "Review required",
      icon: ["fas", "circle-exclamation"],
      color: "text-(--primary-red)",
    },
    "Active Users": {
      value: "89",
      actions: "142 staff",
      icon: ["fas", "people-group"],
      color: "text-(--primary-green)",
    },
    "Failed Jobs": {
      value: "2",
      actions: "1 retrying",
      icon: ["fas", "circle-xmark"],
      color: "text-(--primary-yellow)",
    },
    "System Health": {
      value: "Good",
      actions: "99.8% uptime",
      icon: ["fas", "shield-halved"],
      color: "text-(--primary-green)",
    },
  };

  return { overviewData };
}
