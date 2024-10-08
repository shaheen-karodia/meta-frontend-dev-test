import React from "react";
import { cva, type VariantProps } from "cva";

//TODO  hover state
//TODO must import style 700
const button = cva(["font-mono", "rounded-full", "leading-none"], {
  variants: {
    intent: {
      solid: ["font-bold", "button-solid-gradient", "text-white"],
      outline: [
        "text-primary-default",
        "border",
        "border-primary-default",
        "hover:bg-primary-50",
      ],
    },
    size: {
      small: ["py-[6px]", "px-[10px]", "text-xs"],
      medium: ["py-2", "px-[14px]", "text-base"],
      large: ["py-4", "px-6", "text-base"],
    },
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;
