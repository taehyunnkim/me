import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.array(z.enum(['professional', 'personal', 'open-source', 'startup', 'freelance'])),
    skills: z.array(z.string()),
    date: z.string(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
