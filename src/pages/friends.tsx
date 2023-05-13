import FriendCard from "@/components/FriendCard";
import { friendList } from "@/constants";
import React from "react";

function friends() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-3 gap-y-4">
        {friendList.map((friendItem) => {
          return (
            <FriendCard
              key={friendItem.id}
              id={friendItem.id}
              image={friendItem.image}
              mutualFriendCount={friendItem.mutualFriendCount}
              mutualFriendImageList={friendItem.mutualFriendImageList}
              name={friendItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default friends;
