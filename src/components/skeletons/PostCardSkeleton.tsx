import React from "react";

import Skeleton from "./Skeleton";

import { AvatarSkeleton } from "./AvatarSkeleton";

type PostCardSkeletonProps = {
  className?: string;
};

const PostCardSkeleton: React.FC<PostCardSkeletonProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col border rounded-2xl border-gray-300 bg-white ${className}`}
    >
      <div className="p-4 flex items-start">
        <AvatarSkeleton className="mr-3" />
        <div>
          <Skeleton width={160} height={24} className="mb-2" />
          <Skeleton width={100} height={16} className="mb-4" />
          <Skeleton width={200} height={16} className="mb-3" />
          <Skeleton width={200} height={16} className="mb-3" />
          <Skeleton width={180} height={16} className="mb-4" />

          <div className="flex justify-start">
            <Skeleton width={30} height={16} className="mr-3" />
            <Skeleton width={30} height={16} className="mr-3" />
            <Skeleton width={30} height={16} className="mr-3" />
          </div>
        </div>
      </div>
      <div className="border-t p-4 flex">
        <Skeleton width={60} height={20} className="mr-6" />
        <Skeleton width={60} height={20} className="mr-6" />
        <Skeleton width={60} height={20} className="mr-6" />
      </div>
    </div>
  );
};

export default PostCardSkeleton;
