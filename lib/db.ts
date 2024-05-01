import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// PrismaClient のインスタンスをアプリケーション全体で唯一にする
// インンスタンスの再作成を防ぐ
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
