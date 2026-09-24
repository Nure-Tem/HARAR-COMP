# Harar Comp

The official website for **Harar Senior Secondary School** — a historic secondary school
in Harar, Ethiopia, established in 1952. The site serves prospective students, current
students, parents, staff, and the wider community.

---

## Overview

Harar Comp is a full-stack web application built with React, TypeScript, and Vite on the
frontend, and Supabase for authentication, database, and file storage on the backend.

The public site covers the school's academics, admissions process, news, gallery, and
contact information. Authenticated users (students and staff) access a private portal for
registration, document uploads, and a personal dashboard.

---

## Features

**Public pages**
- Home — hero section with school stats (2,500+ students, 50+ programs, 70+ years legacy),
  features overview, latest news preview, and call-to-action
- About — school history, core values (Excellence, Integrity, Innovation, Community),
  and staff profiles
- Academics — Grade 9–12 curriculum following the Ethiopian national curriculum, with
  Natural Science and Social Science streams and their core subjects
- Admissions — step-by-step application process, deadlines, and requirements
- News — school news and announcements
- Gallery — photo gallery of school life and events
- Contact — contact form, school address (Harar City, near Jugol Gate), phone, and email

**Authentication & portal**
- Sign in and registration via Supabase Auth (email/password and Google OAuth)
- Student registration form with photo upload and multi-file document upload
  (PDF, DOC, images, video, audio)
- Student dashboard — registration status, document checklist, upcoming events,
  profile card, and quick actions
- Protected routes — unauthenticated users are redirected to `/auth`

**Platform**
- Supabase Storage integration for student photos and documents
- Progressive Web App (PWA) — installable with offline-ready manifest
- Responsive, mobile-first layout across all screen sizes

---

## Technology Stack

