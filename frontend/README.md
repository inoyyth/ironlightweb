# Frontend — Ironlight Web

Frontend application for [Ironlight](https://ironlight.ee) — a senior-led web development agency based in Estonia that builds and stabilises web systems, commerce platforms, and enterprise integrations for businesses.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

---

## About the Project

Ironlight's website presents the agency's services, past work, and contact information. Targeted at founders and technical leads looking for a reliable engineering partner.

**Pages:**
- **Homepage** (`/`) — Banner with 3D globe, scroll-reveal text, customer slider, "who this is for" section, experience highlights, and contact CTA
- **Work** (`/work`) — Showcase of client projects with tags, stack, what was done, and results

**Planned pages:** Services (`/services`), About (`/about`)

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 14 | React framework (App Router) |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Utility-first styling |
| Three.js | 0.183 | 3D interactive globe |
| clsx | 2 | Conditional class merging |
| Prettier | 3 | Code formatting |
| prettier-plugin-tailwindcss | latest | Auto-sort Tailwind classes |

---

## Project Structure

```
frontend/
├── public/
│   ├── images/                # Static assets (logo, icons, illustrations)
│   └── svgs/
│       └── svg.svg            # SVG sprite sheet — all icons in one file
│
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── globals.css        # Global styles & CSS variables
│   │   ├── layout.tsx         # Root layout — html, body, fonts
│   │   ├── page.tsx           # Homepage (server component)
│   │   └── work/
│   │       └── page.tsx       # Work page (client component)
│   │
│   ├── components/
│   │   ├── layout/            # Structural shell: AppLayout, Topbar, MainContent, Footer
│   │   ├── pages/
│   │   │   ├── Homepage/      # One file per section: Banner, RevealText, CustomerSlider, etc.
│   │   │   └── Work/          # Banner, Workcontent (Main + Secondary), Conversation, Contact
│   │   └── shared/            # Reusable across pages: GlobeCanvas, ScrollRevealText, Svg
│   │
│   ├── constants/             # All static content/copy lives here, not in components
│   │   ├── homepage.tsx       # BANNER_CONTENT, REVEAL_TEXT_SEGMENTS, WHO_SECTION, etc.
│   │   ├── work.tsx           # WORK_ITEMS array + WorkItem type
│   │   └── navigation.ts      # NAV_ITEMS, ButtonNavigation
│   │
│   ├── context/
│   │   └── TopbarContext.tsx  # useReducer-based context for active nav state
│   │
│   └── hooks/
│       └── useIsMobile.ts     # MediaQueryList-based responsive hook
│
├── tailwind.config.ts         # Design tokens (colors, container)
├── .prettierrc                # Prettier config
└── next.config.mjs
```

---

## How Development Works

### 1. Server vs Client components

Next.js 14 App Router defaults to **Server Components**. Only add `"use client"` when the component needs:
- React hooks (`useState`, `useEffect`, `useRef`, `useContext`)
- Browser APIs (`window`, `document`, `matchMedia`)
- Event handlers

```tsx
// Server component — no directive needed
export default function HomepageContent() { ... }

// Client component — needs hooks/browser APIs
"use client";
export default function Topbar() { ... }
```

Most layout shells, section wrappers, and static content components are server components. Interactive pieces (`GlobeCanvas`, `Topbar`, `ScrollRevealText`, page roots that call `useTopbar`) are client components.

---

### 2. All copy and content lives in `constants/`

Components never hardcode strings. Every heading, label, CTA text, and data array lives in `src/constants/`:

```tsx
// src/constants/homepage.tsx
export const BANNER_CONTENT = {
  heading: "We fix the systems your business runs on.",
  primaryCta: "Let's Work Together",
  ...
};

// Component consumes it
import { BANNER_CONTENT } from "@/constants/homepage";
<h1>{BANNER_CONTENT.heading}</h1>
```

Work items follow a typed structure (`WorkItem`) in `src/constants/work.tsx`. When adding a new project, add an entry to `WORK_ITEMS` — the Work page renders them automatically.

---

### 3. Styling — Tailwind only, no custom CSS files

All styles are written as Tailwind utility classes directly in JSX. The `globals.css` file contains only resets and CSS variable definitions — it is not used for component styling.

**Conditional classes use `clsx`:**
```tsx
import clsx from "clsx";

<a className={clsx(
  "px-9 py-3 text-base text-neutral-25 hover:border-b border-secondary-600",
  { "border-b border-secondary-600": item.active }
)}>
  {item.label}
</a>
```

**Responsive classes follow the `lg:` breakpoint as the primary desktop switch:**
```tsx
// Mobile first, desktop at lg (1024px)
<div className="text-2xl lg:text-4xl">
<div className="flex-col lg:flex-row">
<div className="hidden lg:block">
```

**Design tokens** are defined in `tailwind.config.ts`. Always use token-based classes, never arbitrary hex values:
```tsx
// Correct
<div className="bg-neutral-900 text-secondary-600">

// Wrong
<div style={{ backgroundColor: "#0a0a0a", color: "#fff981" }}>
```

---

### 4. SVG icons — sprite sheet pattern

All icons live in a single SVG sprite at `public/svgs/svg.svg`. The shared `<Svg>` component references them by ID:

```tsx
import Svg from "@/components/shared/Svg";

// Renders the "arrow" icon from the sprite
<Svg use="arrow" className="h-6 w-6 text-neutral-25" />

// Color is controlled via Tailwind text-* classes (currentColor fill)
<Svg use="circleCheck" className="w-6 h-6 text-neutral-900" />
```

To add a new icon: add a `<symbol id="new-icon">` to `svg.svg`, then use `<Svg use="new-icon" />`.

---

### 5. Layout architecture

Every page is wrapped by `AppLayout` → `Topbar` + `MainContent`. Pages compose section components inside a containing `div`:

```
app/layout.tsx (RootLayout — html, body, fonts)
  └── AppLayout ("use client" — wraps TopbarProvider)
        ├── Topbar
        └── MainContent
              └── {page}  ← page.tsx renders here
                    └── SectionA, SectionB, SectionC ...
```

Each section is its own component file under `src/components/pages/<PageName>/`. Page files are thin — they import and compose sections, set the active nav state, and handle page-level layout (like the globe overlay on the Work page).

---

### 6. Active navigation state

Active nav highlighting is managed through `TopbarContext` — a `useReducer`-based context with `SET_ACTIVE` / `CLEAR_ACTIVE` actions. Pages call `setActive(href)` on mount:

```tsx
// src/app/work/page.tsx
const { setActive } = useTopbar();
useEffect(() => {
  setActive("/work/");
}, []);
```

The Topbar reads `state.activeHref` and applies the active border class to the matching nav item. This approach is used instead of relying on `usePathname()` so active state can be controlled programmatically (e.g. for future scroll-based section highlighting).

---

### 7. The 3D globe (`GlobeCanvas`)

`GlobeCanvas` is a Three.js canvas rendered in a `useEffect`. It is a "fire and forget" imperative component — the entire Three.js scene lives inside the effect, and cleanup (`cancelAnimationFrame`, `renderer.dispose()`, event listener removal) runs on unmount.

**Features:**
- 400 points distributed on a sphere using the Fibonacci lattice (uniform spacing)
- Edges drawn with `LineSegments2` (pixel-accurate line width, not WebGL `gl_LineWidth`)
- Mouse hover attracts nearby vertices via a magnetic pull algorithm
- Lightning effect: recursive midpoint-displacement bolt spawned at mouse hit point
- Camera zooms on scroll via `scrollProgress` lerp

**Props to control behaviour:**
```tsx
<GlobeCanvas
  disableLightning          // turns off lightning effect
  disableAutoRotate         // stops auto-rotation
  disableMouseControl       // disables mouse tilt
  disableScrollEffect       // camera stays fixed
  cameraStartSize={3.8}     // initial camera Z distance
  cameraEndSize={7}         // camera Z after full scroll
  cameraTransitionSpeed={0.14} // lerp speed (0–1)
  position={15}             // translateX offset on scroll (%)
  xOffset={0}               // Three.js group X offset
  yOffset={0}               // Three.js group Y offset
  elementScroll             // use element visibility for scroll progress instead of window.scrollY
/>
```

The globe is placed with `position: absolute` inside a `relative` container. The page content renders on top via `z-index`.

---

### 8. Responsive detection hook

`useIsMobile(breakpoint = 1024)` uses `window.matchMedia` and returns:
- `null` on the server / before hydration (initial state)
- `true` if viewport width < breakpoint
- `false` if viewport width ≥ breakpoint

Always guard against `null` before using the value:
```tsx
const isMobileDetected = useIsMobile();
// Default to true (mobile) until detected — prevents desktop layout flashing on mobile
const isMobile = isMobileDetected ?? true;
```

---

### 9. Adding a new page

1. Create `src/app/<page-name>/page.tsx`
2. Create `src/components/pages/<PageName>/` directory with section components
3. Add any static content to `src/constants/<page-name>.ts`
4. Add the route to `NAV_ITEMS` in `src/constants/navigation.ts`
5. Call `setActive("/<page-name>/")` inside a `useEffect` in the page component

---

### 10. Code formatting

Prettier runs with `prettier-plugin-tailwindcss` which **automatically sorts Tailwind class names** on save. Do not manually order classes — let Prettier handle it.

```bash
npm run format          # format all files
npm run format:check    # check without writing (used in CI)
```

Configure your editor to run Prettier on save. The `.prettierrc` and `.prettierignore` files are committed.

---

## Design Tokens (Tailwind Colors)

Custom palette defined in `tailwind.config.ts`. Shades go from `25` (lightest) to `900` (darkest).

| Token | Usage |
|---|---|
| `neutral` | Grayscale — backgrounds, borders, text |
| `primary` | Brand dark — headers, primary actions |
| `secondary` | Brand amber (`#fff981`) — highlights, accents, active states |
| `info` | Blue — informational states |
| `success` | Green — success states |
| `warning` | Amber — warning states |
| `danger` | Red — error/destructive states |

---

## Container / Layout Width

Max-width of **1440px** (`2xl` screen), centered with responsive padding.

```ts
container: {
  center: true,
  padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
  screens: { "2xl": "1440px" },
}
```

Use `className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"` as the standard section wrapper (matches what existing sections use).

---

## Getting Started

### Prerequisites
- Node.js `>=20.x <=24.x`
- npm

### Install
```bash
npm install
```

### Dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Production build
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
