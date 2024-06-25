"use client";

import { List } from "@prisma/client";
import { MoreHorizontal, X } from "lucide-react";

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAction } from "@/hooks/use-action";
import { deleteList } from "@/actions/delete-list";
import { Button } from "@/components/ui/button";
import { FormSubmit } from "@/components/form/form-submit";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { ElementRef, useRef } from "react";
import { copyList } from "@/actions/copy-list";

interface ListOptionProps {
  data: List;
  onAddCard: () => void;
}

export const ListOptions = ({ data, onAddCard }: ListOptionProps) => {
  const closeRef = useRef<ElementRef<"button">>(null);

  const { execute: executeDelete } = useAction(deleteList, {
    onSuccess: (data) => {
      toast.success(`リスト"${data.title}"を削除しました`);
      closeRef.current?.click();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const { execute: executeCopy } = useAction(copyList, {
    onSuccess: (data) => {
      toast.success(`リスト"${data.title}"をコピーしました`);
      closeRef.current?.click();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onDelete = (formData: FormData) => {
    const id = formData.get("id") as string;
    const boardId = formData.get("boardId") as string;

    executeDelete({ id, boardId });
  };

  const onCopy = (formData: FormData) => {
    const id = formData.get("id") as string;
    const boardId = formData.get("boardId") as string;

    executeCopy({ id, boardId });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 pt-3 pb-3" side="bottom">
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          リストアクション
        </div>
        <PopoverClose ref={closeRef} asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <Button
          onClick={onAddCard}
          className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
          variant="ghost"
        >
          カードを追加...
        </Button>
        <form action={onCopy}>
          <input hidden name="id" id="id" value={data.id} />
          <input hidden name="boardId" id="boardId" value={data.boardId} />
          <FormSubmit
            className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
            variant="ghost"
          >
            このリストをコピー...
          </FormSubmit>
        </form>
        <Separator />
        <form action={onDelete}>
          <input hidden name="id" id="id" value={data.id} />
          <input hidden name="boardId" id="boardId" value={data.boardId} />
          <FormSubmit
            className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
            variant="ghost"
          >
            このリストを削除
          </FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};
