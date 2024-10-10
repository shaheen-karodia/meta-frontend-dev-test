import Image from "next/image";
import React from "react";
import Heading from "./typography/Heading";
import BodyText from "./typography/BodyText";

interface ErrorCardProps {
  className?: string;
  description: string;
  title: string;
}
const ErrorCard: React.FC<ErrorCardProps> = ({
  className,
  description,
  title,
}) => {
  return (
    <div
      className={`p-4 flex flex-col justify-center items-center border rounded-2xl border-gray-300 bg-white ${className}`}
    >
      <Image
        src="/icons/warn.svg"
        className="mb-6"
        alt="Error Icon"
        width={50}
        height={50}
      />
      <Heading size="h4" className="mb-2">
        {title}
      </Heading>
      <BodyText element="p" size="regular" className="text-secondary">
        {description}
      </BodyText>
    </div>
  );
};

export default ErrorCard;
