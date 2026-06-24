"use client";

import { useGlobals } from "@/globals";

export default function Home() {
  const { globalStates } = useGlobals();
  const { user } = globalStates;

  return (
    <div>
      <main>
        Welcome back{" "}
        <strong className="text-(--secondary-blue)">{user?.name}</strong>
      </main>
    </div>
  );
}
