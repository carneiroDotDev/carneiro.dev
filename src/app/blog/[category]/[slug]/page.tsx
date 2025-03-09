import React from "react";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageContainer from "@/components/PageContainer";
import { Breadcrumb } from "@/components/BreadCrumb";
import RenderMDX from "@/components/RenderMDX";

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
  return (
    <>
      <Header>
        <PageContainer>
          <>
            <Breadcrumb category={post.metaData.category} slug={post.slug} />
            <h1 className="title font-semibold text-2xl mt-4">
              {post.metaData.title}
            </h1>
            <div className="flex justify-between items-center mt-2 mb-4 text-sm">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                {formatDate(post.metaData.publishedAt, true)}
              </p>
            </div>
          </>
        </PageContainer>
      </Header>
      <PageContainer>
        <article className="prose">
          <RenderMDX />
        </article>
      </PageContainer>
    </>
  );
}

export default ArticlePage;
