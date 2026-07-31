# Design Specification

## 1. Direction

The site should feel like a high-quality engineering product: strict, minimal, technical, contemporary, premium, confident, and production-oriented.

Reference qualities from Linear, Vercel, and Raycast include strong typography, generous space, clear hierarchy, disciplined grids, restrained motion, and polished detail. Do not copy their designs literally.

## 2. First impression

Within the Hero and first project preview, visitors should understand Mykyta's role, production/AI/infrastructure focus, primary stack, and that the portfolio contains real systems.

## 3. Visual principles

1. **Content first:** typography and hierarchy carry the design.
2. **Engineering precision:** use a consistent modular grid and spacing system.
3. **Restrained expression:** one accent family and subtle experimental details.
4. **Functional visuals:** real screenshots, diagrams, flows, and relevant code details.
5. **Quiet depth:** tonal surfaces, borders, and minimal shadows rather than glass-heavy layers.
6. **Purposeful motion:** transitions clarify interaction and never delay reading.

## 4. Theme and color

- Dark neutral theme for v1.
- Near-black background with slightly lighter elevated surfaces.
- Warm-neutral white primary text and muted gray secondary text.
- Thin low-contrast borders.
- One restrained cool-blue accent family; avoid neon saturation.

Initial tokens, subject to tuning after the first in-browser Hero review:

```css
--color-background: #090a0c;
--color-surface: #0f1115;
--color-surface-raised: #14171c;
--color-text-primary: #f4f5f7;
--color-text-secondary: #a2a8b3;
--color-text-muted: #747b87;
--color-border: #252a32;
--color-border-strong: #353c47;
--color-accent: #7c9cff;
--color-accent-strong: #9bb2ff;
--color-focus: #a9bcff;
```

Color is never the only indicator of state.

## 5. Typography

- Modern neutral sans serif with strong screen readability.
- Monospace only for technology labels, metadata, technical annotations, and diagrams.
- Prefer local or framework-managed fonts with predictable loading.
- Large display headings must retain mobile readability.
- Body copy remains calm and comfortably readable.

Suggested fluid ranges: Hero 48–88px, page title 40–72px, section title 32–52px, card title 22–30px, body 16–18px, labels 12–14px. Implement reusable tokens rather than arbitrary repeated values.

## 6. Layout and grid

- Mobile-first from 360px.
- Centered 1200–1280px maximum content width.
- Compact mobile gutters expanding on tablet and desktop.
- Consistent modular desktop grid and generous vertical section spacing.
- Deliberate alignment of headings, cards, metadata, and assets.
- Technical visuals may run wider than readable body copy.

## 7. Geometry

- Spacing scale based primarily on 4px increments.
- Moderate radii; avoid “bubble” UI.
- Prefer borders over large shadows.
- Controls have comfortable pointer and touch targets.

## 8. Components

### Header

Compact and grid-aligned, with name on the left and navigation/résumé on the right. Mobile navigation is minimal and accessible. Sticky behavior must remain unobtrusive.

### Hero

Typography-led role, positioning, supporting copy, stack, and actions. A restrained technical grid, system-status detail, or line motif is allowed. No stock photography, decorative AI imagery, or large 3D objects.

### Project cards

Use an editorial/product-case-study feel: strong title/type, concise description, stack metadata, and clear route. Prefer real screenshots or diagrams. Hover/focus may use a subtle accent, border change, or small directional motion.

### Capability groups

Use text-led grouped modules rather than a technology-logo wall. Show relationships between skills and engineering capabilities.

### Contact

Use a strong closing statement and a minimal set of direct actions without sales-funnel styling.

## 9. Technical visuals

Prefer real screenshots, architecture/request-flow diagrams, deployment diagrams, and carefully selected code or terminal excerpts. Avoid stock photos, functionless AI imagery, excessive 3D, random neon gradients, and fake dashboards.

## 10. Motion

- Keep transitions around 140–240ms with restrained easing and small distances.
- Use motion for navigation state, card hover/focus, section entrance, diagrams, and mobile navigation.
- Avoid scroll hijacking, long intros, continuous background motion, and delayed content.
- Under `prefers-reduced-motion: reduce`, remove non-essential transforms and entrances.

## 11. Interaction states

- Provide default, hover, focus-visible, active, and disabled states where applicable.
- Focus indicators remain clear against dark surfaces.
- Do not hide information behind hover only.
- Preserve valid link semantics and text selection on project cards.
- Offset anchor navigation for any sticky header.

## 12. Anti-patterns

No excessive glassmorphism, unrelated accents, random neon gradients, logo walls, skill progress bars, stock photos, functionless AI illustrations, excessive 3D, reading-blocking animation, or “guru/success marketing” aesthetics.

## 13. Initial review checkpoint

Before expanding the homepage, review the Header, Hero, and first FinControl card at 360px, a representative tablet width, and 1440px; also verify keyboard navigation and reduced-motion mode. Tune the system here before propagating it across all sections and case studies.
