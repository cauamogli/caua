

# Storytelling Homepage — Revised Plan

## Key Changes from Previous Plan

Based on the reference images:
1. **Description text** matches the italic editorial style from image 1 — medium-sized italic, not small body text
2. **Specs section** uses horizontal lines extending toward the product image (like image 2), not vertical border columns

## ASCII Layout

```text
┌──────────────────────────────────────────────────┐
│                    HEADER                         │
├──────────────────────────────────────────────────┤
│           bg: #11111B everywhere                  │
│                                                   │
│  ╔══════════════════════════════════════════════╗  │
│  ║           HERO — 100vh                       ║  │
│  ║                                              ║  │
│  ║         ┌──────────────┐                     ║  │
│  ║         │  FULL IMAGE  │                     ║  │
│  ║         │  object-     │                     ║  │
│  ║         │  contain     │                     ║  │
│  ║         └──────────────┘                     ║  │
│  ║            A e t h e r                       ║  │
│  ║              O n e                           ║  │
│  ║           [ sold out ]                       ║  │
│  ╚══════════════════════════════════════════════╝  │
│                                                   │
│  ╔═══════════ max-w-[900px] centered ═══════════╗ │
│  ║                                              ║  │
│  ║  SECTION 1 — "The Form"                      ║  │
│  ║                                              ║  │
│  ║  Literally, how can we work together?        ║  │
│  ║  This is the question that has been          ║  │
│  ║  mulling on the horizon, even before         ║  │
│  ║  all sides water. No reliance on third       ║  │
│  ║  parties, middle man, nor distributor.       ║  │
│  ║  Full control over lost time.                ║  │
│  ║                                              ║  │
│  ║  ^ text-white italic text-base/lg            ║  │
│  ║    font-light leading-relaxed                ║  │
│  ║    SAME SIZE as reference image 1            ║  │
│  ║                                              ║  │
│  ║  ┌──────────────────────────────────┐        ║  │
│  ║  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │        ║  │
│  ║  │ ▓   TOP HALF CROP             ▓ │        ║  │
│  ║  │ ▓   object-position: top      ▓ │        ║  │
│  ║  │ ▓   scale-[1.8]               ▓ │        ║  │
│  ║  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │        ║  │
│  ║  └──────────────────────────────────┘        ║  │
│  ║     radial-gradient overlay → #11111B        ║  │
│  ║                                              ║  │
│  ╠══════════════════════════════════════════════╣  │
│  ║                                              ║  │
│  ║  SECTION 2 — "The Base"                      ║  │
│  ║                                              ║  │
│  ║  (same italic text style as above)           ║  │
│  ║  Each surface tells a story of process...    ║  │
│  ║                                              ║  │
│  ║  ┌──────────────────────────────────┐        ║  │
│  ║  │ ▓   BOTTOM-LEFT CROP          ▓ │        ║  │
│  ║  │ ▓   object-position:          ▓ │        ║  │
│  ║  │ ▓     bottom left             ▓ │        ║  │
│  ║  │ ▓   scale-[1.8]               ▓ │        ║  │
│  ║  └──────────────────────────────────┘        ║  │
│  ║     radial-gradient overlay → #11111B        ║  │
│  ║                                              ║  │
│  ╠══════════════════════════════════════════════╣  │
│  ║                                              ║  │
│  ║  SECTION 3 — "The Detail"                    ║  │
│  ║                                              ║  │
│  ║  (same italic text style as above)           ║  │
│  ║  Every brushstroke carries the weight...     ║  │
│  ║                                              ║  │
│  ║  ┌──────────────────────────────────┐        ║  │
│  ║  │ ▓   BOTTOM-RIGHT CROP         ▓ │        ║  │
│  ║  │ ▓   object-position:          ▓ │        ║  │
│  ║  │ ▓     bottom right            ▓ │        ║  │
│  ║  │ ▓   scale-[1.8]               ▓ │        ║  │
│  ║  └──────────────────────────────────┘        ║  │
│  ║     radial-gradient overlay → #11111B        ║  │
│  ║                                              ║  │
│  ╠══════════════════════════════════════════════╣  │
│  ║                                              ║  │
│  ║  SECTION 4 — FULL REVEAL + SPECS             ║  │
│  ║                                              ║  │
│  ║  Spec labels sit OVER the image,             ║  │
│  ║  with thin horizontal lines pointing         ║  │
│  ║  toward the product (like ref image 2):      ║  │
│  ║                                              ║  │
│  ║              ┌──────────────┐                ║  │
│  ║              │              │                ║  │
│  ║  Driver      │              │                ║  │
│  ║  10mm        │              │      Battery   ║  │
│  ║  graphene    │              │      8hr+24hr  ║  │
│  ║  ────────────┤   FULL       ├──────────────  ║  │
│  ║              │   IMAGE      │                ║  │
│  ║  ANC         │   object-    │      BT 5.3    ║  │
│  ║  6-mic       │   contain    │                ║  │
│  ║  hybrid      │              │      IPX5      ║  │
│  ║  ────────────┤              ├──────────────  ║  │
│  ║              │              │                ║  │
│  ║              └──────────────┘                ║  │
│  ║                                              ║  │
│  ║          [ Buy Now — $299 ]                  ║  │
│  ║                                              ║  │
│  ╚══════════════════════════════════════════════╝  │
│                                                   │
│                    FOOTER                         │
└──────────────────────────────────────────────────┘
```

## Implementation — `src/pages/Index.tsx` full rewrite

### Global
- Page bg: `bg-[#11111B]`
- Story sections: `max-w-[900px] mx-auto px-6`
- FadeIn duration: `1500ms`

### Hero
- Same as current — full viewport, `object-contain`, title, sold-out pill
- Change `bg-black` to `bg-[#11111B]`

### Sections 1-3 (crop + description)
- **Description text**: `text-white italic text-base md:text-lg font-light leading-relaxed max-w-lg` — same style and size as reference image 1, placed ABOVE the image
- **Image container**: `relative overflow-hidden rounded-2xl h-[60vh]`
- **Image**: same `hero-bg.jpg`, `object-cover scale-[1.8]`, with `object-position` of `top`, `bottom left`, `bottom right`
- **Radial gradient overlay**: `radial-gradient(ellipse at center, transparent 30%, #11111B 75%)`
- Spacing: `py-32 md:py-48`

### Section 4 — Full reveal with line-pointed specs
- Full-width image with `object-contain` and radial gradient
- Specs are `absolute` positioned over the image, left and right sides
- Each spec group: small white text with a thin `1px` horizontal line (`bg-white/30`) extending toward the product center
- Left specs: text right-aligned, line extends right
- Right specs: text left-aligned, line extends left
- Lines use `absolute` positioning with a `div` of `h-px bg-white/20 w-16` connecting text to product
- Below image: centered `Buy Now — $299` copper pill button

### Files changed
| File | Action |
|------|--------|
| `src/pages/Index.tsx` | Full rewrite |

