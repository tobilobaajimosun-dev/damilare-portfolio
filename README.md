# Damilare Portfolio

Premium personal brand website for Oshokoya Damilare — entrepreneur, founder, mentor, and speaker.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Playfair Display (display), Geist (body), Geist Mono |
| Deployment | Vercel |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
/app                    Next.js App Router (pages, layouts, routes)
/components
  /layout               Site-wide layout components (Navbar, Footer)
  /sections             Page sections (Hero, About, Work, Speaking, Contact)
  /ui                   shadcn/ui primitives
/content                Static brand data and copy (brand.ts)
/lib                    Utilities, fonts config, base metadata
/public
  /images               Static images and media
  /fonts                Self-hosted font files (if any)
/styles                 Design token reference (tokens.css)
```

## Design System

### Color Palette

The site is dark-mode-first with a premium palette anchored in warm near-black and brand gold.

| Token | Value | Use |
|---|---|---|
| `--background` | `oklch(0.09 0 0)` | Page background |
| `--foreground` | `oklch(0.97 0 0)` | Primary text |
| `--primary` / `--gold` | `oklch(0.76 0.12 80)` | Brand gold accent |
| `--surface` | `oklch(0.13 0 0)` | Card / panel |
| `--surface-raised` | `oklch(0.17 0 0)` | Elevated surface |
| `--muted-foreground` | `oklch(0.65 0 0)` | Secondary text |

### Typography

| Role | Font | Usage |
|---|---|---|
| Display / Headings | Playfair Display (`font-display`) | Hero, section titles |
| Body / UI | Geist (`font-sans`) | Body copy, labels, UI |
| Code / Mono | Geist Mono (`font-mono`) | Numbers, metadata |

### Containers

```css
--container-content: 46rem;   /* reading / text columns */
--container-default: 75rem;   /* standard page width */
--container-wide:    90rem;   /* wide / full layouts */
```

See [`styles/tokens.css`](styles/tokens.css) for the full token reference.

## Environment Variables

Create `.env.local` and set:

```env
NEXT_PUBLIC_SITE_URL=https://damilareoshokoya.com
```

## Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel@latest

# Link and deploy (preview)
vercel

# Deploy to production
vercel --prod
```

### Push to GitHub

```bash
git remote add origin https://github.com/<username>/damilare-portfolio.git
git push -u origin main
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
