import React from "react";
import BodyText from "./typography/BodyText";
import Heading from "./typography/Heading";
import Skeleton from "./skeletons/Skeleton";

interface StatProps {
  number: number;
  label: string;
  className?: string;
  skeleton?: boolean;
}
const Stat: React.FC<StatProps> = ({ number, label, className, skeleton }) => {
  return (
    <div className={className}>
      {skeleton ? (
        <Skeleton width={25} height={20} className="mb-1" />
      ) : (
        <Heading size="h4">{number}</Heading>
      )}
      {skeleton ? (
        <Skeleton width={50} height={20} className="mb-1" />
      ) : (
        <BodyText element="p" size="small" className="text-secondary" overline>
          {label}
        </BodyText>
      )}
    </div>
  );
};

export default Stat;
