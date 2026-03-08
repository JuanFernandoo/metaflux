import { useQuery } from "@tanstack/react-query"
import { gamesSortedQueryOptions } from "@/features/games"

export const useGamesSorted= (sort: string) => {
  return useQuery(gamesSortedQueryOptions(sort))
}