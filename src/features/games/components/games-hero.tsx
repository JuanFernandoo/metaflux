import { Link } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import type { GameType } from "@/features/games"

type GamesHeroProps = {
  games: GameType[]
}

export function GamesHero({ games }: GamesHeroProps) {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % games.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + games.length) % games.length)
  }

  useEffect(() => {
    if (!games.length) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % games.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [games.length])

  if (!games.length) return null

  const game = games[index]


  return (
    <section className="relative w-full h-[420px] md:h-[500px] rounded-xl overflow-hidden mb-10">
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-3 rounded-full"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-3 rounded-full"
      >
        →
      </button>
        <img
          src={game.thumbnail}
          alt={game.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end">

          <div className="p-8 md:p-12 max-w-xl">

            <div className="flex gap-2 mb-3">
              <span className="text-xs bg-indigo-600 px-3 py-1 rounded-full">
                {game.genre}
              </span>
              <span className="text-xs bg-zinc-700 px-3 py-1 rounded-full">
                {game.platform}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {game.title}
            </h1>

            <p className="text-zinc-300 mb-6 line-clamp-3">
              {game.short_description}
            </p>

            <div className="flex gap-4">

              <Link
                to="/games/$id"
                params={{ id: game.id.toString() }}
                className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition font-semibold"
              >
                View Game
              </Link>

              <a
                href={game.game_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-zinc-400 hover:bg-zinc-800 transition"
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
    </section>
  )
}