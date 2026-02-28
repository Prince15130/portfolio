# Saurav Bakshi — Design Technologist Portfolio

A React + TypeScript portfolio built with CSS Modules and design tokens that mirror a Vanilla Extract architecture.

## Project Structure

```
src/
├── assets/              # Image assets (screenshots, photo, token pipeline)
├── components/          # Reusable UI components
│   ├── Awards/          # iF + Red Dot award cards with SVG logos
│   ├── CodeBlock/       # Syntax-highlighted code viewer
│   ├── Contact/         # Contact section with CTA links
│   ├── Footer/          # Page footer
│   ├── MetricsStrip/    # Row of impact metrics
│   ├── Nav/             # Fixed navigation with scroll-to and routing
│   ├── Screenshot/      # Captioned image figure
│   ├── SectionHeader/   # Numbered section title with divider line
│   ├── StarCard/        # STAR format narrative card (S/T/A/R)
│   └── Tag/             # Pill badge (blue / orange / black variants)
├── data/                # All content data
│   ├── types.ts         # TypeScript interfaces
│   ├── projects.ts      # 3 full project case studies with STAR data
│   └── clients.ts       # Client list + tech stack items
├── pages/
│   ├── HomePage/        # Main landing page (assembles all sections)
│   └── DetailPage/      # Individual project case study page
├── sections/            # Full-width page sections (homepage only)
│   ├── Hero/            # Hero with photo, stats, CTAs
│   ├── ProjectsGrid/    # Clickable project cards grid
│   ├── TechStack/       # Dark 4-column stack grid
│   └── Experience/      # Timeline + client logo cards
├── styles/
│   ├── tokens.css       # Design tokens (mimics Vanilla Extract contracts)
│   └── global.css       # CSS reset + base styles
├── App.tsx              # React Router setup
└── main.tsx             # Entry point
```

## Design Tokens

All spacing, colour, typography, and radius values are defined as CSS custom properties in `src/styles/tokens.css`, organised in three layers mirroring Vanilla Extract's `createThemeContract` approach:

- **Primitive** — raw values (`--primitive-blue-500: #0066ff`)
- **Semantic** — context-aware references (`--color-action-primary: var(--primitive-blue-500)`)
- **Component** — scoped per-component (consumed in CSS Modules)

## Getting Started

```bash
yarn install
yarn dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
yarn build
yarn preview
```

## Tech Stack

- **React 18** + **TypeScript**
- **React Router v6** — client-side routing
- **CSS Modules** — scoped styles per component
- **Vite 5** — dev server and build tool
- **Google Fonts** — Plus Jakarta Sans (display), DM Sans (body), DM Mono (code)

## Projects Covered

1. **Philips Filament Design System** — Token architecture, Vanilla Extract component library, Storybook, CI/CD pipeline
2. **AI-Powered Component Generation** — MCP server, LLM integration, developer experience
3. **Cross-Platform Harmonisation** — Clinical UX, patient monitoring, SAAS platform

## Adding a New Project

1. Add images to `src/assets/`
2. Import them at the top of `src/data/projects.ts`
3. Add a new `Project` object to the `projects` array
4. The routing and navigation update automatically
