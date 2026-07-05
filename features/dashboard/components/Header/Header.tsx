"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "@global-components/ui/Logo";
import ProfileCard from "./ProfileCard";
import Button from "@global-components/ui/Button";

import { getDateFormatted } from "@globals";
import SearchBar from "@global-components/ui/SearchBar";

export default function Header() {
  return (
    <div className="relative flex justify-between p-5 gap-5 border border-(--terciary-grey) rounded-[10px] bg-white min-h-60 overflow-hidden">
      <div className="min-h-full flex flex-col justify-between">
        <Logo includeTitle includeSubTitle />

        <div className="text-style__small-text text-(--primary-grey) flex gap-2.5 items-center">
          <FontAwesomeIcon icon={["far", "calendar"]} /> {getDateFormatted()}
        </div>
        <CirclesDecor
          color="border-(--secondary-blue)/20"
          position="-left-20 -bottom-30"
          size="w-60 h-60"
        />

        <CirclesDecor
          color="border-(--secondary-blue)/20"
          position="left-[calc(50%-160px)] top-0"
          size="w-80 h-80"
        />

        <CirclesDecor
          color="border-(--secondary-yellow)"
          position="left-[calc(50%+60px)] top-30"
          size="w-30 h-30"
        />

        <div className="flex max-[1100px]:grid gap-2.5 md:gap-1.5 z-1">
          <Link href="/app-launcher">
            <Button buttonText="&#10140; View All Apps" />
          </Link>
          <Button
            buttonText="System Logs"
            buttonType="light"
            clickAction={() => {}}
          />
          <SearchBar
            val=""
            placeholder="Search Apps, tasks, users or resources"
            changeFunc={() => {}}
          />
        </div>
      </div>

      <ProfileCard />
    </div>
  );
}

function CirclesDecor({
  color,
  position,
  size,
}: {
  color: string;
  position: string;
  size: string;
}) {
  return (
    <div
      className={`absolute rounded-full border ${size} ${color} ${position}`}
    ></div>
  );
}
