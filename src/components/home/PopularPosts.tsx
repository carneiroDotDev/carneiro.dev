import { popularPosts } from "@/lib/dataPlaceholder";
import { Icons } from "../icons";

function PopularPosts() {
  return (
    <ul className="overflow-auto">
      {popularPosts.map((post) => (
        <li
          key={post.title}
          className="flex items-center gap-2 cursor-pointer py-2 group"
        >
          <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
          <p>{post.title}</p>
        </li>
      ))}
    </ul>
  );
}

export default PopularPosts;
