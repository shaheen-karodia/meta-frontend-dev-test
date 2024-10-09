import Image from "next/image";
import Link from "next/link";

interface AvatarProps {
  className?: string;
  width?: number;
  height?: number;
  link: string;
}
export const Avatar: React.FC<AvatarProps> = ({
  className = "",
  width = 40,
  height = 40,
  link,
}) => {
  return (
    <Link href={link} className="contents">
      <Image
        src="/avatar.png"
        alt="User Avatar"
        width={width}
        height={height}
        style={{ width: `${width}px`, height: `${height}px` }}
        className={`rounded-full ${className}`}
      />
    </Link>
  );
};

export default Avatar;
