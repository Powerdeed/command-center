"use client";

import Logo from "@global components/ui/Logo";
import Profile from "./components/Profile";
import Button, { ButtonLight } from "@global components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDateFormatted } from "@globals";

export default function Header() {
  return (
    <div className="relative flex justify-between p-5 border border-(--terciary-grey) rounded-[10px] bg-white h-50">
      <div className="flex flex-col gap-2.5">
        <div className="flex-1">
          <Logo includeTitle includeSubTitle />
        </div>

        <div className="text-style__small-text text-(--primary-grey) flex gap-2.5 items-center">
          <FontAwesomeIcon icon={["far", "calendar"]} /> {getDateFormatted()}
          <div className="p-1 border border-(--secondary-blue) rounded-[10px] text-(--secondary-blue)">
            Developer
          </div>
        </div>

        <div className="flex gap-2.5">
          <Button buttonText="&#10140; View All Apps" />
          <ButtonLight buttonText="System Logs" clickAction={() => {}} />
          <Button buttonText="+ Quick Action" clickAction={() => {}} />
        </div>
      </div>

      {/* <SeparatorLines /> */}

      <Profile />
    </div>
  );
}
