import { siteConfig } from "@/config/site";
import { getBlogPosts } from "../blog/utils";
import { baseUrl } from "../sitemap";

export async function GET() {
  const blogPosts = getBlogPosts();

  const items = blogPosts
    .sort((a, b) => {
      if (new Date(a.metaData.publishedAt) > new Date(b.metaData.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(
      (post) => `
    <item>
        <title>${post.metaData.title}</title>
        <link>${baseUrl}/blog/${post.metaData.category}/${post.slug}</link>
        <description>${post.metaData.summary || ""}</description>
        <pubDate>${new Date(post.metaData.publishedAt).toUTCString()}</pubDate>
    </item>
        `
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
      <rss version="2.0">
          <channel>
              <title>${siteConfig.name}</title>
              <link>${baseUrl}</link>
              <description>Luiz Carneiro's blog RSS feed with posts about programming, software development, and technology</description>
              ${items}
          </channel>
      </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
