import Link from "next/link";
import { projects } from "@/content/portfolio";

function ActionIcon({ kind }: { kind: "arrow" | "source" | "play" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === "arrow" && <path d="M5 12h14m-6-6 6 6-6 6" />}
      {kind === "source" && <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />}
      {kind === "play" && <path d="m9 5 11 7-11 7V5Z" />}
    </svg>
  );
}

type ProjectActionLinks = {
  title: string;
  slug: string;
  caseStudyUrl?: string;
  repositoryUrl?: string;
  walkthroughUrl?: string;
  sourceUnavailableReason?: string;
};

type ProjectActionsProps = { projectSlug: string } | { project: ProjectActionLinks };

export function ProjectActions(props: ProjectActionsProps) {
  const existingProject = "projectSlug" in props
    ? projects.find(({ slug }) => slug === props.projectSlug)
    : undefined;
  const project: ProjectActionLinks | undefined = "project" in props
    ? props.project
    : existingProject && {
        ...existingProject,
        caseStudyUrl: `/work/${existingProject.slug}`,
        sourceUnavailableReason: "This project's source code is private.",
      };
  if (!project) return null;
  const sourceUnavailableReason = project.sourceUnavailableReason ?? "Source link not available yet.";

  return (
    <div className="project-actions" role="group" aria-label={`${project.title} actions`}>
      {project.caseStudyUrl ? (
        <Link className="project-action project-action--primary" href={project.caseStudyUrl}>
          Explore case study <ActionIcon kind="arrow" />
        </Link>
      ) : (
        <button className="project-action project-action--unavailable" type="button" disabled title="Case study not available yet" aria-describedby={`${project.slug}-case-study-status`}>
          Explore case study <ActionIcon kind="arrow" />
        </button>
      )}
      {project.repositoryUrl ? (
        <a className="project-action project-action--secondary" href={project.repositoryUrl} target="_blank" rel="noreferrer">
          <ActionIcon kind="source" /> View source
        </a>
      ) : (
        <button className="project-action project-action--unavailable" type="button" disabled title={sourceUnavailableReason} aria-describedby={`${project.slug}-source-status`}>
          <ActionIcon kind="source" /> View source
        </button>
      )}
      {project.walkthroughUrl ? (
        <a className="project-action project-action--secondary" href={project.walkthroughUrl} target="_blank" rel="noreferrer">
          <ActionIcon kind="play" /> Watch walkthrough
        </a>
      ) : (
        <button className="project-action project-action--unavailable" type="button" disabled title="Walkthrough not available yet" aria-describedby={`${project.slug}-walkthrough-status`}>
          <ActionIcon kind="play" /> Watch walkthrough
        </button>
      )}
      {!project.caseStudyUrl && <span className="sr-only" id={`${project.slug}-case-study-status`}>Case study not available yet.</span>}
      {!project.repositoryUrl && <span className="sr-only" id={`${project.slug}-source-status`}>{sourceUnavailableReason}</span>}
      {!project.walkthroughUrl && <span className="sr-only" id={`${project.slug}-walkthrough-status`}>Walkthrough not available yet.</span>}
    </div>
  );
}
