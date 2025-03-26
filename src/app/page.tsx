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
        <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
          <div>
            <LatestPosts />
          </div>
          <div className="lg:h-screen md:h-screen">
            <div>
              <h1 className="font-bold mb-4">Top Posts</h1>
              <TopCategories />
            </div>
            <div className="sticky mt-10 top-0">
              <h2 className="font-bold mb-4">Popular Posts</h2>
              <PopularPosts />
            </div>
          </div>
        </main>
      </>
    </PageContainer>
  );
}
