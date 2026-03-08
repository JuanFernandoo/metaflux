import { useQuery } from "@tanstack/react-query"
import { type FiltersType, gamesQueryOptions } from "@/features/games"


export const useGames = (filters?: FiltersType) => {
  return useQuery(gamesQueryOptions(filters))
}