"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@global-components/ui/Button";
import { useGlobals } from "@globals";
import { getAbbreviation } from "../../utils/getAbbreviation";

export default function ProfileCard() {
  const { globalStates } = useGlobals();
  const { user } = globalStates;

  return (
    <div className="relative p-2.5 md:p-5 flex max-[1100px]:flex-col gap-2.5 md:gap-5 bg-white border border-(--terciary-grey) rounded-[10px] min-w-fit shadow-on-hover (--terciary-grey)]">
      <div className="w-fit h-full grid">
        {user?.profile?.avatarUrl && (
          <Image src={user?.profile?.avatarUrl} alt="" />
        )}

        {/* If no image is available, display the abbreviation of the user's name and style it. */}
        <div className="relative rounded-full w-40 h-40 bg-(--primary-blue) grid justify-center items-center text-center">
          <div className="absolute top-2.5 left-2.5 rounded-full w-35 h-35 border border-(--primary-yellow)"></div>
          <div className="absolute top-5 left-5 rounded-full w-30 h-30 border border-(--secondary-blue)"></div>
          <div className="text-white text-[40px] font-bold">
            {getAbbreviation(user?.name || "User")}
          </div>
        </div>
      </div>

      <div className="w-fit h-full vertical-layout__inner text-style__body max-[1100px]:text-center max-[1100px]:items-center max-[1100px]:w-full">
        <div className="text-style__heading text-(--primary-blue)">
          {user?.name || "User name"}
        </div>

        <div className="text-(--primary-grey)">
          {user?.email || "User email"}
        </div>

        <div className="text-style__small-text w-fit p-1 border border-(--secondary-blue) rounded-[10px] text-(--secondary-blue)">
          {user?.role || "User role"}
        </div>

        <Button
          buttonText="Edit Profile"
          buttonType="light"
          clickAction={() => {}}
          className="w-fit"
        >
          <FontAwesomeIcon icon={["far", "pen-to-square"]} />
        </Button>
      </div>
    </div>
  );
}
