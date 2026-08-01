export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  title: string;
  slug: string;
  kind: string;
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
  headline: "Building production systems, AI integrations, and reliable infrastructure.",
  introduction:
    "I design and build backend systems, REST APIs, internal platforms, AI integrations, and the infrastructure required to deploy and operate them.",
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
    kind: "Production financial operations platform",
    summary:
      "Backend architecture, REST APIs, database design, business logic, frontend integration, deployment, and ongoing maintenance in one production system.",
    stack: ["FastAPI", "PostgreSQL", "SQLAlchemy 2.0", "Alembic", "Pydantic v2", "Next.js", "Docker"],
    scope: ["Backend architecture", "REST API", "Data model", "Deployment"],
    featured: true,
    gallery: createProjectGallery("FinControl", 4),
    ...sharedProjectMedia,
  },
  {
    index: "02",
    title: "Pipcore",
    slug: "pipcore",
    kind: "Neural network execution engine in C++",
    summary:
      "An educational machine-learning engine with manual forward and backward propagation, CPU computations, modular architecture, and automated tests.",
    stack: ["C++17", "Eigen", "CPU computation", "Automated tests"],
    scope: ["Engine architecture", "Forward pass", "Backpropagation", "Automated tests"],
    gallery: createProjectGallery("Pipcore", 3),
    ...sharedProjectMedia,
  },
  {
    index: "03",
    title: "Cloudflare Edge Guard",
    slug: "cloudflare-edge-guard",
    kind: "Open-source origin protection toolkit",
    summary:
      "Cloudflare IP synchronization, UFW rules, Nginx configuration, validation, rollback, and health checks for protected origin infrastructure.",
    stack: ["Bash", "Linux", "UFW", "Nginx", "Cloudflare"],
    scope: ["IP synchronization", "Firewall rules", "Validation", "Rollback"],
    gallery: createProjectGallery("Cloudflare Edge Guard", 2),
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
    href: "/work/cloudflare-edge-guard",
  },
  {
    title: "Ubuntu VPS Bootstrap",
    summary: "Automation for preparing a clean Ubuntu server and deploying applications.",
    label: "Deployment automation",
    href: "/work/ubuntu-vps-bootstrap",
  },
] as const;
