# Just Lisbon Design Language and Brand Style

This document captures the current visual and UX language implemented in the site so frontend developers and designers can ship new work that feels native to the product.

## 1) Brand Direction

- Positioning: premium but warm Dutch-guided experiences in Lisbon and Sintra.
- Visual mood: dark, cinematic, elegant, with warm gold accents.
- Personality: personal, calm, trusted local expertise, never loud or playful.

## 2) Core Design Principles

- Lead with atmosphere: strong photography + dark overlays + subtle glow.
- Keep hierarchy clear: high-contrast display headlines, muted supporting copy.
- Use restraint: one accent color family, minimal decorative effects.
- Prefer rounded, soft geometry: pills, rounded cards, rounded form controls.
- Maintain consistency: repeated spacing, borders, label style, CTA patterns.

## 3) Design Tokens (Current Source of Truth)

Defined in `tailwind.config.cjs` and `src/styles/global.css`.

### Colors

- `midnight` `#040404`: page background and deep surfaces.
- `obsidian` `#0d0d0f`: secondary dark tones.
- `slate` `#18181b`: card/background layers.
- `bone` `#f5f1e6`: primary text.
- `champagne` `#f1e4c6`: hover/lighter warm text.
- `accent` `#f2c16b`: primary emphasis and CTA color.

### Typography

- Display: `"Playfair Display"` for hero/page headings and premium moments.
- Sans: `"Inter"` for body text, labels, and UI controls.
- Frequent label pattern: uppercase + wide tracking (`tracking-[0.3em]` to `0.4em`) at tiny sizes.

### Shape, Borders, and Elevation

- Standard corner radii:
  - `rounded-full`: pills/buttons/tags.
  - `rounded-2xl`: form controls and medium cards.
  - `rounded-3xl`: major cards/containers.
- Border system: low-contrast light borders (`border-bone/10`, `/20`) for structure.
- Hover highlight: shift border toward `accent` and optionally add `shadow-glow`.

### Background and Texture

- Global page background is dark gradient + grain texture (`global.css`).
- Additional atmospheric gradients layer above sections (`from-accent/10`, `from-slate/40` etc.).

## 4) Layout and Spacing System

- Container widths:
  - Page sections mostly `max-w-6xl`.
  - Hero/text-focused blocks `max-w-4xl` or `max-w-5xl`.
- Default section rhythm:
  - Major sections: `py-24`.
  - Inner blocks: `mt-6`, `mt-10`, `mt-16`.
- Common horizontal padding:
  - `px-6` mobile, `lg:px-8` desktop.
- Navigation:
  - Fixed header with blur and translucent black background.
- Scroll behavior:
  - Smooth scroll globally.
  - `section` uses `scroll-margin-top: 120px` to account for fixed nav.

## 5) Component Language

### Navigation

- Transparent/blurred fixed bar over hero; darker blurred variant elsewhere.
- Desktop links use tiny uppercase tracked labels.
- Primary nav CTA is pill-outline with accent border/text.

### Hero

- Full-bleed photo with heavy dark gradient overlay.
- Large display headline, centered max-width text, single clear CTA.
- Supporting stat row in muted uppercase micro-label style.

### Cards (Tours, Reviews, FAQ blocks, Related tours)

- Dark translucent surface (`bg-slate/25` to `/40`) + soft border.
- `rounded-3xl` for major cards; hover shifts border to accent.
- Content uses:
  - small uppercase metadata labels,
  - display title,
  - muted body copy (`text-bone/70` range),
  - clear action area with top border separator.

### Buttons and Links

- Primary button: filled accent background + uppercase high-tracking text.
- Secondary button: transparent with bone/accent border.
- Text links: accent default, champagne on hover.

### Forms (Booking)

- Inputs/selects/textarea:
  - dark filled backgrounds,
  - subtle borders,
  - accent focus ring.
- Form is split into guided steps with visible step indicator.
- Validation language is inline, concise, and immediate.

### Overlays and Dialog-like UI

- Gallery fullscreen overlay uses dark translucent backdrop + blur.
- Close and nav controls are circular bordered buttons.

## 6) Motion and Interaction Patterns

- Keep motion subtle and functional:
  - quick color/border transitions for hover/focus,
  - smooth horizontal carousel scrolling,
  - light image zoom on hover,
  - short cross-fade/scale transitions in gallery.
- Respect reduced motion when performing scripted scroll behavior.

## 7) Copy and Content Tone

- Primary customer-facing language is Dutch.
- Tone: welcoming, personal, confident, locally knowledgeable.
- Use editorial style for major headlines; keep body copy clear and practical.
- Avoid generic sales hype and technical jargon in user-facing text.

## 8) Accessibility and Quality Baseline

- Preserve visible focus styles (`focus-visible`/accent outline).
- Ensure sufficient contrast on dark surfaces (especially muted text).
- Keep semantic landmarks (`header`, `nav`, `main`, `section`, `article`, `aside`).
- Keep descriptive `aria-label` values for interactive controls.
- Preserve keyboard support for menus, forms, and gallery navigation.

## 9) Analytics Pattern

- Interactive elements use `data-ph-event` with additional contextual attributes.
- When adding new UI actions, follow the same event naming and metadata pattern.

## 10) Implementation Rules for New Work

- Reuse existing tokens before introducing new colors, radii, shadows, or fonts.
- Match section cadence (`py-24`, `max-w-*`, muted labels + display heading + body).
- Keep component states consistent: default -> hover -> focus -> disabled.
- If introducing a new component, style it as a dark translucent surface first, then add accent only for interaction and emphasis.

## 11) Quick Do / Do Not

- Do: prioritize atmospheric imagery, high readability, and restrained accent usage.
- Do: keep uppercase tracked micro-labels for section metadata and small actions.
- Do not: introduce bright multi-color palettes or flat white cards.
- Do not: use default system typography when display or brand typography is expected.
- Do not: over-animate; movement should support orientation and feedback.

## 12) Live Reference Files

- `src/styles/global.css`
- `tailwind.config.cjs`
- `src/layouts/BaseLayout.astro`
- `src/components/Navigation.tsx`
- `src/components/Hero.tsx`
- `src/components/TourShowcase.astro`
- `src/components/Testimonials.tsx`
- `src/components/Faq.astro`
- `src/components/AboutRenate.astro`
- `src/components/Concierge.astro`
- `src/pages/tours/[bookName].astro`
