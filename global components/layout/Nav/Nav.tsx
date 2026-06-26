"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NAVIGATION_OPTIONS } from "./constants/NAVIGATION_OPTIONS.json";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export default function Nav() {
  return (
    <section className="fixed left-0 top-0 w-65 h-screen bg-(--primary-blue) text-(--terciary-grey) p-5 flex flex-col gap-5">
      <div className="text-style__body text-white">NAVIGATION</div>

      <ul className="flex flex-col gap-5 text-style__small-text">
        {Object.entries(NAVIGATION_OPTIONS).map(([nav, icon], i) => (
          <div
            key={i}
            className="flex gap-2.5 cursor-pointer p-3 rounded-[10px] duration-150 hover:bg-(--secondary-blue) hover:text-white"
          >
            <FontAwesomeIcon
              icon={[
                icon["IconPrefix"] as IconPrefix,
                icon["IconName"] as IconName,
              ]}
            />
            <li>{nav}</li>
          </div>
        ))}
      </ul>

      <div className="absolute border-t border-(--terciary-grey) w-full h-30 left-0 bottom-0 text-(--terciary-grey) p-5 text-style__small-text flex flex-col gap-2.5">
        platform status
        <div className="text-style__body--bold">All Systems Operational</div>
        <div>v {process.env.NEXT_PUBLIC_APP_VERSION}</div>
      </div>
    </section>
  );
}
