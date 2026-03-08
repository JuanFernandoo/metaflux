import type { FiltersType } from "@/features/games"

type SelectOptionType = {
    value: string
    label: string
}
export const GAME_FILTERS: {
    key: keyof FiltersType
    options: SelectOptionType[]
}[] = [
        {
            key: "category",
            options: [
                { value: "", label: "All Categories" },
                { value: "shooter", label: "Shooter" },
                { value: "mmorpg", label: "MMORPG" },
                { value: "strategy", label: "Strategy" },
                { value: "moba", label: "MOBA" },
                { value: "battle-royale", label: "Battle Royale" },
                { value: "card", label: "Card Game" },
                { value: "racing", label: "Racing" },
                { value: "sports", label: "Sports" }
            ]
        },

        {
            key: "platform",
            options: [
                { value: "", label: "All Platforms" },
                { value: "pc", label: "PC" },
                { value: "browser", label: "Browser" }
            ]
        },

        {
            key: "sort",
            options: [
                { value: "", label: "Default" },
                { value: "release-date", label: "Release Date" },
                { value: "alphabetical", label: "Alphabetical" },
                { value: "relevance", label: "Relevance" },
                { value: "popularity", label: "Popularity" }
            ]
        }
    ]