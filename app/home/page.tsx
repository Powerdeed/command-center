"use client";

import { useGlobals } from "@/globals";

export default function Home() {
  const { globalStates } = useGlobals();
  const { user } = globalStates;

  return (
    <main className="uniform-page-display text-style__body">
      <div>
        Welcome back,{" "}
        <strong className="text-(--secondary-blue)">{user?.name}</strong>
      </div>
    </main>
  );
}
