# Frontend — Ironlight Web

Frontend application for the Ironlight Web project, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 14 | React framework (App Router) |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Utility-first styling |
| Prettier | 3 | Code formatting |
| prettier-plugin-tailwindcss | latest | Auto-sort Tailwind classes |

---

## Project Structure

```
frontend/
├── public/
│   └── images/                # Static assets
│       ├── logo.png           # Site logo (145×40)
│       ├── icons/             # SVG/PNG icons
│       ├── illustrations/     # Hero & decorative images
│       └── backgrounds/       # Background images
│
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── fonts/             # Local fonts (Geist Sans, Geist Mono)
│   │   ├── globals.css        # Global styles & CSS variables
│   │   ├── layout.tsx         # Root layout (html, body, fonts)
│   │   └── page.tsx           # Home page
│   │
│   └── components/
│       └── layout/            # Base layout components
│           ├── AppLayout.tsx  # Composes Topbar + MainContent + Footer
│           ├── Topbar.tsx     # Top navigation bar
│           ├── MainContent.tsx# Dynamic page content wrapper
│           ├── Footer.tsx     # Footer bar
│           └── index.ts       # Barrel exports
│
├── tailwind.config.ts         # Tailwind configuration & design tokens
├── .prettierrc                # Prettier configuration
└── .prettierignore            # Prettier ignore rules
```

---

## Layout Architecture

The base layout follows a single-responsibility principle — each component handles one concern:

```
<RootLayout>               ← html, body, fonts  (app/layout.tsx)
  └── <AppLayout>          ← full-height flex column
        ├── <Topbar />     ← fixed-height header with logo and nav
        ├── <MainContent>  ← scrollable content area (receives page children)
        │     └── {page}
        └── <Footer />     ← fixed-height footer
```

Pages render inside `<MainContent>` automatically via Next.js `children` prop.

---

## Design Tokens (Tailwind Colors)

Custom color palette defined in `tailwind.config.ts`. Each color has shades from `25` (lightest) to `900` (darkest).

| Token | Usage |
|---|---|
| `neutral` | Grayscale — backgrounds, borders, text |
| `primary` | Brand dark — headers, primary actions |
| `secondary` | Brand amber — highlights, accents |
| `info` | Blue — informational states |
| `success` | Green — success states |
| `warning` | Amber — warning states |
| `danger` | Red — error/destructive states |

**Example usage:**
```tsx
<div className="bg-primary-900 text-neutral-25">...</div>
<span className="text-secondary-500">Highlight</span>
<p className="text-danger-400">Error message</p>
```

---

## Container / Layout Width

The layout uses Tailwind's `container` with a max-width of **1440px** on desktop.

```ts
container: {
  center: true,
  padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
  screens: { "2xl": "1440px" },
}
```

Use `className="container"` in any component to get centered, padded, responsive width automatically.

---

## Static Assets

Place static files under `public/images/` and reference them without the `public/` prefix:

```tsx
import Image from "next/image";

<Image src="/images/logo.png" width={145} height={40} alt="Logo" />
<Image src="/images/icons/arrow.svg" width={24} height={24} alt="Arrow" />
```

---

## Getting Started

### Prerequisites
- Node.js `>=20.x <=24.x`
- npm

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production
```bash
npm run build
npm run start
```

---

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without writing |
