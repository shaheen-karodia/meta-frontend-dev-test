import React from "react";
import BackButton from "./BackButton";
import Heading from "./typography/Heading";

interface TitleBarProps {
  backHref?: string;
  title: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ backHref, title }) => {
  return (
    <div className="grid grid-cols-3 py-[14px] px-3 bg-white border-b border-gray-300 shadow-sm items-center">
      <div>{backHref && <BackButton href={backHref} />}</div>
      <div className="col-span-1 text-center">
        <Heading size="h2">{title}</Heading>
      </div>
      <div></div> {/* Empty div for the third column */}
    </div>
  );
};

export default TitleBar;
