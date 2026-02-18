import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const ministries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    leader: z.string().optional(),
    contact: z.string().optional(),
    image: z.string().optional(),
    icon: z.string().default('church'),
    order: z.number().default(0),
  }),
});

export const collections = { events, ministries };
