import React from "react";
import { formatDate, getBlogPosts } from "../utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import CardCategory from "@/components/CardCategory";
import Header from "@/components/Header";
import { baseUrl } from "@/app/sitemap";

// Generate static pages from these dynamic routes
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    category: post.metaData.category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const ogImage = `${baseUrl}/og?title=${encodeURIComponent(category)}`;
  const title = `${category} by Luiz Carneiro Blog`;
  const description = `Posts about ${category} on Luiz Carneiro Blog`;
  const url = `${baseUrl}/blog/${category}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: ogImage }],
      url,
    },
    twitter: {
      cardType: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const posts = getBlogPosts().filter((post) => {
    return post.metaData.category === category;
  });

  if (!posts.length) {
    notFound();
  }

  //I have been removing every render that has to do
  //with dates from inside the return in order to
  //aovoid hydration problems w diff btw client and server
  const renderCards: Array<React.ReactElement> = posts
    .sort((a, b) => {
      if (new Date(a.metaData.publishedAt) > new Date(b.metaData.publishedAt)) {
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
          date={formatDate(post.metaData.publishedAt)}
        />
      </Link>
    ));
  return (
    <>
      <Header>
        <PageContainer>
          <h1 className="title font-semibold text-2xl mt-4 capitalize">
            {posts[0]?.metaData.category}
          </h1>
        </PageContainer>
      </Header>
      <PageContainer>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {renderCards}
        </article>
      </PageContainer>
    </>
  );
}

export default Page;
