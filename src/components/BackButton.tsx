import Link from "next/link";
import React from "react";

interface BackButtonProps {
  href: string;
}
const BackButton: React.FC<BackButtonProps> = ({ href }) => {
  return (
    <Link href={href}>
      <div>BackButton</div>
    </Link>
  );
};

export default BackButton;
