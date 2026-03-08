import { useQuery } from "@tanstack/react-query"
import { gameDetailQueryOptions } from "@/features/games"

export const useGameDetail = (id: number) => {
  return useQuery({
    ...gameDetailQueryOptions(id),
    enabled: !!id
  })
}