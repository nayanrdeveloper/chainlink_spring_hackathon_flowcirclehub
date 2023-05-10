import Image from "next/image";
import React from "react";
import { NavItem } from "../../../types";
import { BsSearch } from "react-icons/bs";
import { BiHome, BiUser } from "react-icons/bi";
import { HiOutlineDocumentText, HiOutlineMail } from "react-icons/hi";
import { BsCameraVideo } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import Indicator from "../Indicator";
import ProfileActive from "../ProfileActive";

function Navbar() {
  const navItemList: NavItem[] = [
    {
      id: 1,
      title: "Home",
      route: "",
      icon: BiHome,
    },
    {
      id: 2,
      title: "News",
      route: "",
      icon: HiOutlineDocumentText,
    },
    {
      id: 3,
      title: "Group",
      route: "",
      icon: BiUser,
    },
    {
      id: 4,
      title: "Videos",
      route: "",
      icon: BsCameraVideo,
    },
  ];
  return (
    <nav>
      <div className="flex justify-between bg-[#212F48] w-screen px-8 py-3 items-center">
        <div className="flex items-center space-x-3">
          <div className="relative w-14 h-14">
            <Image src={"/logo.png"} alt="Logo" className="object-cover" fill />
          </div>
          <div className=" bg-[#2B3B58] rounded-md flex space-x-2 items-center px-2 py-2">
            <BsSearch className="h-5 w-5 text-white" />
            <input
              type={"text"}
              className="bg-transparent h-10 py-1 px-2 focus:border-transparent focus:outline-none"
              placeholder="Search FlowCircleHub"
            />
          </div>
        </div>
        <div>
          <ul className="flex space-x-8">
            {navItemList.map((navItem) => {
              return (
                <li className="cursor-pointer" key={navItem.id}>
                  <navItem.icon className="h-10 w-10 text-white" />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex space-x-5">
          <Indicator count={8} icon={IoIosNotificationsOutline} />
          <Indicator count={5} icon={HiOutlineMail} />
          <ProfileActive image="profile-picture-5.jpg" isActive={true} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
