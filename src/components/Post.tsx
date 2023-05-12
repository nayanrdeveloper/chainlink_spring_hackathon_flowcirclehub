import React from "react";
import ProfileActive from "./ProfileActive";
import {
  BsThreeDots,
  BsShare,
  BsFiletypeGif,
  BsEmojiSmile,
  BsSend,
} from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentMinus } from "react-icons/bi";
import { TfiGallery } from "react-icons/tfi";
import Image from "next/image";
import { PostType } from "@/types";

function Post({userImage, userName, postDesc, postImage, userStatus, id} : PostType) {
  return (
    <div className="px-5 py-5 bg-[#212F48] mt-5 rounded-lg">
      {/* Profile */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <ProfileActive image={`${userImage}`} isActive={true} />
          <div>
            <p className="text-white text-xl">{userName}</p>
            <p className="text-[#A6ACB6]">{userStatus ? 'Active': ""}</p>
          </div>
        </div>
        <div>
          <BsThreeDots className="text-white w-8 h-8" />
        </div>
      </div>
      {/* Post */}
      <div className="space-y-2">
        <p className="text-white text-xl w-[38rem]">
          {postDesc}
        </p>
        <div className="relative h-96 w-46">
          <Image
            src={`/${postImage}`}
            alt={"post"}
            fill
            className="rounded-md"
          />
        </div>
      </div>
      {/* like, comment counts */}
      <div className="flex justify-between mt-3">
        <div className="flex space-x-2 items-center">
          <AiOutlineHeart className="w-6 h-6 text-white" />
          <span className="text-[#A6ACB6] text-xl">Like</span>
        </div>
        <div className="flex space-x-2 items-center">
          <BiCommentMinus className="w-6 h-6 text-white" />
          <span className="text-[#A6ACB6] text-xl">Comment</span>
        </div>
        <div className="flex space-x-2 items-center">
          <BsShare className="w-6 h-6 text-white" />
          <span className="text-[#A6ACB6] text-xl">Share</span>
        </div>
      </div>
      {/* Write Comment */}
      <div className="flex mt-2 space-x-2">
        <div className="bg-[#2B3B58] w-full flex justify-between items-center px-3 py-1 rounded-lg space-x-2">
          <input
            type={"text"}
            className="bg-transparent border-transparent focus:border-transparent text-[#A6ACB6] rounded-md"
            placeholder="write Comment"
          />
          <div className="flex space-x-2">
            <BsFiletypeGif className="w-7 h-7 text-[#A6ACB6]" />
            <TfiGallery className="w-7 h-7 text-[#A6ACB6]" />
            <BsEmojiSmile className="w-7 h-7 text-[#A6ACB6]" />
          </div>
        </div>

        <div>
          <div className="bg-[#0085FF] items-center flex px-6 py-3 rounded-lg">
            <BsSend className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
