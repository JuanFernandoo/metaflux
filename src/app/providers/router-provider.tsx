import { router } from "@/app/router/router";
import { RouterProvider } from "@tanstack/react-router";

export function AppRouterProvider() {
    return <RouterProvider router={router} />
}