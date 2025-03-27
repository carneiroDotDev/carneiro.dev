"use client";
import { Icons } from "../icons";
import { fetcher, fetchUrl, ResponseData } from "@/lib/utils";
import useSwr from "swr";
import Link from "next/link";
import { PopularPostsSkeleton } from "../PopularPostsSkeleton";

function PopularPosts() {
  const { data, error, isLoading } = useSwr<ResponseData>(fetchUrl, fetcher);

  if (isLoading) return <PopularPostsSkeleton />;
  if (error) return <p>Error fetching popular posts</p>;

  return (
    <ul className="overflow-auto">
      {data?.map((post) => (
        <li key={post.title}>
          <Link
            className="flex items-center gap-2 cursor-pointer py-2 group"
            key={post.slug}
            href={`/blog/${post.category}/${post.slug}`}
          >
            <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PopularPosts;
