import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { baseUrl } from "@/app/sitemap";
import ArticleActions from "@/components/ArticleActions";
import { Breadcrumb } from "@/components/BreadCrumb";
import Header from "@/components/Header";
import PageContainer from "@/components/PageContainer";
import ReportViews from "@/components/ReportViews";
import { siteConfig } from "@/config/site";
import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

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
    type: "article",
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

  // Fetch likes from DB
  const postRecord = await db.blog.findUnique({
    where: { slug },
    select: { likes: true },
  });
  
  const initialLikes = postRecord?.likes || 0;

  // Format the date on the server side
  const formattedDate = formatDate(post.metaData.publishedAt);

  // Dynamically import the MDX component
  let MDXContent: React.ComponentType;
  try {
    const mdxModule = await import(`@/app/blog/contents/${post.slug}.mdx`);
    MDXContent = mdxModule.default;
  } catch {
    notFound();
  }

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
            <h1
              className="font-normal text-2xl mt-4"
              style={
                { viewTransitionName: "post-title" } as React.CSSProperties
              }
            >
              {post.metaData.title}
            </h1>
            <div className="flex justify-between items-center mt-2 mb-4">
              <p
                className="text-neutral-600 dark:text-neutral-200 mt-2"
                suppressHydrationWarning
              >
                {formattedDate}
              </p>
            </div>
          </>
        </PageContainer>
      </Header>
      <PageContainer>
        <article className="prose mx-auto">
        <ArticleActions initialLikes={initialLikes} slug={post.slug} category={post.metaData.category} />
          <MDXContent />
        </article>
      </PageContainer>
    </>
  );
}

export default ArticlePage;
