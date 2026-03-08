import { useParams } from "@tanstack/react-router"
import { GameDetailView } from "@/features/games";

export function GameDetailPage() {
  const { id } = useParams({ from: "/games/$id" })

  return (
    <div className="container mx-auto px-6 py-10">
      <GameDetailView id={Number(id)} />
    </div>
  )
}