export type Project = {
  title: string;
  kind: string;
  summary: string;
  stack: readonly string[];
  index: string;
  featured?: boolean;
  scope?: readonly string[];
  imageSrc: string;
  videoId: string;
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
  headline: "Building production systems, AI integrations, and reliable infrastructure.",
  introduction:
    "I design and build backend systems, REST APIs, internal platforms, AI integrations, and the infrastructure required to deploy and operate them.",
  coreStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Linux", "Nginx"],
  email: "mykytabozhenko@gmail.com",
  github: "https://github.com/pipinovi4",
  website: "https://mykytabozhenko.site",
} as const;

const sharedProjectMedia = {
  imageSrc: "/media/project-visual.jpg",
  videoId: "xz7RqTj7MbM",
} as const;

export const projects: readonly Project[] = [
  {
    index: "01",
    title: "FinControl",
    kind: "Production financial operations platform",
    summary:
      "Backend architecture, REST APIs, database design, business logic, frontend integration, deployment, and ongoing maintenance in one production system.",
    stack: ["FastAPI", "PostgreSQL", "SQLAlchemy 2.0", "Alembic", "Pydantic v2", "Next.js", "Docker"],
    scope: ["Backend architecture", "REST API", "Data model", "Deployment"],
    featured: true,
    ...sharedProjectMedia,
  },
  {
    index: "02",
    title: "BackpropLab",
    kind: "Neural network engine in C++",
    summary:
      "An educational machine-learning engine with manual forward and backward propagation, CPU computations, modular architecture, and automated tests.",
    stack: ["C++17", "Eigen", "CPU computation", "Automated tests"],
    ...sharedProjectMedia,
  },
  {
    index: "03",
    title: "Cloudflare Edge Guard",
    kind: "Open-source origin protection toolkit",
    summary:
      "Cloudflare IP synchronization, UFW rules, Nginx configuration, validation, rollback, and health checks for protected origin infrastructure.",
    stack: ["Bash", "Linux", "UFW", "Nginx", "Cloudflare"],
    ...sharedProjectMedia,
  },
];

export const capabilities: readonly Capability[] = [
  {
    number: "01",
    title: "Backend systems",
    description: "Production APIs, data models, business logic, and service integration.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Pydantic"],
  },
  {
    number: "02",
    title: "Production & infrastructure",
    description: "Containerized applications, Linux operations, reverse proxies, and deployment automation.",
    technologies: ["Docker", "Linux", "Nginx", "Cloudflare", "VPS automation"],
  },
  {
    number: "03",
    title: "AI & numerical software",
    description: "AI integrations and lower-level numerical systems when the product calls for them.",
    technologies: ["PyTorch", "C++", "Eigen", "AI integrations"],
  },
  {
    number: "04",
    title: "Product integration",
    description: "Connecting backend platforms to usable, maintainable product interfaces.",
    technologies: ["TypeScript", "React", "Next.js", "Automation tooling"],
  },
];

export const infrastructureProjects = [
  {
    title: "Cloudflare Edge Guard",
    summary: "Origin protection with validation, rollback, and operational health checks.",
    label: "Open source toolkit",
  },
  {
    title: "Ubuntu VPS Bootstrap",
    summary: "Automation for preparing a clean Ubuntu server and deploying applications.",
    label: "Deployment automation",
  },
] as const;
