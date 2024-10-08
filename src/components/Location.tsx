import Image from "next/image";
import React from "react";
import BodyText from "./typography/BodyText";

interface LocationProps {
  className?: string;
  text: string;
}
const Location: React.FC<LocationProps> = ({ text }) => {
  return (
    <div className="flex">
      <Image
        src="/icons/location.svg"
        alt="Location Icon"
        width={14}
        height={17}
      />
      <BodyText element="p" size="regular" className="ml-1 text-secondary">
        {text}
      </BodyText>
    </div>
  );
};

export default Location;
