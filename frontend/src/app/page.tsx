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
            <span className="brand-mark" aria-hidden="true">MB</span>
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
              <p className="mono-label hero-location">Backend / Systems / Infrastructure</p>
            </div>

            <div className="hero-copy">
              <p className="eyebrow">{profile.role}</p>
              <h1 id="hero-heading">Building production systems, <span>AI integrations</span>, and reliable infrastructure.</h1>
              <div className="hero-support">
                <p>{profile.introduction}</p>
                <div className="hero-actions">
                  <a className="button button--primary" href="#work">View selected work <span aria-hidden="true">↓</span></a>
                  <a className="button button--secondary" href={`mailto:${profile.email}`}>Contact me <span aria-hidden="true">↗</span></a>
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
                <p className="eyebrow">Selected work / 2026</p>
                <h2 id="work-heading">Systems built for real operational work.</h2>
              </div>
              <p>A selection of backend systems, engineering tools, and infrastructure projects.</p>
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
                <h2 id="about-heading">Backend depth.<br />End-to-end context.</h2>
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
              <p className="about-lead">I focus on production-ready backend systems, REST APIs, internal platforms, AI integrations, and deployment infrastructure.</p>
              <p>My work spans application architecture, data modeling, business logic, service integration, containerized deployment, and Linux-based operations. I also work across frontend and systems tooling when a project requires an end-to-end engineering approach.</p>
              <div className="about-actions">
                <a className="text-link" href="#personal-overview">Watch overview <span aria-hidden="true">↓</span></a>
                <a className="button button--secondary" download href={profile.cv} target="_blank" rel="noreferrer">Download CV <span aria-hidden="true">↓</span></a>
              </div>
              <dl className="profile-facts">
                <div><dt>Primary focus</dt><dd>Backend systems</dd></div>
                <div><dt>Working across</dt><dd>Application → infrastructure</dd></div>
                <div><dt>Approach</dt><dd>Production-oriented</dd></div>
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
                <h2 id="stack-heading">Tools follow the system.</h2>
              </div>
              <p>Technology grouped by engineering responsibility—not by logo count.</p>
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
              <h2 id="infrastructure-heading">Engineering beyond application code.</h2>
              <p className="infrastructure-intro">Deployment automation, origin protection, Linux tooling, validation workflows, rollback mechanisms, and operational health checks.</p>
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
              <p className="eyebrow">Start a conversation</p>
              <h2 id="contact-heading">Let&apos;s build something <span>reliable.</span></h2>
            </div>
            <div className="contact-copy">
              <p>Available for backend engineering, AI integration, infrastructure, and production-ready web application work.</p>

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

              <nav className="contact-actions" aria-label="Contact channels">
                <a className="button button--light" href={`mailto:${profile.email}`}>Email me <span aria-hidden="true">↗</span></a>
                <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                <a className="text-link" href={profile.upwork} target="_blank" rel="noreferrer">Upwork <span aria-hidden="true">↗</span></a>
                <a className="text-link" href={profile.fiverr} target="_blank" rel="noreferrer">Fiverr <span aria-hidden="true">↗</span></a>
                <a className="text-link" href={profile.telegram.url} target="_blank" rel="noreferrer" aria-label={`Telegram ${profile.telegram.label}`}>Telegram <span aria-hidden="true">↗</span></a>
                <a className="text-link" href={profile.x.url} target="_blank" rel="noreferrer" aria-label={`X ${profile.x.label}`}>X <span aria-hidden="true">↗</span></a>
                {profile.linkedin ? <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a> : null}
                <a className="text-link" download href={profile.cv} target="_blank" rel="noreferrer">CV <span aria-hidden="true">↓</span></a>
              </nav>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-inner">
          <div><strong>{profile.name}</strong><span>{profile.role}</span></div>
          <p>© {new Date().getFullYear()} / Built for production</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
