# Portfolio frontend

The Next.js application for [Mykyta Bozhenko's engineering portfolio](../README.md).

```bash
nvm use
npm ci
npm run dev
```

Available checks:

```bash
npm run lint
npm run typecheck
npm run build
```

Project and profile data belongs in `src/content`; reusable interface code belongs in `src/components`. This application is intentionally static apart from its health endpoint and small client-side presentation enhancements.
