# Trident Luxury Real Estate — Website

Marketing and portfolio site for **Trident Luxury Real Estate** (Dubai property advisory). Built as a single-page application (SPA) with React and Vite: public pages, filterable portfolio, project detail views, and contact forms that post to Google Sheets via Google Apps Script.

---

## Tech stack

| Area | Choice |
|------|--------|
| UI | React 19 |
| Routing | React Router 7 (`BrowserRouter`) |
| Build | Vite 8 |
| Styles | SCSS / Sass |
| Icons | `react-icons` |
| Notifications | `react-toastify` |

---

## Repository layout

High-level map of important folders (excluding large `src/assets` trees):

```text
.
├── index.html              # Root HTML: title, meta description, OG/Twitter, favicon links
├── package.json
├── vite.config.js
├── public/                 # Copied to site root on build (favicons, robots.txt, sitemap.xml)
├── README.md               # This file
├── docs/
│   └── Project-Handbook.html  # Same guide as printable HTML (browser → Print → Save as PDF)
└── src/
    ├── main.jsx            # React root + BrowserRouter
    ├── App.jsx             # Layout: header, footer, route loader, in-app navigation behavior
    ├── index.scss          # Global styles entry
    ├── routes/
    │   └── routes.jsx      # Route table → page components
    ├── Pages/              # Top-level route screens (thin wrappers)
    ├── Components/         # Feature and shared UI (grouped by page or Common/)
    ├── Datasets/
    │   └── portfolio.js    # Portfolio entries, slug logic, gallery/logo resolution
    ├── Utils/
    │   └── emailService.js # Contact / lead submission → Google Apps Script web app URL
    ├── context/            # e.g. app loader state
    ├── constants/
    └── assets/             # Images, PDFs, portfolio media (heavy)
        ├── Portfolio/
        │   ├── Meraas/
        │   ├── Nakheel/
        │   └── Dubai Properties/   # folder name "Dubai Properties" (matches dataset)
        ├── Banner/, Services/, Clients/, Common/, Logo/, Gallery/
```

Routing lives in `src/routes/routes.jsx`. New top-level URLs require a new `Route` entry and usually a page under `src/Pages/`.

---

## Scripts

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server (Vite) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |

Use a current **Node.js LTS** version (e.g. 20.x or 22.x) unless your team standardizes otherwise.

---

## How to add a new portfolio project

Portfolio items are **data-driven** from `src/Datasets/portfolio.js` plus **on-disk assets** under `src/assets/Portfolio/`. URLs use a **slug** derived from `projectName` (see `toSlug` in the same file).

### 1. Add asset folders and files

1. Under `src/assets/Portfolio/<DeveloperFolder>/<ProjectFolder>/`, add:
   - **Project logo** — a PNG whose filename contains `logo` (case-insensitive), placed directly under the project folder (not inside `Gallery/`). The glob in `portfolio.js` picks this up.
   - **Gallery** — WebP images under a **`Gallery/`** subfolder. Supported patterns include:
     - `Gallery/Image-1.webp`, `Gallery/Image-2.webp`, …
     - `Gallery/Images/Image-*.webp`
     - `Gallery/Exteriors/Image-*.webp`
     - `Gallery/Interiors/Image-*.webp`  
     Sorting prefers that order, then numeric image order.

2. **Developer folder names** must match how the code resolves logos: e.g. `Meraas`, `Nakheel`, `Dubai Properties` (with a space, as in the repo).

### 2. Append an entry to `portfolioEntries`

Each object typically includes:

| Field | Meaning |
|-------|---------|
| `masterCommunity` | Area / master plan label (display) |
| `developer` | `"Meraas"`, `"Nakheel"`, or `"DP"` (stored as **Dubai Properties** after normalization) |
| `projectName` | Display name; also drives the **URL slug** via `toSlug` |
| `launchDate` | Shown in UI |
| `toolkitLink` | External broker/toolkit URL |
| `assetDeveloperFolder` | Folder under `src/assets/Portfolio/` (e.g. `Meraas`) |
| `assetProjectFolder` | Project subfolder (e.g. `Solaya`) |
| `description` | Optional; if omitted, a default blurb is generated |

Optional: `logo` (string label in data; branding in UI comes from images).

### 3. Special case: logo path does not match folders

If the logo lives under a **different** project folder (phases, aliases), add a row to `projectLogoAliases` in `portfolio.js` (key: `` `${assetDeveloperFolder}/${assetProjectFolder}` `` → value: path relative to `../assets/Portfolio/`).

### 4. SEO: update the sitemap

After adding or renaming a project, add or update the matching URL in **`public/sitemap.xml`**:

- Pattern: `https://www.tridentluxury.ae/portfolio/<slug>`
- Slug = output of `toSlug(projectName)` (lowercase, `&` → `and`, non-alphanumeric runs → `-`).

`public/robots.txt` already references the sitemap; no change needed unless the domain changes.

### 5. Verify locally

Run `npm run dev`, open `/portfolio`, open the new card, and visit `/portfolio/<your-slug>` directly. Confirm gallery order, logos, and links.

---

## Files intentionally excluded from Git

Configured in **`.gitignore`**:

| Pattern | Reason |
|---------|--------|
| `google-apps-script-code.gs` | Backend script for Sheets; keep a **private** copy (not in the shared repo). |
| `dist/`, `dist.zip`, `*.zip` | Build output and archives should not be versioned. |
| `node_modules/`, logs, editor junk | Standard |

If any of these were **already committed**, remove them from the index once (they stay on disk):

```bash
git rm --cached google-apps-script-code.gs dist.zip 2>/dev/null; true
```

Then commit. Going forward, Git will not suggest adding them.

---

## Handoff notes for other developers

### Deployment and hosting

- The app is an **SPA**: every path (e.g. `/portfolio/foo`) must serve **`index.html`** on the server, with static files (`/assets/...`, `robots.txt`, `sitemap.xml`, favicons) served as files. Misconfigured hosts return 404 on direct URL loads or refresh.

### Forms and Google integration

- Contact / lead submission uses **`src/Utils/emailService.js`**, which posts to a **Google Apps Script** web app URL (`GOOGLE_SCRIPT_URL`).
- Treat that endpoint as **sensitive**: it can write to your Sheet and may be abused if leaked. For a cleaner handoff, consider moving the URL to a **Vite env variable** (e.g. `VITE_GOOGLE_SCRIPT_URL` in `.env.local`, documented in a private runbook) and reading `import.meta.env.VITE_GOOGLE_SCRIPT_URL` in code. `.env.local` should stay gitignored (Vite already ignores `*.local` patterns in many setups; confirm `.gitignore` includes `.env*.local` if you add secrets files).

### Domain and metadata

- Canonical domain in meta tags is **`https://www.tridentluxury.ae`** (`index.html`). Align redirects, `sitemap.xml`, and `robots.txt` with your real canonical host (www vs non-www).

### Performance and repo size

- **`src/assets/Portfolio/`** contains many high-resolution WebPs and some PDFs. Clones can be large; avoid committing duplicate or unused assets.

### Styling conventions

- Component-scoped **`.scss`** files sit next to their `.jsx` counterparts. Follow existing nesting and naming when adding sections.

### Lint and quality

- Run **`npm run lint`** before merging. Fix new issues in touched files.

### Optional internal copy

- Keep **`google-apps-script-code.gs`** (or equivalent) in a **private** store (password manager, internal wiki, or separate private repo) with deployment steps for Google Apps Script, Sheet ID, and access scopes.

---

## License / usage

This repository is **private** to Trident Luxury unless otherwise stated. Do not redistribute client assets or third-party broker toolkits outside agreed terms.