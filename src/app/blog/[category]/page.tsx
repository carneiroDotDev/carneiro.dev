import React from "react";
import { getBlogPosts } from "../utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import CardCategory from "@/components/CardCategory";
import Header from "@/components/Header";

async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const posts = getBlogPosts().filter((post) => {
    return post.metaData.category === category;
  });

  if (!posts.length) {
    notFound();
  }

  return (
    <>
      <Header>
        <PageContainer>
          <h1 className="title font-semibold text-2xl tracking-wider mt-4 uppercase">
            {posts[0]?.metaData.category}
          </h1>
        </PageContainer>
      </Header>
      <PageContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metaData.publishedAt) >
                new Date(b.metaData.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                href={`/blog/${post.metaData.category}/${post.slug}`}
                key={`/blog/${post.slug}`}
              >
                <CardCategory
                  title={post.metaData.title}
                  summary={post.metaData.summary}
                  date={post.metaData.publishedAt}
                />
              </Link>
            ))}
        </div>
      </PageContainer>
    </>
  );
}

export default Page;
