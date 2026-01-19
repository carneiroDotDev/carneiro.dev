"use server";

import { db } from "@/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const FormSchema = z.object({
  id: z.number(),
  email: z.string().min(5, { message: "Email is required" }),
  isSubscribed: z.boolean(),
});

const CreateSubscriber = FormSchema.omit({ id: true, isSubscribed: true });

interface FormState {
  errors?: { email?: string[] };
  message?: string | null;
}

export async function createSubscriber(
  prevState: FormState,
  formData: FormData
) {
  const validatedField = CreateSubscriber.safeParse({
    email: formData.get("email") as string,
  });

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: "Gimme an email!",
    };
  }

  const { email } = validatedField.data;

  try {
    await db.subscriber.create({ data: { email } });
    revalidatePath("/");
    return { message: "You have been subscribed!" };
  } catch (error) {
    if (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return { message: "You are already subscribed!" };
        }
      }
    }
    return { message: "DB error: Failed to create subscriber." };
  }
}

export async function incrementLike(slug: string, category: string, amount: number = 1) {
  try {
    await db.blog.upsert({
      where: { slug },
      update: { likes: { increment: amount } },
      create: {
        slug,
        title: slug, 
        category, 
        content: "",
        likes: amount,
      },
    });
    revalidatePath(`/blog/${category}/${slug}`);
  } catch (error) {
    console.error("Failed to increment like:", error);
  }
}
