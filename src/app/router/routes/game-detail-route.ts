import { createRoute, notFound } from "@tanstack/react-router";
import { rootRoute } from "@/app"
import { GameDetailPage, gameDetailQueryOptions } from "@/features/games";

export const GameDetailRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/games/$id",
    loader: async ({ context, params }) => {
        try {
            return await context.queryClient.ensureQueryData(
                gameDetailQueryOptions(Number(params.id))
            )
        } catch (error) {
            throw notFound()
        }
    },
    component: GameDetailPage
})