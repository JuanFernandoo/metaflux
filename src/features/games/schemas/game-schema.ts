import { z } from "zod"

export const GameSchema = z.object({
  id: z.number(),
  title: z.string(),
  thumbnail: z.string(),
  short_description: z.string(),
  game_url: z.string().url(),
  genre: z.string(),
  platform: z.string(),
  publisher: z.string(),
  developer: z.string(),
  release_date: z.string(),
  freetogame_profile_url: z.string().url()
})

export type GameType = z.infer<typeof GameSchema>

export const GamesSchema = z.array(GameSchema)