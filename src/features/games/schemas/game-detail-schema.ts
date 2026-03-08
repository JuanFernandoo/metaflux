import z from "zod";

export const GameDetailSchema = z.object({
  id: z.number(),
  title: z.string(),
  thumbnail: z.string().url(),
  status: z.string(),
  short_description: z.string(),
  description: z.string(),
  game_url: z.string().url(),
  genre: z.string(),
  platform: z.string(),
  publisher: z.string(),
  developer: z.string(),
  release_date: z.string(), 
  freetogame_profile_url: z.string().url(),
  minimum_system_requirements: z.object({
    os: z.string(),
    processor: z.string(),
    memory: z.string(),
    graphics: z.string(),
    storage: z.string(),
  }).optional(), 
  screenshots: z.array(
    z.object({
      id: z.number(),
      image: z.string().url(),
    })
  ).optional(), 
});

export type GameDetailType = z.infer<typeof GameDetailSchema>;