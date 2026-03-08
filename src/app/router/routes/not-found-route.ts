import { createRoute, notFound } from "@tanstack/react-router";
import { rootRoute } from "@/app"

export const NotFoundRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "*",
    component: notFound,
});