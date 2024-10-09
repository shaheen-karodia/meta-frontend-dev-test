import React from "react";
import Heading from "./typography/Heading";
import BodyText from "./typography/BodyText";
import Avatar from "./Avatar";
import { Button } from "./Button";
import { TopUser } from "@/types/api/top-user";
import Link from "next/link";

type UserCardSmallProps = TopUser;

export const UserCardSmall: React.FC<UserCardSmallProps> = ({
  id,
  username,
  firstName,
  lastName,
}) => {
  return (
    <div className="border rounded-2xl border-gray-300 bg-white p-4 shadow-sm flex justify-between items-center">
      <div className="flex items-center">
        <Avatar className="mr-3" link={`/profile/${id}`} />
        <div className="flex flex-col">
          <Link href={`/profile/${id}`}>
            <Heading size="h4">
              {firstName} {lastName}
            </Heading>
          </Link>
          <BodyText size="small" element="p" className="text-secondary">
            @{username}
          </BodyText>
        </div>
      </div>
      <Button intent="outline" size="medium">
        Follow
      </Button>
    </div>
  );
};

export default UserCardSmall;
