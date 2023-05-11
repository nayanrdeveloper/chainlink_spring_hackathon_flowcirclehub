import { type } from "os";
import { IconType } from "react-icons";

export type NavItem = {
  id: number;
  title: string;
  route: string;
  icon: IconType;
};

export type Indicator = {
  icon: IconType;
  count: number;
};

export type ProfileActiveType = {
  image: string;
  isActive: boolean;
};

export type NavItemType = {
  id: number;
  title: string;
  icon: IconType;
  route: string;
};

export type SidebarProfileType = {
  image: string;
  name: string;
  userId: string;
};

export type WritePostIconType = {
  image: string;
  text: string;
  alt: string;
  onClick: () => void;
};
