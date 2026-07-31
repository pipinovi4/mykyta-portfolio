"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectMediaProps = {
  projectTitle: string;
  imageSrc: string;
  videoId: string;
  eyebrow?: string;
  description?: string;
  id?: string;
  videoTitle?: string;
};

export function ProjectMedia({
  projectTitle,
  imageSrc,
  videoId,
  eyebrow = "Project walkthrough",
  description = "YouTube / Play video",
  id,
  videoTitle = `${projectTitle} project walkthrough`,
}: ProjectMediaProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="project-media" id={id}>
      {isPlaying ? (
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={videoTitle}
        />
      ) : (
        <button
          className="project-media__poster"
          onClick={() => setIsPlaying(true)}
          type="button"
          aria-label={`Play ${videoTitle}`}
        >
          <Image
            alt={`${projectTitle} project visual`}
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            src={imageSrc}
          />
          <span className="project-media__scrim" aria-hidden="true" />
          <span className="project-media__meta">
            <span>{eyebrow}</span>
            <span>{description}</span>
          </span>
          <span className="project-media__play" aria-hidden="true">▶</span>
        </button>
      )}
    </div>
  );
}
