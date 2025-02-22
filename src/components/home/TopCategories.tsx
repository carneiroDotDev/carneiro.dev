// import { categories } from "@/lib/dataPlaceholder";
import { POSTS } from "@/lib/constants";
import { Button } from "../ui/button";
import Link from "next/link";

export default function TopCategories() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {POSTS.map((post) => (
        <Button
          key={`${post.title}_categories`}
          variant="secondary"
          asChild
          className="hover:scale-110 transition-all"
        >
          <Link href={`${post.href}`}>{post.title}</Link>
        </Button>
      ))}
    </div>
  );
}
