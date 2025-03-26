import { POSTS } from "@/lib/constants";
import { getBlogPosts } from "./blog/utils";

export const baseUrl = "https://www.carneiro.dev";

export default async function sitemap() {
  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.metaData.category}/${post.slug}`,
    lastmod: post.metaData.publishedAt,
  }));

  const routes = POSTS.map((route) => ({
    url: `${baseUrl}${route.href}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...blogPosts, ...routes];
}
