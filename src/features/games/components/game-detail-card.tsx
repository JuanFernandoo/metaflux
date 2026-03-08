
import type { GameDetailType } from "@/features/games"
import { BackButton, Info } from "@/shared"

type GameDetailCardProps = {
  game: GameDetailType
}

export function GameDetailCard({ game }: GameDetailCardProps) {
  return (
    <div className="max-w-5xl mx-auto text-white">
      <BackButton />
      <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-xl">

        <div className="relative">
          <img src={game.thumbnail} alt={game.title} className="w-full h-[420px] object-cover" />

          <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded-md text-sm">
            {game.genre}
          </div>
        </div>
        <div className="p-8 space-y-6">
          <h1 className="text-4xl font-bold">{game.title}</h1>
          <p className="text-zinc-300 leading-relaxed max-w-full">{game.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 text-sm">
            <Info label="Genre" value={game.genre} />
            <Info label="Platform" value={game.platform} />
            <Info label="Publisher" value={game.publisher} />
            <Info label="Developer" value={game.developer} />
            <Info label="Release Date" value={game.release_date} />
          </div>
          <div className="pt-6">
            <a href={game.game_url} target="_blank"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >Play Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}