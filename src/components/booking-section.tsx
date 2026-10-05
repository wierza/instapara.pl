"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";
import { CalEmbed } from "@/components/cal-embed";

const fadeUp = {
  hidden: { y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function BookingSection() {
  const { t } = useLang();

  return (
    <>
    <section id="booking" className="bg-white py-24 md:py-36 border-t border-warm">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <span className="font-display text-[2.5rem] font-light leading-none text-warm select-none">
                {t.booking.label}
              </span>
              <div>
                <div className="h-px w-12 bg-muted mb-2" />
                <span className="text-xs uppercase tracking-[0.2em] text-slate">
                  {t.booking.labelText}
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-light leading-[1.3] text-navy"
            >
              {t.booking.headline}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base font-light text-slate max-w-md"
            >
              {t.booking.headlineSub}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 space-y-3 max-w-md"
            >
              {t.booking.sub.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-slate">
                  {para}
                </p>
              ))}
            </motion.div>

            <motion.ul variants={fadeUp} className="mt-8 space-y-3">
              {t.booking.what.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-navy">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-sky/20 flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: Calendar iframe */}
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
          >
            <CalEmbed className="h-[560px] md:h-[680px]" />
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" className="size-3">
      <path d="M2 6l3 3 5-5" stroke="#9fc6da" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
