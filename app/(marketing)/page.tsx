import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import { cn } from "@/lib/utils";

const NotoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-jp",
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          NotoSansJp.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full">
          <Medal className="h-6 w-6 mr-2" />
          No 1 タスク管理ツール
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify で、チームを効率化
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          NotoSansJp.className
        )}
      >
        スムーズなコラボレーション、効率的なプロジェクト管理 -
        Taskifyはあなたの生産性を最大化します。
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Taskifyを無料で始める</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
