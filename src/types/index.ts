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

export type PostType = {
  id: number;
  userImage: string;
  userName: string;
  userStatus: boolean;
  postDesc: string;
  postImage: string;
};

export type ContactType = {
  id: number;
  image: string;
  name: string;
};

type FriendImageType = {
  image: string;
  id: number;
  name: string;
};

export type FriendType = {
  id: number;
  image: string;
  name: string;
  mutualFriendCount: number;
  mutualFriendImageList: FriendImageType[];
  confirmAction?: () => void;
  deleteAction?: () => void;
};

export type EventCardType = {
  id: number;
  name: string;
  image: string;
  location: string;
  date: string;
  interested: boolean;
};

export type EventType = {
  id: number;
  name: string;
  image: string;
  date: string;
  attendingCount: number;
  eventDay: number;
  organizer: string;
  interested: boolean;
  dateTime: string;
  desc: string;
  eventType: string;
  location: string;
};
