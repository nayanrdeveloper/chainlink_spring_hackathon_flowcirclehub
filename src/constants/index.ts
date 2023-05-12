import {
  BiHomeAlt,
  BiUser,
  BiMedal,
  BiGroup,
  BiDockBottom,
} from "react-icons/bi";
import { MdOutlineCorporateFare, MdDomainVerification } from "react-icons/md";
import { BsBookmarkCheck } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { ContactType, NavItemType } from "@/types";

const sidebarItemList: NavItemType[] = [
  {
    id: 1,
    title: "Home",
    icon: BiHomeAlt,
    route: "",
  },
  {
    id: 2,
    title: "People",
    icon: BiUser,
    route: "",
  },
  {
    id: 3,
    title: "Event",
    icon: BiMedal,
    route: "",
  },
  {
    id: 4,
    title: "Pages",
    icon: BiDockBottom,
    route: "",
  },
  {
    id: 5,
    title: "Group",
    icon: BiGroup,
    route: "",
  },
  {
    id: 6,
    title: "Marketplace",
    icon: MdOutlineCorporateFare,
    route: "",
  },
  {
    id: 7,
    title: "Saved",
    icon: MdDomainVerification,
    route: "",
  },
  {
    id: 8,
    title: "Favorite",
    icon: BsBookmarkCheck,
    route: "",
  },
  {
    id: 9,
    title: "Settings",
    icon: CiSettings,
    route: "",
  },
];

const userContactList: ContactType[] = [
  {
    id: 1,
    image: "user_2.jpeg",
    name: "Sneha Patel",
  },
  {
    id: 2,
    image: "user_3.jpeg",
    name: "Jason Roy",
  },
  {
    id: 3,
    image: "profile-picture-5.jpg",
    name: "Virat Kohali",
  },
  {
    id: 4,
    image: "user_2.jpeg",
    name: "MS Dhoni",
  },
  {
    id: 5,
    image: "profile-picture-5.jpg",
    name: "Suresh Raina",
  },
];

export { sidebarItemList, userContactList };
