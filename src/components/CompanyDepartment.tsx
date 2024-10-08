import { cva } from "cva";
import React from "react";
import Heading from "./typography/Heading";

//TODO: SPLIT OUT COLOR VARIANTS CORRECTLY FOR THESE COMPONENTS

const textColor = cva([], {
  variants: {
    color: {
      purple: "text-purple-700",
      red: "text-red-700",
      orange: "text-orange-700",
      turquoise: "bg-teal-700",
      blue: "text-blue-700",
    },
  },
  defaultVariants: {
    color: "blue",
  },
});

const department = cva(["py-1", "px-3", "rounded-full", "inline-block"], {
  variants: {
    color: {
      purple: "bg-purple-200",
      red: "bg-red-200",
      orange: "bg-orange-200",
      turquoise: "bg-teal-200",
      blue: "bg-blue-200",
    },
  },
  defaultVariants: {
    color: "blue",
  },
});

interface CompanyDepartmentProps {
  className?: string;
  children: React.ReactNode;
  color: "purple" | "red" | "orange" | "turquoise" | "blue";
}
const CompanyDepartment = ({
  className,
  children,
  color,
}: CompanyDepartmentProps) => {
  return (
    <div className={department({ color, className })}>
      <Heading size="h4" className={textColor({ color })}>
        {children}
      </Heading>
    </div>
  );
};

export default CompanyDepartment;
