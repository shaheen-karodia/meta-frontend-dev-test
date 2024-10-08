import React from "react";
import BackButton from "./BackButton";
import Heading from "./typography/Heading";

interface TitleBarProps {
  backHref?: string;
  title: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ backHref, title }) => {
  return (
    <div className="flex my-[14px] px-3 bg-white border-b border-gray-300 shadow-sm align-middle">
      {backHref && <BackButton href={backHref} />}
      <Heading size="h2">{title}</Heading>
      <div>yeet</div>
    </div>
  );
};

export default TitleBar;
