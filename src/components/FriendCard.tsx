import { FriendType } from "@/types";
import { Avatar } from "flowbite-react";
import Image from "next/image";
import React from "react";

function FriendCard({
  id,
  image,
  name,
  mutualFriendCount,
  mutualFriendImageList,
}: FriendType) {
  return (
    <div>
      <div className="p-6 bg-[#212F48] rounded-md space-y-2">
        <div className="relative w-64 h-56">
          <Image
            src={`/${image}`}
            alt={name}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p className="text-white font-semibold text-center">{name}</p>
        <div className="flex space-x-2 items-center justify-center">
          <div className="flex items-center justify-center">
            {mutualFriendImageList.map((mutualFriendItem) => {
              return (
                <div
                  key={mutualFriendItem.id}
                  className="flex items-center justify-center w-8 h-8 -mx-1 overflow-hidden rounded-full"
                >
                  <div className="relative w-8 h-8">
                    <Image
                      src={`/${mutualFriendItem.image}`}
                      alt={"nayan"}
                      className="object-cover"
                      fill
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-[#A6ACB6]">{mutualFriendCount} mutual friends</p>
        </div>
        <div className="flex space-x-2 justify-center items-center">
          <button className="px-4 py-2 bg-[#026DCF] hover:bg-[#036DCF] text-white rounded-lg transition transform duration-300 ease-out">
            Confirm
          </button>
          <button className="px-4 py-2 bg-[#FFD3C6] text-[#FF4747] rounded-lg hover:bg-[#F44C4C] hover:text-white transition transform duration-300 ease-out">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
