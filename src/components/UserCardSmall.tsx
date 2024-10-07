import React from "react";
import Image from "next/image";
import Heading from "./typography/Heading";
import BodyText from "./typography/BodyText";
import Avatar from "./Avatar";

// TODO: TYPE
// TODO: SKELETON
// TODO: BUTTON
// TODO: REMOVE HARD CODED VALUES
// TODO: HOVER STATE

const UserCardSmall = () => {
  return (
    <div className="border rounded-2xl border-gray-300 p-4 shadow-sm flex justify-between">
      <div className="flex items-center">
        <Avatar />
        <div className="flex flex-col">
          <Heading size="h4">Emily Johnstone</Heading>
          <BodyText size="small" element="p" className="text-secondary">
            @emily
          </BodyText>
        </div>
      </div>
      <div>Button </div>
    </div>
  );
};

export default UserCardSmall;
