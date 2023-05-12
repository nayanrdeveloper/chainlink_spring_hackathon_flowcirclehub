import { ContactType } from "@/types";
import Image from "next/image";
import React from "react";

function ContactProfile({ id, name, image }: ContactType) {
  return (
    <div className="flex space-x-3 items-center">
      <div className="relative h-14 w-14">
        <Image
          src={`/${image}`}
          alt={name}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <p className="text-white font-bold">{name}</p>
    </div>
  );
}

export default ContactProfile;
