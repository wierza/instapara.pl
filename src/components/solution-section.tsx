"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";

const LETTERS = ["C", "A", "S", "H"] as const;

const fadeUp = {
  hidden: { y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function SolutionSection() {
  const { t } = useLang();

  return (
    <section id="solution" className="bg-cream py-24 md:py-36 overflow-hidden">
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
            {t.solution.label}
          </span>
          <div>
            <div className="h-px w-12 bg-muted mb-2" />
            <span className="text-xs uppercase tracking-[0.2em] text-slate">
              {t.solution.labelText}
            </span>
          </div>
        </motion.div>

        {/* Headline block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="font-display text-[clamp(1.6rem,2.6vw,3rem)] font-light text-sky leading-tight"
          >
            {t.solution.subheadline}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-3 font-display text-[clamp(1.1rem,1.6vw,1.5rem)] font-light text-navy leading-snug"
          >
            {t.solution.description.replace("\n", " ")}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-2 text-base text-slate max-w-xl">
            {t.solution.descriptionSub}
          </motion.p>
        </motion.div>

        {/* C.A.S.H. items */}
        <div className="space-y-px">
          {LETTERS.map((letter, i) => {
            const item = t.solution.items[letter];
            return (
              <motion.div
                key={letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="group flex gap-0 border-t border-navy/10 py-8 hover:bg-navy/[0.03] transition-all duration-300 cursor-default"
              >
                {/* Giant letter */}
                <div className="w-24 shrink-0 flex items-start pt-1">
                  <span className="font-display text-[3rem] font-light leading-none text-sky/25 group-hover:text-sky transition-colors duration-300 select-none">
                    {letter}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 lg:flex lg:items-baseline lg:gap-12">
                  <div className="lg:w-72 shrink-0">
                    <h3 className="font-heading text-xl font-medium text-navy transition-transform duration-300 group-hover:translate-x-2">
                      {item.full}
                    </h3>
                  </div>
                  <div className="mt-3 lg:mt-0 max-w-lg">
                    <p className="text-sm leading-relaxed text-slate/50">
                      {item.before}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate whitespace-pre-line">
                      {item.after}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
          <div className="border-t border-navy/10" />
        </div>

        {/* Outro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="mt-16 max-w-lg"
        >
          {t.solution.outro.map((line, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className={`font-display leading-snug ${
                i === t.solution.outro.length - 1
                  ? "text-[clamp(1.1rem,1.6vw,1.5rem)] text-sky italic"
                  : "text-[clamp(1.1rem,1.6vw,1.5rem)] text-navy/30"
              }`}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* Industry links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-20 border-t border-navy/10 pt-14"
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-slate/50 mb-8">
            System C.A.S.H. dla Twojej branży
          </motion.p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/prawnicy", label: "Prawnicy", desc: "Klienci, którzy ufają zanim zadzwonią" },
              { href: "/kliniki", label: "Kliniki medycyny estetycznej", desc: "Pacjenci, którzy przychodzą już przekonani" },
              { href: "/nieruchomosci", label: "Agenci nieruchomości", desc: "Klienci, którzy wybierają Cię zanim się odezwą" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link
                  href={item.href}
                  className="group flex flex-col gap-2 rounded-xl border border-navy/10 bg-white/50 p-6 transition-all duration-300 hover:border-sky/30 hover:bg-white hover:shadow-sm"
                >
                  <span className="font-heading text-base text-navy group-hover:text-sky transition-colors duration-300">
                    {item.label}
                  </span>
                  <span className="text-sm text-slate/60 leading-snug">{item.desc}</span>
                  <span className="mt-1 text-xs text-sky/60 group-hover:text-sky transition-colors duration-300 flex items-center gap-1">
                    Zobacz stronę
                    <svg viewBox="0 0 12 12" fill="none" className="size-3 transition-transform group-hover:translate-x-0.5">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
