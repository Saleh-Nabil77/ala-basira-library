# مكتبة على بصيرة — Ala Basira Library

Online Islamic library website: catalogue, book pages, search, reading/downloads, and an admin panel. Arabic-first (RTL).

## Stack
- **Next.js** (App Router, TypeScript) — frontend + API routes
- **PostgreSQL** + **Prisma** ORM
- **Tailwind CSS** (RTL support)
- **GitHub Actions** CI

## Branches
| Branch | Purpose | Deploys to |
|---|---|---|
| `main` | Production, always stable | production |
| `staging` | Pre-release testing | staging |
| `develop` | Integration of finished features | — |
| `feature/*`, `fix/*` | Daily work | — |

Flow: `feature/*` → PR → `develop` → PR → `staging` → PR → `main`. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Project structure
```
src/
  app/            # routes: catalogue, books/[slug], search, admin
  components/     # shared UI components
  lib/            # db client, utils, auth
  styles/
prisma/           # schema.prisma, migrations, seed
public/           # static assets (covers, logo)
docs/             # architecture & decisions
tests/            # unit / e2e
.github/          # CI workflows, templates
```

## Getting started
```bash
cp .env.example .env
npm install
npx prisma migrate dev
npm run dev
```
