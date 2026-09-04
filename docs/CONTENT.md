# Content and evidence guide

This document defines the public claims used by the portfolio. Prefer clear engineering language and evidence that a reviewer can inspect.

## Identity and positioning

- **Name:** Mykyta Bozhenko
- **Role:** Python Backend Engineer / Software Engineer
- **Website:** <https://mykytabozhenko.site>
- **GitHub:** <https://github.com/pipinovi4>
- **Email:** <mykyta.bozhenko.dev@gmail.com>
- **Résumé:** `/Mykyta_Bozhenko_CV.pdf`

The primary positioning is backend engineering: API design, relational data, business workflows, integrations, and delivery. C++, machine learning, frontend work, and infrastructure support that direction without replacing it.

## Evidence rules

- Use only project details confirmed in source code, documentation, or reproducible checks.
- Link public source directly from the project card and case study.
- Mark private code as private. Never imply that a public repository or demo exists when it does not.
- Use screenshots captured from the real application or repository. Do not substitute generic artwork, mock dashboards, or duplicated images.
- Do not publish customer records, credentials, private URLs, employer or client names, revenue, traffic, uptime, performance, or business outcomes without explicit approval and evidence.
- Date or remove numerical facts that can drift as a repository changes.
- Describe experimental work and unverified environments explicitly.

## Selected projects

### FinControl

- **Route:** `/work/fincontrol`
- **Status:** Private product
- **Evidence:** Sanitized local code review and a real sign-in interface capture
- **Public source:** None
- **Verified scope:** FastAPI API, PostgreSQL, SQLAlchemy, Alembic, role-based access, Next.js dashboard, Telegram workflow, RabbitMQ notifications, S3-compatible storage, Docker delivery

The case study may describe architecture and responsibilities, but it must not expose customer data, production credentials, private source URLs, or unsupported business results.

### BackpropLab

- **Route:** `/work/backprop-lab`
- **Status:** Experimental
- **Source:** <https://github.com/pipinovi4/backprop-lab-cpp>
- **Verified scope:** C++17 custom tensors, manual forward and backward passes, Eigen-backed operations, optimizers, tests, and experimental attention and Transformer-style components

Do not describe BackpropLab as a production framework. CUDA, Python bindings, general autograd, stable checkpoints, benchmarks, and validated large-scale training are not implemented.

### Cloudflare Edge Guard

- **Route:** `/work/cloudflare-edge-guard`
- **Status:** Version 2.0.0
- **Source:** <https://github.com/pipinovi4/cloudflare-edge-guard>
- **Verified checks:** syntax, ShellCheck, shfmt, and all 19 Bats tests pass

The toolkit coordinates staged Nginx and UFW changes around validated Cloudflare network ranges. Tests use fixtures and mocks; they do not prove behavior on every production host.

### Ubuntu VPS Bootstrap

- **Route:** `/work/ubuntu-vps-bootstrap`
- **Status:** Version 0.1.0
- **Source:** <https://github.com/pipinovi4/ubuntu-vps-bootstrap>
- **Verified checks:** ShellCheck, shfmt, and all 16 Bats tests pass

The toolkit supports guarded Ubuntu provisioning and locked Docker Compose delivery. It does not claim automated rollback, monitoring, backups, multi-host orchestration, high availability, or verified acceptance on every VPS provider.

## Writing style

- Use direct, natural English.
- Prefer responsibilities and trade-offs over tool lists.
- Keep paragraphs short enough to scan during a technical review.
- Avoid inflated language unless a specific fact supports it.
- State limitations in the same case study as the capability they qualify.
