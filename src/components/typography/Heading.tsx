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

interface TypographyProps {
  children: ReactNode;
  variant: "h1" | "h2" | "h3" | "h4";
}

const Heading = ({ children, variant }: TypographyProps) => {
  const Component = variant;
  return (
    <Component className={typography({ size: variant })}>{children}</Component>
  );
};

export default Heading;
