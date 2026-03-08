import type { FiltersType } from "@/features/games";

export const QUERY_KEYS = {
  games: (filters?: FiltersType) => ["games", filters],
  game: (id: number) => ["game", id],
  gamesByCategory: (category: string) => ["games", "category", category],
  gamesByPlatform: (platform: string) => ["games", "platform", platform],
  gamesSorted: (sort: string) => ["games", "sort", sort],
}