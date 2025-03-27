interface ISiteConfig {
  name: string;
  author: string;
  description: string;
  url: string;
  lang: string;
  locale: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  handlers: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export const siteConfig: ISiteConfig = {
  name: "Luiz Carneiro Blog",
  author: "Luiz Carneiro",
  description: "Personal blog of Luiz Carneiro",
  url: "https://www.carneiro.dev",
  lang: "en",
  locale: "en_DE",
  ogImage: "https://www.carneiro.dev/og",
  links: {
    github: "https://www.github.com/carneirodotdev",
    linkedin: "https://www.linkedin.com/in/carneirodotdev/",
    twitter: "https://x.com/carneiroDotDev",
  },
  handlers: {
    github: "@carneiroDotDev",
    linkedin: "@carneirodotdev",
    twitter: "@carneiroDotDev",
  },
};

export const siteKeywords = [
  "blog",
  "personal",
  "development",
  "programming",
  "tech",
  "web",
  "software",
  "engineering",
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "TailwindCSS",
  "Vercel",
  "Server Components",
  "Shadcnui",
  "Radix UI",
  "Geist UI",
  "Prisma",
  "PostgreSQL",
  "GraphQL",
  "Apollo",
];

export const siteAuthors = [
  {
    name: siteConfig.author,
    url: siteConfig.url,
  },
];
