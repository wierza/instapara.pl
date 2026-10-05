"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";

const fadeUp = {
  hidden: { y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function HandoffSection() {
  const { t } = useLang();
  const h = t.handoff;

  return (
    <section className="bg-navy py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-display text-[2.5rem] font-light leading-none text-white/15 select-none">
            04
          </span>
          <div>
            <div className="h-px w-12 bg-white/20 mb-2" />
            <span className="text-xs uppercase tracking-[0.2em] text-sky/60">
              {h.sectionLabel}
            </span>
          </div>
        </motion.div>

        {/* 2×2 tile grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 gap-px bg-white/8"
        >
          {h.tiles.map((tile, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="bg-navy p-7 md:p-10 flex flex-col group hover:bg-white/[0.04] transition-all duration-300 cursor-default"
            >
              <span className="font-display text-[2.5rem] font-light leading-none text-white/10 group-hover:text-white/30 transition-colors select-none">
                0{i + 1}
              </span>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-sky/50 group-hover:text-sky transition-colors mb-5">
                {tile.title}
              </p>
              <p className="text-cream/30 group-hover:text-cream/70 transition-colors text-lg font-light leading-snug whitespace-pre-line mb-6">
                {tile.body}
              </p>
              <p className="font-display italic text-[1.2rem] text-cream leading-snug whitespace-pre-line mt-auto">
                {tile.note}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
