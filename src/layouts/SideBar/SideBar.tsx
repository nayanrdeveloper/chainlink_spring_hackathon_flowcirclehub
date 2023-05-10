import Image from "next/image";
import React from "react";
import { GoSettings } from "react-icons/go";

function SideBar() {
  return (
    <div>
      <div className="flex space-x-2">
        <GoSettings className="w-6 h-6 text-white" />
        <span className="text-white">My Profile</span>
      </div>
      <div className="bg-[#212F48] px-5 py-5 rounded-md">
        {/* Profile */}
        <div className="flex space-x-2">
          <div>
            <div className="relative h-14 w-14">
              <Image
                src={"/profile-picture-5.jpg"}
                alt={"Profile"}
                fill
                className="rounded-full"
              />
            </div>
          </div>
          <div className="text-white">
            <p className="text-xl font-semibold">Nayan Radadiya</p>
            <p className="">@maolio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
