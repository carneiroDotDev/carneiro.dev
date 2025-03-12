import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";

export default function LatestPosts() {
  const latestPosts = getBlogPosts();
  return (
    <>
      <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
        Recentry Published
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
        .map((post) => (
          <article key={post.slug} className="text-wrap max-w-md my-10">
            <Link href={`/blog/${post.metaData.category}/${post.slug}`}>
              <h3 className="font-bold py-2 leading-5 hover:text-blue-400">
                {post.metaData.title}
              </h3>
            </Link>
            <p className="leading-8 my-5">{post.metaData.summary}</p>
            <p className="text-sm text-muted-foreground">
              {formatDate(post.metaData.publishedAt, true)}
            </p>
          </article>
        ))}
    </>
  );
}
