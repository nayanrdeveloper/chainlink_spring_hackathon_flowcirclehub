import { NavItemType } from "@/types";
import Link from "next/link";
import React from "react";

function SidebarItem({ route, icon, title, id }: NavItemType) {
  const Icon = icon;
  return (
    <Link href={route} className="flex space-x-3 text-white group">
      <Icon className="w-8 h-8 text-[#A6ACB6] group-hover:text-[#0a58ca]" />
      <span className="text-lg group-hover:text-[#0a58ca]">{title}</span>
    </Link>
  );
}

export default SidebarItem;
