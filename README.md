# Coalbanks Creative Website

A high-performance, visually engaging website for Coalbanks Creative, a video production company in Southern Alberta. The website showcases documentary-style video work, conveys authentic storytelling, and highlights the founder's extensive background in digital media.

## Technology Stack

- **Framework**: [Astro.js](https://astro.build/) - For the base architecture to optimize performance
- **Component Library**: [React](https://reactjs.org/) - For interactive UI components
- **UI System**: [shadcn/ui](https://ui.shadcn.com/) - For consistent, accessible design components
- **Animation**: [Framer Motion](https://www.framer.com/motion/) - For fluid, cinematic transitions
- **Hosting/Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) - For global CDN and edge performance

## Implemented Features

- **Project Setup & Configuration**
  - Complete Astro.js setup with React integration
  - shadcn/ui components with custom theming based on Coalbanks brand colors
  - Tailwind CSS configuration with custom design tokens
  - TypeScript setup with proper type definitions
  - Framer Motion animations with accessibility considerations
  - Git version control with GitHub integration

- **Core Components**
  - BaseLayout structure for consistent page layout
  - Responsive header with mobile navigation
  - Footer with site information and navigation
  - Animated UI components (buttons, cards, etc.)
  - Animation system with reduced motion support

- **Pages**
  - Home page with hero video background, featured work section, services overview, and CTA
  - About page with company story, team section, and values
  - Services page with detailed service offerings, process steps, and case studies
  - Portfolio page with project showcase and filtering
  - Contact page with form and company information
  - Privacy policy and terms of service pages
  - FAQ page with common questions and answers

- **Blog System**
  - Complete blog implementation with MDX support
  - Category and series organization
  - Table of contents for long-form content
  - Code blocks with syntax highlighting
  - Interactive demos within blog posts
  - Series banners and navigation between related posts

- **Visual Elements**
  - Lucide React icons integrated throughout the site
  - Responsive image handling
  - Video background support
  - Custom typography system
  - Consistent color scheme with deep blues and earthy tones
  - Blog post featured images and author profiles

- **Deployment**
  - Cloudflare Pages configuration with caching strategies
  - Preview deployments for branches
  - Environment variable setup

## To-Do List

- **Content Development**
  - Replace placeholder content with final copy
  - Add real client testimonials
  - Populate portfolio with actual projects
  - Create case studies for each service
  - Develop additional blog content and series

- **Functionality**
  - Implement form submission and validation for contact page
  - Add filtering functionality to portfolio page
  - Create video modal for portfolio items
  - Implement lazy loading for images and videos
  - Add blog search functionality

- **Performance Optimization**
  - Optimize image assets (compression, responsive sizes)
  - Implement video compression strategy
  - Add proper resource hints (preload, prefetch)
  - Optimize third-party script loading

- **SEO & Analytics**
  - Implement structured data (JSON-LD)
  - Add meta tags for social sharing
  - Configure analytics (Google Analytics or Plausible)
  - Create sitemap.xml and robots.txt

- **Testing & Quality Assurance**
  - Cross-browser compatibility testing
  - Mobile responsiveness testing
  - Accessibility audit (WCAG 2.1 AA compliance)
  - Performance testing (Core Web Vitals)

- **Additional Features**
  - Newsletter signup integration
  - Social media feed integration
  - Video hosting integration (Vimeo Pro or similar)
  - Blog comment system

## Project Structure

```
/
├── public/              # Static assets
│   ├── images/          # Image assets
│   │   ├── blog/        # Blog images
│   │   │   ├── authors/ # Author profile images
│   │   │   ├── posts/   # Blog post images
│   │   │   └── series/  # Blog series cover images
│   │   ├── portfolio/   # Portfolio project images
│   │   └── team/        # Team member photos
│   └── videos/          # Video assets
├── src/
│   ├── components/      # UI components
│   │   ├── blog/        # Blog-specific components
│   │   ├── ui/          # shadcn components
│   │   └── layout/      # Layout components (Header, Footer, etc.)
│   ├── content/         # Content collections
│   │   └── blog/        # Blog content (MDX)
│   │       ├── posts/   # Individual blog posts
│   │       └── series/  # Series configuration
│   ├── layouts/         # Page layouts
│   │   └── blog/        # Blog-specific layouts
│   ├── pages/           # Astro pages
│   │   └── blog/        # Blog pages and routes
│   │       ├── category/# Category pages
│   │       └── series/  # Series pages
│   ├── styles/          # Global styles
│   └── lib/             # Utility functions
│       └── animations/  # Animation helpers
├── astro.config.mjs     # Astro configuration
├── tailwind.config.cjs  # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies
└── .gitignore           # Git ignore configuration
```

## Onboarding for New Developers

### Getting Started

#### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Git

#### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/coalbanks-creative.git
   cd coalbanks-creative
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

#### Version Control

The project uses Git for version control:

- The main branch contains the production-ready code
- Create feature branches for new features or bug fixes
- Use descriptive commit messages following conventional commits format
- Push changes to the GitHub repository for collaboration and deployment

##### Large Media Files

Large media files (videos, high-resolution images) are excluded from git tracking to keep the repository size manageable:

- Video files (mp4, mov, etc.) are excluded via .gitignore
- These files should be managed separately and deployed directly to the production environment
- For local development, team members should obtain these files through alternative means (shared drive, CDN, etc.)
- Consider using Cloudflare Stream or similar services for video hosting in production

### Development Workflow

#### Component Development

- **UI Components**: All reusable UI components are located in `src/components/ui/`. These follow the shadcn/ui pattern and are built with React.
- **Layout Components**: Components like Header and Footer are in `src/components/layout/`.
- **Page Components**: Each page is an Astro component in `src/pages/`.

#### Styling

- The project uses Tailwind CSS for styling.
- Global styles are defined in `src/styles/globals.css`.
- The design system is configured in `tailwind.config.cjs`.
- Use the utility functions in `src/lib/utils.ts` for consistent styling.

#### Animation

- Framer Motion is used for animations.
- Animation variants are defined in `src/lib/animations.ts`.
- Always consider accessibility by using the `getAccessibleAnimationVariants` function.
- Animations should be subtle and enhance the user experience, not distract from it.

#### Adding New Pages

1. Create a new `.astro` file in the `src/pages/` directory.
2. Use the `BaseLayout` component for consistent page structure.
3. Add the page to the navigation in `src/components/layout/Header.tsx`.

#### Working with Images

- Place image assets in the `public/images/` directory.
- Use relative paths from the root (e.g., `/images/example.jpg`).
- Consider using responsive images for better performance.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deployment

The website is configured for deployment to Cloudflare Pages:

- The `cloudflare-pages.json` file contains the configuration.
- Commits to the `main` branch will deploy to production.
- Commits to the `dev` branch will deploy to a staging environment.
- Pull requests will create preview deployments.

### Coding Standards

- Use TypeScript for type safety.
- Follow the existing code style and patterns.
- Use meaningful component and variable names.
- Write comments for complex logic.
- Ensure all components are accessible.

### Recommended VS Code Extensions

- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## Performance Targets

- Lighthouse Performance score ≥ 90
- First Contentful Paint < 1.2s
- Largest Contentful Paint < 2.5s
- Time to Interactive < 3.5s
- Core Web Vitals compliance

## Responsive Design

The website is fully responsive with the following breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Contact

For questions or support, please contact [hello@coalbanks.com](mailto:hello@coalbanks.com).
