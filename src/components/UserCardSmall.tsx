import React from "react";
import Heading from "./typography/Heading";
import BodyText from "./typography/BodyText";
import Avatar from "./Avatar";
import { Button } from "./Button";
import Skeleton from "./Skeleton";
import { TopUser } from "@/types/api/top-user";

// TODO: SKELETON
// TODO: BUTTON - wire
// TODO: HOVER STATE

type UserCardSmallProps = TopUser & {
  skeleton?: boolean;
};

const UserCardSmall: React.FC<UserCardSmallProps> = ({
  skeleton,
  username,
  firstName,
  lastName,
}) => {
  return (
    <div className="border rounded-2xl border-gray-300 p-4 shadow-sm flex justify-between items-center">
      <div className="flex items-center">
        <Avatar className="mr-3" skeleton={skeleton} />
        <div className="flex flex-col">
          {skeleton && (
            <>
              <Skeleton width={120} height={16} className="mb-2" />
              <Skeleton width={80} height={12} />
            </>
          )}
          {!skeleton && (
            <>
              <Heading size="h4">
                {firstName} {lastName}
              </Heading>
              <BodyText size="small" element="p" className="text-secondary">
                @{username}
              </BodyText>
            </>
          )}
        </div>
      </div>
      {skeleton && <Skeleton width={80} height={32} />}
      {!skeleton && (
        <Button intent="outline" size="medium">
          Follow
        </Button>
      )}
    </div>
  );
};

export default UserCardSmall;
