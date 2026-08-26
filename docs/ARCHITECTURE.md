# MAJ Consultant Architecture

Last verified against current `main`: **2026-08-26**.

## Current topology

```text
Browser
  |
  v
GitHub Pages static site
  |-- index/advisory/reference HTML pages
  |-- site-config.js
  |-- optional local admin editor
  `-- /health.json

No backend
No server database
No server-side authentication
```

## Source-of-truth policy

- GitHub `main` is code/content truth.
- GitHub Pages `/health.json` is static deployment availability.
- README + this file are architecture/documentation truth.
- Jaber Dashboard must not infer backend, database or production auth from `admin.html`.

## Admin/editor boundary

`admin-auth.js` performs a SHA-256 passphrase comparison in the browser and uses `sessionStorage` only to hide/show the editor UI. `site-config.js` applies saved overrides from browser `localStorage`.

This means the editor:

- does not authenticate against a server
- does not authorize GitHub writes
- does not update the canonical repository
- affects only the local browser where the override is stored

It should be treated as a convenience/local editor, not as a secure CMS/admin control plane.

## Static health

`health.json` is published with the static site and reports runtime mode, absence of backend/database, and local-only admin persistence. It is an uptime/artifact marker rather than dependency health.

## Content trust

Advisory, regulatory, TCO and provider content can become stale independently of site uptime. Jaber Dashboard should track repository/document freshness separately from HTTP availability.

## Documentation maintenance rule

If MAJ Consultant adds a CMS, backend API, authenticated administration, database, dynamic calculator service or scheduled content updater, add a real service health endpoint and update README, this file and `.jaber-dashboard.json` together.
