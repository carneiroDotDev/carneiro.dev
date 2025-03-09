import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function RenderCode(props: { children: string; className: string }) {
  const language = props.className.replace("language-", "");
  return (
    <pre className="rounded-lg p-4 bg-neutral-100 dark:bg-neutral-800 overflow-x-auto">
      <code className={`language-${language}`}>{props.children}</code>
    </pre>
  );
}

function CustomLink(props: { href: string; children: React.ReactNode }) {
  const { href, children } = props;

  if (href.startsWith("/")) {
    return (
      <Link {...props} href={href}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="text-blue-500 hover:underline"
    />
  );
}
function RoundedImage(props: { [key: string]: string }) {
  const { src, alt } = props;
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      className="rounded-lg"
      {...props}
    />
  );
}

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces w -
    .replace(/&/g, "-and-") // Replace & w 'and'
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - w single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text;
}

function createHeading(level: number) {
  const Heading = ({ children }: any) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement(
          "a",
          { href: `#${slug}`, key: `link-${slug}`, className: "anchor" },
          children
        ),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: RenderCode,
};

export default function RenderMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
