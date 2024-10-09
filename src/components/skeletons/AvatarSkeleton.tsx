import Skeleton from "./Skeleton";

type AvatarSkeletonProps = {
  className?: string;
  width?: number;
  height?: number;
};
export const AvatarSkeleton: React.FC<AvatarSkeletonProps> = ({
  className = "",
  width = 40,
  height = 40,
}) => {
  return (
    <Skeleton
      width={width}
      height={height}
      className={`rounded-full ${className}`}
    />
  );
};
