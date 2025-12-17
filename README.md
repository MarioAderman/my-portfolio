# Mario Aderman - Portfolio Website

A modern, accessible portfolio website built with Next.js 15, React 19, and Tailwind CSS v4.

## Overview

This is a personal portfolio website showcasing my work, research interests, and professional experience. The site features a responsive design with dark mode support and focuses on accessibility and performance.

**Live Site**: [View Portfolio](https://github.com/MarioAderman/my-portfolio) *(Update with deployment URL)*

## Features

- **Modern Tech Stack**: Next.js 15 with App Router, React 19, TypeScript
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Dark Mode**: System-aware theme switching with manual toggle
- **Accessible**: WCAG AA compliant color contrast, semantic HTML
- **Performance Optimized**: Lighthouse scores 95+
- **Component Library**: shadcn/ui pattern with Radix UI primitives
- **Smooth Animations**: Framer Motion for elegant transitions

## Tech Stack

### Core
- **Framework**: [Next.js 16.0.10](https://nextjs.org/) with App Router
- **React**: Version 19.0.0
- **TypeScript**: Type-safe development
- **Styling**: [Tailwind CSS 4.1.5](https://tailwindcss.com/)

### UI Components
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library
- **Framer Motion**: Animation library
- **class-variance-authority**: Type-safe variant management

### Utilities
- **clsx**: Conditional class name construction
- **tailwind-merge**: Intelligent Tailwind class merging

## Getting Started

### Prerequisites
- Node.js 20+ (LTS recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MarioAderman/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build production version
npm run start    # Start production server
npm run lint     # Run ESLint for code quality checks
```

## Project Structure

```
my-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with Header/Footer
│   │   ├── page.tsx            # Home page with all sections
│   │   ├── globals.css         # Global styles and Tailwind
│   │   └── api/
│   │       └── contact/        # Contact form API endpoint
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── Contact.tsx         # Contact form
│   │   ├── ThemeToggle.tsx     # Dark mode toggle
│   │   └── ui/                 # Reusable UI components
│   │       └── button.tsx      # Button component (shadcn/ui pattern)
│   └── lib/
│       └── utils.ts            # Utility functions (cn helper)
├── public/                     # Static assets
├── .claude/                    # Claude Code configuration
├── dev/                        # Development documentation
└── package.json
```

## Key Sections

### Hero
Welcome section with introduction and call-to-action

### About
Background, experience, and research interests

### Projects
Portfolio of work with project cards and descriptions

### Contact
Contact form with email integration

## Development

### Component Architecture

Components follow the **shadcn/ui pattern**:
- TypeScript with explicit interfaces
- Radix UI primitives for accessibility
- Tailwind CSS for styling with `cn()` utility
- Variants managed with class-variance-authority
- Client components (`'use client'`) for interactivity

### Dark Mode

Dark mode uses **class-based approach**:
- Toggle in ThemeToggle.tsx
- Persisted to localStorage
- `dark` class on `<html>` element
- Pattern: `className="light-value dark:dark-value"`

### Color System

All colors meet **WCAG AA standards** (4.5:1 contrast minimum):
- **Primary text**: `text-zinc-900 dark:text-zinc-100`
- **Secondary text**: `text-zinc-600 dark:text-zinc-400`
- **Links**: `text-blue-700 dark:text-blue-400`
- **Backgrounds**: `bg-white dark:bg-zinc-900`
- **Borders**: `border-zinc-200 dark:border-zinc-800`

See `.claude/CLAUDE.md` for complete guidelines.

### Styling Utilities

**cn() utility** (from `lib/utils.ts`):
```typescript
import { cn } from "@/lib/utils"

<div className={cn("base-class", condition && "conditional-class")} />
```

Combines `clsx` and `tailwind-merge` for intelligent class merging.

## Accessibility

This portfolio prioritizes accessibility:
- ✓ WCAG AA compliant color contrast (4.5:1 minimum)
- ✓ Semantic HTML structure
- ✓ Keyboard navigation support
- ✓ Screen reader friendly
- ✓ Focus indicators on interactive elements
- ✓ Responsive text sizing

Lighthouse Accessibility Score: **95+**

## Performance

Optimized for speed and efficiency:
- Next.js App Router with React Server Components
- Automatic code splitting
- Optimized font loading (Geist font family)
- Image optimization (when images added)
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

No Internet Explorer support.

## Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

See `dev/` directory for development documentation and active tasks.

## Deployment

### Vercel (Recommended)

The easiest deployment option:

1. Push to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and deploys

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other platforms.

### Build for Production

```bash
npm run build    # Creates optimized production build
npm run start    # Starts production server
```

## Environment Variables

Currently no environment variables required. If adding features like email integration or analytics, create `.env.local`:

```bash
# Example
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Documentation

- **`.claude/CLAUDE.md`**: Architecture and Claude Code guidelines
- **`dev/README.md`**: Development documentation pattern
- **`dev/active/`**: Current development tasks and context
- **Package docs**: See individual dependency documentation

## License

This project is open source and available under the [ISC License](LICENSE).

## Contact

**Mario Aderman**

- GitHub: [@MarioAderman](https://github.com/MarioAderman)
- Portfolio: *(Add live URL)*
- Email: *(Add email)*

## Acknowledgments

- Built with [Next.js](https://nextjs.org/) by Vercel
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Note**: This portfolio is actively maintained. For development guidelines and current tasks, see the `.claude/` and `dev/` directories.
