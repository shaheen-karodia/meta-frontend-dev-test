import React from "react";
import Image from "next/image";
import Heading from "./typography/Heading";
import BodyText from "./typography/BodyText";

const UserCardSmall = () => {
  return (
    <div className="border rounded-2xl border-gray-300 p-4 shadow-sm flex justify-between">
      <div className="flex items-center">
        <Image
          src="/avatar.png"
          alt="User Avatar"
          width="40"
          height="40"
          className="rounded-full mr-3"
        />
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
