import { ReactNode } from "react";
import { cva } from "cva";

const typography = cva(["font-mono", "font-extrabold", "text-primary"], {
  variants: {
    size: {
      h1: "text-3xl",
      h2: "text-2xl",
      h3: "text-lg",
      h4: "text-base",
    },
  },
  defaultVariants: {
    size: "h1",
  },
});

interface HeadingProps {
  children: ReactNode;
  size: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

const Heading = ({ children, size, className }: HeadingProps) => {
  const Component = size;
  return (
    <Component className={typography({ size, className })}>
      {children}
    </Component>
  );
};

export default Heading;
