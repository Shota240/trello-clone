"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    title?: string[];
  },
  message?: string | null
};

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "3文字以上にしてください",
  }),
});

export async function create(prevState: State, formData: FormData) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "項目が不足しています。"
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "データベースエラー",
    };
  }

  revalidatePath("/organization/org_2fizMco8ztFacd5ZZDGxmETXq8G");
  redirect("/organization/org_2fizMco8ztFacd5ZZDGxmETXq8G");
}
