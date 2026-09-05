# MAJ Consultant

Static cloud-consulting portfolio and knowledge hub hosted on GitHub Pages.

## Operational source of truth

Last verified against current `main`: **2026-08-26**.

| Layer | Current verified state |
| --- | --- |
| Runtime | Static HTML/CSS/JavaScript on GitHub Pages |
| Live site | `https://majaber1.github.io/MAJ-Consultant/` |
| Backend | **Not present** |
| Database | **Not required/currently absent** |
| Admin | Local browser editor only; not a server/admin account system |
| Admin persistence | `localStorage` on the current browser only |
| Static health | `/health.json` |
| Architecture | `docs/ARCHITECTURE.md` |

Machine-readable portfolio metadata is stored in `.jaber-dashboard.json` for Jaber Dashboard synchronization.

## Important admin boundary

`admin.html` + `admin-auth.js` are a convenience editor for one browser. The passphrase check runs entirely in client-side JavaScript and changes are persisted in `localStorage`; it does **not** protect server resources, create an authenticated management plane, or update GitHub content for other visitors.

Therefore Jaber Dashboard must not count the Admin page as production authentication, backend readiness or durable CMS capability.

## Main content

- portfolio homepage
- AWS/cloud learning roadmap
- cloud advisory framework
- cloud best-practices guide
- Saudi cloud/compliance reference/checklist
- TCO calculator
- freelance service packs for Fiverr, Khamsat, and Freelancer
- professional credentials and supporting documents

## Health model

```text
GET https://majaber1.github.io/MAJ-Consultant/health.json
```

This static signal confirms the deployed site artifact and intentionally reports:

- static GitHub Pages runtime
- no backend
- no database
- local-browser editor only
- browser-local content overrides

It is not an application dependency health endpoint.

## Content governance

Cloud architecture, compliance and TCO pages are advisory/reference material. Regulatory requirements, cloud pricing and provider guidance can change; users should verify time-sensitive claims against current authoritative sources before using them for formal decisions.

## Architecture

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).
