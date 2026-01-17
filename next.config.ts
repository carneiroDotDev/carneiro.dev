import createMDX from "@next/mdx";
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    viewTransition: true,
  },
  turbopack: {
    resolveExtensions: [".mdx", ".md", ".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  images: {
    qualities: [25, 50, 75, 100],
  },
};

// Create a simple plugin to strip frontmatter
const withMDX = createMDX({
  options: {
    remarkPlugins: [
      // Use string format for Turbopack compatibility
      ["remark-frontmatter", { type: "yaml", marker: "-" }],
      ["remark-mdx-frontmatter", {}],
    ],
    rehypePlugins: [
      [
        "rehype-pretty-code",
        {
          theme: {
            light: "github-light",
            dark: "github-dark",
          },
        },
      ],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
