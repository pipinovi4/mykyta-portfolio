export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  title: string;
  slug: string;
  kind: string;
  status: string;
  statusTone: "production" | "experimental" | "stable" | "early";
  lifecycle: string;
  summary: string;
  stack: readonly string[];
  index: string;
  featured?: boolean;
  scope?: readonly string[];
  imageSrc: string;
  videoId: string;
  gallery: readonly ProjectImage[];
};

export type Capability = {
  number: string;
  title: string;
  description: string;
  technologies: readonly string[];
};

export const profile = {
  name: "Mykyta Bozhenko",
  role: "Python Backend Engineer / Software Engineer",
  headline: "Backend systems from domain logic to deployment.",
  introduction:
    "I design APIs, data models, and business workflows, then connect them to the integrations and infrastructure required to operate them.",
  coreStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Linux", "Nginx"],
  email: "mykyta.bozhenko.dev@gmail.com",
  phone: "+48 732 761 454",
  phoneHref: "tel:+48732761454",
  github: "https://github.com/pipinovi4",
  website: "https://mykytabozhenko.site",
  linkedin: null as string | null,
  upwork: "https://www.upwork.com/freelancers/~0114d1ee96979f6918",
  fiverr: "https://www.fiverr.com/pipinx?public_mode=true",
  responseTime: "Usually replies within 24 hours",
  telegram: {
    label: "@prustolivgra",
    url: "https://t.me/prustolivgra",
  },
  x: {
    label: "@pipinovi4_",
    url: "https://x.com/pipinovi4_",
  },
  business: {
    name: "Mykyta Bozhenko IT & Delivery",
    location: "Kraków, Poland",
    availability: "Remote worldwide",
    timezone: "CET / CEST",
    nip: "6793345196",
    regon: "543036138",
    engagement: "Available for B2B contracts",
  },
  cv: "/Mykyta_Bozhenko_CV.pdf",
  overviewVideoId: "xz7RqTj7MbM",
} as const;

export const createProjectGallery = (projectTitle: string, count: number): readonly ProjectImage[] =>
  Array.from({ length: count }, (_, index) => ({
    src: "/media/project-visual.jpg",
    alt: `${projectTitle} project visual, frame ${index + 1}`,
    caption: `${projectTitle} — project view ${String(index + 1).padStart(2, "0")}.`,
  }));

const sharedProjectMedia = {
  imageSrc: "/media/project-visual.jpg",
  videoId: "xz7RqTj7MbM",
} as const;

export const projects: readonly Project[] = [
  {
    index: "01",
    title: "FinControl",
    slug: "fincontrol",
    kind: "Credit operations and workflow platform",
    status: "Production",
    statusTone: "production",
    lifecycle: "Application → data → operations",
    summary:
      "A role-based platform connecting credit applications, operational workflows, document storage, asynchronous notifications, reporting, and deployment automation.",
    stack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Next.js", "RabbitMQ", "Telegram Bot", "MinIO", "Docker", "GitHub Actions"],
    scope: ["Backend architecture", "REST API and RBAC", "Relational data model", "External integrations", "Operational frontend", "Deployment automation"],
    featured: true,
    gallery: createProjectGallery("FinControl", 4),
    ...sharedProjectMedia,
  },
  {
    index: "02",
    title: "BackpropLab",
    slug: "pipcore",
    kind: "Neural network systems engineering lab",
    status: "Experimental",
    statusTone: "experimental",
    lifecycle: "Tensor core → gradients → execution",
    summary:
      "A C++17 engineering lab for custom tensors, explicit gradients, optimizers, numerical components, and experimental Transformer-style execution.",
    stack: ["C++17", "Eigen", "OpenMP", "CMake", "Conan", "GoogleTest", "Python", "NumPy", "SentencePiece"],
    scope: ["Tensor API", "Manual gradients", "Layer architecture", "Optimizers", "Data pipelines", "Build and tests"],
    gallery: createProjectGallery("BackpropLab", 3),
    ...sharedProjectMedia,
  },
  {
    index: "03",
    title: "Cloudflare Edge Guard",
    slug: "cloudflare-edge-guard",
    kind: "Cloudflare origin protection toolkit",
    status: "Released / v2.0.0",
    statusTone: "stable",
    lifecycle: "Origin → validation → enforcement",
    summary:
      "A Bash toolkit for validating Cloudflare ranges and coordinating scoped Nginx and UFW changes without taking ownership of unrelated host configuration.",
    stack: ["Bash", "Nginx", "UFW", "Cloudflare", "systemd", "Bats", "ShellCheck", "GitHub Actions"],
    scope: ["Automation architecture", "Range validation", "Nginx configuration", "Scoped firewall rules", "Rollback boundaries", "Automated testing"],
    gallery: createProjectGallery("Cloudflare Edge Guard", 2),
    ...sharedProjectMedia,
  },
  {
    index: "04",
    title: "Ubuntu VPS Bootstrap",
    slug: "ubuntu-vps-bootstrap",
    kind: "Ubuntu provisioning and deployment toolkit",
    status: "Released / v0.1.0",
    statusTone: "early",
    lifecycle: "Server → provisioning → deployment",
    summary:
      "A Bash toolkit for guarded Ubuntu provisioning and locked, non-root delivery of Docker Compose applications.",
    stack: ["Bash", "Ubuntu", "Docker", "Docker Compose", "systemd", "UFW", "fail2ban", "Git", "Bats", "GitHub Actions"],
    scope: ["Automation architecture", "Server provisioning", "Docker environment", "Access safeguards", "Deployment workflow", "Automated testing"],
    gallery: createProjectGallery("Ubuntu VPS Bootstrap", 3),
    ...sharedProjectMedia,
  },
];

export const capabilities: readonly Capability[] = [
  {
    number: "01",
    title: "Backend architecture",
    description: "APIs, validation boundaries, business rules, authentication, and application-service design.",
    technologies: ["Python", "FastAPI", "Pydantic"],
  },
  {
    number: "02",
    title: "Data and asynchronous workflows",
    description: "Relational modeling, schema evolution, transactional operations, messaging, and background processing.",
    technologies: ["PostgreSQL", "SQLAlchemy", "Alembic", "RabbitMQ"],
  },
  {
    number: "03",
    title: "Deployment and Linux operations",
    description: "Container delivery, reverse proxies, host configuration, health checks, and infrastructure automation.",
    technologies: ["Docker", "Linux", "Nginx", "Bash", "Cloudflare"],
  },
  {
    number: "04",
    title: "Cross-stack and numerical engineering",
    description: "Product interfaces and lower-level numerical components when system boundaries require them.",
    technologies: ["TypeScript", "Next.js", "React", "C++17", "Eigen", "GoogleTest"],
  },
];

export const infrastructureProjects = [
  {
    title: "Cloudflare Edge Guard",
    summary: "Coordinates trusted proxy ranges, Nginx configuration, and scoped UFW rules through staged validation and rollback-aware updates.",
    label: "Origin protection toolkit",
    href: "/work/cloudflare-edge-guard",
  },
  {
    title: "Ubuntu VPS Bootstrap",
    summary: "Separates privileged host provisioning from locked, non-root application delivery with guarded SSH changes and health-checked Compose releases.",
    label: "Provisioning and deployment toolkit",
    href: "/work/ubuntu-vps-bootstrap",
  },
] as const;
