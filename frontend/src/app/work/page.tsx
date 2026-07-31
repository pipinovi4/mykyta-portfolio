import type { Metadata } from "next";
import Link from "next/link";
import { CursorGlow } from "@/components/cursor-glow";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Backend systems, engineering tools, and infrastructure projects by Mykyta Bozhenko.",
};

export default function WorkPage() {
  return (
    <>
      <CursorGlow />
      <header className="case-header"><div className="site-shell case-header__inner"><Link href="/" className="brand"><span className="brand-mark" aria-hidden="true">MB</span><span>Mykyta Bozhenko</span></Link><Link href="/">← Home</Link></div></header>
      <main>
        <section className="work-index-hero"><div className="site-shell"><p className="eyebrow">Project catalog</p><h1>Selected work.</h1><p>Production systems, engineering tools, and infrastructure projects.</p></div></section>
        <section className="section"><div className="site-shell project-grid">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div></section>
      </main>
    </>
  );
}
