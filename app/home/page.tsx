"use client";

import { useGlobals } from "@/globals";
import Header from "../../global components/layout/Header/Header";
import GreetingPrompts from "./components/GreetingPrompts";
import AppCard from "./components/AppCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Buttonize } from "@global components/ui/Button";
import OverviewCard from "./components/OverviewCard";

export default function Home() {
  const { globalStates } = useGlobals();
  const { user } = globalStates;

  return (
    <main className="uniform-page-display text-style__body">
      <Header />

      <div className="flex justify-between">
        <div>
          <div className="text-style__subheading">
            Welcome back,{" "}
            <strong className="text-(--secondary-blue)">{user?.name}</strong>
          </div>

          <GreetingPrompts />
        </div>

        <div className="flex gap-px items-center text-style__subheading">
          <Buttonize className="hover:bg-(--terciary-grey) hover:rounded-[10px] p-1">
            <FontAwesomeIcon icon={["fas", "table-cells"]} />
          </Buttonize>
          |
          <Buttonize className="hover:bg-(--terciary-grey) hover:rounded-[10px] p-1">
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </Buttonize>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>
    </main>
  );
}
