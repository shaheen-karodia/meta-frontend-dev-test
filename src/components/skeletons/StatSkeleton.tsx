import React from "react";

import Skeleton from "./Skeleton";

interface StatSkeletonProps {
  className?: string;
}
const StatSkeleton: React.FC<StatSkeletonProps> = ({ className }) => {
  return (
    <div className={className}>
      <Skeleton width={25} height={20} className="mb-1" />
      <Skeleton width={50} height={20} className="mb-1" />
    </div>
  );
};

export default StatSkeleton;
