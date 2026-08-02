import { createProjectGallery, projects, type ProjectImage } from "@/content/portfolio";

export type CaseStudy = {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  role: string;
  status: string;
  responsibility: string;
  overview: string;
  problem: string;
  responsibilities: readonly string[];
  architecture: readonly string[];
  decisions: readonly { title: string; description: string }[];
  capabilities: readonly { title: string; description: string }[];
  metrics: readonly { value: string; label: string }[];
  challenges: readonly { challenge: string; solution: string }[];
  result: string;
  stack: readonly string[];
  gallery: readonly ProjectImage[];
  imageSrc: string;
  videoId: string;
  seoTitle?: string;
  metaDescription?: string;
  openGraphDescription?: string;
};

const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));
const sharedVideoId = "xz7RqTj7MbM";
const sharedImageSrc = "/media/project-visual.jpg";

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "fincontrol",
    title: "FinControl",
    kind: "Production financial operations platform",
    summary: "A backend-centered platform for financial operations, internal workflows, reporting, and operational communication.",
    role: "Backend / Full-stack Engineer",
    status: "Production",
    responsibility: "Architecture → Deployment",
    overview: "FinControl centralizes financial operations and administrative workflows in one production application. The work covers backend architecture, REST APIs, database design, business logic, frontend integration, deployment, and ongoing maintenance.",
    problem: "Operational information was distributed across manual workflows and disconnected tools. The system required a unified data model, controlled access, predictable business logic, and an interface suitable for regular operational use.",
    responsibilities: [
      "Backend architecture and application structure",
      "REST API design and implementation",
      "PostgreSQL data modeling",
      "Business workflows and validation",
      "Frontend integration",
      "Containerized deployment",
      "Production maintenance",
    ],
    architecture: ["Next.js application", "FastAPI REST API", "Service / domain layer", "SQLAlchemy 2.0", "PostgreSQL"],
    decisions: [
      { title: "Modular backend architecture", description: "Application structure follows business responsibilities to keep unrelated workflows separated and maintainable." },
      { title: "Explicit data boundaries", description: "SQLAlchemy models, validation schemas, and migration history provide controlled evolution of the production data model." },
      { title: "Business rules in the backend", description: "Validation and operational rules live with backend workflows instead of depending on interface visibility alone." },
      { title: "Repeatable deployment", description: "Containerized services and migration-aware releases make production changes predictable and maintainable." },
    ],
    capabilities: [
      { title: "Financial operations", description: "Core workflows and business rules for day-to-day financial operations." },
      { title: "User and team workflows", description: "Application flows structured around different operational responsibilities." },
      { title: "Reporting and filtering", description: "Structured access to operational records and reporting views." },
      { title: "Administrative workflows", description: "Internal tools for maintaining the platform and its operational data." },
    ],
    metrics: [
      { value: "Production", label: "Deployment status" },
      { value: "7", label: "Engineering responsibilities" },
      { value: "7", label: "Core technologies" },
      { value: "End-to-end", label: "Delivery scope" },
    ],
    challenges: [
      { challenge: "Complex business workflows", solution: "Explicit validation and reusable domain-level operations." },
      { challenge: "Evolving data model", solution: "Structured entities, relationships, and controlled Alembic migrations." },
      { challenge: "Production deployment", solution: "Containerized services, Nginx configuration, and repeatable releases." },
    ],
    result: "The platform was deployed to production and continues to be maintained, extended, and supported across application and infrastructure changes.",
    stack: projectBySlug.fincontrol.stack,
    gallery: projectBySlug.fincontrol.gallery,
    imageSrc: sharedImageSrc,
    videoId: sharedVideoId,
  },
  {
    slug: "pipcore",
    title: "Pipcore",
    kind: "Neural network execution engine in C++",
    summary: "An educational machine-learning engine focused on the mechanics of forward propagation, backward propagation, and modular numerical computation.",
    role: "Software Engineer",
    status: "Engineering project",
    responsibility: "Engine → Tests",
    overview: "Pipcore explores neural-network execution below high-level frameworks through a modular C++17 implementation using Eigen and CPU computation.",
    problem: "High-level machine-learning tools hide many of the mechanics that connect tensor operations, intermediate values, gradients, and parameter updates. The project makes that execution flow explicit.",
    responsibilities: ["Modular engine architecture", "Forward propagation", "Backward propagation", "CPU-based numerical operations", "Automated testing"],
    architecture: ["Input data", "Layer operations", "Forward pass", "Backward pass", "Parameter updates"],
    decisions: [
      { title: "Explicit propagation", description: "Forward and backward operations remain visible in the implementation so the full training flow can be inspected." },
      { title: "Modular components", description: "Engine responsibilities are separated to support clearer extension, testing, and reasoning." },
      { title: "Eigen-backed computation", description: "Eigen provides practical numerical primitives while the engine retains control over execution structure." },
    ],
    capabilities: [
      { title: "Forward execution", description: "Layer-by-layer evaluation of neural-network operations." },
      { title: "Backward propagation", description: "Manual gradient flow through the engine structure." },
      { title: "CPU computation", description: "Numerical execution implemented for CPU-based environments." },
      { title: "Automated tests", description: "Repeatable checks around engine behavior and numerical operations." },
    ],
    metrics: [
      { value: "C++17", label: "Runtime language" },
      { value: "CPU", label: "Execution target" },
      { value: "5", label: "Engine stages" },
      { value: "Tests", label: "Verification approach" },
    ],
    challenges: [
      { challenge: "Gradient flow", solution: "Explicit backward operations and controlled intermediate state." },
      { challenge: "Numerical structure", solution: "Eigen primitives wrapped in modular engine responsibilities." },
      { challenge: "Correctness", solution: "Automated tests for repeatable verification of engine behavior." },
    ],
    result: "The project provides a working educational foundation for exploring neural-network execution and the mechanics behind backpropagation.",
    stack: projectBySlug.pipcore.stack,
    gallery: projectBySlug.pipcore.gallery,
    imageSrc: sharedImageSrc,
    videoId: sharedVideoId,
  },
  {
    slug: "cloudflare-edge-guard",
    title: "Cloudflare Edge Guard",
    kind: "Infrastructure automation toolkit",
    summary: "Safer Cloudflare origin hardening through validated, two-phase infrastructure automation.",
    role: "System Designer / Infrastructure Engineer",
    status: "Version 2.0.0",
    responsibility: "Architecture → Validation",
    overview: "Cloudflare Edge Guard is a Bash-based operations toolkit for Ubuntu and Debian Nginx origins placed behind Cloudflare. It generates reverse-proxy and real-IP configuration, validates Cloudflare network ranges, and restricts inbound HTTP and HTTPS traffic through narrowly managed UFW rules. The implementation emphasizes staged enforcement, idempotent updates, rollback boundaries, and preservation of administrator-owned configuration.",
    problem: "Nginx, DNS, upstream health, TLS, and firewall state must be coordinated without prematurely making an origin unavailable. A malformed network response, invalid Nginx configuration, or destructive firewall replacement can interrupt access or remove unrelated administrator-managed policies. The toolkit therefore separates preparation from enforcement and treats external range data as untrusted input.",
    responsibilities: [
      "Infrastructure automation architecture and modular CLI design",
      "Security-oriented configuration parsing and validation",
      "Cloudflare IPv4 and IPv6 range synchronization",
      "Nginx reverse-proxy and real client IP generation",
      "Transactional, toolkit-scoped UFW rule management",
      "Failure handling, rollback boundaries, locking, and backups",
      "systemd scheduling examples and operational documentation",
      "Bats tests, ShellCheck, shfmt, and GitHub Actions validation",
    ],
    architecture: [
      "Operator / systemd timer",
      "Edge Guard CLI",
      "Cloudflare range validation",
      "Nginx render and validation",
      "Transactional UFW replacement",
      "Last-known-good state",
    ],
    decisions: [
      { title: "Separate preparation from enforcement", description: "The two-phase prepare and enforce workflow validates Nginx, upstream health, TLS, and Cloudflare routing before direct-origin access is restricted. The trade-off is deliberate operator sequencing during initial deployment." },
      { title: "Parse configuration without source or eval", description: "A strict literal KEY=value parser rejects unknown keys and executable shell syntax, keeping configuration files from becoming root-level programs. This intentionally limits flexible shell interpolation." },
      { title: "Own only digest-tagged firewall rules", description: "Managed UFW rules carry a cloudflare-edge-guard digest marker, creating an ownership boundary that preserves SSH and unrelated administrator policies." },
      { title: "Add new rules before removing old ones", description: "A replacement CIDR generation is installed and verified before older managed rules are removed. Both generations coexist briefly, but the valid allowlist remains available during the transition." },
      { title: "Fail closed on suspicious range data", description: "HTTPS, TLS constraints, CIDR syntax, normalization, non-empty responses, and minimum range counts prevent malformed or incomplete downloads from becoming the active allowlist." },
      { title: "Validate generated files before activation", description: "Nginx files are rendered temporarily, compared, backed up, installed only when changed, and activated only after nginx -t succeeds, reducing unsafe reloads and configuration churn." },
    ],
    capabilities: [
      { title: "Staged origin hardening", description: "Six explicit CLI workflows prepare, enforce, update, verify, inspect, and remove managed origin controls without combining every mutation into one command." },
      { title: "Validated range management", description: "Official Cloudflare IPv4 and optional IPv6 ranges are normalized, validated, deduplicated, tracked by digest, and retained as last-known-good filesystem state." },
      { title: "Nginx configuration generation", description: "The toolkit renders reverse-proxy and trusted real-IP configuration, supports Origin CA paths, restricts TLS protocols, and reloads only after validation." },
      { title: "Scoped firewall automation", description: "Cloudflare-only rules for ports 80 and 443 are added, verified, rolled back on failure, and removed by toolkit-specific ownership markers." },
      { title: "Operational safeguards", description: "Dry runs, process locking, timestamped backups, structured UTC logs, health checks, systemd scheduling, and scoped uninstall behavior support repeatable operations." },
    ],
    metrics: [
      { value: "6", label: "CLI commands" },
      { value: "6", label: "Focused shell modules" },
      { value: "19", label: "Automated Bats tests" },
      { value: "4", label: "CI validation layers" },
      { value: "2", label: "IP address families" },
      { value: "2", label: "Managed web ports" },
      { value: "2.0.0", label: "Repository version" },
      { value: "None", label: "Cloudflare API credentials" },
    ],
    challenges: [
      { challenge: "Avoiding origin lockout during firewall updates", solution: "Install and verify a new digest-tagged rule generation before removing the previous one, with rollback targeting only newly added rules." },
      { challenge: "Treating external network data as untrusted input", solution: "Enforce transport constraints, normalize responses, validate CIDR syntax and completeness, and reject suspicious Cloudflare range data before mutation." },
      { challenge: "Preventing root-level code execution through configuration", solution: "Use a deliberately restricted literal parser instead of sourcing or evaluating shell configuration files." },
      { challenge: "Coordinating Nginx changes without unsafe reloads", solution: "Render into temporary files, compare content, create backups, run nginx -t, and reload only after the validation gate passes." },
      { challenge: "Cleaning temporary resources without leaking traps", solution: "Move temporary operations into subshells with EXIT traps and cover the lifecycle correction with a regression test." },
    ],
    result: "Version 2.0.0 provides a coherent workflow for preparing, enforcing, updating, verifying, inspecting, and removing host-side Cloudflare origin controls. The repository combines validated external input, generated Nginx configuration, scoped firewall ownership, rollback-aware ordering, filesystem state, locking, backups, scheduled execution, and 19 isolated tests. It demonstrates defensive Linux automation and failure-aware system design without claiming undocumented production adoption or business results.",
    stack: projectBySlug["cloudflare-edge-guard"].stack,
    gallery: projectBySlug["cloudflare-edge-guard"].gallery,
    imageSrc: sharedImageSrc,
    videoId: sharedVideoId,
    seoTitle: "Cloudflare Edge Guard | Infrastructure Automation",
    metaDescription: "A Bash toolkit for staged Cloudflare origin hardening with validated Nginx configuration, scoped UFW rules, rollback handling, and tests.",
    openGraphDescription: "Cloudflare Edge Guard coordinates Nginx, UFW, and validated Cloudflare network ranges through a staged, failure-aware Linux automation workflow.",
  },
  {
    slug: "ubuntu-vps-bootstrap",
    title: "Ubuntu VPS Bootstrap",
    kind: "Deployment automation",
    summary: "Automation for preparing a clean Ubuntu VPS and establishing a repeatable application deployment foundation.",
    role: "Infrastructure Engineer",
    status: "Engineering toolkit",
    responsibility: "Server → Deployment",
    overview: "Ubuntu VPS Bootstrap collects the recurring work required to prepare and deploy applications on a clean Ubuntu server.",
    problem: "Manual server preparation is repetitive and easy to make inconsistent. A reusable bootstrap flow makes the initial environment easier to understand and repeat.",
    responsibilities: ["Ubuntu server preparation", "Application deployment setup", "Linux configuration", "Operational automation"],
    architecture: ["Clean Ubuntu VPS", "System preparation", "Application environment", "Deployment configuration", "Running service"],
    decisions: [
      { title: "Repeatable setup", description: "Common preparation steps are expressed as automation instead of undocumented shell history." },
      { title: "Operational clarity", description: "The flow keeps infrastructure responsibilities visible and easier to verify." },
    ],
    capabilities: [
      { title: "Server preparation", description: "Establishes the base operating environment for an application." },
      { title: "Deployment foundation", description: "Creates a consistent path from clean VPS to running service." },
    ],
    metrics: [
      { value: "Ubuntu", label: "Target platform" },
      { value: "4", label: "Responsibility areas" },
      { value: "5", label: "Core technologies" },
      { value: "Repeatable", label: "Setup model" },
    ],
    challenges: [
      { challenge: "Configuration drift", solution: "Repeatable preparation steps and explicit deployment configuration." },
      { challenge: "Manual setup", solution: "Automation for common server and application preparation work." },
    ],
    result: "The toolkit provides a reusable base for preparing Ubuntu VPS environments and deploying applications.",
    stack: ["Ubuntu", "Linux", "Docker", "Nginx", "Deployment tooling"],
    gallery: createProjectGallery("Ubuntu VPS Bootstrap", 2),
    imageSrc: sharedImageSrc,
    videoId: sharedVideoId,
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
