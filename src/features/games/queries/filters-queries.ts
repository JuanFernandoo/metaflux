import { queryOptions } from "@tanstack/react-query";
import { getGamesByCategoryAPI, getGamesByPlatformAPI, getGamesSortedAPI } from "@/features/games";
import { QUERY_KEYS } from "@/shared";

export const gamesByCategoryQueryOptions = (category: string) =>
    queryOptions({
        queryKey: QUERY_KEYS.gamesByCategory(category),
        queryFn: () => getGamesByCategoryAPI(category),
        staleTime: 1000 * 60 * 10,
    })

export const gamesByPlatformQueryOptions = (platform: string) =>
    queryOptions({
        queryKey: QUERY_KEYS.gamesByPlatform(platform),
        queryFn: () => getGamesByPlatformAPI(platform),
        staleTime: 1000 * 60 * 10,
    })

export const gamesSortedQueryOptions = (sort: string) =>
    queryOptions({
        queryKey: QUERY_KEYS.gamesSorted(sort),
        queryFn: () => getGamesSortedAPI(sort),
        staleTime: 1000 * 60 * 10,
    })