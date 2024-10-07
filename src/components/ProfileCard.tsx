import React from "react";
import Avatar from "./Avatar";
import Heading from "./typography/Heading";
import BodyText from "./typography/BodyText";

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
        <div className="flex">
          <BodyText size="regular" element="p" className="text-secondary mr-2">
            @emily
          </BodyText>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ad
        eveniet, expedita, porro aliquid suscipit esse dolorum illo praesentium,
        quo nam maxime labore saepe provident? Optio harum, aliquam iste
        explicabo odio magnam ipsam, non excepturi omnis, debitis sunt
        voluptatem quas!
      </div>
      <div className="border-t py-4 px-6 flex">Button Container</div>
    </div>
  );
};

export default ProfileCard;
