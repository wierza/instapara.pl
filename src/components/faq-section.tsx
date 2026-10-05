"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";

function PlusIcon() {
  return (
    <div className="relative flex size-5 shrink-0 items-center justify-center">
      <span className="block h-px w-full bg-current transition-all duration-300" />
      <span className="absolute block h-full w-px bg-current transition-all duration-300 group-open/faq:rotate-90 group-open/faq:opacity-0" />
    </div>
  );
}

export function FAQSection() {
  const { t } = useLang();

  return (
    <section id="faq" className="bg-navy py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

          {/* Left — sticky label + headline */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="font-display text-[2.5rem] font-light leading-none text-white/10 select-none">
                ?
              </span>
              <div>
                <div className="h-px w-12 bg-white/20 mb-2" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  {t.faq.label}
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[clamp(1.8rem,2.8vw,3rem)] font-light leading-[1.6] text-cream"
            >
              {t.faq.headline}
              <br />
              <em className="italic text-sky">{t.faq.headlineAccent}</em>
            </motion.h2>

            <motion.p
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-sm leading-relaxed text-cream/50 max-w-xs"
            >
              {t.faq.sub}
            </motion.p>
          </div>

          {/* Right — accordion */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-0"
          >
            {t.faq.items.map((faq, i) => (
              <details
                key={i}
                className="group/faq border-t border-white/10 last:border-b last:border-white/10"
              >
                <summary className="group flex w-full items-start justify-between gap-6 py-7 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-heading text-base font-semibold text-cream group-hover:text-cream/70 transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span className="mt-0.5 text-cream/40 group-hover:text-cream transition-colors">
                    <PlusIcon />
                  </span>
                </summary>

                {/* Always in DOM — crawlers can index answers */}
                <div className="grid grid-rows-[0fr] group-open/faq:grid-rows-[1fr] transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
                  <div className="min-h-0">
                    <p className="pb-7 text-sm leading-relaxed text-cream/60 max-w-xl">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </details>
            ))}
            {/* Mini CTA */}
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 border-t border-white/10 pt-10"
            >
              <p className="font-display text-xl font-light text-cream mb-1">
                {t.faq.ctaHeading}
              </p>
              <p className="text-sm text-cream/50 mb-6">
                {t.faq.ctaBody}
              </p>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky/10 px-6 py-3 text-sm uppercase tracking-[0.15em] text-sky hover:bg-sky/20 transition-colors"
              >
                {t.faq.ctaButton}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
