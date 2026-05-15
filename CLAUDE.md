@AGENTS.md

# VisualPlate — Project Context

## What This Is

AI-powered menu visualization platform. User uploads a restaurant menu photo → OCR extracts dish names → LLM cleans text → for each dish a visual + description is returned. Same dish queried again is served from DB cache with no AI cost. As more users scan, the DB grows richer and cost drops — the product feeds itself.

**Target users:** Tourists, expats, food explorers facing menus in unfamiliar languages.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Database | PostgreSQL via Supabase |
| Storage | S3 / Cloudflare R2 |
| AI | Vercel AI SDK |
| OCR | Tesseract |
| Payments | Stripe Elements (in-page popup — no redirect) |
| Hosting | Vercel |

## Core API Flow

```
User uploads menu image
  ↓
POST /api/upload
  ↓
OCR (Tesseract) → raw text
  ↓
LLM → clean dish names list
  ↓
FOR EACH DISH:
  → Check DB cache (dishes table)
  → If hit:  return cached image + description
  → If miss: image search API → save to DB → return
  ↓
Stream results to client
```

## Planned DB Tables

- `dishes` — id, name, normalized_name, image_url, description, language, created_at *(cache table)*
- `anonymous_users` — id (UUID), credits_left, created_at

## Business Model

### Paywall
First 2-3 dishes shown free. Rest: blurred + locked. User has already invested (uploaded photo) so conversion is high. This is intentional — never ask for payment before value is delivered.

### Credits
- 5 credits → $0.99
- 15 credits → $2.50
- 50 credits → $5.99
- 1 credit = 1 menu scan

### Subscriptions
- Basic $3.99/mo — unlimited scans, faster results
- Pro $7.99/mo — ingredients, calories, recommendations

### Payment UX (non-negotiable)
Stripe Elements in a **popup — NO page redirect**. Redirect kills conversion. Must stay on same page. Supports Apple Pay / Google Pay.

### Anonymous User Tracking
- On first visit: generate `crypto.randomUUID()`, write to cookie (`vp_uid`) + `anonymous_users` DB row
- On payment: link `vp_uid` to credits
- Abuse prevention: IP rate limit (max 10 req/IP), max 3 free scans/day, soft blocking message

## Current Phase: 0→1 (Validation)

**Goal:** "Do people actually use this?"

Build only:
1. Photo upload + OCR
2. Dish list extraction
3. Visual + description per dish
4. DB cache (silent background)
5. Auto-translate (any menu language → user's language)

**Do NOT build yet:** user accounts, editable dish list, advanced dish info, ratings, UGC, restaurant database.

## UX Screens

| Screen | Description |
|--------|-------------|
| Landing | Hero + instant demo (no upload needed) + how-it-works + CTA |
| Upload | Drag & drop or "Take Photo" (mobile: open camera directly) |
| Processing | "Analyzing your menu..." + step labels ("Detecting dishes → Matching images") |
| Result | Card grid — image + name + short description, tap to expand |
| Paywall | Cards 3+ blurred + locked, "Unlock all dishes" opens Stripe popup |

### Paywall UI Rules
- Blur must be light — user should see what they're missing (curiosity trigger)
- CTA text: "Unlock" or "See full menu" — never "Buy"
- Price: "$1" not "$1.00"
- Copy: "You're almost there" not "Buy now"

## Conversion Copy
- "You have 1 free scan left" → urgency
- "1,200 people viewed this dish today" → social proof
- "Limited free scans today" → FOMO
- "🎉 You unlocked 3 bonus scans!" → mini reward after first payment
- Exit intent: "Wait! Get 5 scans for $0.50"
- Speed illusion during loading: "Matching dishes…" / "Finding best images…"

## Next.js 16 Conventions (Breaking Changes)

- `middleware.ts` is now **`proxy.ts`** — same API, new filename
- Route Handlers: `app/api/[route]/route.ts`, export named HTTP methods (`GET`, `POST`, etc.)
- `RouteContext` helper for typed params: `ctx: RouteContext<'/users/[id]'>`
- `use cache` directive for data caching — extract to helper function (cannot use directly in route body)
- `'use client'` only where interactivity is genuinely required
- Prefer `next/image` for all images
- Read `node_modules/next/dist/docs/` before writing framework code