| Category | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Build tool | [Vite 5](https://vitejs.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| UI components | [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) |
| Routing | [React Router v6](https://reactrouter.com/) |
| Backend / Auth / DB | [Supabase](https://supabase.com/) (PostgreSQL, Auth, Storage) |
| Data fetching | [TanStack Query v5](https://tanstack.com/query/latest) |
| Forms | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Charts | [Recharts](https://recharts.org/) |
| Testing | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |
| PWA | [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) |

---

## Project Architecture

The project is a Vite + React SPA with a Supabase backend. All credentials are provided
via environment variables — never hardcoded. The Supabase client is initialised once in
`src/integrations/supabase/client.ts` and imported wherever needed. Auth state is managed
through Supabase Auth listeners; protected routes check for an active session and redirect
to `/auth` if none exists. File uploads go through `src/lib/storage.ts`, which wraps the
Supabase Storage API and returns public URLs.

---

## Project Structure

```text
HARAR-COMP/
├── public/                         # Static assets (favicon, PWA icons, robots.txt)
├── src/
│   ├── assets/                     # Images (hero-school.jpg)
│   ├── components/
│   │   ├── home/                   # HeroSection, FeaturesSection, NewsSection, CTASection
│   │   ├── layout/                 # Header, Footer, Layout wrapper
│   │   ├── NavLink.tsx
│   │   └── ui/                     # shadcn/ui component library (40+ components)
│   ├── hooks/                      # use-mobile, use-toast
│   ├── integrations/
│   │   └── supabase/               # Supabase client and generated database types
│   ├── lib/
│   │   ├── storage.ts              # Supabase Storage upload/delete utilities
│   │   └── utils.ts                # cn() helper
│   ├── pages/
│   │   ├── Index.tsx               # Home
│   │   ├── About.tsx
│   │   ├── Academics.tsx
│   │   ├── Admissions.tsx
│   │   ├── Auth.tsx                # Sign in / Sign up (email + Google OAuth)
│   │   ├── Contact.tsx
│   │   ├── Dashboard.tsx           # Authenticated student dashboard
│   │   ├── Gallery.tsx
│   │   ├── News.tsx
│   │   ├── NotFound.tsx
│   │   └── Register.tsx            # Student registration form with file uploads
│   ├── test/                       # Vitest setup and example tests
│   ├── App.tsx                     # Root component and route definitions
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles and Tailwind directives
├── supabase/
│   ├── config.toml                 # Supabase local dev configuration
│   └── migrations/                 # Database migration SQL files
├── .env.local                      # Local environment variables (never commit)
├── .gitignore
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)
- A [Supabase](https://supabase.com/) project with Auth and Storage enabled

Verify your installation:

```bash
node --version
npm --version
```

### Installation

```bash
# Clone the repository
git clone https://github.com/Nure-Tem/HARAR-COMP.git
cd HARAR-COMP

# Install dependencies
npm install
```

Create a `.env.local` file in the project root with your Supabase credentials:

```bash
VITE_SUPABASE_URL=https://<your-project-id>.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=<your-anon-public-key>
```

> Never commit `.env` or `.env.local` files. They are excluded by `.gitignore`.

---

## Development

```bash
npm run dev
```

Opens the app at `http://localhost:8080/` with hot module replacement.

---

## Production Build

```bash
npm run build
```

Output is written to `dist/`. Preview locally with:

```bash
npm run preview
```

---

## Running Tests

```bash
npm test
```

---

## Deployment

The project is a standard Vite SPA and can be deployed to any static hosting platform
(Netlify, Vercel, GitHub Pages, etc.). Set the build command to `npm run build` and the
publish directory to `dist/`.

Set these environment variables in your hosting provider's dashboard:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

---

## Responsive Design

The UI is built mobile-first with Tailwind CSS. Breakpoints follow the standard Tailwind
scale (`sm`, `md`, `lg`, `xl`). The `use-mobile` hook provides programmatic breakpoint
access where needed in components.

---

## UI Components

All UI primitives come from [shadcn/ui](https://ui.shadcn.com/), which wraps
[Radix UI](https://www.radix-ui.com/) for accessibility. Components live in
`src/components/ui/` and can be customised freely. The design uses a custom colour palette
and typography defined in `tailwind.config.ts`.

---

## Development Principles

- Credentials are injected at build time via `import.meta.env` — never hardcoded
- Supabase is the single source of truth for auth and database state
- Database types are generated from the schema (`src/integrations/supabase/types.ts`)
- File uploads are centralised in `src/lib/storage.ts` with consistent error handling
- Forms use React Hook Form with Zod schemas for client-side validation
- TanStack Query manages server state and caching

---

## Screenshots

<img width="2048" height="1447" alt="Harar Senior Secondary School" src="https://github.com/user-attachments/assets/d0201880-c1de-4dc1-b7fa-aafceec4d8d9" />
<img width="1892" height="875" alt="image" src="https://github.com/user-attachments/assets/1328422f-57c5-49ca-b8c6-8d43fcc90aa5" />
<img width="1926" height="897" alt="image" src="https://github.com/user-attachments/assets/8dde68d1-578f-492b-b12f-94cedab95607" />
<img width="1925" height="885" alt="image" src="https://github.com/user-attachments/assets/c7f34bb3-1ae6-44d9-ac88-548b9a7945c4" />
<img width="1920" height="887" alt="image" src="https://github.com/user-attachments/assets/46b18e44-6089-4223-ae08-c92197a73ae8" />





---

## Live Project

Coming soon.

---

## Repository

[https://github.com/Nure-Tem/HARAR-COMP](https://github.com/Nure-Tem/HARAR-COMP)

---

## Future Improvements

- Connect the student registration form to the Supabase database
- Online admissions form with actual document submission to Supabase Storage
- Staff and admin content management interface
- Grade and attendance portal for students
- Push notifications for news and events
- Amharic / Harari language support

---

## License

All rights reserved by Harar Senior Secondary School.

---

## Author

Developed by [Nure-Tem](https://github.com/Nure-Tem).
