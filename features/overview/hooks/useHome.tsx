"use client";

import useOverviewCard from "./useOverviewCard";

export default function useHome() {
  const overview = useOverviewCard();
  return { actions: { overview } };
}
