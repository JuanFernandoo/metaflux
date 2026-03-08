import { createRootRouteWithContext, createRouter, notFound } from "@tanstack/react-router"
import { queryClient } from "@/shared/query"
import type { QueryClient } from "@tanstack/react-query"
import { GameDetailRoute, GamesHomeRoute, NotFoundRoute } from "./routes"
import { MainLayout } from "../layouts"
import { NotFound } from "@/shared"

export type RouterContext = {
  queryClient: QueryClient
}

export const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: MainLayout,
  notFoundComponent: NotFound,
  errorComponent: notFound
})
const routeTree = rootRoute.addChildren([
  GamesHomeRoute,
  GameDetailRoute,
  NotFoundRoute
])

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  basepath:"/metaflux"
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}