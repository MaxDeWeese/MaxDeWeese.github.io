import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    images: z.array(z.string()),
    year: z.string(),
    gallery: z.array(
      z.union([
        z.object({
          type: z.literal("image"),
          src: z.string(),
          caption: z.string().optional(),
       }),
      z.object({
        type: z.literal("youtube"),
        id: z.string(),
   }),
  ])
),
  }),
});

export const collections = {
  projects,
};