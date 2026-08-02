import Link from "next/link";
import type { Project } from "@/content/portfolio";
import { ProjectGallery } from "@/components/project-gallery";
import { ProjectMedia } from "@/components/project-media";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={project.featured ? "project-card project-card--featured" : "project-card"}
      aria-labelledby={`project-${project.index}`}
    >
      <header className="project-card__header">
        <div className="project-card__identity">
          <span className="project-card__number" aria-hidden="true">{project.index}</span>
          <div>
            <span className="project-card__label">Selected project</span>
            <p className="project-card__kind">{project.kind}</p>
          </div>
        </div>
        <span className="project-card__status">
          <span aria-hidden="true" className={`status-dot status-dot--${project.statusTone}`} />
          {project.status}
        </span>
      </header>

      <div className={project.featured ? "project-card__featured-grid" : "project-card__body"}>
        <div className="project-card__content">
          <h3 id={`project-${project.index}`}>{project.title}</h3>
          <p className="project-card__summary">{project.summary}</p>
          <ProjectGallery images={project.gallery} projectTitle={project.title} />
        </div>

        <div className="project-card__visual-column">
          <ProjectMedia
            imageSrc={project.imageSrc}
            projectTitle={project.title}
            videoId={project.videoId}
          />

          {project.scope ? (
            <div className="system-panel" aria-label={`${project.title} engineering scope`}>
              <div className="system-panel__header">
                <span className="mono-label">Engineering scope</span>
                <span className="system-panel__signal" aria-hidden="true">•••</span>
              </div>
              <div className="system-flow">
                {project.scope.map((item, index) => (
                  <div className="system-node" key={item}>
                    <span className="system-node__index">0{index + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="system-panel__footer">
                <span>{project.lifecycle}</span>
                <span className="accent-text">{project.status}</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <footer className="project-card__footer">
        <span className="project-card__stack-label">Technology</span>
        <ul className="tag-list" aria-label={`${project.title} technology stack`}>
          {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <Link className="project-card__case-link" href={`/work/${project.slug}`}>
          View case study <span aria-hidden="true">→</span>
        </Link>
      </footer>
    </article>
  );
}
