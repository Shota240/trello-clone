import { z } from "zod";

export const CreateBoard = z.object({
  title: z.string({
    required_error: "タイトルは必須項目です",
    invalid_type_error: "タイトルは必須項目です",
  }).min(3, {
    message: "タイトルが短すぎます。"
  }),
  image: z.string({
    required_error: "画像は必須項目です",
    invalid_type_error: "画像は必須項目です",
  }),
});