'use client';

import { buttonVariants } from "./ui/button"
import { Icons } from "./icons"
import { cn } from "../../../old/lib/utils";

export default function GoBackButton() {
  return (
    <button
      type="button"
      onClick={()=> {window.history.go(-1)}}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "absolute left-[-200px] top-14 hidden xl:inline-flex"
      )}
    >
      <Icons.chevronLeft className="mr-2 h-4 w-4" />
      Go back
    </button>
  )
}
