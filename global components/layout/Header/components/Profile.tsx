"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from "next/image";

export default function Profile() {
  return (
    <div className="relative top-0 right-0 rounded-full w-40 h-40 border-10 border-(--primary-blue) bg-(--primary-white) grid justify-center items-center cursor-pointer">
      {/* <Image src={null} alt="" /> */}
      <FontAwesomeIcon
        icon={["far", "user"]}
        className="text-style__logo text-(--secondary-grey)"
      />
    </div>
  );
}
