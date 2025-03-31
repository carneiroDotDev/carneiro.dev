import PageContainer from "@/components/PageContainer";
import { Nav } from "@/components/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <PageContainer className="pb-8">
          <Nav />
        </PageContainer>
      </div>
      <PageContainer>
        <div className="container max-w-6xl py-6 lg:py-10">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="min-w-48 max-w-48 flex flex-col gap-2">
              <p className="text-muted-foreground text-center break-words">
                Software Developer
              </p>
            </div>
            <p className="text-muted-foreground text-lg">
              {`You are quite lucky to be reading this because I am finishing this
              page right now :)`}
            </p>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
