import { cn } from "@/lib";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-zinc-800",
        "before:absolute before:inset-0",
        "before:animate-[shimmer_1.5s_infinite]",
        "before:bg-gradient-to-r before:from-transparent before:via-zinc-700/40 before:to-transparent",
        className
      )}
      {...props}
    />
  )
}