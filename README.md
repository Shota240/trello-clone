## Trello風アプリ Takify
Next.jsのフルスタックアプリの開発練習として、カンバン式タスク管理アプリケーションを開発します。  
Special thanks to Mr. [@AntonioErdeljac](https://github.com/AntonioErdeljac)

### 経緯
Next.jsのアプリケーション開発計画をたてていて、Next.jsひいてはTypescriptやクライアント/サーバー連携の知見が足りないため、まず一度フルスタックアプリケーションの開発経験を積みたかった。

## 使用技術
### フロントエンド
- Next.js14
- TypeScript
- Tailwind CSS
- パッケージ（編集中）
  - Radix-UI
  - shadcn-ui
  - lucide-react
### バックエンド
- Next.js14
- TypeScript
- サーバー
  - Vercel
- DB
  - Supabase（PostgreSQL）
### ミドルウェア
- ユーザー認証
  - Clerk（~~Supabaseに置き換えたい~~ 後戻りできなそうなので劣後or次回開発時に採用したい）
- 決済系
  - Stripe
- DB操作
  - Prisma
