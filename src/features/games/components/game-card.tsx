import { Link } from "@tanstack/react-router"
import { Monitor, Globe } from "lucide-react"
import type { GameType } from "@/features/games"

interface GameCardProps {
  game: GameType
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link
      to="/games/$id"
      params={{ id: game.id.toString() }}
      preload="intent"
      className="group relative block rounded-xl overflow-hidden border border-zinc-800 hover:border-indigo-500 transition"
    >
      <div className="relative h-48 overflow-hidden">

        <img
          src={game.thumbnail}
          alt={game.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

        <div className="absolute top-3 left-3 flex gap-2 text-xs">

          <span className="bg-indigo-600 px-2 py-1 rounded-md">
            {game.genre}
          </span>

          <span className="bg-zinc-800 px-2 py-1 rounded-md flex items-center gap-1">
            {game.platform.includes("PC")
              ? <Monitor size={12} />
              : <Globe size={12} />
            }
            {game.platform}
          </span>

        </div>

      </div>

      <div className="p-4 space-y-2">

        <h3 className="font-semibold text-white line-clamp-1 text-lg">
          {game.title}
        </h3>

        <p className="text-sm text-zinc-400 line-clamp-2">
          {game.short_description}
        </p>

        <div className="flex justify-between items-center text-xs text-zinc-500 pt-2">

          <span>
            {game.release_date}
          </span>

          <span className="opacity-0 group-hover:opacity-100 transition text-indigo-400 font-medium">
            View →
          </span>

        </div>

      </div>
    </Link>
  )
}