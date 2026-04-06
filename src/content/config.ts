import { defineCollection, z } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
});

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  category: z.string().default("Data Platform"),
  status: z.string().default("in-progress"),
  challenge: z.string(),
  architecture: z.string(),
  scale: z.string(),
  outcome: z.string(),
  tags: z.array(z.string()).default([]),
  stack: z.array(z.string()).default([]),
  lessons: z.array(z.string()).default([]),
  link: z.string().url().optional(),
  repo: z.string().url().optional(),
  diagram: z.string().optional(),
});

const certificationSchema = z.object({
  title: z.string(),
  issuer: z.string(),
  description: z.string(),
  date: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  status: z.string().default("planned"),
  link: z.string().url().optional(),
  tags: z.array(z.string()).default([]),
});

export const collections = {
  posts: defineCollection({ type: "content", schema: postSchema }),
  projects: defineCollection({ type: "content", schema: projectSchema }),
  certifications: defineCollection({
    type: "content",
    schema: certificationSchema,
  }),
};
