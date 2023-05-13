import Navbar from "@/components/Navbar/Navbar";
import SideBar from "@/layouts/SideBar/SideBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#162134]">
      <Navbar />
      <div className="px-2 py-5 flex space-x-4">
        <div>
          <SideBar />
        </div>
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
