"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";
import { LogoIcon } from "@/components/logo-icon";
import { openCookieSettings } from "@/components/cookie-consent";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com/_instapara",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@InstaPara",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42C1 8.07 1 12 1 12s0 3.93.46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96C23 15.93 23 12 23 12s0-3.93-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/instapara.smm",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn Marysia",
    href: "https://www.linkedin.com/in/maria-grygosinska/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "LinkedIn Dawid",
    href: "https://www.linkedin.com/in/dawid-wierzycki/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export function ConnectSection() {
  const { t } = useLang();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    type TrustpilotWindow = { Trustpilot?: { loadFromElement: (el: HTMLElement, force: boolean) => void } };
    const init = () => {
      const tp = (window as TrustpilotWindow).Trustpilot;
      if (widgetRef.current && tp) tp.loadFromElement(widgetRef.current, true);
    };
    if ((window as TrustpilotWindow).Trustpilot) {
      init();
    } else {
      const script = document.querySelector('script[src*="trustpilot"]') as HTMLScriptElement | null;
      script?.addEventListener("load", init);
      return () => script?.removeEventListener("load", init);
    }
  }, []);

  return (
    <footer id="connect" className="bg-navy border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">

          {/* Logo & tagline */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <LogoIcon className="h-9 w-9 text-sky" />
              <p className="font-display text-4xl font-light text-cream translate-y-[4px]">
                instapara
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-8">
              {t.connect.tagline}
            </p>
            <Link
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-sky/10 border border-sky/20 px-5 py-2.5 text-sm text-sky hover:bg-sky hover:text-navy transition-all"
            >
              Umów bezpłatny audyt
            </Link>
          </motion.div>

          {/* Social icon grid */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-6">
              {t.connect.follow}
            </p>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-muted hover:border-sky/40 hover:text-sky hover:bg-sky/5 transition-all"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-6">
              {t.connect.write}
            </p>
            <Link
              href={`mailto:${t.connect.email}`}
              className="text-sm text-cream/60 hover:text-cream transition-colors"
            >
              {t.connect.email}
            </Link>
            <div className="mt-3">
              <Link
                href="tel:+48572260289"
                className="text-sm text-cream/60 hover:text-cream transition-colors"
              >
                +48 572 260 289
              </Link>
            </div>
            <div className="mt-6 text-xs text-cream/30 space-y-1">
              <p>Wrocław / Poznań</p>
              <p>Dolny Śląsk, Polska</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/20">{t.connect.copyright}</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div
              ref={widgetRef}
              className="trustpilot-widget"
              style={{ minWidth: "220px" }}
              data-locale="pl-PL"
              data-template-id="56278e9abfbbba0bdcd568bc"
              data-businessunit-id="69e5c25031c1358a26e0dc08"
              data-style-height="52px"
              data-style-width="220px"
              data-token="2b69ef59-6f49-4381-9af3-2a05819de82f"
              data-theme="dark"
            >
              <a href="https://pl.trustpilot.com/review/instapara.pl" target="_blank" rel="noopener">Trustpilot</a>
            </div>
            <Link
              href="/polityka-prywatnosci"
              className="text-xs text-cream/20 hover:text-cream/50 transition-colors"
            >
              Polityka prywatności
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="text-xs text-cream/20 hover:text-cream/50 transition-colors"
            >
              Ustawienia cookies
            </button>
            <p className="text-xs text-cream/20">instapara.pl</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
