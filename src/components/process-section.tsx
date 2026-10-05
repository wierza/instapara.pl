"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";

const fadeUp = {
  hidden: { y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function ProcessSection() {
  const { t } = useLang();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="process" className="bg-cream py-24 md:py-36 border-t border-warm">
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
            {t.process.label}
          </span>
          <div>
            <div className="h-px w-12 bg-muted mb-2" />
            <span className="text-xs uppercase tracking-[0.2em] text-slate">
              {t.process.labelText}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2 className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-light leading-[1.2] text-navy">
            {t.process.headline}
          </h2>
          <p className="mt-3 text-base font-light text-slate">
            {t.process.headlineSub}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-0">
          {t.process.steps.map((step, i) => {
            const isActive = activeStep === i;
            const isDimmed = activeStep !== null && !isActive;
            return (
              <motion.div
                key={step.number}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onClick={() => setActiveStep(isActive ? null : i)}
                animate={{ opacity: isDimmed ? 0.35 : 1 }}
                className={`group grid lg:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-12 border-t border-warm py-8 cursor-pointer select-none transition-colors duration-300 ${
                  isActive ? "bg-navy/[0.05]" : "hover:bg-navy/[0.02]"
                }`}
              >
                {/* Number */}
                <div className="flex items-start">
                  <span className={`font-display text-3xl font-light transition-all duration-300 ${
                    isActive ? "text-sky scale-110 translate-y-[-2px]" : "text-muted group-hover:text-navy"
                  }`}>
                    {step.number}
                  </span>
                </div>

                {/* Title + time */}
                <div>
                  <h3 className={`font-heading text-lg font-semibold transition-colors duration-300 ${isActive ? "text-sky" : "text-navy"}`}>
                    {step.title}
                  </h3>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-slate">
                    <span className={`h-1 w-1 rounded-full transition-colors duration-300 ${isActive ? "bg-sky scale-150" : "bg-sky"}`} />
                    {step.time}
                  </span>
                  {step.effect && (
                    <p className={`mt-2 text-xs transition-colors duration-300 ${isActive ? "text-sky" : "text-sky/80"}`}>
                      Efekt: {step.effect}
                    </p>
                  )}
                </div>

                {/* Body */}
                <p className={`text-sm leading-relaxed max-w-md transition-colors duration-300 ${isActive ? "text-navy" : "text-gray"}`}>
                  {step.body}
                </p>
              </motion.div>
            );
          })}
          <div className="border-t border-warm" />
        </div>

        {/* Closing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-16 max-w-xl"
        >
          <p className="font-display text-xl font-light text-navy">
            {t.process.closing}
          </p>
          <p className="mt-2 text-sm text-slate">
            {t.process.closingSub}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
