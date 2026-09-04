# Portfolio walkthrough recording guide

Use this guide to record a natural 90–120 second English introduction after the updated site is deployed.

## Before recording

- Use a 1440 × 900 or 1920 × 1080 browser window at 100% zoom.
- Close personal tabs, notifications, password managers, and unrelated applications.
- Open the portfolio homepage and the three public GitHub repositories in separate tabs.
- Confirm that the CV opens, all project links work, and no private data is visible in project screenshots.
- Record one clean take, then add captions. Speak slightly more slowly than in conversation.

## Suggested script

> Hi, I’m Mykyta Bozhenko. I’m a Python backend and software engineer focused on APIs, data models, business workflows, and the infrastructure needed to run them reliably.
>
> This portfolio highlights four projects. FinControl is a private credit-operations platform built around FastAPI, PostgreSQL, role-based access, a Next.js dashboard, a Telegram application workflow, RabbitMQ, and object storage. The case study explains the architecture and shows a real interface without exposing customer data or private source code.
>
> BackpropLab is a public C++17 project where I implemented custom tensors, manual forward and backward passes, optimizers, and experimental attention components. I use it to explore what machine-learning frameworks do below their high-level APIs, and I document the parts that are still experimental.
>
> Cloudflare Edge Guard and Ubuntu VPS Bootstrap are public Bash projects. They focus on safe infrastructure changes: input validation, dry runs, scoped ownership, idempotent updates, health checks, and automated tests.
>
> This portfolio itself is a statically rendered Next.js application. It is packaged as a non-root Docker image and deployed through GitHub Actions to a Linux VPS behind Nginx and Cloudflare.
>
> You can inspect the public source from each case study or contact me directly from the final section. Thanks for taking a look.

## Recording path

1. Start on the hero and pause briefly on the role and core stack.
2. Scroll to Selected Work while introducing the four projects.
3. Open FinControl and show the architecture, responsibilities, and private-source note.
4. Open BackpropLab, then switch briefly to its GitHub repository.
5. Show the two infrastructure projects and their public-source links.
6. Return to the portfolio, mention the deployment stack, and finish on Contact.

## Claims to avoid

- Do not quote traffic, revenue, customer, performance, or uptime figures without published evidence.
- Do not describe BackpropLab as a production ML framework or claim validated Transformer training.
- Do not imply that infrastructure unit tests prove real-VPS behavior.
- Do not show credentials, real applicant records, private repository URLs, production dashboards, or customer documents.

## Short fallback introduction

> I’m Mykyta Bozhenko, a Python backend and software engineer. I build APIs, relational data models, business workflows, and reliable deployment paths. This portfolio presents one private full-stack product and three public systems and infrastructure projects, with direct links to source code and clearly documented limitations.
