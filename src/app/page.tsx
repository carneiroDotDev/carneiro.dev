import LatestPosts from "@/components/home/latest-posts";
import PopularPosts from "@/components/home/PopularPosts";
import TopCategories from "@/components/home/TopCategories";
import { Nav } from "@/components/Nav";
import PageContainer from "@/components/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <>
        <Nav />
        <main className="flex flex-col items-center justify-evenly mt-16 px-2 sm:px-0 md:flex-row md:items-start">
          <div>
            <LatestPosts />
          </div>
          <div className="md:pl-8 md:h-screen w-[400px]">
            <div>
              <section className="font-semibold mb-4 text-lg text-gray-900 dark:text-gray-100">
                Posts category
              </section>
              <TopCategories />
            </div>
            <div className="sticky mt-10 top-0">
              <section className="font-semibold mb-4 text-lg text-gray-900 dark:text-gray-100">
                Popular Posts
              </section>
              <PopularPosts />
            </div>
          </div>
        </main>
      </>
    </PageContainer>
  );
}
