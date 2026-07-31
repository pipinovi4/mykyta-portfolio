"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectMediaProps = {
  projectTitle: string;
  imageSrc: string;
  videoId: string;
};

export function ProjectMedia({ projectTitle, imageSrc, videoId }: ProjectMediaProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="project-media">
      {isPlaying ? (
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={`${projectTitle} project walkthrough`}
        />
      ) : (
        <button
          className="project-media__poster"
          onClick={() => setIsPlaying(true)}
          type="button"
          aria-label={`Play ${projectTitle} project walkthrough`}
        >
          <Image
            alt={`${projectTitle} project visual`}
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            src={imageSrc}
          />
          <span className="project-media__scrim" aria-hidden="true" />
          <span className="project-media__meta">
            <span>Project walkthrough</span>
            <span>YouTube / Play video</span>
          </span>
          <span className="project-media__play" aria-hidden="true">▶</span>
        </button>
      )}
    </div>
  );
}
