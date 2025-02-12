import React, { FC, ReactElement } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  className?: string;
  children: ReactElement;
}

const PageContainer: FC<PageContainerProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
