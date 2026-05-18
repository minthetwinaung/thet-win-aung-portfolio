# Thet Win Aung — Data Engineer Portfolio

Dark & technical portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick Start (3 steps only)

```bash
# Step 1: Go into the project folder
cd thet-win-aung-portfolio

# Step 2: Install dependencies
npm install

# Step 3: Run development server
npm run dev
```

Open browser → http://localhost:3000

---

## Customize Your Info

All personal content is in **one file only**: `app/data.ts`

Edit these sections:
- `siteConfig` — name, email, phone, location, GitHub, LinkedIn
- `stats` — your headline numbers
- `techStack` — badges shown in hero
- `pipelineSteps` — your pipeline diagram
- `projects` — your portfolio projects
- `skills` — skill bar percentages
- `experience` — work history
- `certifications` — your certificates with verify links
- `education` — education background

---

## Project Structure

```
app/
  data.ts          ← ✏️  Edit ALL your info here
  page.tsx         ← Main page
  layout.tsx       ← Fonts + SEO metadata
  globals.css      ← Color theme + animations

components/
  Navbar.tsx       ← Fixed navigation
  Hero.tsx         ← Landing + typewriter effect
  Pipeline.tsx     ← Data pipeline diagram
  Experience.tsx   ← Work history timeline
  Projects.tsx     ← Project cards grid
  Skills.tsx       ← Animated skill bars + certifications
  Contact.tsx      ← Contact links + footer
```

---

## Deploy to Vercel (Free)

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: Push to GitHub → vercel.com → Import → Deploy
```

---

## Color Theme

| Color | Value | Usage |
|-------|-------|-------|
| Green | `#00d68f` | Primary accent, orchestration tools |
| Blue  | `#4da6ff` | Links, processing tools |
| Purple| `#a78bfa` | Languages |
| Orange| `#fb923c` | Cloud platforms, dates |
| Cyan  | `#22d3ee` | BI tools |
| Dim   | `#4a6080` | Secondary text |

---

Built for: **Thet Win Aung** · Data Engineer · Bangkok, Thailand
