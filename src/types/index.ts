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
