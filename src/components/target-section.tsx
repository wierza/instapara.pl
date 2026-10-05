"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";

const fadeUp = {
  hidden: { y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function TargetSection() {
  const { t } = useLang();
  const tg = t.target;

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
            {tg.label}
          </span>
          <div>
            <div className="h-px w-12 bg-white/20 mb-2" />
            <span className="text-xs uppercase tracking-[0.2em] text-sky/60">
              {tg.labelText}
            </span>
          </div>
        </motion.div>

        {/* Headline + intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-light leading-[1.2] text-cream"
          >
            {tg.headline}
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-sky/50 mb-4">{tg.intro}</p>
            <p className="font-heading text-base text-cream/60 leading-relaxed">{tg.introBody}</p>
          </motion.div>
        </motion.div>

        {/* Industry rows — same pattern as CASH items */}
        <div>
          {tg.industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="group border-t border-white/10 py-10 hover:bg-white/[0.03] transition-all duration-300 cursor-default"
            >
              <div className="flex gap-8 lg:gap-0">
                {/* Number */}
                <span className="font-display text-2xl font-light leading-none text-white/20 shrink-0 w-16 pt-1">
                  0{i + 1}
                </span>

                {/* Content */}
                <div className="flex-1 lg:flex lg:gap-16">
                  <h3 className="lg:w-72 shrink-0 font-display text-xl font-light text-cream transition-transform duration-300 group-hover:translate-x-2">
                    {industry.title}
                  </h3>
                  <div className="mt-3 lg:mt-0 max-w-xl">
                    <p className="font-heading text-base text-cream/45 leading-relaxed">
                      {industry.context}
                    </p>
                    <p className="font-sans mt-2 text-sm text-cream/65 leading-relaxed">
                      {industry.approach}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* Closing statement */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mt-16 font-heading italic text-[clamp(1rem,1.5vw,1.3rem)] text-cream/50 max-w-2xl leading-relaxed"
        >
          {tg.closing}
        </motion.p>

      </div>
    </section>
  );
}
