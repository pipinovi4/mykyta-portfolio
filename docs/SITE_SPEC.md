# Site Specification

## 1. Product definition

Mykyta Bozhenko's personal engineering portfolio presents real backend, software, open-source, and infrastructure work. V1 is a static frontend built with the Next.js App Router, strict TypeScript, and Tailwind CSS.

Within 5–10 seconds, the site must communicate who Mykyta is, his Python backend/software specialization, his primary stack, and the real systems he has built.

## 2. Audiences

- Engineering managers and employers evaluating backend/software engineering capability.
- Technical decision-makers looking for production-oriented engineering experience.
- Freelance clients seeking backend development, AI integration, infrastructure, or a production-ready web application.

Engineering credibility takes priority over generic freelance marketing.

## 3. Goals

- Establish the position Python Backend Engineer / Software Engineer.
- Make selected work visible immediately.
- Show capability across backend architecture, data, AI, infrastructure, and product integration.
- Provide direct paths to email, GitHub, résumé, and project case studies.
- Leave a maintainable foundation for future Experience, Education, and Engineering Notes.

## 4. Non-goals for v1

- Backend APIs, databases, authentication, CMS, or contact-form processing.
- Multilingual support.
- Blog, Experience, or Education without approved content.
- Analytics, testimonials, client logos, or invented performance metrics.
- Heavy 3D, decorative AI imagery, or animation-driven storytelling.

## 5. Language and voice

- English only; use `Mykyta Bozhenko` everywhere.
- Concise, confident, technical, factual, and production-oriented.
- Avoid inflated claims, buzzword chains, junior-portfolio clichés, and sales-heavy language.

## 6. Routes

- `/` — homepage
- `/projects/fincontrol` — FinControl case study
- `/projects/backproplab` — BackpropLab case study
- `/projects/cloudflare-edge-guard` — Cloudflare Edge Guard case study

Experience, Education, and Engineering Notes routes are deferred.

## 7. Homepage

### Header / Navigation

- Name links to `/`.
- Anchor links: Work, About, Stack, Contact.
- Résumé links to a downloadable asset once provided.
- Inline desktop navigation and keyboard-accessible mobile navigation.
- A sticky treatment is allowed but must not obscure anchor targets.

### Hero

Expose role, positioning statement, primary stack, and actions immediately. Primary action scrolls to Work; secondary action scrolls to Contact. Decorative media must not compete with the message.

### Selected Work

FinControl, BackpropLab, and Cloudflare Edge Guard are primary projects with dedicated routes. Ubuntu VPS Bootstrap is a smaller supporting project. Cards show type, summary, and stack without logo walls.

### Engineering Profile / About

Explain engineering focus and end-to-end scope. Do not add employers, years of experience, location, education, or outcomes until provided.

### Capabilities / Stack

Group technologies as Backend systems, Production and infrastructure, AI and numerical software, and Product integration.

### Open Source and Infrastructure

Highlight Cloudflare Edge Guard and Ubuntu VPS Bootstrap.

### Contact

Provide email, GitHub, and résumé. Hide LinkedIn until a real URL exists. Do not add a backend form in v1.

### Footer

Show identity, role, core contact links, and current year.

## 8. Case-study template

1. Project title and type.
2. Factual overview.
3. Responsibilities and scope.
4. Technology stack.
5. Architecture or engineering approach.
6. Selected implementation details.
7. Supplied screenshots, diagrams, or code excerpts.
8. Supplied repository/demo links.
9. Previous/next navigation and return to Work.

Omit sections without verified content or assets instead of publishing placeholders.

## 9. Content architecture

- Keep profile and project content outside UI components.
- Use typed TypeScript content modules.
- Components consume content through props and avoid project-specific copy.
- Derive route metadata from typed content where practical.
- No CMS in v1.

## 10. Responsive behavior

- Mobile-first from 360px with no horizontal page scrolling.
- Project cards stack on narrow screens and use a modular grid on wider screens.
- Navigation and controls maintain usable touch targets.
- Long technology names and URLs wrap safely.

## 11. Accessibility

- Semantic landmarks, one logical `h1`, and ordered headings.
- Full keyboard navigation, visible focus states, and a skip-to-content link.
- Descriptive links, sufficient contrast, and correct image alternatives.
- Respect `prefers-reduced-motion`; content remains usable without animation.

## 12. Performance and SEO

- Prefer static rendering and Server Components.
- Add client components only for required interaction.
- Optimize supplied project assets with `next/image`.
- Add page-specific titles/descriptions and canonical URL `https://mykytabozhenko.site`.
- Add Open Graph metadata when a real preview asset is ready.
- Avoid large animation libraries unless justified.

## 13. Required assets

- Résumé PDF and public filename.
- Publishable project screenshots and diagrams.
- Repository/demo URLs for public projects.
- LinkedIn URL if displayed.
- Favicon and Open Graph image.

## 14. Definition of done

- Homepage and three case-study routes are implemented.
- First viewport communicates identity, specialization, stack, and work.
- Every claim comes from approved content.
- Layout works from 360px through large desktops.
- Keyboard navigation, focus states, and reduced motion are verified.
- No broken, placeholder, or fabricated links are rendered.
- ESLint, TypeScript, and production build pass.
- Production healthcheck passes after deployment.
