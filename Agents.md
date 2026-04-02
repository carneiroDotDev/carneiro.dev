# Agents.md

## Project Overview

- `carneiro.dev` is a personal technical blog built with Next.js (App Router), TypeScript, and Tailwind CSS.
- Blog content is authored as local MDX files and rendered through dynamic routes with static parameter generation.
- The application combines static content (MDX) with dynamic engagement data stored in PostgreSQL via Prisma.

## Core Stack

- Framework/runtime: Next.js 16, React 19, TypeScript.
- Styling/UI: Tailwind CSS, Radix UI primitives, shadcn-style component structure.
- Content pipeline: MDX (`@next/mdx`, `gray-matter`, `rehype-pretty-code`).
- Data layer: Prisma + PostgreSQL (serverless-friendly setup with Neon dependency in the stack).
- Deployment/observability: Vercel, Vercel Analytics, and Speed Insights.

## Content and Routing Model

- Source of truth for posts lives in `src/app/blog/contents/*.mdx`.
- Content loading and frontmatter parsing happen in `src/app/blog/utils.ts`.
- Main routes:
  - `/` home page with latest posts, categories, and popular posts section.
  - `/blog/[category]` category listing pages.
  - `/blog/[category]/[slug]` article pages with per-post metadata and structured data.
  - `/about`, `/rss`, `/sitemap.xml`, and dynamic OG image route `/og`.

## Dynamic Features (DB-backed)

- Page view tracking:
  - Client component reports views to `/api` on article load.
  - API route upserts/updates per-post `view_count`.
- Popular posts:
  - Home page fetches top viewed posts from `/api`.
- Likes:
  - Article actions use optimistic UI and debounced server action updates.
- Newsletter subscription:
  - Footer form uses a server action with zod validation and unique-email handling.

## Data Models (High Level)

- `Blog`: slug identity, title/category metadata, engagement fields (`view_count`, `likes`), timestamps.
- `Subscriber`: unique email and subscription status with timestamps.

## SEO and Distribution

- Route-level metadata generation for posts and categories.
- JSON-LD (`BlogPosting`) on article pages.
- Auto-generated sitemap and robots configuration.
- RSS feed generated from MDX post metadata.
- Open Graph images generated dynamically through `next/og`.

## Development and Quality Gates

- Useful scripts:
  - `npm run dev` (Turbopack)
  - `npm run tsc`
  - `npm run lint`
  - `npm run build`
- Pre-commit hook runs typecheck, lint, and build before allowing commits.
- TypeScript is configured in strict mode.

## Working Assumptions for Future Agents

- Treat MDX files as canonical editorial content.
- Treat database records as engagement/interaction layer.
- Preserve the SEO surfaces (`rss`, `sitemap`, `robots`, OG route) when changing routing or metadata.
- Keep server actions and API handlers aligned with Prisma models when evolving features.
