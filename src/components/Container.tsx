import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-[700px] py-8 px-4">{children}</div>
  );
};

export default Container;
