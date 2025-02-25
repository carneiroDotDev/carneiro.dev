import { Nav } from "@/components/Nav";
import PageContainer from "@/components/PageContainer";
import React, { JSX } from "react";

export default function BlogLayout({ children }: { children: JSX.Element }) {
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
