import { Skeleton } from "@/shared";

export function GameCardSkeleton() {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">

            <Skeleton className="w-full h-40" />

            <div className="p-3 space-y-3">

                <Skeleton className="h-5 w-3/4" />

                <div className="flex flex-col gap-2">
                    <Skeleton className="h-10 w-3/4" />
                    <Skeleton className="h-4 w-12 rounded-md" />
                </div>
            </div>
        </div>
    )
}