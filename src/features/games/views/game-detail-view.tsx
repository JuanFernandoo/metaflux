import { useQuery } from "@tanstack/react-query"
import { GameDetailCard, gameDetailQueryOptions } from "@/features/games"



export function GameDetailView({ id }: { id: number }) {
  const { data } = useQuery(
    gameDetailQueryOptions(id)
  )

  return <GameDetailCard game={data!} />
}