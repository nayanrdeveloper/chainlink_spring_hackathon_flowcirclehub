import { WritePostIconType } from "@/types";
import Image from "next/image";
import React from "react";

function WritePostIcon({ image, alt, text, onClick }: WritePostIconType) {
  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-10 w-10">
        <Image src={`/${image}`} alt={alt} fill />
      </div>
      <span className="text-[#A6ACB6] text-xl">{text}</span>
    </div>
  );
}

export default WritePostIcon;
