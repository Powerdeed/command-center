"use client";

import useOverviewCard from "./useDashboardCard";

export default function useHome() {
  const overview = useOverviewCard();
  return { actions: { overview } };
}
