import React from "react";
import { Indicator } from "@/types";

function Indicator({ count, icon }: Indicator) {
  const Icon = icon;
  return (
    <div className="bg-[#2B3B58] rounded-2xl p-2 relative cursor-pointer">
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#FF4949] rounded-full -top-2 -left-3">
        {count}
      </div>
      <Icon className="text-white h-8 w-8" />
    </div>
  );
}

export default Indicator;
