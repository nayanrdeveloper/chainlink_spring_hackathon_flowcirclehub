import Image from "next/image";
import React from "react";
import { ProfileActiveType } from "@/types";

function ProfileActive({ image, isActive }: ProfileActiveType) {
  return (
    <div className="relative cursor-pointer">
      <div className="relative w-12 h-12">
        <Image
          src={`/${image}`}
          fill
          alt="Profile"
          className="rounded-full"
        />
      </div>
      <span className={`${isActive ? 'top-0 right-9 absolute  w-3.5 h-3.5 bg-[#73E831] rounded-full' : ''}`}></span>
    </div>
  );
}

export default ProfileActive;
