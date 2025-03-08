import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkUnwrapImages from 'remark-unwrap-images';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), 
    tailwind({
      // Configure tailwind to use our custom config
      config: { path: './tailwind.config.cjs' },
    }),
    mdx({
      // Apply remark and rehype plugins
      remarkPlugins: [remarkUnwrapImages],
      rehypePlugins: [
        [rehypeAutolinkHeadings, { behavior: 'wrap' }]
      ],
      // Use shiki for syntax highlighting
      shikiConfig: {
        theme: 'github-dark',
        wrap: true
      },
      // Extend default markdown config
      extendMarkdownConfig: true,
    })
  ],
  // Enable SSR for better SEO and performance
  output: 'hybrid',
  // Configure site URL for production
  site: 'https://coalbanks.com',
});
