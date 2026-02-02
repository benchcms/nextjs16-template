# Website Template

A minimal Next.js template ready for Vercel deployment.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

---

## For AI Assistants

### Stack

- **Next.js 16** with App Router
- **Tailwind CSS 4** for styling
- **TypeScript** for type safety
- **pnpm** as package manager

### Code Style

Always format code according to:

- `.prettierrc` — Prettier configuration
- `.editorconfig` — Editor settings

Run `pnpm format` to auto-format all files.

### Creating Pages

Create new pages in the `app/` folder:

```
app/
├── page.tsx          → yoursite.com/
├── about/page.tsx    → yoursite.com/about
├── contact/page.tsx  → yoursite.com/contact
```

Each page exports a default React component:

```tsx
export default function About() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4">Your content here...</p>
    </main>
  )
}
```

### Styling with Tailwind

Use Tailwind classes directly in JSX:

```tsx
<div className="rounded-lg bg-blue-500 p-4 text-white">Styled box</div>
```

Key patterns:

- `flex`, `grid` — Layout
- `p-4`, `m-2`, `gap-4` — Spacing
- `text-xl`, `font-bold` — Typography
- `bg-*`, `text-*` — Colors
- `rounded-lg`, `shadow-md` — Effects
- `hover:*`, `dark:*` — States

### Images

Put images in `public/` folder:

```tsx
import Image from 'next/image'

;<Image src="/photo.jpg" alt="Description" width={800} height={600} />
```

### Deployment

Push to GitHub, then import in [vercel.com](https://vercel.com).
Vercel auto-deploys on every push.
