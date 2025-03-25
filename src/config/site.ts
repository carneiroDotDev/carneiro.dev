interface ISiteConfig {
  name: string;
  description: string;
  url: string;
  lang: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export const siteConfig: ISiteConfig = {
  name: "Luiz Carneiro Blog",
  description: "Personal blog of Luiz Carneiro",
  url: "https://www.carneiro.dev",
  lang: "en",
  ogImage: "https://www.carneiro.dev/og",
  links: {
    github: "https://www.github.com/carneirodotdev",
    linkedin: "https://www.linkedin.com/in/carneirodotdev/",
    twitter: "https://twitter.com/carneirodotdev",
  },
};
