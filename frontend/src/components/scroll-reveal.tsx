"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const singleTargets = [
  ".section-heading",
  ".case-section__heading",
  ".case-result__grid > *",
] as const;

const staggerGroups = [
  { container: ".project-grid", children: ".project-card", step: 80 },
  { container: ".about-grid", children: ".about-profile, .about-copy", step: 70 },
  { container: ".capability-list", children: ".capability", step: 60 },
  { container: ".infrastructure-grid", children: ":scope > *", step: 80 },
  { container: ".contact-grid", children: ":scope > *", step: 80 },
  { container: ".case-hero__grid", children: ".case-hero__copy, .project-media", step: 80 },
  { container: ".case-two-column", children: ":scope > *", step: 70 },
  { container: ".responsibility-grid", children: ":scope > *", step: 70 },
  { container: ".architecture-flow", children: ".architecture-node", step: 65 },
  { container: ".decision-grid", children: ":scope > article", step: 65 },
  { container: ".capability-card-grid", children: ":scope > article", step: 65 },
  { container: ".metrics-grid", children: ":scope > div", step: 55 },
  { container: ".challenge-list", children: ":scope > article", step: 65 },
  { container: ".next-project__inner", children: ".next-project__item, .next-project__back", step: 60 },
] as const;

const isInInitialViewport = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
};

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let observer: IntersectionObserver | undefined;
    let elements: HTMLElement[] = [];
    const frame = window.requestAnimationFrame(() => {
      const targets = new Set<HTMLElement>();

      singleTargets.forEach((selector) => {
        document.querySelectorAll<HTMLElement>(selector).forEach((element) => targets.add(element));
      });

      staggerGroups.forEach(({ container, children, step }) => {
        document.querySelectorAll<HTMLElement>(container).forEach((group) => {
          group.querySelectorAll<HTMLElement>(children).forEach((element, index) => {
            element.style.setProperty("--scroll-reveal-delay", `${index * step}ms`);
            targets.add(element);
          });
        });
      });

      elements = [...targets];
      elements.forEach((element) => {
        element.dataset.scrollReveal = "";
        if (isInInitialViewport(element)) element.classList.add("is-scroll-visible");
      });

      document.documentElement.classList.add("scroll-reveal-ready");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target as HTMLElement;
            element.classList.add("is-scroll-visible");
            observer?.unobserve(element);
          });
        },
        { rootMargin: "0px 0px -12%", threshold: 0.08 },
      );

      elements.forEach((element) => {
        if (!element.classList.contains("is-scroll-visible")) observer?.observe(element);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      elements.forEach((element) => {
        element.classList.remove("is-scroll-visible");
        element.removeAttribute("data-scroll-reveal");
        element.style.removeProperty("--scroll-reveal-delay");
      });
    };
  }, [pathname]);

  return null;
}
