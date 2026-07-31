"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent, TouchEvent } from "react";
import type { ProjectImage } from "@/content/portfolio";

type ProjectGalleryProps = {
  images: readonly ProjectImage[];
  projectTitle: string;
};

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  const openLightbox = (index: number, opener: HTMLButtonElement) => {
    setActiveIndex(index);
    openerRef.current = opener;
    dialogRef.current?.showModal();
  };

  const closeLightbox = () => dialogRef.current?.close();

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) closeLightbox();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < 45) return;
    if (distance > 0) showPrevious();
    else showNext();
  };

  if (images.length === 0) return null;

  const visibleCount = Math.min(images.length, 4);
  const activeImage = images[activeIndex];

  return (
    <section className="project-gallery" aria-label={`${projectTitle} image gallery`}>
      <div className="project-gallery__heading">
        <span className="project-card__stack-label">Project gallery</span>
        <span className="mono-label">{String(images.length).padStart(2, "0")} frames / Click to expand</span>
      </div>

      <div className={`project-gallery__grid project-gallery__grid--${visibleCount}`}>
        {images.map((image, index) => (
          <button
            className="project-gallery__item"
            key={`${image.src}-${index}`}
            onClick={(event) => openLightbox(index, event.currentTarget)}
            type="button"
            aria-haspopup="dialog"
            aria-label={`Open image ${index + 1} of ${images.length}: ${image.alt}`}
          >
            <Image
              alt={image.alt}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 38vw"
              src={image.src}
            />
            <span className="project-gallery__overlay" aria-hidden="true" />
            <span className="project-gallery__index" aria-hidden="true">0{index + 1}</span>
            <span className="project-gallery__expand" aria-hidden="true">Expand ↗</span>
          </button>
        ))}
      </div>

      <dialog
        aria-label={`${projectTitle} image viewer`}
        className="lightbox"
        onClick={handleBackdropClick}
        onClose={() => openerRef.current?.focus()}
        onKeyDown={handleKeyDown}
        ref={dialogRef}
      >
        <div className="lightbox__panel">
          <header className="lightbox__header">
            <div>
              <span>{projectTitle}</span>
              <span>{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
            </div>
            <button onClick={closeLightbox} type="button" aria-label="Close image viewer">Close <span aria-hidden="true">×</span></button>
          </header>

          <div className="lightbox__stage" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="lightbox__image">
              <Image
                alt={activeImage.alt}
                fill
                priority
                sizes="94vw"
                src={activeImage.src}
              />
            </div>

            {images.length > 1 ? (
              <>
                <button className="lightbox__arrow lightbox__arrow--previous" onClick={showPrevious} type="button" aria-label="Previous image">←</button>
                <button className="lightbox__arrow lightbox__arrow--next" onClick={showNext} type="button" aria-label="Next image">→</button>
              </>
            ) : null}
          </div>

          <footer className="lightbox__footer">
            <p>{activeImage.caption}</p>
            <span className="mono-label">Use ← → keys · Swipe · Esc to close</span>
          </footer>
        </div>
      </dialog>
    </section>
  );
}
