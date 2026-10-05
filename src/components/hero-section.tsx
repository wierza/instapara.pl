"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/context/language-context";

export function HeroSection() {
  const { t } = useLang();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-navy">
      {/* Animated background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(159,198,218,0.08) 0%, transparent 70%)" }}
        />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(159,198,218,0.05) 0%, transparent 70%)" }}
        />
      </div>

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Team photo — right side desktop */}
      <motion.div
        initial={{ clipPath: "inset(0 0% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="group absolute inset-0 lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[44%] overflow-hidden"
      >
        <motion.div className="absolute inset-0 scale-110" style={{ y: parallaxY }}>
          <Image
            src="/hero-team.jpg"
            alt="Dawid i Marysia"
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            priority
          />
        </motion.div>
        {/* Mobile: gradient from bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy to-transparent lg:hidden" />
        <div className="pointer-events-none absolute inset-0 bg-navy/40 lg:bg-navy/30" />
        {/* Desktop: gradient from left */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-navy to-transparent hidden lg:block" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 pb-10 pt-24 md:pt-32 lg:grid lg:grid-cols-[3fr_2fr]">
        <div>
          {/* Badge */}
          <motion.div
            initial={{ y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-sky/20 bg-sky/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-sky">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(1.6rem,3.2vw,3.8rem)] font-light leading-[1.45] tracking-tight text-cream"
          >
            {t.hero.headline}
            <br />
            <em className="italic text-sky">{t.hero.headlineAccent}</em>
          </motion.h1>

          <motion.p
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 font-display italic text-[clamp(1rem,1.8vw,1.4rem)] text-muted"
          >
            {t.hero.headlineSub}
          </motion.p>

          <motion.p
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/60 md:text-lg"
          >
            {t.hero.sub}
          </motion.p>

          <motion.p
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-3 max-w-xl text-base leading-relaxed text-cream/40 md:text-lg"
          >
            {t.hero.sub2}
          </motion.p>

          <motion.div
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              href="#booking"
              className="group inline-flex items-center gap-3 rounded-full bg-sky px-7 py-3.5 text-sm font-medium text-navy transition-all hover:bg-cream hover:scale-105"
            >
              {t.hero.cta}
              <ArrowIcon />
            </Link>
            <Link
              href="#solution"
              className="text-sm text-muted transition-colors hover:text-cream underline underline-offset-4 decoration-muted/40 hover:decoration-cream/40"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-20 flex items-center gap-4"
          >
            <div className="h-px flex-1 max-w-24 bg-white/10" />
            <span className="text-xs uppercase tracking-[0.25em] text-cream/25">scroll</span>
          </motion.div>
        </div>

        <div className="hidden lg:block" />
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="size-4 transition-transform group-hover:translate-x-1">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
