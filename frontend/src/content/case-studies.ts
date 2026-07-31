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
    kind: "Open-source origin protection toolkit",
    summary: "A Linux toolkit for keeping origin-server firewall access synchronized with Cloudflare infrastructure.",
    role: "Software / Infrastructure Engineer",
    status: "Open source",
    responsibility: "Validation → Rollback",
    overview: "Cloudflare Edge Guard protects an origin server through synchronized Cloudflare IP ranges, UFW firewall rules, Nginx configuration, validation, rollback, and health checks.",
    problem: "An origin server placed behind Cloudflare still requires carefully controlled network access. Firewall configuration must stay current without turning every update into a risky manual operation.",
    responsibilities: ["Cloudflare IP synchronization", "UFW firewall rules", "Nginx configuration", "Dry-run workflow", "Validation and rollback", "Operational health checks"],
    architecture: ["Cloudflare IP sources", "Validation", "Firewall rule plan", "UFW / Nginx changes", "Health check / rollback"],
    decisions: [
      { title: "Dry-run first", description: "Planned changes can be inspected before they modify firewall or proxy configuration." },
      { title: "Validation gates", description: "Configuration checks guard the transition between generated rules and applied infrastructure state." },
      { title: "Rollback path", description: "Recovery is treated as part of the workflow rather than an afterthought." },
    ],
    capabilities: [
      { title: "IP synchronization", description: "Keeps trusted Cloudflare network ranges current." },
      { title: "Firewall configuration", description: "Builds controlled UFW rules for origin access." },
      { title: "Nginx integration", description: "Coordinates reverse-proxy configuration with the protection workflow." },
      { title: "Operational safeguards", description: "Dry runs, validation, rollback, and health checks reduce deployment risk." },
    ],
    metrics: [
      { value: "Open source", label: "Project status" },
      { value: "6", label: "Operational safeguards" },
      { value: "Dry-run", label: "Change preview" },
      { value: "Rollback", label: "Recovery path" },
    ],
    challenges: [
      { challenge: "Changing network ranges", solution: "Repeatable synchronization from Cloudflare IP sources." },
      { challenge: "Firewall risk", solution: "Dry-run output and validation before applying changes." },
      { challenge: "Failed configuration", solution: "Rollback and health checks built into the operational flow." },
    ],
    result: "The toolkit packages origin-protection operations into a repeatable workflow designed for validation and safe recovery.",
    stack: projectBySlug["cloudflare-edge-guard"].stack,
    gallery: projectBySlug["cloudflare-edge-guard"].gallery,
    imageSrc: sharedImageSrc,
    videoId: sharedVideoId,
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
