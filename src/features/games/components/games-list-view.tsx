import {NotFound, Pagination } from "@/shared";
import { GamesHero, GamesList, GamesSkeleton, PAGE_SIZE, useGames, type FiltersType } from "@/features/games"

type GamesListViewProps = {
  filters: FiltersType
  showHero?: boolean
}

export function GamesListView({ filters, showHero = true }: GamesListViewProps) {

  const { data = [], isLoading, error } = useGames(filters)

  if (isLoading) {
    return <GamesSkeleton />
  }

  if (error) {
    return <NotFound />
  }

  const page = filters.page ?? 1

  const heroGames = data.slice(0, 5)
  const restGames = data.slice(5)

  const start = (page - 1) * PAGE_SIZE
  const end = start + PAGE_SIZE

  const paginatedGames = restGames.slice(start, end)

  const totalPages = Math.ceil(restGames.length / PAGE_SIZE)

  return (
    <div className="space-y-10">

      {showHero && <GamesHero games={heroGames} />}

      <GamesList games={paginatedGames} />

      <Pagination page={page} totalPages={totalPages} />

    </div>
  )
}