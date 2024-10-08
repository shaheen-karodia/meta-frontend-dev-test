import Image from "next/image";
import Skeleton from "./Skeleton";

// TODO: Comee up with better way to merge props
interface AvatarProps {
  className?: string;
  width?: number;
  height?: number;
  skeleton?: boolean;
}
const Avatar: React.FC<AvatarProps> = ({
  className = "",
  width = 40,
  height = 40,
  skeleton = false,
}) => {
  if (skeleton) {
    return (
      <Skeleton
        width={width}
        height={height}
        className={`rounded-full ${className}`}
      />
    );
  }
  return (
    <Image
      src="/avatar.png"
      alt="User Avatar"
      width={width}
      height={height}
      className={`rounded-full ${className}`}
    />
  );
};

export default Avatar;
