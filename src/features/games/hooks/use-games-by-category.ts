import { useQuery } from "@tanstack/react-query"
import { gamesByCategoryQueryOptions } from "@/features/games"

export const useGamesByCategory = (category: string) => {
  return useQuery(gamesByCategoryQueryOptions(category))
}