"use client";

import { motion } from "framer-motion";
import { AlertCircle, XCircle } from "lucide-react";
import { useLang } from "@/context/language-context";

const fadeUp = {
  hidden: { y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function NotForSection() {
  const { t } = useLang();
  const nf = t.notFor;

  return (
    <section className="bg-cream py-16 md:py-24">
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
            {nf.label}
          </span>
          <div>
            <div className="h-px w-12 bg-muted mb-2" />
            <span className="text-xs uppercase tracking-[0.2em] text-slate">
              {nf.labelText}
            </span>
          </div>
        </motion.div>

        {/* Two dark boxes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {/* Box 1 */}
          <motion.div variants={fadeUp} whileHover={{ y: -4, scale: 1.01 }} className="bg-navy rounded-2xl p-8 ring-1 ring-transparent hover:ring-sky/20 transition-shadow duration-300 cursor-default group">
            <span className="text-sky/60 group-hover:text-sky transition-colors"><AlertCircle size={32} strokeWidth={1} /></span>
            <h3 className="font-heading text-lg font-medium text-cream mt-6 mb-3">
              {nf.box1.title}
            </h3>
            <p className="text-sm leading-relaxed text-cream/60 group-hover:text-cream/80 transition-colors">
              {nf.box1.body}
            </p>
          </motion.div>

          {/* Box 2 */}
          <motion.div variants={fadeUp} whileHover={{ y: -4, scale: 1.01 }} className="bg-navy rounded-2xl p-8 ring-1 ring-transparent hover:ring-sky/20 transition-shadow duration-300 cursor-default group">
            <span className="text-sky/60 group-hover:text-sky transition-colors"><XCircle size={32} strokeWidth={1} /></span>
            <h3 className="font-heading text-lg font-medium text-cream mt-6 mb-4">
              {nf.box2.title}
            </h3>
            <ul className="space-y-3">
              {nf.box2.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-cream/60 group-hover:text-cream/80 transition-colors">
                  <span className="text-sky/40 group-hover:text-sky/70 transition-colors mt-0.5 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
