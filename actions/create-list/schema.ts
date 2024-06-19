import { z } from "zod";

export const CreateList = z.object({
  title: z
    .string({
      required_error: "タイトルは必須項目です",
      invalid_type_error: "タイトルは必須項目です",
    })
    .min(1, {
      message: "タイトルが短すぎます。",
    }),
  boardId: z.string(),
});
