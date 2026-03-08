import { queryOptions } from "@tanstack/react-query"
import { type FiltersType, getGameDetailAPI, getGamesAPI } from "@/features/games"
import { QUERY_KEYS } from "@/shared"

export const gamesQueryOptions = (filters?: FiltersType) =>
  queryOptions({
    queryKey: QUERY_KEYS.games(filters),
    queryFn: () => getGamesAPI(filters),
    staleTime: 1000 * 60 * 10,
  })

export const gameDetailQueryOptions = (id: number) =>
  queryOptions({
    queryKey: QUERY_KEYS.game(id),
    queryFn: () => getGameDetailAPI(id),
    staleTime: 1000 * 60 * 10,
  })