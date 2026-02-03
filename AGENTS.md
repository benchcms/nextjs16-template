# Website Template

A minimal Next.js template ready for Vercel deployment.

## Quick Start

```bash
pnpm install   # Install dependencies
pnpm dev       # Start development server
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

---

## For AI Assistants

### Package Manager

> **⚠️ IMPORTANT: Always use `pnpm` for all package operations.**
>
> This project uses **pnpm** exclusively. Do NOT use `npm` or `yarn`.

### Stack

- **Next.js 16** with App Router
- **Tailwind CSS 4** for styling
- **TypeScript** for type safety
- **Zod** for validation
- **Resend** for email

### Code Style

Format code according to `.prettierrc` and `.editorconfig`. Run `pnpm format` to auto-format.

### Creating Pages

Create pages in `app/` using the App Router convention:

```
app/
├── page.tsx          → /
├── about/page.tsx    → /about
```

### Page Content Structure

> **⚠️ MANDATORY: Always separate data from presentation in page files.**

Structure every page with:

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

### Forms & Validation

> **⚠️ MANDATORY: Always use Server Actions for form handling.**

- Use `useActionState` (React 19) with `prevState` pattern for form submissions
- Validate form data with **Zod** on both client-side (UX) and server-side (security)
- Share the same Zod schema between client and server to avoid duplication
- Return typed error/success state from server actions

### Styling

Use Tailwind classes directly in JSX. Key patterns: `flex`, `grid`, `p-4`, `m-2`, `gap-4`, `text-xl`, `font-bold`, `bg-*`, `text-*`, `rounded-lg`, `shadow-md`, `hover:*`, `dark:*`.

### Images

Place images in `public/` and use `next/image`:

```tsx
<Image src="/photo.jpg" alt="Description" width={800} height={600} />
```

### Image Generation

When creating visual assets (hero images, illustrations, icons), use image generation capabilities if available instead of placeholders. This produces polished, working demonstrations.

### Email (Resend)

This project uses [Resend](https://resend.com) for sending emails. Skills are installed in `.agents/skills/resend/` with symlinks for compatibility:

- `.claude/skills/resend` → Claude Code
- `.agent/skills/resend` → Antigravity
- `.cursor/skills/resend` → Cursor

**Setup:** Set `RESEND_API_KEY` environment variable (see `.env.example`).

**Usage:** Read `.agents/skills/resend/SKILL.md` for routing to sub-skills (send-email, resend-inbound, agent-email-inbox).
