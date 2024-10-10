import Image from "next/image";
import React, { forwardRef } from "react";
import BodyText from "./typography/BodyText";

interface LoadingIndicatorProps {
  children?: React.ReactNode;
}
const LoadingIndicator = forwardRef<HTMLDivElement, LoadingIndicatorProps>(
  ({ children }, ref) => (
    <div ref={ref} className={`block text-center mt-3`}>
      <Image
        className="animate-spin inline-block mb-3"
        src="/icons/spinner.png"
        alt="Loading..."
        width="24"
        height="24"
      />
      <BodyText element="p" size="small" className="text-secondary">
        {children}
      </BodyText>
    </div>
  )
);

LoadingIndicator.displayName = "LoadingIndicator";

export default LoadingIndicator;
