import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    year: z.number().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
