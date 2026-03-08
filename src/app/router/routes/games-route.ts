import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/app"
import { GamesView, FiltersSchema } from "@/features/games";

export const GamesHomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  validateSearch: FiltersSchema ,
  component: GamesView,
});