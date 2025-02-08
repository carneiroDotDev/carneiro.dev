import { getBlogPosts } from "@/app/blog/utils";

export default function LatestPosts() {
  const latestPosts = getBlogPosts();
  return (
    <>
      <h1>Recentry Published</h1>
      {latestPosts
        .sort((a, b) => {
          if (
            new Date(a.metaData.publishedAt) > new Date(b.metaData.publishedAt)
          ) {
            return -1;
          } else {
            return 1;
          }
        })
        .map((post) => (
          <article key={post.slug}>{post.metaData.title}</article>
        ))}
      ;
    </>
  );
}
