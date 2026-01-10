import { db } from "@/db";

export async function GET() {
  try {
    const data = await db.blog.findMany({
      take: 5,
      select: {
        title: true,
        category: true,
        slug: true,
        view_count: true,
      },
      orderBy: [{ view_count: "desc" }],
    });
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching popular posts ->", error);
    return new Response("Error fetching popular posts", { status: 500 });
  }
}

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
