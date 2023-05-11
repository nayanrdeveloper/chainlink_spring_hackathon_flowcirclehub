import React from "react";
import { GoSettings } from "react-icons/go";
import SidebarItem from "@/components/SidebarItem";
import { sidebarItemList } from "@/constants";
import SidebarProfile from "@/components/SidebarProfile";

function SideBar() {
  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <GoSettings className="w-6 h-6 text-white" />
        <span className="text-white">My Profile</span>
      </div>
      <div className="bg-[#212F48] px-5 py-5 rounded-md space-y-5">
        {/* Profile */}
        <SidebarProfile
          image="profile-picture-5.jpg"
          name="Nayan Radadiya"
          userId="@maolio"
        />
        {/* Sidebar Menu Items */}
        <div className="py-4 border-y-2 border-[#2B3B58]">
          <ul className="space-y-5">
            {sidebarItemList.map((sidebarItem) => {
              return (
                <li key={sidebarItem.id}>
                  <SidebarItem
                    id={sidebarItem.id}
                    title={sidebarItem.title}
                    icon={sidebarItem.icon}
                    route={sidebarItem.route}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
