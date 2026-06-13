# SEO Readiness Audit — FKM Advocates LLP

---

## 1. Routing

**Library:** `react-router-dom` v7.10.1 (`BrowserRouter`)

**All routes:**

| Path | Component | Type |
|---|---|---|
| `/` | `HomePage` | Static |
| `/about` | `AboutPage` | Static |
| `/practice-areas` | `PracticeAreasPage` | Static |
| `/practice-areas/:slug` | `PracticeAreaDetailPage` | Dynamic |
| `/case-studies` | `CaseStudiesPage` | Static |
| `/team` | `TeamPage` | Static |
| `/insights` | `InsightsPage` | Static |
| `/insights/:slug` | `InsightDetailPage` | Dynamic |
| `/contact` | `ContactPage` | Static |
| `/consultation` | `ConsultationPage` | Static |
| `/privacy` | `LegalPage` | Static |
| `/legal` | `LegalPage` | Static |
| `/cookies` | `LegalPage` | Static |

All routes are wrapped in `SiteLayout` via a parent `<Route element={<SiteLayout />}>`.

---

## 2. Project Structure

```
src/
├── assets/             # Images, video
├── components/
│   ├── hero/           # HeroScene, Scales3D, ScrollIndicator
│   ├── layout/         # Header, Footer
│   ├── sections/       # PracticeAreaCards, TeamCarousel, etc.
│   ├── ui/             # FilterBar, PageTransition
│   ├── Cursor.jsx
│   └── ScrollToTop.jsx
├── data/               # Static content: practiceAreas, team, insights, etc.
├── hooks/              # useLenis, useMediaQuery, useScrollReveal
├── layouts/
│   └── SiteLayout.jsx
├── pages/              # One file per route (see Routing section)
├── styles/             # global.css, tokens.css, layout.css, pages/
├── App.jsx
└── main.jsx
```

**Page components location:** `src/pages/`

---

## 3. Head Metadata

### index.html contents

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/jpeg" href="/src/assets/IMG-20251122-WA0001.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FKM Advocates LLP - Premier Legal Services in Kenya & Beyond</title>
    <meta name="description" content="FKM Advocates LLP provides comprehensive legal services including business law, estate planning, civil litigation, and real estate law. 30+ years of combined experience serving clients in Kenya and internationally." />
    <meta name="keywords" content="law firm, legal services, business law, estate planning, civil litigation, real estate law, Kenya lawyers, legal consultation" />
    <meta name="author" content="FKM Advocates LLP" />
    <meta property="og:title" content="FKM Advocates LLP - Premier Legal Services" />
    <meta property="og:description" content="Protecting your legal interests in Kenya & beyond with over 30 years of combined experience." />
    <meta property="og:type" content="website" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### Head management library

**None.** No `react-helmet`, `react-helmet-async`, or any equivalent library is installed or used. All meta tags are static in `index.html` — every page on the site shares the same `<title>` and `<meta name="description">`.

### Current title tag

```
FKM Advocates LLP - Premier Legal Services in Kenya & Beyond
```

### Existing meta tags

| Tag | Value |
|---|---|
| `charset` | `UTF-8` |
| `viewport` | `width=device-width, initial-scale=1.0` |
| `description` | "FKM Advocates LLP provides comprehensive legal services..." |
| `keywords` | "law firm, legal services, business law, estate planning, civil litigation, real estate law, Kenya lawyers, legal consultation" |
| `author` | "FKM Advocates LLP" |
| `og:title` | "FKM Advocates LLP - Premier Legal Services" |
| `og:description` | "Protecting your legal interests in Kenya & beyond with over 30 years of combined experience." |
| `og:type` | "website" |

**Missing meta tags:**
- `og:url` — required for Open Graph to work correctly
- `og:image` — no social share image defined
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- `canonical` link tag — critical for avoiding duplicate content
- Per-page `<title>` and `<meta name="description">` — currently every page has the same title/description

---

## 4. SEO Assets

| Asset | Status | Location |
|---|---|---|
| `robots.txt` | ✅ Present | `public/robots.txt` |
| `sitemap.xml` | ✅ Present | `public/sitemap.xml` |
| Favicon | ⚠️ Present but problematic | `src/assets/IMG-20251122-WA0001.jpg` (see notes) |

### robots.txt contents

```
User-agent: *
Allow: /

Sitemap:
https://fkmadvocatesllp.com/sitemap.xml
```

### Favicon issues

- The favicon is referenced as `/src/assets/IMG-20251122-WA0001.jpg` — a path inside `src/`, which is not served in production builds. It should be placed in `public/` and referenced as `/favicon.jpg` (or ideally converted to `.ico`/`.png`).
- A `.jpg` is not an ideal favicon format. Browsers prefer `.ico` (multi-size) or a 32×32/180×180 `.png`. No Apple touch icon is defined.

---

## 5. Performance

