import { clerkMiddleware, createRouteMatcher, redirectToSignIn } from "@clerk/nextjs/server";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

// 認証で制御したいページを定義する
const isProtectedRoute = createRouteMatcher([
  "/select-org(.*)",
  "/organization(.*)",
]);

// This Middleware does not protect any routes by default.
// See https://clerk.com/docs/references/nextjs/clerk-middleware for more information about configuring your Middleware
export default clerkMiddleware((auth, req) => {
  // ログイン中かつ閲覧中ページが公開ページだったら、組織選択or組織ページにリダイレクトさせる
  if (auth().userId && !isProtectedRoute(req)) {
    // 組織選択ページ
    let path = "/select-org";

    // 組織があれば組織IDにアクセスさせる
    if (auth().orgId) {
      path = `/organization/${auth().orgId}`;
    }

    const orgSelection = new URL(path, req.url);
    return NextResponse.redirect(orgSelection);
  }

  // ログイン前かつ、保護ページにアクセスしようとしていたら
  if (!auth().userId && isProtectedRoute(req)) {
    return auth().redirectToSignIn({ returnBackUrl: req.url });
  }

  // ログイン中かつ組織を選択していないかつ、組織選択ページにもいない場合は、強制的に組織選択させる
  if (auth().userId && !auth().orgId && req.nextUrl.pathname !== "/select-org") {
    const orgSelection = new URL("/select-org", req.url);
    return NextResponse.redirect(orgSelection);
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
