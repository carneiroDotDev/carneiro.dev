import { categories } from "@/lib/dataPlaceholder";
import { Button } from "../ui/button";
import Link from "next/link";

export default function TopCategories() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant="secondary"
          asChild
          className="hover:scale-110 transition-all"
        >
          <Link href={`/blog/${category}`}>{category}</Link>
        </Button>
      ))}
    </div>
  );
}
