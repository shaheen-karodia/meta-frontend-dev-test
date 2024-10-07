import { ReactNode } from "react";
import { cva } from "cva";

const typography = cva(["font-mono", "font-medium", "text-primary"], {
  variants: {
    size: {
      small: "text-xs",
      medium: "text-sm",
      regular: "text-base",
    },
    overline: {
      true: "uppercase",
      false: "",
    },
  },
  defaultVariants: {
    size: "regular",
    overline: false,
  },
});

interface BodyTextProps {
  children: ReactNode;
  size: "small" | "medium" | "regular";
  element: "p" | "span";
  overline?: boolean;
  className?: string;
}

const BodyText = ({
  children,
  element = "p",
  size,
  overline = false,
  className,
}: BodyTextProps) => {
  const Component = element;
  return (
    <Component className={typography({ size, overline, className })}>
      {children}
    </Component>
  );
};

export default BodyText;
