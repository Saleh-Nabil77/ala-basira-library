# Contributing

## Branch model
- `main` — production. Protected. Only merged from `staging` via PR.
- `staging` — pre-release / QA. Protected. Only merged from `develop` (or `hotfix/*`).
- `develop` — integration branch. All feature work merges here.
- `feature/<short-name>`, `fix/<short-name>`, `chore/<short-name>` — branch from `develop`.
- `hotfix/<short-name>` — branch from `main`, merge into `main` AND back into `develop`.

## Rules
1. Never commit directly to `main`, `staging` or `develop` — always open a Pull Request.
2. Every PR needs **1 approval** and **green CI** (typecheck + build + tests).
3. Keep PRs small and focused; link the issue (`Closes #12`).
4. Squash-merge into `develop`; merge-commit for `develop → staging → main` releases.
5. Never commit secrets. Use `.env` (ignored) and update `.env.example`.
6. Database changes go through Prisma migrations (`npx prisma migrate dev --name <change>`).
7. UI must work in RTL (Arabic) and on mobile.

## Commit messages (Conventional Commits)
```
feat: add book search by author
fix: correct RTL alignment in header
docs: update setup steps
chore: bump dependencies
```

## Release flow
1. `develop` → PR → `staging`, test on the staging site.
2. `staging` → PR → `main`, tag the release (`v1.2.0`).
