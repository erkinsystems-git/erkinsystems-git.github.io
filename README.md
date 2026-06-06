# Erkin Systems, Inc

A complete MSP website in Orange County, CA.  
**Color palette:** Charcoal `#181818` · Orange `#FF6B00` · Light Gray `#F3F4F6` · White `#FFFFFF`

---

## Quick Start

### 1. Push to GitHub

Create a public GitHub repository named `https://www.erkinsystems.qzz.io/` and push all files to `main`.

### 2. Enable GitHub Pages

- Repo → **Settings → Pages**
- Source: **Deploy from a branch → main → / (root)**
- Custom domain: `[www.erkinsystems.qzz.io](https://www.erkinsystems.qzz.io/)` → Save

### 3. Configure your domain

Add CN in CF:

| Type  | Name          | Content                   | Proxy    |
|-------|---------------|---------------------------|----------|
| CNAME | erkinsystems  | erkinsystems-git.github.io| DNS only |

### 4. Customize `_config.yml`

```yaml
title:         "Erkin Systems"
email:         "ryan@erkinsystems.com"
phone:         "(714) 555-0192"
address:       "Your real address"
url:           "[https://www.erkinsystems.qzz.io](https://www.erkinsystems.qzz.io/)"
formspree_id:  "YOUR_FORM_ID"
```

### 5. Set Up Formspree

1. Go to [formspree.io](https://formspree.io) → create a free account
2. Create a new form → copy the ID (e.g. `xpwzabcd`)
3. Paste it into `_config.yml` under `formspree_id`

### 6. Google Maps Embed

In `contact.md`, find the `.map-placeholder` div and replace the comment with your `<iframe>` from Google Maps → Share → Embed.

---

## Local Development

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`

---

## File Structure

```
├── _config.yml          ← Site settings, nav, contact info
├── _layouts/
│   ├── default.html     ← Full HTML shell (head, header, footer, SEO)
│   └── page.html        ← Interior page with hero banner
├── _includes/
│   ├── header.html      ← Sticky charcoal nav header
│   ├── nav.html         ← Desktop nav links
│   └── footer.html      ← Four-column footer
├── assets/
│   ├── css/main.css     ← Full design system (CSS variables, all components)
│   └── js/main.js       ← Nav toggle, scroll effects, reveal animations
├── index.md             ← Home page
├── services.md          ← Services page
├── about.md             ← About + team page
├── contact.md           ← Contact page with Formspree form
├── CNAME                ← Custom domain for GitHub Pages
└── Gemfile              ← Ruby gems for local dev
```

---

## Customization

| What | Where |
|------|-------|
| Colors | CSS variables at top of `assets/css/main.css` |
| Logo | Replace icon in `_includes/header.html` with `<img>` |
| Team photos | Replace `bi-person-fill` icons in `about.md` with `<img>` |
| Stats | Update numbers in hero card on `index.md` |
| Nav links | Edit `nav_links` array in `_config.yml` |
| Google Maps | Paste `<iframe>` embed in `contact.md` |
