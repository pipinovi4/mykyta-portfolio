"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { homepageCopy } from "@/content/framer-homepage";
import { profile } from "@/content/portfolio";

const navigation = [
  { label: homepageCopy.work, href: "#work" },
  { label: homepageCopy.about, href: "#about" },
  { label: homepageCopy.expertise, href: "#expertise" },
  { label: homepageCopy.contact, href: "#contact" },
];

export function SiteHeader({ linkToHome = false }: { linkToHome?: boolean }) {
  const homePath = linkToHome ? "/" : "";
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1025px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setIsOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  return (
    <header ref={headerRef} className="site-header" data-framer-name="Sticky header">
      <div className="site-header__inner">
        <Link className="site-header__brand" href={`${homePath}#top`} onClick={() => setIsOpen(false)}>{profile.name}</Link>
        <div className="site-header__controls">
          <ThemeToggle />
          <button ref={menuButtonRef} type="button" className="menu-toggle" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="site-navigation" onClick={() => setIsOpen(!isOpen)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              {isOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        <nav id="site-navigation" className="site-navigation" aria-label="Main navigation" data-open={isOpen}>
          {navigation.map(({ label, href }) => <Link key={href} href={`${homePath}${href}`} onClick={() => setIsOpen(false)}>{label}</Link>)}
          <a className="site-navigation__contact" href={`mailto:${profile.email}`} onClick={() => setIsOpen(false)}>
            {homepageCopy["let-s-talk-label"]}<span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
