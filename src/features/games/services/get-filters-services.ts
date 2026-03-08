import { httpClient } from "@/services/http/client"
import { GamesSchema } from "@/features/games"

export const getGamesByCategoryAPI = async (category: string) => {
    const { data } = await httpClient.get(`/games?category=${category}`)

    return GamesSchema.parse(data)
}

export const getGamesByPlatformAPI = async (platform: string) => {
    const { data } = await httpClient.get(`/games?platform=${platform}`)

    return GamesSchema.parse(data)
}

export const getGamesSortedAPI = async (sort: string) => {
    const { data } = await httpClient.get(`/games?sort-by=${sort}`)

    return GamesSchema.parse(data)
}