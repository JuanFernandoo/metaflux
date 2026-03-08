import { httpClient } from "../../../services/http/client";
import { GameDetailSchema, GamesSchema, type FiltersType } from "@/features/games"

export const getGamesAPI = async (filters?: FiltersType) => {
    const params: Record<string, string> = {}

    if (filters?.category) {
        params.category = filters.category
    }

    if (filters?.platform) {
        params.platform = filters.platform
    }

    if (filters?.sort) {
        params["sort-by"] = filters.sort
    }

    const { data } = await httpClient.get("/games", {params})
    return GamesSchema.parse(data)
}

export const getGameDetailAPI = async (id: number) => {
    const { data } = await httpClient.get(`/game?id=${id}`)

    return GameDetailSchema.parse(data)
}