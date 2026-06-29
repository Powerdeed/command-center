"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "@global-components/layout/Header/Header";
import { Buttonize } from "@global-components/ui/Button";
import GreetingPrompts from "./components/GreetingPrompts";
import OverviewCard from "./components/OverviewCard";
import AppCard from "@features/app-launcher/components/AppCard";
import useHome from "./hooks/useHome";

import { useGlobals } from "@/globals";

export default function Overview() {
  const { globalStates } = useGlobals();
  const { user } = globalStates;
  const { actions } = useHome();

  return (
    <main className="vertical-layout__outer text-style__body">
      <Header />

      <div className="flex justify-between">
        <div>
          <div className="text-style__subheading">
            Welcome back,{" "}
            <strong className="text-(--secondary-blue)">
              {user?.name || "User"}
            </strong>
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

      <div className="grid grid-cols-6 gap-5">
        {Object.entries(actions.overview.overviewData).map(
          ([overviewKey, overviewData]) => (
            <OverviewCard
              key={overviewKey}
              title={overviewKey}
              {...overviewData}
            />
          ),
        )}
      </div>

      <div>
        <div className="text-style__body--bold text-(--primary-blue)">
          App Launcher
        </div>
        <div className="grid grid-cols-4 gap-5">
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
        </div>
      </div>
    </main>
  );
}
