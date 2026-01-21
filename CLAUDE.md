# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` - Start development server (http://localhost:3000)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Architecture

This is a Next.js 16 application using:

- **App Router** with source files in `src/app/`
- **React 19** with Server Components by default
- **TypeScript** in strict mode
- **Tailwind CSS v4** (via `@import "tailwindcss"` in globals.css)
- **Node.js 24.x** (see `.nvmrc`)
- **pnpm 10.x** as package manager

Path alias `@/*` maps to `./src/*`.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & ThemeProvider
│   ├── page.tsx            # Home page (client component)
│   └── globals.css         # Tailwind theme & CSS variables
├── components/
│   ├── navbar.tsx          # Header with theme toggle
│   ├── footer.tsx          # Footer with social links
│   ├── theme-provider.tsx  # next-themes wrapper
│   ├── theme-toggle.tsx    # Dark/light toggle button
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── sections/           # Page sections
│       ├── hero.tsx
│       ├── services.tsx
│       └── faq.tsx
└── lib/
    └── utils.ts            # cn() helper for class merging
```

## UI Components

Uses **shadcn/ui** with Radix UI primitives. Key patterns:

- **Button**: Uses CVA (class-variance-authority) for variants (`default`, `secondary`, `outline`, `ghost`, `link`, `destructive`) and sizes (`sm`, `default`, `lg`, `xl`, `icon`)
- **Card**: Compound component pattern with `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- **Accordion**: Radix UI accordion with custom animations

Always use the `cn()` utility from `@/lib/utils` for merging Tailwind classes:

```tsx
import { cn } from "@/lib/utils";
cn("base-class", conditional && "conditional-class", className)
```

## Styling

### Tailwind CSS v4

- Uses new `@theme inline` syntax in globals.css
- OKLCH color space for all color variables
- Custom CSS variables for theming (light/dark)

### Design Tokens

- **Border radius**: `--radius: 0.625rem`
- **Fonts**: `--font-inter`, `--font-geist-sans`, `--font-geist-mono`
- **Colors**: Defined as CSS variables (`--background`, `--foreground`, `--primary`, `--muted`, etc.)

### Theme System

- Uses `next-themes` with `ThemeProvider`
- Default theme: dark
- Access via `useTheme()` hook

## Code Style (ESLint)

The project uses strict ESLint rules:

- **Imports**: Must be sorted alphabetically, grouped by type (external, internal)
- **Components**: Use arrow function syntax
- **Props**: Sorted with shorthand first, callbacks last
- No empty lines between import groups within the same category

Example of correct import order:
```tsx
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## Key Patterns

### Client vs Server Components

- Layout is a Server Component
- Page and interactive components use `"use client"`
- Minimize client components when possible

### Passing Refs to Components

For internal components, pass refs as named props rather than using `forwardRef`:

```tsx
interface Props {
  sectionRef: RefObject<HTMLElement | null>;
}

export const Component = ({ sectionRef }: Props) => {
  return <section ref={sectionRef} />;
};
```

Reserve `forwardRef` for reusable library components where consumers expect the standard `ref` prop.

### External Links

Cal.com booking link: `https://app.cal.com/vftiago/lightradius`
