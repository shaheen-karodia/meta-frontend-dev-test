import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BackButtonProps {
  href: string;
  className?: string;
}
const BackButton: React.FC<BackButtonProps> = ({ href, className = "" }) => {
  return (
    <Link
      href={href}
      className={`hover:bg-gray-400  rounded-full ${className}`}
    >
      <Image
        src="/icons/back-chevron.svg"
        alt="Back Button"
        width={32}
        height={32}
      />
    </Link>
  );
};

export default BackButton;
