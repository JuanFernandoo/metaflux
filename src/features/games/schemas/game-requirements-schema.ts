import z from "zod"
import { GameSchema } from "@/features/games"

export const MinimumSystemRequirementsSchema = z.object({
  os: z.string(),
  processor: z.string(),
  memory: z.string(),
  graphics: z.string(),
  storage: z.string()
})

export const ScreenshotSchema = z.object({
  id: z.number(),
  image: z.string().url()
})

export const GameRequirementsDetailSchema = GameSchema.extend({
  description: z.string(),
  minimum_system_requirements: MinimumSystemRequirementsSchema.optional(),
  screenshots: z.array(ScreenshotSchema)
})

export type GameRequirementsType = z.infer<typeof GameRequirementsDetailSchema>