import React, { ReactElement } from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { highlight } from "sugar-high";

function Blockquote(props: { children: ReactElement[] }) {
  return (
    <blockquote
      className="bg-blue-200 dark:bg-blue-950 dark:bg-opacity-30 bg-opacity-30 p-4 rounded-md blockquote"
      {...props}
    />
  );
}

function Code({
  children,
  ...props
}: {
  children: string;
  [key: string]: string;
}) {
  const codeHTML = highlight(children);

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function CustomLink(props: {
  href: string;
  children: string;
  [key: string]: string;
}) {
  const href = props.href;

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

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: {
  alt: string;
  src: string;
  props: { [key: string]: string };
}) {
  return (
    <Image {...props} src={props.src} alt={props.alt} className="rounded-lg" />
  );
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with and
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    const slug = slugify(children);

    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
}

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  const headers = data.headers.map((header: string, index: number) => (
    <th key={index}>{header}</th>
  ));

  const rows = data.rows.map((cell: string[], cellIndex: number) => (
    <td key={cellIndex}>{cell}</td>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
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
  code: Code,
  blockquote: Blockquote,
  Table,
};

export default function RenderMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
