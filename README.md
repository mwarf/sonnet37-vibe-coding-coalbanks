# Coalbanks Creative Website

This is the website for Coalbanks Creative, a video production company in Southern Alberta specializing in documentary-style storytelling.

## Recent Updates

### Portfolio Page Improvements (March 2025)
- Fixed issues with portfolio projects not displaying on the main portfolio page
- Fixed issues with category filtering not showing projects in specific categories
- Improved client-side rendering of React components for better compatibility with Astro.js
- Replaced complex animated components with simpler HTML/CSS implementations for better reliability
- Added debugging information to show the number of projects being displayed

## Technology Stack

- **Framework**: Astro.js
- **Component Library**: React
- **UI System**: shadcn/ui
- **Animation**: Framer Motion
- **Hosting**: Cloudflare Pages

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `src/components/` - React and Astro components
- `src/layouts/` - Page layouts
- `src/pages/` - Astro pages
- `src/content/` - Content collections (blog, portfolio)
- `src/lib/` - Utility functions and animations
- `src/styles/` - Global styles
- `public/` - Static assets

## Image Replacement Guide

The portfolio section currently uses placeholder images from other parts of the site. To replace these with actual project images:

1. **Project Feature Images**: Upload 16:9 aspect ratio images (recommended 1920x1080px) to `/public/images/portfolio/[project-id]--feature.jpg`

2. **Project Thumbnails**: Upload 16:9 aspect ratio images (recommended 640x360px) to `/public/images/portfolio/[project-id]--thumb.jpg`

3. **Video Thumbnails**: If using video embeds, upload preview images to `/public/images/portfolio/[project-id]--video-thumb.jpg`

4. **Gallery Images**: Upload additional project images to `/public/images/portfolio/gallery/[project-id]-[number].jpg`

5. **Update MDX Files**: Edit the corresponding project MDX file in `src/content/portfolio/` to point to the new image paths
