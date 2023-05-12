import { userContactList } from "@/constants";
import Image from "next/image";
import React from "react";
import { GoSettings } from "react-icons/go";
import ContactProfile from "./ContactProfile";

function ContactUser() {
  return (
    <div>
      <div className="flex space-x-2 mb-4 text-right">
        <span className="text-white">My Contact</span>
        <GoSettings className="w-6 h-6 text-white" />
      </div>
      <div className="bg-[#212F48] p-4 rounded-lg">
        <p className="text-white mb-2">Contact</p>
        <div className="space-y-3">
          {userContactList.map((userContactItem) => {
            return (
              <ContactProfile
                key={userContactItem.id}
                id={userContactItem.id}
                image={userContactItem.image}
                name={userContactItem.name}
              />
            );
          })}
        </div>
        <div className="flex space-x-3 items-center">
          <div className="relative h-14 w-14">
            <Image
              src={"/profile-picture-5.jpg"}
              alt={"user image"}
              fill
              className="rounded-lg"
            />
          </div>
          <p className="text-white font-bold">Mayur Radadiya</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUser;
