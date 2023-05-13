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
import { ContactType, EventType, FriendType, NavItemType } from "@/types";

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

const friendList: FriendType[] = [
  {
    id: 1,
    image: "confirm-friend-1.png",
    name: "Nayan Radadiya",
    mutualFriendCount: 8,
    mutualFriendImageList: [
      {
        id: 1,
        image: "confirm-friend-3.png",
        name: "",
      },
      {
        id: 2,
        image: "confirm-friend-4.png",
        name: "",
      },
      {
        id: 3,
        image: "confirm-friend-6.png",
        name: "",
      },
    ],
  },
  {
    id: 2,
    image: "confirm-friend-3.png",
    name: "Nayan Radadiya",
    mutualFriendCount: 8,
    mutualFriendImageList: [
      {
        id: 1,
        image: "confirm-friend-1.png",
        name: "Vivek Sardhara",
      },
      {
        id: 2,
        image: "confirm-friend-12.png",
        name: "Monika Patel",
      },
      {
        id: 3,
        image: "confirm-friend-8.png",
        name: "Dhaval Chahuhan",
      },
    ],
  },
  {
    id: 3,
    image: "confirm-friend-12.png",
    name: "Priynka Singh",
    mutualFriendCount: 8,
    mutualFriendImageList: [
      {
        id: 1,
        image: "confirm-friend-8.png",
        name: "Kinjal Aahir",
      },
      {
        id: 2,
        image: "confirm-friend-4.png",
        name: "Shurbhi Roy",
      },
      {
        id: 3,
        image: "confirm-friend-3.png",
        name: "Priti kakkad",
      },
    ],
  },
  {
    id: 4,
    image: "confirm-friend-6.png",
    name: "Maulik Raiyani",
    mutualFriendCount: 8,
    mutualFriendImageList: [
      {
        id: 1,
        image: "confirm-friend-3.png",
        name: "Nayan Patel",
      },
      {
        id: 2,
        image: "confirm-friend-8.png",
        name: "Zeel Bhalodiya",
      },
      {
        id: 3,
        image: "confirm-friend-12.png",
        name: "Twinkal Patel",
      },
    ],
  },
  {
    id: 5,
    image: "confirm-friend-8.png",
    name: "Maulik Raiyani",
    mutualFriendCount: 8,
    mutualFriendImageList: [
      {
        id: 1,
        image: "confirm-friend-3.png",
        name: "Nayan Patel",
      },
      {
        id: 2,
        image: "confirm-friend-8.png",
        name: "Zeel Bhalodiya",
      },
      {
        id: 3,
        image: "confirm-friend-12.png",
        name: "Twinkal Patel",
      },
    ],
  },
  {
    id: 6,
    image: "confirm-friend-4.png",
    name: "Maulik Raiyani",
    mutualFriendCount: 8,
    mutualFriendImageList: [
      {
        id: 1,
        image: "confirm-friend-3.png",
        name: "Nayan Patel",
      },
      {
        id: 2,
        image: "confirm-friend-8.png",
        name: "Zeel Bhalodiya",
      },
      {
        id: 3,
        image: "confirm-friend-12.png",
        name: "Twinkal Patel",
      },
    ],
  },
];

