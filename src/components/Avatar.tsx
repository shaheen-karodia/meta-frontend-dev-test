import Image from "next/image";

// TODO: Comee up with better way to merge props
interface AvatarProps {
  className?: string;
  width?: number;
  height?: number;
}
const Avatar: React.FC<AvatarProps> = ({
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
      className={`rounded-full ${className ? className : ""}`}
    />
  );
};

export default Avatar;
