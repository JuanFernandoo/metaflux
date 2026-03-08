import { useSearch } from "@tanstack/react-router"
import { GamesFilter, GamesListView } from "@/features/games"

export function GamesView() {
  const search = useSearch({ from: "/" })

  return (
    <div className="p-8">
      <GamesFilter />
      <GamesListView filters={search} />

    </div>
  )
}