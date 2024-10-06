import React, { ButtonHTMLAttributes } from "react";

//TODO learn about CVA
//TODO loading state
//TODO learn tailwind merge

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "solid" | "outline";
  size: "large" | "medium" | "small";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ variant, size, text, ...props }) => {
  console.log("variant", variant);
  console.log("size", size);
  return <button {...props}>{text}</button>;
};

export default Button;
