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
          <div className="md:h-screen">
            <div>
              <section className="font-bold mb-4">Posts category</section>
              <TopCategories />
            </div>
            <div className="sticky mt-10 top-0">
              <section className="font-bold mb-4">Popular Posts</section>
              <PopularPosts />
            </div>
          </div>
        </main>
      </>
    </PageContainer>
  );
}
