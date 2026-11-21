# Architecture

- **Next.js App Router** renders pages (server components) and API routes.
- **Prisma** talks to **PostgreSQL**; client in `src/lib/db.ts`.
- Environments: local → staging (from `staging` branch) → production (from `main`).
- Each environment has its own database and env vars; never share production data with staging.

## Main pages
| Route | Purpose |
|---|---|
| `/` | Home, latest books, categories |
| `/books/[slug]` | Book details, read / download |
| `/search` | Search by title, author, category |
| `/admin` | Manage books, authors, categories |
