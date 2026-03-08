import { GameCardSkeleton } from "@/features/games"

export function GamesSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <GameCardSkeleton key={i} />
      ))}
    </div>
  )
}