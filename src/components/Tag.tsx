import React from "react";
import BodyText from "./typography/BodyText";

interface TagProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}
const Tag: React.FC<TagProps> = ({ href, children, className }) => {
  return (
    <a className={className} href={href}>
      <BodyText size="small" element="span" className="text-primary-default">
        {children}
      </BodyText>
    </a>
  );
};

export default Tag;
