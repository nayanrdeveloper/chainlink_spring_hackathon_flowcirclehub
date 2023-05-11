import { SidebarProfileType } from "@/types";
import Image from "next/image";
import React from "react";
import ProfileActive from "./ProfileActive";

function SidebarProfile({ image, name, userId }: SidebarProfileType) {
  return (
    <div className="flex space-x-2">
      <ProfileActive image={image} isActive={true} />
      <div className="text-white">
        <p className="text-xl font-semibold">{name}</p>
        <p className="">{userId}</p>
      </div>
    </div>
  );
}

export default SidebarProfile;
