import { baseUrl } from "./sitemap";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml/`,
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  };
}
