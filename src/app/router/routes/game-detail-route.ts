import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/app"
import { GameDetailPage, gameDetailQueryOptions } from "@/features/games";

export const GameDetailRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/games/$id",
    loader: ({ context, params }) => {
        return context.queryClient.ensureQueryData(
            gameDetailQueryOptions(Number(params.id))
        )
    },
    component: GameDetailPage
})