import { defineCollection, z } from 'astro:content';

// Define the blog collection schema for MDX content
const blogCollection = defineCollection({
  type: 'content', // This is a content collection (MDX files)
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    featuredImage: z.string(),
    category: z.string(),
    
    // Optional fields
    draft: z.boolean().optional().default(false),
    featured: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional().default([]),
    authorImage: z.string().optional(),
    
    // Series-specific fields
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    seriesDescription: z.string().optional(),
    
    // Technical content fields
    codeLanguages: z.array(z.string()).optional(),
    hasInteractiveDemo: z.boolean().optional().default(false),
    demoAssets: z.array(z.string()).optional(),
    
    // Computed fields (will be populated programmatically)
    readingTime: z.number().optional(),
  }),
});

// Define the series collection schema for JSON data
const seriesCollection = defineCollection({
  type: 'data', // This is a data collection (JSON files)
  schema: z.object({
    series: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        posts: z.array(z.string()),
        featuredImage: z.string(),
      })
    ),
  }),
});

// Define the portfolio collection schema for MDX content
const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),
    client: z.string(),
    year: z.string(),
    category: z.string(),
    featuredImage: z.string(),
    thumbnailImage: z.string(),
    
    // Optional fields
    featured: z.boolean().optional().default(false),
    videoUrl: z.string().optional(),
    videoThumbnail: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    technologies: z.array(z.string()).optional().default([]),
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string(),
    }).optional(),
    gallery: z.array(z.string()).optional().default([]),
    relatedProjects: z.array(z.string()).optional().default([]),
  }),
});

// Define the portfolio categories collection schema for JSON data
const portfolioCategoriesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    categories: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string().optional(),
      })
    ),
  }),
});

// Export the collections
export const collections = {
  'blog': blogCollection,
  'series': seriesCollection,
  'portfolio': portfolioCollection,
  'portfolioCategories': portfolioCategoriesCollection,
};