### Vite configuration (`vite.config.js`)

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({ jsxRuntime: 'automatic' })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          r3f: ['@react-three/fiber', '@react-three/drei'],
        },
      },
    },
  },
})
```

Manual code-splitting is configured for `three.js` and React Three Fiber — good for performance given the 3D hero scene.

### Image assets larger than 300KB

| File | Size |
|---|---|
| `giammarco-boscaro-zeH-ljawHtg-unsplash.jpg` | ~3.1 MB ⚠️ |
| `Recording 2026-06-12 181143.mp4` | ~4.6 MB ⚠️ |

### Performance issues

1. **3.1 MB JPEG** — `giammarco-boscaro-zeH-ljawHtg-unsplash.jpg` is uncompressed. Should be resized and converted to WebP.
2. **4.6 MB MP4 in `src/assets/`** — Video assets should not be bundled through Vite. Move to `public/` and reference directly, or host on a CDN.
3. **No image optimization pipeline** — Vite has no image compression plugin configured (`vite-plugin-imagemin` or similar).
4. **No lazy loading attributes** — Images rendered via `<img>` tags (e.g. in `ContactPage`) are missing `loading="lazy"`.
5. **Favicon served from `src/assets/`** — Won't resolve in production (see Section 4).
6. **Three.js + R3F in the hero** — Heavy WebGL bundle on every page load. The manual chunks help, but consider whether the 3D scene is essential on mobile.

---

## 6. Law Firm Content Structure

### Pages and their headings

| Page | H1 | H2s |
|---|---|---|
| `/` | "Expert Legal Solutions" | "A Nairobi law firm focused on driving client success" |
| `/about` | "Our journey / so far" | "What guides our practice", "Legal counsel tailored to your needs", "We integrate ethical standards to create lasting value" |
| `/practice-areas` | "Tailored legal / solutions" | "Our approach to legal counsel" |
| `/practice-areas/:slug` | Dynamic (area title split across two spans) | "Our Approach", "Other Practice Areas" |
| `/case-studies` | "Notable / matters" | — |
| `/team` | "Behind / FKM" | — |
| `/insights` | "Legal / insights" | — |
| `/insights/:slug` | Dynamic (article title) | — |
| `/contact` | "Contact / with FKM" | "Nairobi HQ", "Thika Branch" |
| `/consultation` | "Secure your / future" | — |
| `/privacy` | "Privacy Policy" | — |
| `/legal` | "Legal Notice" | — |
| `/cookies` | "Cookie Policy" | — |

### Practice areas (from `src/data/practiceAreas.js`)

| Slug | Title |
|---|---|
| `corporate-commercial` | Corporate & Commercial |
| `estate-probate` | Estate & Probate |
| `litigation` | Litigation & Dispute Resolution |
| `real-estate` | Real Estate & Conveyancing |

### Team members (from `src/data/team.js`)

| Name | Title | Office |
|---|---|---|
| Francis K. Mwangi | Managing Partner | Nairobi |
| Peter Mutua | Partner | Nairobi |
| Sarah Wanjiku | Senior Associate | Nairobi |
| David Kimani | Senior Associate | Nairobi |
| James Ochieng | Associate | Nairobi |
| Mary Njeri | Associate | Thika |
| Anne Wambui | Associate | Thika |
| Grace Akinyi | Counsel | Nairobi |

No individual attorney profile pages exist — team members are only displayed as cards on `/team`.

---

## 7. Structured Data

**No JSON-LD structured data exists anywhere in the project** — not in `index.html`, not in any page component, and not injected dynamically.

### What's missing

For a law firm, the following structured data types are high-value:

- `LegalService` or `LocalBusiness` — name, address, phone, geo coordinates, opening hours
- `Attorney` (schema.org `Person` with `jobTitle`) — for each named attorney
- `BreadcrumbList` — on practice area detail and insight detail pages
- `Article` — on each insight/blog post page (`/insights/:slug`)
- `FAQPage` — could be added to practice area pages

---

## 8. Deployment

**Deployed on Vercel.** A `.vercel/` directory with `project.json` is present in the project root.

### vercel.json

```json
{
  "rewrites": [
    { "source": "/sitemap.xml", "destination": "/sitemap.xml" },
    { "source": "/robots.txt", "destination": "/robots.txt" },
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ]
}
```

The config correctly handles SPA routing (all non-API paths fall through to `index.html`) and explicitly passes through `sitemap.xml` and `robots.txt` before the catch-all rewrite — this is correct and necessary.

---

## Summary of Critical SEO Issues

| Priority | Issue |
|---|---|
| 🔴 High | No per-page `<title>` or `<meta name="description">` — requires `react-helmet-async` |
| 🔴 High | No JSON-LD structured data (LegalService, Attorney, Article) |
| 🔴 High | Favicon referenced from `src/assets/` — will not resolve in production |
| 🔴 High | Missing `og:url`, `og:image`, and all Twitter Card meta tags |
| 🟡 Medium | No `canonical` link tag on any page |
| 🟡 Medium | 3.1 MB uncompressed JPEG in assets |
| 🟡 Medium | MP4 video bundled through Vite instead of served from `public/` |
| 🟡 Medium | No `loading="lazy"` on images |
| 🟢 Low | `keywords` meta tag has minimal SEO value in modern search engines |
| 🟢 Low | No Apple touch icon or web app manifest |
