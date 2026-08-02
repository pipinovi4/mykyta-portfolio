import { projects, type ProjectImage } from "@/content/portfolio";

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
    kind: "Credit operations and workflow platform",
    summary: "A role-based platform for managing credit applications from guided intake through operational processing, reporting, and follow-up.",
    role: "Backend / Full-stack Engineer",
    status: "Production",
    responsibility: "Architecture → Deployment",
    overview: "FinControl centralizes credit applications, processing workflows, payment records, reminders, document handling, and operational reporting. Internal users work through a role-aware Next.js portal, while applicants follow a guided Telegram workflow. The platform coordinates an asynchronous FastAPI backend, PostgreSQL, object storage, RabbitMQ notifications, transactional email, and containerized delivery behind a consistent domain model.",
    problem: "Credit processing is not a single CRUD workflow. The system must preserve incomplete applications, handle sensitive documents, assign work between administrators, workers, brokers, and team leads, track credit status and payments, and notify people when action is required. It also needs to handle session expiry, cross-role authorization, interrupted Telegram conversations, concurrent background jobs, schema migrations, and failed deployments.",
    responsibilities: [
      "Backend architecture, service boundaries, and asynchronous API design",
      "Authentication, sessions, invitations, identity flows, and role-based access",
      "Relational data modeling and Alembic-managed schema evolution",
      "Application, credit, payment, reminder, dashboard, and analysis workflows",
      "Telegram, RabbitMQ, Mailgun, PDF, and S3-compatible storage integrations",
      "Role-aware Next.js dashboards and operational interfaces",
      "Docker-based local and production environments",
      "Component builds, remote deployment, migrations, and health verification",
    ],
    architecture: [
      "Next.js portal / Telegram bot",
      "FastAPI API and RBAC",
      "Domain services and jobs",
      "PostgreSQL / MinIO storage",
      "RabbitMQ / Mailgun integrations",
      "Docker delivery and health checks",
    ],
    decisions: [
      { title: "Separate the web API and Telegram bot", description: "The API owns business state and HTTP workflows while the bot manages conversational UI state. Independent lifecycles improve separation but require shared contracts and coordinated delivery." },
      { title: "Use asynchronous FastAPI and SQLAlchemy", description: "Database, storage, messaging, and external HTTP operations use non-blocking I/O. This aligns the API with bot and RabbitMQ clients while making resource and transaction boundaries more explicit." },
      { title: "Enforce access in backend dependencies and services", description: "Administrators, workers, brokers, and team leads share data with different scopes. Central role checks keep authorization independent from what the frontend happens to display." },
      { title: "Decouple Telegram notifications with RabbitMQ", description: "User-facing API requests do not wait for Telegram delivery. Primary, retry, and dead-letter flows introduce eventual-consistency concerns but provide explicit failure handling." },
      { title: "Store documents outside PostgreSQL", description: "Application files live in S3-compatible object storage while relational metadata remains in PostgreSQL. Startup validation checks storage availability, although database and object state still require coordination." },
      { title: "Deploy immutable component images", description: "Frontend, backend, and bot images are built independently and tagged from source history. Remote Compose delivery remains straightforward, while larger-scale resilience would require infrastructure beyond the current host model." },
    ],
    capabilities: [
      { title: "Identity and access management", description: "Cookie-based access and refresh sessions, invitations, verification, password recovery, email changes, and backend-enforced permissions support four operational roles." },
      { title: "Application intake and documents", description: "A stateful Telegram wizard supports progress, editing, review, draft recovery, file submission, backend submission, and controlled S3-compatible document access." },
      { title: "Credit operations", description: "Credit creation, statuses, comments, payment items, balances, filtering, pagination, soft deletion, restoration, and restricted hard deletion support the operational lifecycle." },
      { title: "Dashboards and work assignment", description: "Role-specific dashboards, analytics, searchable tables, assignment workflows, team-lead relationships, and lazy result loading provide scoped operational visibility." },
      { title: "Notifications and reminders", description: "RabbitMQ-backed Telegram delivery uses retry and dead-letter paths, while bounded reminder jobs lock due rows, send Mailgun email, and persist completion or overdue state." },
      { title: "Deployment and operations", description: "Docker environments, component-aware image builds, registry publishing, remote rollout, Alembic migrations, health polling, container status, and failure logs form the delivery workflow." },
    ],
    metrics: [
      { value: "193", label: "Static FastAPI routes" },
      { value: "18", label: "SQLAlchemy tables" },
      { value: "42", label: "Alembic migrations" },
      { value: "33", label: "Backend test definitions" },
      { value: "10", label: "Frontend page routes" },
      { value: "4", label: "Operational roles" },
      { value: "8", label: "Development services" },
      { value: "3", label: "Application images" },
    ],
    challenges: [
      { challenge: "Maintaining authorization across operational roles", solution: "Combine role enums, authenticated-user dependencies, scoped services, role-specific endpoints, and corresponding frontend views instead of relying on UI visibility alone." },
      { challenge: "Preserving a long Telegram application workflow", solution: "Separate progress, edit, and review modes, persist drafts and session state, restore interrupted flows, and centralize field-level validation." },
      { challenge: "Delivering notifications outside API response time", solution: "Publish messages through RabbitMQ for independent bot consumption, using retry queues with TTL and a dead-letter path for permanent failures." },
      { challenge: "Processing time-based reminders safely", solution: "Select bounded batches with FOR UPDATE SKIP LOCKED, validate related data, send email, and persist completed or overdue terminal states." },
      { challenge: "Deploying schema and application changes together", solution: "Build immutable images, roll out updated services, wait for backend readiness, run Alembic migrations, verify internal and public health, and expose logs on failure." },
    ],
    result: "FinControl implements a broad credit-operations workflow spanning application intake, document storage, credit processing, payment tracking, reminders, analytics, role-specific dashboards, and administration. Browser-based internal operations and a Telegram applicant flow share PostgreSQL state, object storage, asynchronous notifications, and transactional email. The project demonstrates backend domain modeling, async Python development, access control, workflow state management, integration work, operational frontend delivery, and deployment automation without relying on unverified claims about traffic or business scale.",
    stack: projectBySlug.fincontrol.stack,
    gallery: projectBySlug.fincontrol.gallery,
    imageSrc: sharedImageSrc,
    videoId: sharedVideoId,
    seoTitle: "FinControl — Credit Operations Platform",
    metaDescription: "A role-based credit operations platform with FastAPI, Next.js, PostgreSQL, Telegram workflows, object storage, RabbitMQ, and automated deployment.",
    openGraphDescription: "FinControl connects guided credit intake, role-aware operations, document storage, asynchronous notifications, and deployment automation in one platform.",
  },
  {
    slug: "pipcore",
    title: "BackpropLab",
    kind: "Neural network systems engineering lab",
    summary: "Building neural-network mechanics from tensors to experimental Transformer-style execution in C++17.",
    role: "Software Engineer",
    status: "Experimental",
    responsibility: "Tensor core → Model execution",
    overview: "BackpropLab is an experimental CPU-based neural-network codebase built to examine what happens below high-level ML frameworks. It implements a custom multidimensional tensor type, explicit layer gradients, optimizers, attention components, model compositions, and dataset pipelines. The project deliberately exposes numerical and architectural constraints instead of presenting an incomplete framework as a production ML platform.",
    problem: "High-level ML frameworks hide tensor memory layout, shape transformations, gradient equations, optimizer state, and the sequencing of forward and backward execution. BackpropLab organizes these mechanisms into a coherent C++17 codebase without a general autograd engine, requiring explicit shape logic, cached forward state, parameter traversal, dataset conversion, and manually implemented gradients for each component.",
    responsibilities: [
      "Custom tensor storage, indexing, shape, and numerical API design",
      "Explicit forward and backward propagation for neural-network components",
      "Loss functions, learning-rate schedules, clipping, and weight decay",
      "SGD, Adam, and RMSprop optimizer implementation",
      "Attention, residual, normalization, and Transformer-style composition",
      "Tokenization, BPE, vocabulary persistence, and dataset tooling",
      "CMake, Conan, Eigen, OpenMP, and GoogleTest integration",
      "Testing, repository refactoring, and engineering documentation",
    ],
    architecture: [
      "Datasets / CLI context",
      "Python tooling / C++ loaders",
      "Custom Tensor<T> core",
      "Layers, losses, and attention",
      "Manual backward execution",
      "Optimizers / weight files",
    ],
    decisions: [
      { title: "Use a custom contiguous tensor representation", description: "Flat std::vector storage with explicit dimensions and strides makes memory layout, indexing, and transformations visible. The project must therefore own shape inference, broadcasting, bounds checks, and invariant enforcement." },
      { title: "Implement backward propagation per layer", description: "Explicit forward and backward methods expose gradient equations and cached state without a computation graph. Each new operation consequently requires its own derived and numerically validated gradient path." },
      { title: "Use C++ templates and .tpp implementations", description: "Template-based APIs support multiple numeric types at compile time, with the trade-off of broader compilation dependencies, harder diagnostics, and several remaining generic-type inconsistencies." },
      { title: "Delegate matrix multiplication to Eigen", description: "Mapping contiguous tensor memory into Eigen matrices preserves the custom architecture without reimplementing a mature matrix kernel, while retaining conversion and shape responsibilities in the tensor layer." },
      { title: "Expose parameters and gradients to optimizers", description: "Layers calculate gradients while SGD, Adam, and RMSprop share a parameter-update contract. Correctness depends on complete, consistently ordered parameter traversal across model compositions." },
      { title: "Keep the first backend CPU-based", description: "C++17, Eigen, and optional OpenMP keep numerical execution inspectable before GPU complexity. CUDA is not implemented, and parallel directives are experiments rather than benchmark claims." },
    ],
    capabilities: [
      { title: "Tensor and numerical operations", description: "Contiguous multidimensional storage supports indexing, arithmetic, reductions, slicing, concatenation, reshaping, transposition, softmax, argmax, and Eigen-backed matrix multiplication." },
      { title: "Neural-network building blocks", description: "Dense and embedding layers, seven activation types, four losses, normalization, residual composition, feed-forward processing, and experimental multi-head attention expose explicit forward and backward behavior." },
      { title: "Optimization and persistence", description: "SGD, Adam, and RMSprop work with learning-rate schedules, weight decay, gradient clipping, reset behavior, and local optimizer or parameter state persistence." },
      { title: "Language and dataset tooling", description: "Tokenization, BPE, special-token handling, vocabulary serialization, Python preparation, and C++ loaders cover MNIST, AG News, WikiText, and vocabulary data." },
      { title: "Experimental model execution", description: "Examples include MNIST, embeddings, attention, Transformer-style training, greedy token generation, and an interactive CLI; attention backward propagation and end-to-end correctness remain experimental." },
    ],
    metrics: [
      { value: "124", label: "Active GoogleTest cases" },
      { value: "123/124", label: "Current local CTest result" },
      { value: "12", label: "Test source files" },
      { value: "~10.2k", label: "C++ and test lines" },
      { value: "7", label: "Activation types" },
      { value: "4", label: "Loss types" },
      { value: "3", label: "Optimizers" },
      { value: "CPU", label: "Execution backend" },
    ],
    challenges: [
      { challenge: "Representing multidimensional data without an ML tensor library", solution: "Implement contiguous storage, dimensions, strides, indexing, transformations, reductions, broadcasting rules, and Eigen-backed dot products inside Tensor<T>." },
      { challenge: "Training without automatic differentiation", solution: "Each layer caches forward state, computes its own gradients, and exposes parameter and gradient references while models sequence backward execution explicitly." },
      { challenge: "Integrating trainable components with common optimizers", solution: "A shared parameter/gradient contract lets SGD, Adam, and RMSprop apply schedules, weight decay, clipping, and persisted state independently of gradient production." },
      { challenge: "Handling attention shapes, masks, and parallel state", solution: "Query, key, and value projections, head splitting, masking, concatenation, and backward logic are implemented but remain experimental because a masked-attention test currently fails." },
      { challenge: "Connecting model code to reproducible datasets", solution: "Python preparation utilities produce local artifacts consumed by C++ loaders, with tokenization, vocabulary persistence, and weight files completing the experimental workflow." },
    ],
    result: "BackpropLab provides a working C++ foundation for custom tensor operations, explicit neural-network gradients, optimizers, tokenization, dataset loading, and several model compositions. The current local CTest baseline passes 123 of 124 active cases; a masked multi-head-attention case still fails, so attention backward propagation and the end-to-end Transformer path remain experimental. The project demonstrates low-level C++ implementation, numerical API design, manual gradient reasoning, build integration, testing, and transparent documentation of engineering limitations.",
    stack: projectBySlug.pipcore.stack,
    gallery: projectBySlug.pipcore.gallery,
    imageSrc: sharedImageSrc,
    videoId: sharedVideoId,
    seoTitle: "BackpropLab — C++ Neural Network Engineering",
    metaDescription: "A C++17 neural-network lab with custom tensors, manual backpropagation, optimizers, attention components, tests, and model experiments.",
    openGraphDescription: "BackpropLab explores neural-network internals through custom C++ tensors, explicit gradients, optimizers, and experimental Transformer components.",
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
    kind: "Infrastructure automation toolkit",
    summary: "Repeatable Ubuntu server provisioning and guarded Docker Compose deployment in Bash.",
    role: "Project Author / Infrastructure Engineer",
    status: "Version 0.1.0",
    responsibility: "Provisioning → Deployment",
    overview: "Ubuntu VPS Bootstrap is an open-source Bash toolkit for preparing Ubuntu Server 22.04 or 24.04 hosts and deploying Docker Compose applications without a larger configuration-management platform. It combines package and Docker installation, deployment-user setup, firewall rules, baseline hardening, Git delivery, health checking, and conservative cleanup. The implementation prioritizes explicit configuration, rerunnable operations, and safeguards around changes that could affect remote access.",
    problem: "Preparing a VPS requires coordinated changes to package sources, users, groups, directories, firewall access, services, security configuration, deployment state, and application verification. Unconditional scripts can become destructive when host state already exists, while incorrect SSH or UFW changes can lock an operator out. Deployment also requires concurrency control, predictable Git synchronization, Compose validation, and an application-level health signal.",
    responsibilities: [
      "Modular infrastructure automation architecture in Bash",
      "Ubuntu platform, package, architecture, swap, and sysctl validation",
      "Docker Engine, Buildx, and Compose plugin installation",
      "Non-root deployment user and application-directory provisioning",
      "UFW, fail2ban, unattended upgrades, logrotate, and guarded SSH hardening",
      "Restricted configuration parsing and managed-file lifecycle",
      "Locked Git and Docker Compose deployment with HTTP health validation",
      "Bats tests, container smoke testing, ShellCheck, shfmt, and GitHub Actions",
    ],
    architecture: [
      "Bootstrap / deploy / uninstall CLI",
      "Restricted configuration parser",
      "Dry-run runner and state checks",
      "Ubuntu system modules",
      "Git / Docker Compose delivery",
      "Health check and metadata",
    ],
    decisions: [
      { title: "Use modular Bash instead of one provisioning script", description: "System, Docker, users, firewall, security, configuration, and shared behavior remain inspectable and testable with few dependencies. Bash is less declarative than dedicated configuration-management platforms and remains OS-sensitive." },
      { title: "Parse configuration without shell evaluation", description: "Only allowlisted keys and validated literal values are accepted, while command substitution and backticks are rejected. The intentionally conservative format does not support advanced shell or every .env convention." },
      { title: "Combine dry-run execution with state checks", description: "Host-level package, network, authentication, and file changes can be previewed, and existing state supports safer reruns. Dry runs still cannot predict every external package, service, or network failure." },
      { title: "Keep SSH hardening opt-in and guarded", description: "The deployment user, authorized key, ownership, permissions, and generated SSH configuration are validated before reload. Testing a second live connection remains an explicit human responsibility." },
      { title: "Use fast-forward-only Git with deployment locking", description: "flock prevents overlapping releases and pull --ff-only avoids implicit merges or history rewriting. Diverged branches stop deployment and require manual repository recovery." },
      { title: "Keep uninstall intentionally conservative", description: "Only four named toolkit-managed files are removed, preserving users, Docker state, application data, firewall rules, volumes, and swap. Full host restoration remains outside the uninstall contract." },
    ],
    capabilities: [
      { title: "Server bootstrap", description: "Validates Ubuntu and CPU architecture, handles root execution, installs operational packages, and creates a default restricted configuration without overwriting existing settings." },
      { title: "Docker environment", description: "Configures Docker’s signed Ubuntu repository, validates its key, installs Engine, containerd, Buildx, and Compose, and activates the service through systemd." },
      { title: "Users and host security", description: "Creates a non-root deployment account and directories, configures UFW, fail2ban, unattended upgrades, optional swap, sysctl, log rotation, and guarded SSH hardening." },
      { title: "Application deployment", description: "Enforces the deployment identity, locks runs, clones or fast-forwards Git, validates Compose, pulls or builds services, starts them, checks HTTP health, and records release metadata." },
      { title: "Operational safeguards", description: "Dry-run output, idempotent state checks, timestamped managed-file backups, limited uninstall behavior, automated unit tests, and container smoke validation support repeatable operations." },
    ],
    metrics: [
      { value: "3", label: "Executable workflows" },
      { value: "7", label: "Focused shell modules" },
      { value: "17", label: "Configuration keys" },
      { value: "16", label: "Bats unit tests" },
      { value: "2", label: "Tested Ubuntu releases" },
      { value: "2", label: "CPU architectures" },
      { value: "4", label: "Quality categories" },
      { value: "0.1.0", label: "Documented release" },
    ],
    challenges: [
      { challenge: "Preventing configuration from becoming a shell execution vector", solution: "Parse configuration line by line, accept only known uppercase keys, reject executable syntax, and apply type-specific validation." },
      { challenge: "Avoiding SSH lockout during host hardening", solution: "Keep hardening disabled by default and validate the deployment user, authorized keys, ownership, modes, and sshd configuration before reload." },
      { challenge: "Making provisioning safe to rerun", solution: "Detect existing users, directories, swap, repository keys, and identical managed files while backing up changed system configuration." },
      { challenge: "Preventing inconsistent deployments", solution: "Require the configured non-root user, acquire an exclusive lock, validate Compose, and permit only fast-forward Git updates." },
      { challenge: "Distinguishing process completion from application health", solution: "Poll an HTTP endpoint after Compose startup, return failure when unhealthy, and include the latest service logs for diagnosis." },
    ],
    result: "Ubuntu VPS Bootstrap delivers a documented workflow for provisioning an Ubuntu VPS and deploying a single-host Docker Compose application. It supports guarded configuration, repeatable server setup, privilege separation, Git-based updates, health checks, metadata, automated unit and smoke tests, and limited removal of managed host files. Automated rollback, application backups, monitoring integration, multi-host orchestration, high availability, and verified real-VPS acceptance results are intentionally not claimed.",
    stack: projectBySlug["ubuntu-vps-bootstrap"].stack,
    gallery: projectBySlug["ubuntu-vps-bootstrap"].gallery,
    imageSrc: sharedImageSrc,
    videoId: sharedVideoId,
    seoTitle: "Ubuntu VPS Bootstrap | Infrastructure Automation",
    metaDescription: "A Bash toolkit by Mykyta Bozhenko for repeatable Ubuntu provisioning, Docker Compose deployment, validation, and guarded server configuration.",
    openGraphDescription: "A modular Ubuntu provisioning and Docker Compose deployment toolkit built around explicit configuration, operational safeguards, and automated checks.",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
