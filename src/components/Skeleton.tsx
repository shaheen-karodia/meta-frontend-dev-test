import React from "react";

interface SkeletonProps {
  width: number;
  height: number;
  className?: string;
}
const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  className = "",
}) => {
  return (
    <div
      className={`skeleton-loader rounded-full ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};

export default Skeleton;
