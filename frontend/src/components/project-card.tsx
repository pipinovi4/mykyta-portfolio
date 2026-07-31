import type { Project } from "@/content/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={project.featured ? "project-card project-card--featured" : "project-card"}
      aria-labelledby={`project-${project.index}`}
    >
      <div className="project-card__topline">
        <span className="mono-label">Project / {project.index}</span>
        <span className="project-card__status">
          <span aria-hidden="true" className="status-dot" />
          Case study in progress
        </span>
      </div>

      <div className={project.featured ? "project-card__featured-grid" : undefined}>
        <div className="project-card__content">
          <p className="project-card__kind">{project.kind}</p>
          <h3 id={`project-${project.index}`}>{project.title}</h3>
          <p className="project-card__summary">{project.summary}</p>
          <ul className="tag-list" aria-label={`${project.title} technology stack`}>
            {project.stack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

        {project.scope ? (
          <div className="system-panel" aria-label="FinControl engineering scope">
            <div className="system-panel__header">
              <span className="mono-label">System scope</span>
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
              <span>Application → data → operations</span>
              <span className="accent-text">Production</span>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
