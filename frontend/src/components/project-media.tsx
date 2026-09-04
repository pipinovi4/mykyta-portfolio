import Image from "next/image";

type ProjectMediaProps = {
  projectTitle: string;
  imageSrc: string;
  imageAlt?: string;
  eyebrow?: string;
  description?: string;
};

export function ProjectMedia({
  projectTitle,
  imageSrc,
  eyebrow = "Project evidence",
  description = "Captured from the project",
  imageAlt = `${projectTitle} project evidence`,
}: ProjectMediaProps) {
  return (
    <div className="project-media">
      <figure className="project-media__poster">
        <Image
          alt={imageAlt}
          fill
          sizes="(max-width: 900px) 100vw, 42vw"
          src={imageSrc}
        />
        <span className="project-media__scrim" aria-hidden="true" />
        <figcaption className="project-media__meta">
          <span>{eyebrow}</span>
          <span>{description}</span>
        </figcaption>
      </figure>
    </div>
  );
}
