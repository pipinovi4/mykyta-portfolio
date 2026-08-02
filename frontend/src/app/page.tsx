import Image from "next/image";
import Link from "next/link";
import { CursorGlow } from "@/components/cursor-glow";
import { ProjectCard } from "@/components/project-card";
import { ProjectMedia } from "@/components/project-media";
import { capabilities, infrastructureProjects, profile, projects } from "@/content/portfolio";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Home() {
  return (
    <>
      <CursorGlow />
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="site-shell header-inner">
          <a className="brand" href="#top" aria-label="Mykyta Bozhenko, back to top">
            <span
              className="size-8 shrink-0 border border-[var(--border-strong)] bg-[url('/media/mykyta-portrait.jpg')] bg-cover bg-[position:center_24%]"
              aria-hidden="true"
            />
            <span>{profile.name}</span>
          </a>

          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a className="header-cta" href={`mailto:${profile.email}`}>Let&apos;s talk <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="hero-grid" aria-hidden="true" />
          <div className="site-shell hero-inner">
            <div className="hero-meta-row">
              <p className="availability"><span className="status-dot" /> Available for selected work</p>
              <p className="mono-label hero-location">Backend Engineering / Software Systems</p>
            </div>

            <div className="hero-copy">
              <p className="eyebrow">{profile.role}</p>
              <h1 id="hero-heading">Backend systems from domain logic to <span>deployment.</span></h1>
              <div className="hero-support">
                <p>{profile.introduction}</p>
                <div className="hero-actions">
                  <a className="button button--primary" href="#work">View selected work <span aria-hidden="true">↓</span></a>
                  <a className="button button--secondary" href={`mailto:${profile.email}`}>Start a conversation <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </div>

            <div className="stack-marquee" aria-label="Core technology stack">
              <span className="mono-label">Core stack</span>
              <ul>
                {profile.coreStack.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-heading">
          <div className="site-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 id="work-heading">Applications, experiments, and infrastructure tools.</h2>
              </div>
              <p>Four projects showing production backend work, lower-level systems engineering, and reusable operational automation.</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => <ProjectCard project={project} key={project.title} />)}
            </div>
          </div>
        </section>

        <section className="section section--divided" id="about" aria-labelledby="about-heading">
          <div className="site-shell about-grid">
            <div className="about-profile">
              <div>
                <p className="eyebrow">Engineering profile</p>
                <h2 id="about-heading">Backend depth across<br />system boundaries.</h2>
              </div>
              <figure className="portrait-frame">
                <div className="portrait-frame__image">
                  <Image
                    alt="Portrait of Mykyta Bozhenko"
                    fill
                    priority={false}
                    sizes="(max-width: 700px) 100vw, 42vw"
                    src="/media/mykyta-portrait.jpg"
                  />
                </div>
                <figcaption>
                  <span>Mykyta Bozhenko</span>
                  <span>Backend / Software Engineer</span>
                </figcaption>
              </figure>
            </div>
            <div className="about-copy">
              <p className="about-lead">I work backend-first, with enough cross-stack context to own complete delivery paths.</p>
              <p>My work starts with application structure, data relationships, and business rules. I define clear boundaries between APIs, persistence, background processing, and external services. When delivery requires it, I also work with frontend integration, containers, Linux hosts, and deployment workflows—without treating those areas as substitutes for backend depth.</p>
              <div className="about-actions">
                <a className="text-link" href="#personal-overview">Watch overview <span aria-hidden="true">↓</span></a>
                <a className="button button--secondary" download href={profile.cv} target="_blank" rel="noreferrer">Download CV <span aria-hidden="true">↓</span></a>
              </div>
              <dl className="profile-facts">
                <div><dt>Primary focus</dt><dd>Backend architecture</dd></div>
                <div><dt>Working across</dt><dd>Data → integrations → deployment</dd></div>
                <div><dt>Approach</dt><dd>Explicit and production-oriented</dd></div>
              </dl>
            </div>
            <div className="about-overview-video">
              <ProjectMedia
                description="Background, engineering approach, and current focus"
                eyebrow="Personal overview"
                id="personal-overview"
                imageSrc="/media/project-visual.jpg"
                projectTitle="Mykyta Bozhenko personal overview"
                videoId={profile.overviewVideoId}
                videoTitle="Personal overview: background, engineering approach, and current focus"
              />
            </div>
          </div>
        </section>

        <section className="section" id="stack" aria-labelledby="stack-heading">
          <div className="site-shell">
            <div className="section-heading section-heading--compact">
              <div>
                <p className="eyebrow">Capabilities / Stack</p>
                <h2 id="stack-heading">Responsibilities before tools.</h2>
              </div>
              <p>Technologies grouped by the engineering problems they help solve.</p>
            </div>

            <div className="capability-list">
              {capabilities.map((capability) => (
                <article className="capability" key={capability.title}>
                  <span className="mono-label">{capability.number}</span>
                  <div><h3>{capability.title}</h3><p>{capability.description}</p></div>
                  <ul className="capability__tech" aria-label={`${capability.title} technologies`}>
                    {capability.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--divided" aria-labelledby="infrastructure-heading">
          <div className="site-shell infrastructure-grid">
            <div>
              <p className="eyebrow">Open source / Infrastructure</p>
              <h2 id="infrastructure-heading">Reusable tools for safer operations.</h2>
              <p className="infrastructure-intro">Focused Bash tooling for validating infrastructure changes, protecting access paths, and making single-host deployments easier to inspect and repeat.</p>
            </div>
            <div className="infrastructure-list">
              {infrastructureProjects.map((project, index) => (
                <article key={project.title}>
                  <div><span className="mono-label">0{index + 1}</span><span className="mono-label">{project.label}</span></div>
                  <h3><Link href={project.href}>{project.title} <span aria-hidden="true">→</span></Link></h3>
                  <p>{project.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="site-shell contact-grid">
            <div>
              <p className="eyebrow">Available for B2B work</p>
              <h2 id="contact-heading">Let&apos;s build something <span>reliable.</span></h2>
            </div>
            <div className="contact-copy">
              <p>Available for backend and software engineering, external integrations, and application infrastructure work through a registered Polish business.</p>

              <div className="mb-8 grid gap-px border border-black/20 bg-black/20 sm:grid-cols-2">
                <a className="group bg-[var(--accent)] p-4 transition-colors hover:bg-white/15 focus-visible:bg-white/15" href={`mailto:${profile.email}`}>
                  <span className="mb-2 block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-black/55">Email</span>
                  <span className="break-all text-sm font-semibold">{profile.email}</span>
                </a>
                <a className="group bg-[var(--accent)] p-4 transition-colors hover:bg-white/15 focus-visible:bg-white/15" href={profile.phoneHref}>
                  <span className="mb-2 block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-black/55">Phone</span>
                  <span className="text-sm font-semibold">{profile.phone}</span>
                </a>
              </div>
              <p className="mt-[-1.25rem]! mb-8! flex items-center gap-2 font-mono text-[0.66rem]! uppercase tracking-[0.08em] text-black/60">
                <span className="size-1.5 rounded-full bg-black/55" aria-hidden="true" />
                {profile.responseTime}
              </p>

              <aside className="mb-8 border border-black/25 p-5" aria-label="Business registration details">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="mb-2! font-mono text-[0.62rem]! font-semibold uppercase tracking-[0.12em] text-black/55">Registered business / Poland</p>
                    <h3 className="m-0 text-xl font-semibold tracking-[-0.025em]">{profile.business.name}</h3>
                  </div>
                  <span className="border border-black/25 px-3 py-1.5 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.1em]">B2B ready</span>
                </div>
                <dl className="grid gap-px bg-black/20 sm:grid-cols-3">
                  <div className="bg-[var(--accent)] p-3"><dt className="font-mono text-[0.58rem] uppercase tracking-[0.1em] text-black/55">Location</dt><dd className="mt-1 text-sm font-semibold">{profile.business.location} · {profile.business.availability}</dd><dd className="mt-1 font-mono text-[0.64rem] uppercase tracking-[0.08em] text-black/55">{profile.business.timezone}</dd></div>
                  <div className="bg-[var(--accent)] p-3"><dt className="font-mono text-[0.58rem] uppercase tracking-[0.1em] text-black/55">NIP</dt><dd className="mt-1 font-mono text-sm">{profile.business.nip}</dd></div>
                  <div className="bg-[var(--accent)] p-3"><dt className="font-mono text-[0.58rem] uppercase tracking-[0.1em] text-black/55">REGON</dt><dd className="mt-1 font-mono text-sm">{profile.business.regon}</dd></div>
                </dl>
                <p className="mt-4! mb-0! font-mono text-[0.68rem]! uppercase tracking-[0.08em] text-black/60">{profile.business.engagement}</p>
              </aside>

              <nav aria-label="Contact channels">
                <div className="grid gap-2 sm:grid-cols-2">
                  <a className="button button--light justify-between!" href={`mailto:${profile.email}`}>Send email <span aria-hidden="true">↗</span></a>
                  <a className="button justify-between! border-black/35! bg-black/8! text-[#08090b]! hover:bg-black/14!" href={profile.github} target="_blank" rel="noreferrer">View GitHub <span aria-hidden="true">↗</span></a>
                  <a className="button justify-between! border-white/35! bg-white/25! text-[#08090b]! hover:bg-white/35!" download href={profile.cv} target="_blank" rel="noreferrer">Download CV <span aria-hidden="true">↓</span></a>
                  <a className="button justify-between! border-[#0a66c2]! bg-[#0a66c2]! text-white! hover:border-[#084f96]! hover:bg-[#084f96]!" href={profile.linkedin} target="_blank" rel="noreferrer">View LinkedIn <span aria-hidden="true">↗</span></a>
                </div>

                <div className="mt-5 border-t border-black/20 pt-4">
                  <span className="mb-2 block font-mono text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-black/50">Other channels</span>
                  <div className="contact-actions gap-x-1! gap-y-0!">
                    <a className="text-link" href={profile.upwork} target="_blank" rel="noreferrer">Upwork <span aria-hidden="true">↗</span></a>
                    <a className="text-link" href={profile.fiverr} target="_blank" rel="noreferrer">Fiverr <span aria-hidden="true">↗</span></a>
                    <a className="text-link" href={profile.telegram.url} target="_blank" rel="noreferrer" aria-label={`Telegram ${profile.telegram.label}`}>Telegram <span aria-hidden="true">↗</span></a>
                    <a className="text-link" href={profile.x.url} target="_blank" rel="noreferrer" aria-label={`X ${profile.x.label}`}>X <span aria-hidden="true">↗</span></a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-inner">
          <div><strong>{profile.name}</strong><span>{profile.role}</span></div>
          <p>© {new Date().getFullYear()} / Designed and built by Mykyta Bozhenko</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
