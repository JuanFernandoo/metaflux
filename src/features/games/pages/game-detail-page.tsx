import { notFound, useParams } from "@tanstack/react-router"
import { GameDetailView } from "@/features/games";

export function GameDetailPage() {
  const { id } = useParams({ from: "/games/$id" })

  const gameId = Number(id)

  if (Number.isNaN(gameId)) {
    throw notFound()
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <GameDetailView id={gameId} />
    </div>
  )
}