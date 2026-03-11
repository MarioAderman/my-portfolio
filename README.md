# mario-aderman/portfolio

<p align="center">
  <img src="public/demo.gif" alt="Portfolio demo" width="880" />
</p>

Personal portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.

**Live**: [mario-aderman.vercel.app](https://mario-aderman.vercel.app) | [/llms.txt](https://mario-aderman.vercel.app/llms.txt)

## Stack

- **Framework**: Next.js 15 (App Router) + React 19
- **Styling**: Tailwind CSS v4 with CSS-first config, semantic design tokens
- **UI**: Radix UI primitives, Lucide icons, Framer Motion
- **i18n**: Lightweight EN/ES toggle via React Context

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Header, Footer, fonts, theme)
│   ├── page.tsx                # Single-page sections
│   ├── globals.css             # Tailwind + design tokens
│   ├── api/contact/route.ts    # Contact form endpoint
│   └── llms.txt/route.ts       # LLM-readable site info
├── components/
│   ├── Header.tsx              # Nav + language toggle
│   ├── Hero.tsx                # Landing section
│   ├── ArticleCarousel.tsx     # Featured project carousel
│   ├── About.tsx               # Background & skills
│   ├── AskPortfolio.tsx        # AI chat (A2A agent)
│   ├── Projects.tsx             # Project showcase (bento grid)
│   ├── Contact.tsx             # Contact form
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx         # Dark/light mode switch
│   ├── ThemeIcon.tsx           # Logo with dark:invert
│   └── SectionWrapper.tsx      # Reusable section container
├── i18n/
│   ├── LanguageContext.tsx      # i18n provider + hook
│   ├── en.ts                   # English translations
│   └── es.ts                   # Spanish translations
└── lib/
    └── utils.ts                # cn() helper (clsx + tailwind-merge)
```

## Design

- Dark-first theme with semantic color tokens (auto-switches via CSS vars)
- Fonts: IBM Plex Mono (headings) + IBM Plex Sans (body)
- Palette: void → snow grays + ember accent (#c9a227)

## License

[ISC](LICENSE)
