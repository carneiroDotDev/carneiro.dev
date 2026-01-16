import React, { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  className?: string;
  children: ReactNode;
}

const PageContainer: FC<PageContainerProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-(--breakpoint-xl) px-4 md:px-6 lg:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
