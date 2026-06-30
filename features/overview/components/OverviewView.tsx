"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "@global-components/layout/Header/Header";
import { Buttonize } from "@global-components/ui/Button";
import GreetingPrompts from "./GreetingPrompts";
import OverviewCard from "./OverviewCard";
// import AppCard from "@features/app-launcher/components/AppCard";
import useHome from "../hooks/useHome";

import { useGlobals } from "@/globals";
import AppDisplay from "@features/app-launcher/components/AppCard";

export default function OverviewView() {
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
            <FontAwesomeIcon icon={["fas", "border-all"]} />
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

      <div className="vertical-layout__outer">
        <div className="text-style__big-text text-(--primary-blue)">
          App Launcher
        </div>

        <AppDisplay />
      </div>
    </main>
  );
}
