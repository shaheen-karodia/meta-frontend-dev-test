import React from "react";
import Avatar from "./Avatar";
import Heading from "./typography/Heading";
import BodyText from "./typography/BodyText";
import Location from "./Location";
import CompanyDepartment from "./CompanyDepartment";
import Stat from "./Stat";
import { Button } from "./Button";
import Skeleton from "./Skeleton";

// TODO: TYPE
// TODO: SKELETON
// TODO: Hoever
// TODO: How to externalize the linear gradient
// TODO: box shadow on the avataar

interface ProfileCardProps {
  skeleton?: boolean;
}
const ProfileCard: React.FC<ProfileCardProps> = ({ skeleton }) => {
  return (
    <div className="border rounded-xl border-gray-300 relative">
      <Avatar
        className="absolute top-[-30px] left-1/2 -translate-x-2/4 sm:translate-x-0 sm:top-[40px] sm:left-6 border-8 border-white"
        width={120}
        height={120}
        skeleton={skeleton}
      />
      <div
        className={`rounded-t-xl h-16 ${
          skeleton ? "skeleton-loader" : "profile-card-gradient"
        }`}
      ></div>
      <div className="flex flex-col items-center sm:items-start sm:ml-[168px] m-6">
        {skeleton ? (
          <Skeleton width={210} height={36} className="mb-2" />
        ) : (
          <Heading size="h1" className="mb-2">
            Emily Johnson
          </Heading>
        )}

        <div className="flex mb-3">
          {skeleton ? (
            <Skeleton width={250} height={20} className="mr-2" />
          ) : (
            <>
              <BodyText
                size="regular"
                element="p"
                className="text-secondary mr-2"
              >
                @emily
              </BodyText>
              <Location text="San Francisco, CA" />
            </>
          )}
        </div>
        {skeleton ? (
          <Skeleton width={140} height={30} className="mb-6" />
        ) : (
          <CompanyDepartment color="blue" className="mb-6">
            Engineering
          </CompanyDepartment>
        )}

        <div className="flex">
          <Stat
            number={24}
            label="Posts"
            className="mr-6"
            skeleton={skeleton}
          />
          <Stat number={20} label="Likes" skeleton={skeleton} />
        </div>
      </div>

      <div className="border-t py-4 px-6 flex">
        {skeleton ? (
          <Skeleton width={100} height={30} className="mr-4" />
        ) : (
          <Button intent="solid" size="medium" className="mr-4">
            Follow
          </Button>
        )}
        {skeleton ? (
          <Skeleton width={100} height={32} />
        ) : (
          <Button intent="outline" size="medium">
            Message
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
