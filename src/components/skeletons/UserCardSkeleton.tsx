import { AvatarSkeleton } from "./AvatarSkeleton";
import Skeleton from "./Skeleton";

export const UserCardSkeleton = () => {
  return (
    <div className="border rounded-2xl border-gray-300 bg-white p-4 shadow-sm flex justify-between items-center">
      <div className="flex items-center">
        <AvatarSkeleton className="mr-3" />
        <div className="flex flex-col">
          <Skeleton width={120} height={16} className="mb-2" />
          <Skeleton width={80} height={12} />
        </div>
      </div>
      <Skeleton width={80} height={32} />
    </div>
  );
};
