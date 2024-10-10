import Image from "next/image";
import React, { forwardRef } from "react";
import BodyText from "./typography/BodyText";

interface LoadingIndicatorProps {
  children?: React.ReactNode;
  loading?: boolean;
}
const LoadingIndicator = forwardRef<HTMLDivElement, LoadingIndicatorProps>(
  ({ loading, children }, ref) => (
    <div ref={ref} className={`block text-center mt-3`}>
      <Image
        className={`animate-spin  mb-3 ${loading ? "inline-block" : "hidden"}`}
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
