import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src="/avatar.png"
      alt="User Avatar"
      width="40"
      height="40"
      className="rounded-full mr-3"
    />
  );
};

export default Avatar;
