import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CursorGlow } from "@/components/cursor-glow";
import { ProjectGallery } from "@/components/project-gallery";
import { ProjectMedia } from "@/components/project-media";
import { caseStudies, getCaseStudy } from "@/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.seoTitle ?? study.title,
    description: study.metaDescription ?? study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${study.slug}`,
      title: study.seoTitle ?? `${study.title} — Engineering case study`,
      description: study.openGraphDescription ?? study.metaDescription ?? study.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const previousStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      <CursorGlow />
      <a className="skip-link" href="#case-content">Skip to content</a>
      <header className="case-header">
        <div className="site-shell case-header__inner">
          <Link href="/" className="brand"><span className="size-8 shrink-0 border border-[var(--border-strong)] bg-[url('/media/mykyta-portrait.jpg')] bg-cover bg-[position:center_24%]" aria-hidden="true" /><span>Mykyta Bozhenko</span></Link>
          <Link href="/#work" className="case-header__back">← Selected work</Link>
        </div>
      </header>

      <main id="case-content">
        <section className="case-hero">
          <div className="site-shell case-hero__grid">
            <div className="case-hero__copy">
              <p className="eyebrow">Case study / {study.status}</p>
              <h1>{study.title}</h1>
              <p className="case-hero__kind">{study.kind}</p>
              <p className="case-hero__summary">{study.summary}</p>
              <dl className="case-facts">
                <div><dt>Role</dt><dd>{study.role}</dd></div>
                <div><dt>Status</dt><dd>{study.status}</dd></div>
                <div><dt>Responsibility</dt><dd>{study.responsibility}</dd></div>
              </dl>
            </div>
            <ProjectMedia imageSrc={study.imageSrc} projectTitle={study.title} videoId={study.videoId} />
          </div>
        </section>

        <section className="case-section">
          <div className="site-shell case-two-column">
            <div><p className="eyebrow">01 / Overview</p><h2>Product context</h2></div>
            <div className="case-prose"><p className="case-lead">{study.overview}</p><h3>The problem</h3><p>{study.problem}</p></div>
          </div>
        </section>

        <section className="case-section case-section--surface">
          <div className="site-shell">
            <div className="case-section__heading"><div><p className="eyebrow">02 / Responsibility</p><h2>My responsibility</h2></div><p>From application structure to deployment and operational support.</p></div>
            <div className="responsibility-grid">
              <ol>{study.responsibilities.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
              <div className="responsibility-flow" aria-label={`${study.title} responsibility flow`}>
                {study.architecture.slice(0, 4).map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="site-shell">
            <div className="case-section__heading"><div><p className="eyebrow">03 / Architecture</p><h2>System architecture</h2></div><p>A simplified view of the project’s primary engineering flow.</p></div>
            <div className="architecture-flow">
              {study.architecture.map((item, index) => <div className="architecture-node" key={item}><span>Layer 0{index + 1}</span><strong>{item}</strong>{index < study.architecture.length - 1 ? <i aria-hidden="true">↓</i> : null}</div>)}
            </div>
          </div>
        </section>

        <section className="case-section case-section--surface">
          <div className="site-shell">
            <div className="case-section__heading"><div><p className="eyebrow">04 / Decisions</p><h2>Engineering decisions</h2></div><p>Technology choices described through engineering responsibility rather than tool names alone.</p></div>
            <div className="decision-grid">{study.decisions.map((decision, index) => <article key={decision.title}><span className="mono-label">0{index + 1}</span><h3>{decision.title}</h3><p>{decision.description}</p></article>)}</div>
          </div>
        </section>

        <section className="case-section">
          <div className="site-shell">
            <div className="case-section__heading"><div><p className="eyebrow">05 / Capabilities</p><h2>Key capabilities</h2></div><p>A focused view of the system instead of an exhaustive feature list.</p></div>
            <div className="capability-card-grid">{study.capabilities.map((capability, index) => <article key={capability.title}><span>0{index + 1}</span><h3>{capability.title}</h3><p>{capability.description}</p></article>)}</div>
          </div>
        </section>

        <section className="case-section case-section--surface">
          <div className="site-shell">
            <div className="case-section__heading"><div><p className="eyebrow">06 / Metrics</p><h2>Technical facts</h2></div><p>Concrete, verifiable facts drawn from the project scope and implementation.</p></div>
            <dl className="metrics-grid">{study.metrics.map((metric) => <div key={metric.label}><dt>{metric.value}</dt><dd>{metric.label}</dd></div>)}</dl>
          </div>
        </section>

        <section className="case-section">
          <div className="site-shell">
            <div className="case-section__heading"><div><p className="eyebrow">07 / Walkthrough</p><h2>Project gallery</h2></div><p>Open any frame to inspect the project presentation in the full-screen viewer.</p></div>
            <ProjectGallery images={study.gallery} projectTitle={study.title} />
          </div>
        </section>

        <section className="case-section case-section--surface">
          <div className="site-shell case-two-column">
            <div><p className="eyebrow">08 / Challenges</p><h2>Challenges and solutions</h2></div>
            <div className="challenge-list">{study.challenges.map(({ challenge, solution }, index) => <article key={challenge}><span className="mono-label">0{index + 1}</span><div><h3>{challenge}</h3><p>→ {solution}</p></div></article>)}</div>
          </div>
        </section>

        <section className="case-result">
          <div className="site-shell case-result__grid"><div><p className="eyebrow">09 / Result</p><h2>Result</h2></div><div><p>{study.result}</p><ul className="tag-list">{study.stack.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
        </section>

        <nav className="next-project" aria-label="Project navigation">
          <div className="site-shell next-project__inner">
            <div className="next-project__item next-project__item--previous"><span className="mono-label">Previous project</span><Link href={`/work/${previousStudy.slug}`}><span aria-hidden="true">←</span> {previousStudy.title}</Link></div>
            <Link className="next-project__back" href="/#work">Back to selected work</Link>
            <div className="next-project__item next-project__item--next"><span className="mono-label">Next project</span><Link href={`/work/${nextStudy.slug}`}>{nextStudy.title} <span aria-hidden="true">→</span></Link></div>
          </div>
        </nav>
      </main>
    </>
  );
}
