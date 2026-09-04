import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    /** Set true to keep a post out of the build. Still visible in `astro dev`. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
