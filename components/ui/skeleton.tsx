import { cn } from "@/lib/utils";
import React from "react";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-90/10 dark:bg-slate-50/10",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
