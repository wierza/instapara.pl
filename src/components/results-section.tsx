"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UserCheck, Zap, Gem, BarChart2 } from "lucide-react";
import { useLang } from "@/context/language-context";

const fadeUp = {
  hidden: { y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const ICONS = [
  <UserCheck key="user" size={32} strokeWidth={1} />,
  <Zap key="zap" size={32} strokeWidth={1} />,
  <Gem key="gem" size={32} strokeWidth={1} />,
  <BarChart2 key="bar" size={32} strokeWidth={1} />,
];

export function ResultsSection() {
  const { t } = useLang();
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  return (
    <section id="results" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-display text-[2.5rem] font-light leading-none text-warm select-none">
            {t.results.label}
          </span>
          <div>
            <div className="h-px w-12 bg-muted mb-2" />
            <span className="text-xs uppercase tracking-[0.2em] text-slate">
              {t.results.labelText}
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-[clamp(1.6rem,2.8vw,3rem)] font-light leading-[1.3] text-navy max-w-2xl mb-16"
        >
          {t.results.headline}
        </motion.h2>

        {/* 4 dark cards — 2×2 grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {t.results.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-navy rounded-2xl p-8 ring-1 ring-transparent hover:ring-sky/20 transition-shadow duration-300 cursor-default"
            >
              <span className="text-sky/60">{ICONS[i]}</span>
              <h3 className="font-heading text-lg font-medium text-cream mt-6 mb-3">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-cream/60 whitespace-pre-line">
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry selector */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-16"
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-slate mb-5">
            {t.results.industryQuestion}
          </motion.p>
          <div className="flex flex-wrap gap-3">
            {t.results.industries.map((label) => {
              const isActive = activeIndustry === label;
              return (
                <motion.button
                  key={label}
                  variants={fadeUp}
                  type="button"
                  onClick={() => setActiveIndustry(isActive ? null : label)}
                  className={`rounded-full border px-6 py-2.5 text-sm transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-sky bg-sky/10 text-sky scale-105"
                      : "border-navy/20 text-navy/60 hover:border-navy hover:text-navy"
                  }`}
                >
                  {label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
