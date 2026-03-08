import z from "zod";

export const FiltersSchema = z.object({
    category: z.string().optional(),
    platform: z.string().optional(),
    sort: z.string().optional(),
    page: z.number().catch(1)
})

export type FiltersType = z.infer<typeof FiltersSchema>