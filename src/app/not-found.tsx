import Link from "next/link";
import { baseUrl } from "./sitemap";

export function generateMetadata() {
  const ogImage = `${baseUrl}/og?title=${encodeURIComponent(
    "404 Page not found - Luiz Carneiro's Blog"
  )}`;

  const title = "404 Page not found - Luiz Carneiro Blog";
  const description = "404 Page not found - Luiz Carneiro's Blog";
  const publishedTime = new Date().toISOString();

  return {
    title,
    description,
    type: "article",
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/404`,
      images: [{ url: ogImage }],
    },
    twitter: {
      cardType: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    image: ogImage,
  };
}

export default function NotFound() {
  return (
    <section className="grid place-content-center h-screen">
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        {`🔥 CALM DOWN EVERYONE! It's a 404 🧑🏾‍🚒`}
      </h1>
      <p className="mb-4 text-center">You should not be here son!</p>
      <Link className="text-center underline" href={"/"}>
        {`Take me home!`}
      </Link>
    </section>
  );
}
