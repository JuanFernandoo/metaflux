import { useQuery } from "@tanstack/react-query"
import { gamesByPlatformQueryOptions } from "@/features/games"

export const useGamesByPlatform= (platform: string) => {
  return useQuery(gamesByPlatformQueryOptions(platform))
}