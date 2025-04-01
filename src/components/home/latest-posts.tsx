import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function LatestPosts() {
  const latestPosts = getBlogPosts();
  return (
    <>
      <h1 className="inline-block font-bold font-title text-4xl tracking-tight lg:text-5xl">
        Recently Published
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
          const formattedDate = formatDate(post.metaData.publishedAt, true);
          return (
            <article key={post.slug} className="text-wrap max-w-md my-10 group">
              <Link href={`/blog/${post.metaData.category}/${post.slug}`}>
                <ViewTransition name="post-title">
                  <h2 className="font-normal py-2 leading-5 group-hover:text-blue-400">
                    {post.metaData.title}
                  </h2>
                </ViewTransition>
                <p className="leading-8 my-5">{post.metaData.summary}</p>
                <p className="text-sm text-muted-foreground text-gray-800 dark:text-white">
                  {formattedDate}
                </p>
              </Link>
            </article>
          );
        })}
    </>
  );
}
