import React from "react";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import PageContainer from "@/components/PageContainer";
import { Breadcrumb } from "@/components/BreadCrumb";

export default function Page({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  console.log("test ->", post.metaData.publishedAt);
  return (
    <>
      <Header>
        <PageContainer>
          <>
            <Breadcrumb category={post.metaData.category} slug={post.slug} />
            <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
              {post.metaData.title}
            </h1>
            <div className="flex justify-between items-center mt-2 mb-4 text-sm">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                {/* {formatDate(post.metaData.pusblishedAt)} */}
              </p>
            </div>
          </>
        </PageContainer>
      </Header>
      <PageContainer>
        <article className=""></article>
      </PageContainer>
    </>
  );
}
