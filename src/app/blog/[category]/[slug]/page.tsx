import React from "react";
import { notFound } from "next/navigation";
import { unstable_ViewTransition as ViewTransition } from "react";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Header from "@/components/Header";
import PageContainer from "@/components/PageContainer";
import { Breadcrumb } from "@/components/BreadCrumb";
import RenderMDX from "@/components/RenderMDX";
import ReportViews from "@/components/ReportViews";
import { baseUrl } from "@/app/sitemap";
import { siteConfig } from "@/config/site";

// Generate static pages from these dynamic routes
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  const {
    title,
    image,
    publishedAt: publishedTime,
    summary: description,
    category,
  } = post.metaData;

  const ogImage =
    image ||
    `${baseUrl}/og?title=${encodeURIComponent(
      title
    )}&description=${encodeURIComponent(description)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${category}/${slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      cardType: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    image,
  };
}

async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  // Format the date on the server side
  const formattedDate = formatDate(post.metaData.publishedAt, true);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metaData.title,
            datePublished: post.metaData.publishedAt,
            dateModified: post.metaData.publishedAt,
            description: post.metaData.summary,
            image: post.metaData.image
              ? `${baseUrl}${post.metaData.image}`
              : `/og?title=${encodeURIComponent(post.metaData.title)}`,
            url: `${baseUrl}/blog/${post.metaData.category}/${post.slug}`,
            author: {
              "@type": "Person",
              name: siteConfig.name,
            },
          }),
        }}
      />
      <ReportViews
        category={post.metaData.category}
        title={post.metaData.title}
        slug={post.slug}
      />
      <Header>
        <PageContainer>
          <>
            <Breadcrumb category={post.metaData.category} slug={post.slug} />
            <ViewTransition name="post-title">
              <h1 className="title font-semibold text-2xl mt-4">
                {post.metaData.title}
              </h1>
            </ViewTransition>
            <div className="flex justify-between items-center mt-2 mb-4 text-sm">
              <p
                className="text-sm text-neutral-600 dark:text-neutral-400 mt-2"
                suppressHydrationWarning
              >
                {formattedDate}
              </p>
            </div>
          </>
        </PageContainer>
      </Header>
      <PageContainer>
        <article className="prose">
          <RenderMDX source={post.content} />
        </article>
      </PageContainer>
    </>
  );
}

export default ArticlePage;
