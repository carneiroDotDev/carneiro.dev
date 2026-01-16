import { Nav } from "@/components/Nav";
import PageContainer from "@/components/PageContainer";
import React, { ReactNode } from "react";

//TODO: Check type of children
export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <PageContainer>
          <Nav />
        </PageContainer>
      </div>
      {children}
    </>
  );
}
