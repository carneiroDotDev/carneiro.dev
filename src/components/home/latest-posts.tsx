import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";
import React from "react";

export default function LatestPosts() {
  const latestPosts = getBlogPosts();
  return (
    <>
      <h1 className="inline-block font-bold font-title tracking-tight text-4xl md:text-5xl mb-2 md:mb-4 text-gray-900 dark:text-gray-100">
        {"What I'm playing with:"}
      </h1>
      {latestPosts
        .sort((a, b) => {
          if (
            new Date(a.metaData.publishedAt) > new Date(b.metaData.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => {
          const formattedDate = formatDate(post.metaData.publishedAt);
          return (
            <article key={post.slug} className="text-wrap max-w-md my-6 group">
              <Link href={`/blog/${post.metaData.category}/${post.slug}`}>
                <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200">
                  <h2
                    className="font-semibold py-2 mb-3 text-xl leading-7 group-hover:text-blue-400 text-gray-900 dark:text-gray-100"
                    style={
                      {
                        viewTransitionName: "post-title",
                      } as React.CSSProperties
                    }
                  >
                    {post.metaData.title}
                  </h2>
                  <p
                    className="text-md leading-7 my-4 text-gray-700 dark:text-gray-200 
                  font-normal"
                  >
                    {post.metaData.summary}
                  </p>
                  <p className="text-md text-gray-600 dark:text-gray-200 mt-4">
                    {formattedDate}
                  </p>
                </div>
              </Link>
            </article>
          );
        })}
    </>
  );
}
