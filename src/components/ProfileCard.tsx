import React from "react";
import Avatar from "./Avatar";
import Heading from "./typography/Heading";
import BodyText from "./typography/BodyText";
import Location from "./Location";
import CompanyDepartment from "./CompanyDepartment";
import Stat from "./Stat";
import { Button } from "./Button";

// TODO: TYPE
// TODO: SKELETON
// TODO: Hoever
// TODO: How to externalize the linear gradient
// TODO: box shadow on the avataar

const ProfileCard = () => {
  return (
    <div className="border rounded-xl border-gray-300 relative">
      <Avatar
        className="absolute top-[40px] left-6 border-8 border-white"
        width={120}
        height={120}
      />
      <div
        style={{
          background:
            "linear-gradient(102.78deg, #ECE9FB 0.31%, #FDEDE7 82.87%)",
        }}
        className="rounded-t-xl h-16 "
      ></div>
      <div className="ml-[168px] m-6">
        <Heading size="h1" className="mb-2">
          Emily Johnson
        </Heading>
        <div className="flex mb-3">
          <BodyText size="regular" element="p" className="text-secondary mr-2">
            @emily
          </BodyText>
          <Location text="San Francisco, CA" />
        </div>
        <CompanyDepartment color="blue" className="mb-6">
          Engineering
        </CompanyDepartment>
        <div className="flex">
          <Stat number={24} label="Posts" className="mr-6" />
          <Stat number={20} label="Likes" />
        </div>
      </div>

      <div className="border-t py-4 px-6 flex">
        <Button intent="solid" size="medium" className="mr-4">
          Follow
        </Button>
        <Button intent="outline" size="medium">
          Message
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
