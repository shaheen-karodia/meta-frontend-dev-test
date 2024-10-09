import Image from "next/image";

interface AvatarProps {
  className?: string;
  width?: number;
  height?: number;
}
export const Avatar: React.FC<AvatarProps> = ({
  className = "",
  width = 40,
  height = 40,
}) => {
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
