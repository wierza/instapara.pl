"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";

const fadeUp = {
  hidden: { y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function ProblemSection() {
  const { t } = useLang();

  return (
    <section id="problem" className="bg-cream py-24 md:py-36">
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
            {t.problem.label}
          </span>
          <div>
            <div className="h-px w-12 bg-muted mb-2" />
            <span className="text-xs uppercase tracking-[0.2em] text-slate">
              {t.problem.labelText}
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: headline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h2 variants={fadeUp} className="font-display leading-[1.3]">
              <span className="block text-[clamp(2.2rem,3.6vw,4.2rem)] font-medium text-navy">
                {t.problem.headline}
              </span>
              <span className="block text-[clamp(1.4rem,2.2vw,2.6rem)] font-light italic text-slate mt-1">
                {t.problem.headlineSub}
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-8 text-base leading-relaxed text-slate max-w-md whitespace-pre-line"
            >
              {t.problem.intro}
            </motion.p>
          </motion.div>

          {/* Right: pain points */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
            className="grid sm:grid-cols-2 gap-px bg-warm"
          >
            {t.problem.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-cream p-7 group hover:bg-navy transition-colors duration-300 cursor-default"
              >
                <span className="font-display text-2xl font-light text-warm group-hover:text-navy/20 transition-colors select-none">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-navy group-hover:text-cream transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate group-hover:text-cream/70 transition-colors whitespace-pre-line">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bridge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 text-center font-display italic text-[clamp(1.1rem,1.8vw,1.5rem)] text-slate max-w-2xl mx-auto"
        >
          {t.problem.bridge}
        </motion.p>
      </div>
    </section>
  );
}