const eventList: EventType[] = [
  {
    id: 1,
    name: "AI Hackfest",
    date: "May 12, 2023",
    attendingCount: 9,
    dateTime: "11:00AM to May 14, 12:00PM EDT",
    interested: true,
    desc: "Howdy, Friends!From email providers to spacecrafts -- everything around us is being made smarter with the use of Artificial Intelligence. This weekend, build hacks that can think and take decisions even better than humans First time hacking with AI? Get started by watching tutorials from Global Hack Week: AI/ML.Whether you build something on the theme or not, focus on having fun. While we'd love to have you build something on the theme, our themes are only here for inspiration. Please build whatever you'd like!",
    eventType: "Public",
    image:
      "https://s3.amazonaws.com/organizer.mlh.io/6x3x16orb186wqjy5rqqlch3ikrf?response-content-disposition=inline%3B%20filename%3D%22Social_WebsiteAd%20OHQ.png%22%3B%20filename%2A%3DUTF-8%27%27Social_WebsiteAd%2520OHQ.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJFCF2ZS25I2RWYBQ%2F20230513%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230513T104018Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=8002f66c1b853131657962c06403590b28a1bb08b503c4d529decbd62eb03f9e",
    eventDay: 12,
    location: "remote - Online",
    organizer: "Major League Hacking",
  },
  {
    id: 2,
    name: "DRAGONHACK 2023",
    date: "May 12, 2023",
    attendingCount: 164,
    dateTime: "01:00PM to May 12, 12:00AM EDT",
    interested: false,
    desc: "DragonHack is Slovenia's longest running and largest student hackathon. Held annually over a fun-packed weekend, teams of students put their skills to work on real-world software and hardware problems, set by many of sponsor companies. Not only is it a fantastic opportunity to network and meet some great like-minded people, this can be an invaluable chance to show off skills and impress!",
    eventType: "Public",
    image:
      "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/606/thumb/dragonhack_bpslash.png?1680209389",
    eventDay: 3,
    location: "Rajkot, Gujarat, India",
    organizer: "DragonHack  Oraginizer",
  },
  {
    id: 3,
    name: "NeighborhoodHacks",
    date: "Friday May 19, 2023",
    attendingCount: 9,
    dateTime: "8:30PM to May 21, 6:30PM IST",
    interested: true,
    desc: "These are fun and activity filled events that are open to all skill levels, from beginners to the most veteran developers. While we'd love to have you build something on the theme, our themes are only here for inspiration. Please build whatever you'd like and focus on having fun!",
    eventType: "Public",
    image:
      "https://s3.amazonaws.com/organizer.mlh.io/z0v1irlw2q4xwsubb29b5wa5nf38?response-content-disposition=inline%3B%20filename%3D%22Social_WebsiteAd%20OHQ.png%22%3B%20filename%2A%3DUTF-8%27%27Social_WebsiteAd%2520OHQ.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJFCF2ZS25I2RWYBQ%2F20230513%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230513T104651Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=4ee50db8fba63f98cab51a1563a6328c93f367b0ef0cc4d5ba1062603c0ed107",
    eventDay: 2,
    location: "remote - Online",
    organizer: "Major League Hacking",
  },
  {
    id: 4,
    name: "JAMHacks 7",
    date: "Saturday May 19, 2023",
    attendingCount: 9,
    dateTime: "10:30AM to May 19, 4:30PM IST",
    interested: true,
    desc: "Waterloo's largest high school hackathon is back fully in-person! 200 high school students all over Ontario will gather for a weekend of learning and creating.",
    eventType: "Private",
    image: "https://www.jamhacks.ca/Spilled_JAMHacks_7.1ba07761.svg",
    eventDay: 5,
    location: "200 University Ave W, Waterloo, ON N2L 3G5",
    organizer: "",
  },
  {
    id: 5,
    name: "WaffleHacks 2023",
    date: "Monday June 5, 2023",
    attendingCount: 235,
    dateTime: "12:00PM to Jun 12, 2:00PM EDT",
    interested: false,
    desc: "Spend a week hacking with the MLH community at GHW Security Week! Global Hack Week takes place throughout the year to give you a chance to complete technical challenges, network with the community, enjoy fun live sessions, build technical projects, and make new memories.",
    eventType: "Private",
    image:
      "https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/609/thumb/WH_Backsplash.png?1683570372",
    eventDay: 1,
    location: "Saurashta Univertiy, Amreli, India",
    organizer: "React Web Solution",
  },
  {
    id: 6,
    name: "Global Hack Week: Security Week",
    date: "Friday June 12, 2023",
    attendingCount: 9,
    dateTime: "12:00PM to Jun 12, 2:00PM EDT",
    interested: true,
    desc: "Earn experience points for yourself by completing our challenges throughout GHW. Challenges aren’t the only way to earn points. You can also receive a point each time you check in for a live session, so the more you attend, the more points you’ll rack up. They can be as simple as posting on your social media or as advanced as building a project and creating a full demo video for it. We’ll leave it to you to choose which challenges you want to take on. Feel free to work collaboratively with others on these.",
    eventType: "Public",
    image:
      "https://s3.amazonaws.com/organizer.mlh.io/jynogplymrbsbyz1p0zxeik4khdf?response-content-disposition=inline%3B%20filename%3D%22June-generic_Generic%20Social%20Card.png%22%3B%20filename%2A%3DUTF-8%27%27June-generic_Generic%2520Social%2520Card.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJFCF2ZS25I2RWYBQ%2F20230513%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230513T105623Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=f3f5ad897df1e6fa7eef9735f9d1a73d8d8e0ee4f8b89ed20cba3c245ec82ac3",
    eventDay: 7,
    location: "remote - Online",
    organizer: "Major League Hacking",
  },
];

export { sidebarItemList, userContactList, friendList, eventList };
