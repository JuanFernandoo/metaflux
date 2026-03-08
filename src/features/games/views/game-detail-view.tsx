import { useQuery } from "@tanstack/react-query"
import { notFound } from "@tanstack/react-router"
import { GameDetailCard, gameDetailQueryOptions } from "@/features/games"

export function GameDetailView({ id }: { id: number }) {
  const { data , error} = useQuery(
    gameDetailQueryOptions(id)
  )

  if (error) {
    throw notFound()
  }
  return <GameDetailCard game={data!} />
}