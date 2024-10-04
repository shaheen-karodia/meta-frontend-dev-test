import React from "react";
import BackButton from "./BackButton";

const TitleBar = () => {
  return (
    <div className="flex space-between">
      <BackButton />
      <h1>Title</h1>
      <div></div>
    </div>
  );
};

export default TitleBar;
