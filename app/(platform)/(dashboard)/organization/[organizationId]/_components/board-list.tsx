import { FormPopover } from "@/components/form/form-popover";
import { Hint } from "@/components/hint";
import { User2, HelpCircle } from "lucide-react";

export const BoardList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-6 w-6 mr-2" />
        ボード一覧
      </div>
      <div className="grid grid-cols2 sm:grid-cols3 lg:grid-cols-4 gap-4">
        <FormPopover sideOffset={10} side="right">
          <div
            role="button"
            className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
          >
            <p className="text-sm">ボードを作成</p>
            <span className="text-xs">残り5個</span>
            <Hint
              sideOffset={40}
              description={`
          フリーのワークスペースの場合、オープンボードを5個まで作成できます。上限を開放するには、アップグレードしてください。
          `}
            >
              <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]" />
            </Hint>
          </div>
        </FormPopover>
      </div>
    </div>
  );
};
