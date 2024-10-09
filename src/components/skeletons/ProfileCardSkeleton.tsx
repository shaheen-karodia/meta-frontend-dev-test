import React from "react";

import Skeleton from "./Skeleton";
import { AvatarSkeleton } from "./AvatarSkeleton";
import StatSkeleton from "./StatSkeleton";

const ProfileCardSkeleton: React.FC = () => {
  return (
    <div className="border rounded-xl border-gray-300 relative">
      <AvatarSkeleton
        className="absolute top-[-30px] left-1/2 -translate-x-2/4 sm:translate-x-0 sm:top-[40px] sm:left-6 border-8 border-white"
        width={120}
        height={120}
      />
      <div className={`rounded-t-xl h-16 skeleton-loader`}></div>
      <div className="flex flex-col items-center sm:items-start sm:ml-[168px] m-6">
        <div className="flex mb-3">
          <Skeleton width={210} height={36} className="mb-2" />
        </div>
        <Skeleton width={250} height={20} className="mr-2 mb-3" />
        <Skeleton width={140} height={30} className="mb-6" />

        <div className="flex">
          <StatSkeleton className="mr-6" />
          <StatSkeleton />
        </div>
      </div>

      <div className="border-t py-4 px-6 flex">
        <Skeleton width={100} height={30} className="mr-4" />
        <Skeleton width={100} height={32} />
      </div>
    </div>
  );
};

export default ProfileCardSkeleton;
