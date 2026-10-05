"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { useLang } from "@/context/language-context";
import { Language } from "@/lib/translations";
import { LogoIcon } from "@/components/logo-icon";

const LANGS: Language[] = ["pl", "en", "de"];


export function Header() {
  const { t, lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [nichesOpen, setNichesOpen] = React.useState(false);

  const navLinks = [
    { label: t.nav.problem, href: "#problem" },
    { label: t.nav.solution, href: "#solution" },
    { label: t.nav.results, href: "#results" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.about, href: "#about" },
  ];

  return (
    <header className="fixed z-50 w-full">
      <div
        id="nav-pill"
      >
        <div className="nav-inner flex items-center py-3 justify-between">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 font-display text-xl font-semibold tracking-wide text-cream"
            )}
          >
            <LogoIcon className="h-7 w-7 text-sky" />
            <span className="translate-y-[4px]">instapara</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide transition-colors whitespace-nowrap text-cream/70 hover:text-cream"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <div className="relative">
              <button
                onClick={() => setNichesOpen((v) => !v)}
                onBlur={() => setTimeout(() => setNichesOpen(false), 150)}
                className="flex items-center gap-1 text-sm tracking-wide transition-colors whitespace-nowrap text-cream/70 hover:text-cream"
              >
                {t.nav.niches.label}
                <svg viewBox="0 0 10 10" fill="none" className={cn("size-2.5 transition-transform duration-200", nichesOpen && "rotate-180")}>
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {nichesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-xl bg-cream shadow-lg ring-1 ring-navy/10 overflow-hidden z-50">
                  {t.nav.niches.items.map((n) => (
                    <Link
                      key={n.href}
                      href={n.href}
                      onClick={() => setNichesOpen(false)}
                      className="block px-5 py-3 text-sm text-navy/70 hover:bg-white hover:text-navy transition-colors duration-150"
                    >
                      {n.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="h-4 w-px bg-white/10" />
            <Link href="/blog" className="text-sm tracking-wide transition-colors text-cream/70 hover:text-cream">
              Blog
            </Link>
            <div className="hidden xl:block h-4 w-px bg-white/10" />
            <Link
              href="https://instagram.com/_instapara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hidden xl:block transition-colors text-cream/50 hover:text-sky"
            >
              <InstagramIcon />
            </Link>
            <div className="hidden xl:block h-4 w-px bg-white/10" />
            <div className="hidden xl:flex items-center gap-1">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "px-2 py-1 text-xs uppercase tracking-widest rounded transition-all",
                    lang === l ? "text-cream font-semibold" : "text-cream/50 hover:text-cream"
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
            <Link
              href="#booking"
              className="rounded-full bg-sky font-medium text-navy transition-all hover:bg-sky/90 hover:scale-105 whitespace-nowrap px-5 py-2 text-sm"
            >
              {t.nav.book}
            </Link>
          </div>

          {/* Mobile LinkedIn + hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 p-2 lg:hidden"
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            <div className="flex flex-col gap-1.5">
              <span className={cn("block h-px w-6 transition-all duration-300", menuOpen ? "translate-y-2 rotate-45 bg-navy" : "bg-cream")} />
              <span className={cn("block h-px w-6 transition-all duration-300", menuOpen ? "opacity-0 bg-navy" : "bg-cream")} />
              <span className={cn("block h-px w-6 transition-all duration-300", menuOpen ? "-translate-y-2 -rotate-45 bg-navy" : "bg-cream")} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-5 lg:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-xl text-navy transition-colors hover:text-slate"
            >
              {item.label}
            </Link>
          ))}
          <div className="h-px w-16 bg-navy/10 my-1" />
          {t.nav.niches.items.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-xl text-navy transition-colors hover:text-slate"
            >
              {n.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 mt-2">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-2.5 py-1 text-xs uppercase tracking-widest rounded border transition-all",
                  lang === l
                    ? "border-navy bg-navy text-cream"
                    : "border-muted text-slate hover:border-navy"
                )}
              >
                {l}
              </button>
            ))}
          </div>
          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="font-display text-xl text-navy transition-colors hover:text-slate"
          >
            Blog
          </Link>
          <Link
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-1 rounded-full bg-navy px-6 py-2.5 text-xs font-medium text-cream"
          >
            {t.nav.book}
          </Link>
        </div>
      )}
    </header>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
