import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "@/layouts/SideBar/SideBar";
import WritePost from "@/components/WritePost";
import Post from "@/components/Post";
import ContactUser from "@/components/ContactUser";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#162134]">
      <Navbar />
      <div className="px-2 py-5 flex space-x-4">
        <div>
          <SideBar />
        </div>
        <div>
          <WritePost />
          <Post id={1} postDesc="Hello Nayan Radadiya thaa is very helpful so all time grate so all time grate" postImage="post-img-1.png" userImage="profile-picture-5.jpg" userName="Nayan Radadiya" userStatus={true}  />
          <Post id={2} postDesc="Hello Nayan Radadiya thaa is very helpful so all time grate so all time grate" postImage="user_3.jpeg" userImage="user_3.jpeg" userName="Ravi Savalya" userStatus={true}  />
        </div>
        <div>
          <ContactUser />
        </div>
      </div>
    </div>
  );
}
