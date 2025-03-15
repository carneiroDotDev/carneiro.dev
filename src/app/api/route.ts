import { db } from "@/db";

export async function POST(req: Request) {
  const { slug, title, category } = await req.json();

  try {
    const existingPost = await db.blog.findUnique({
      where: {
        slug,
      },
    });

    if (existingPost) {
      await db.blog.update({
        where: {
          slug,
        },
        data: {
          view_count: { increment: 1 },
        },
      });
    } else {
      await db.blog.create({
        data: {
          slug,
          title,
          category,
          content: "",
        },
      });
    }
  } catch (error) {
    console.error("Error updating page view count ->", error);
    return new Response("Error updating page view count", { status: 500 });
  }

  return new Response("Page view count updated", { status: 200 });
}
