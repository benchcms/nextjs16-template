# Agent Instructions

A minimal Next.js template ready for deployment.

## Overview

### Tech Stack

- **Next.js 16** with App Router
- **Tailwind CSS 4** for styling
- **TypeScript** for type safety
- **Zod** for validation
- **Resend** for email

### Package Manager

> **⚠️ IMPORTANT: Always use `pnpm` for all package operations.**
>
> This project uses **pnpm** exclusively. Do NOT use `npm` or `yarn`.

## Getting Started

```bash
pnpm install   # Install dependencies
pnpm dev       # Start development server
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

---

## Development Guidelines

### Project Structure

All application code lives inside `src/`:

- **`src/app/`** — Pages and layouts (App Router convention)
- **`src/components/`** — Reusable React components

### Resources Folder

The `resources/` folder at the project root contains client-provided materials:

- **Specifications** — Project briefs, requirements, client requests
- **Branding** — Brand guidelines, color palettes, typography
- **Assets** — Logos, images, icons, and visuals

Always review this folder first to understand the project scope and available assets. These files are **read-only reference materials** — do not modify them.

### Naming Conventions

- **Folders/directories**: `kebab-case` (e.g., `user-profile/`, `contact-form/`)
- **React components**: `PascalCase` (e.g., `UserProfile.tsx`, `ContactForm.tsx`)
- **Component exports**: Use **named exports**, not default exports (e.g., `export function HelloWorld()` instead of `export default function HelloWorld()`)

### Code Style

Format code according to `.prettierrc` and `.editorconfig`. Run `pnpm format` to auto-format.

---

## Component Patterns

### Server & Client Components

> **⚠️ IMPORTANT: Prefer Server Components. Push Client Components to the leaves.**

- By default, all components are **Server Components** — keep them that way
- Only add `'use client'` when absolutely necessary (interactivity, hooks, browser APIs)
- Isolate client logic into small, leaf-level components
- Never wrap entire pages or layouts with `'use client'`

**Expected exceptions** (these require `'use client'`):

- Mobile menu toggle buttons and dropdown menus (requires `useState` for open/close)
- Forms with `useActionState` for handling submissions and validation feedback

### Page Content Structure

Always separate data from presentation in page files:

1. **Data layer** (top) — A typed constant holding all page content
2. **Presentation layer** (below) — JSX that consumes the data

```tsx
// DATA
const features = [
  { id: 'fast', title: 'Fast', description: '...' },
  { id: 'secure', title: 'Secure', description: '...' },
] as const

// PRESENTATION
export default function Page() {
  return features.map((f) => <Card key={f.id} {...f} />)
}
```

**Rules:**

- All user-facing text lives in the data layer, never hardcoded in JSX
- Use `as const` for type safety
- Each item must have an `id` or unique key

---

## UI & Styling

### Responsive Design

Use a mobile-first approach — all pages must be fully responsive:

- Start with mobile layout, then enhance for larger screens using `sm:`, `md:`, `lg:` breakpoints
- Always include a mobile navigation menu with a hamburger toggle button (this requires a small client component for the toggle state — see "Expected exceptions" above)
- Test layouts at all breakpoints: mobile (default), tablet (`md:`), desktop (`lg:`)

### Tailwind Styling

Use Tailwind classes directly in JSX. Key patterns: `flex`, `grid`, `p-4`, `m-2`, `gap-4`, `text-xl`, `font-bold`, `bg-*`, `text-*`, `rounded-lg`, `shadow-md`, `hover:*`, `dark:*`.

### Images

Place images in `public/` and use `next/image`:

```tsx
<Image src="/photo.jpg" alt="Description" width={800} height={600} />
```

When creating visual assets (hero images, illustrations, icons), use image generation capabilities if available instead of placeholders. This produces polished, working demonstrations.

---

## Features

### Forms & Validation

Use Server Actions for form handling:

- Use `useActionState` (React 19) with `prevState` pattern for form submissions
- Validate form data with **Zod** on both client-side (UX) and server-side (security)
- Share the same Zod schema between client and server to avoid duplication
- Return typed error/success state from server actions

### Email (Resend)

This project uses [Resend](https://resend.com) for sending emails. Skills are installed in `.agents/skills/resend/` with symlinks for compatibility:

- `.claude/skills/resend` → Claude Code
- `.agent/skills/resend` → Antigravity
- `.cursor/skills/resend` → Cursor

**Setup:** Set `RESEND_API_KEY` environment variable (see `.env.example`).

**Usage:** Read `.agents/skills/resend/SKILL.md` for routing to sub-skills (send-email, resend-inbound, agent-email-inbox).

---

## Verification

Always validate your work before finishing:

1. Run `pnpm format` to ensure code style consistency
2. Run `pnpm build` to verify the project compiles without errors

Fix any issues before considering the task complete.
