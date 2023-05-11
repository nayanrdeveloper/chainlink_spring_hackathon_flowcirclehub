import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "@/layouts/SideBar/SideBar";
import WritePost from "@/components/WritePost";


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
        </div>
      </div>
    </div>
  );
}
