import PageContainer from "@/components/PageContainer";
import { Nav } from "@/components/Nav";
import { Metadata } from "next";
import Image from "next/image";

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
      <PageContainer className="bg-color-white pt-8 sm:pt-16">
        <div className="flex flex-col flex-1 lg:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="font-title tracking-wide text-4xl font-bold text-gray-900 dark:text-white">
              Hi! I&apos;m Luiz!
            </h1>
            <p className="text-md text-gray-900 dark:text-gray-200 mt-4">
              I moved to Germany to become a{" "}
              <a
                href="https://edoc.ub.uni-muenchen.de/view/subjects/fak17.html#group_L:~:text=Carneiro%2C%20Luiz%20P.%20(2018)%3A%20Atmospheric%20NLTE%2Dmodels%20for%20the%20spectroscopic%20analysis%20of%20massive%20stars%3A%20new%20methods%20and%20first%20results%20for%20deriving%20CNO%20surface%20abundances.%20Dissertation%2C%20LMU%20M%C3%BCnchen%3A%20Faculty%20of%20Physics"
                target="_blank"
                className="underline text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                PhD in Astrophysics
              </a>
              . While in the university, I started programming and never stopped
              :)
            </p>
            <p className="text-md text-gray-900 dark:text-gray-200 mt-4">
              Over the years, I have worked as a software engineer at companies
              such as MER GmbH, Traffective GmbH, and Sport1 GmbH, gaining
              experience in building scalable and efficient solutions.
            </p>
            <p className="text-md text-gray-900 dark:text-gray-200 mt-4">
              Beyond coding, I actively contribute to the tech community as an
              organizer of the{" "}
              <a
                href="https://gdg.community.dev/gdg-cloud-munich/"
                target="_blank"
                className="underline text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                GDG Cloud Munich
              </a>
              , a growing developer group with over 2.100 members, fostering
              knowledge-sharing and networking in cloud technologies ☁️
            </p>
          </div>
          <div className="flex justify-center w-[550] h-[350]">
            <Image
              src="/luizCarneiro.jpg"
              alt="Luiz Carneiro's photo"
              className="rounded-sm shadow-lg bg-cover"
              width={500}
              height={1000}
              priority
              quality={100}
            />
          </div>
        </div>
      </PageContainer>
    </>
  );
}
