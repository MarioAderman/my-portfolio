# Development Guide

Personal development reference for the Mario Aderman Portfolio.

## Quick Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production
npm run start    # Test production build
npm run lint     # Check code quality
```

## Tech Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5**
- **Tailwind CSS 4** (with dark mode)
- **shadcn/ui** patterns (Radix UI primitives)
- **Lucide React** (icons)
- **Framer Motion** (animations)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home (single-page sections)
│   ├── globals.css          # Global styles
│   └── api/contact/         # API routes
├── components/
│   ├── Header.tsx           # Navigation
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── ThemeToggle.tsx      # Dark mode toggle
│   └── ui/                  # Reusable components (Button, etc.)
└── lib/
    └── utils.ts             # cn() utility
```

## Component Patterns

### shadcn/ui Style Component

```typescript
import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined"
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg",
          variant === "default" && "bg-white dark:bg-zinc-900",
          variant === "outlined" && "border border-zinc-200 dark:border-zinc-800",
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export { Card }
```

### Client vs Server Components

**Server Component** (default):
- No `'use client'` directive
- No hooks, no browser APIs
- Better for SEO

**Client Component**:
```typescript
'use client'

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

Use `'use client'` when you need:
- `useState`, `useEffect`, hooks
- Event handlers (`onClick`, `onChange`)
- Browser APIs (`localStorage`, `window`)

## Color System (WCAG AA)

Always pair light/dark colors for accessibility:

```typescript
// Text
"text-zinc-900 dark:text-zinc-100"       // Headings
"text-zinc-600 dark:text-zinc-400"       // Body text
"text-blue-700 dark:text-blue-400"       // Links

// Backgrounds
"bg-white dark:bg-zinc-900"              // Primary
"bg-zinc-50 dark:bg-zinc-800"            // Cards/sections

// Borders
"border-zinc-200 dark:border-zinc-800"
```

## Dark Mode

How it works:
1. `ThemeToggle.tsx` component
2. Stores preference in `localStorage.theme`
3. Adds `dark` class to `<html>` element
4. Tailwind `dark:` variants apply automatically

**Rule**: Every color needs a `dark:` variant.

```typescript
// ✅ Good
<p className="text-zinc-600 dark:text-zinc-400">

// ❌ Bad (missing dark mode)
<p className="text-zinc-600">
```

## The cn() Utility

Combines class names with `clsx` + `tailwind-merge`:

```typescript
import { cn } from "@/lib/utils"

// Conditional classes
<div className={cn(
  "base-class",
  isActive && "active-class",
  error && "error-class"
)} />

// Tailwind-merge handles conflicts
<div className={cn("p-4", "p-8")} />  // p-8 wins
```

## Responsive Design

Mobile-first breakpoints:

```typescript
<div className="w-full md:w-1/2 lg:w-1/3">
```

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Common Tasks

### Add a New Component

```typescript
// src/components/NewComponent.tsx
export interface NewComponentProps {
  title: string
}

export function NewComponent({ title }: NewComponentProps) {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <h2 className="text-zinc-900 dark:text-zinc-100">{title}</h2>
    </div>
  )
}

// Import in page.tsx
import { NewComponent } from '@/components/NewComponent'
```

### Add a New Section

```typescript
// src/components/NewSection.tsx
export function NewSection() {
  return (
    <section id="new-section" className="min-h-screen py-20">
      {/* Content */}
    </section>
  )
}
```

### Update Colors

1. Check `.claude/CLAUDE.md` for approved palette
2. Use zinc/blue colors only
3. Always add `dark:` variant
4. Test with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Build & Deploy

### Production Build

```bash
npm run build         # Build
npm run start         # Test locally
```

Check before deploying:
- Build succeeds
- Lint passes
- No console errors
- Dark mode works

### Vercel Deployment

Push to GitHub → Auto-deploys to Vercel

Manual deploy:
```bash
npm i -g vercel
vercel --prod
```

## Troubleshooting

### Module Not Found
```bash
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript Errors
```bash
npx tsc --noEmit  # Check types
```

### Tailwind Not Working
- Restart dev server
- Check `tailwind.config.ts` paths
- Verify no typos in class names

### Dark Mode Issues
```bash
# Check localStorage
localStorage.getItem('theme')

# Verify <html> has 'dark' class
```

### Performance
```bash
npm run build  # Check bundle size

# Analyze (optional)
npm install --save-dev @next/bundle-analyzer
```

## Claude Code

### Slash Commands
```bash
/dev-docs task-name       # Create dev docs for complex tasks
/dev-docs-update          # Update before context reset
```

### Agents
```bash
@documentation-architect  # Documentation
@code-refactor-master     # Refactoring
@web-research-specialist  # Research
```

### Dev Docs Pattern

For complex multi-step work:
1. Run `/dev-docs task-name`
2. Files created in `dev/active/task-name/`
3. Run `/dev-docs-update` before long breaks
4. Resume by reading the dev docs

See `dev/README.md` for details.

## Documentation

- **Architecture**: `.claude/CLAUDE.md` (component patterns, conventions)
- **Project Overview**: `README.md`
- **Dev Docs**: `dev/README.md` (task management pattern)
- **Active Work**: `dev/active/` (current tasks)

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated**: December 17, 2025
