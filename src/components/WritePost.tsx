import { Textarea } from "flowbite-react";
import Image from "next/image";
import React from "react";
import WritePostIcon from "./WritePostIcon";

function WritePost() {
  const openModal = () => {
    console.log("Open Popup");
  };
  return (
    <div className="bg-[#212F48] p-5">
      <div className="flex space-x-3">
        <div>
          <div className="relative w-14 h-14">
            <Image
              src={"/profile-picture-5.jpg"}
              alt="User"
              fill
              className="rounded-xl"
            />
          </div>
        </div>
        <div>
          <textarea
            className="bg-[#2B3B58] rounded-md text-[#A6ACB6] w-[35rem] h-24"
            placeholder="Write something to Nayan"
          />
          <div className="flex justify-between mt-3">
            <WritePostIcon
              text="Live"
              image="live-video.png"
              alt="live-video"
              onClick={openModal}
            />
             <WritePostIcon
              text="Photo/Video"
              image="vgallery.png"
              alt="live-video"
              onClick={openModal}
            />
             <WritePostIcon
              text="Fallings/Activity"
              image="emoji-laughing.png"
              alt="Fallings/Activity"
              onClick={openModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritePost;
