import React from "react";
import BodyText from "./typography/BodyText";
import Heading from "./typography/Heading";

interface StatProps {
  number: number;
  label: string;
  className?: string;
}
const Stat: React.FC<StatProps> = ({ number, label, className }) => {
  return (
    <div className={className}>
      <Heading size="h4">{number}</Heading>
      <BodyText element="p" size="small" className="text-secondary" overline>
        {label}
      </BodyText>
    </div>
  );
};

export default Stat;
