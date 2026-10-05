"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    client: "Karl Feuvray",
    type: "Klient indywidualny",
    service: "Kampania UGC",
    quote: "Really professional! Great quality content, great communication skills — I recommend!",
    rating: 5,
    resultLabel: "Efekt: Większe zaufanie i lepsze decyzje klientów",
    result: "Autentyczność, która konwertuje. Kampania UGC budująca naturalne zaufanie do marki klienta.",
  },
  {
    client: "P&P Digitalisierungs-GmbH",
    type: "Agencja social media, Niemcy",
    service: "Strategia & Content",
    quote: "The post is perfectly fine — please go ahead.",
    rating: null,
    resultLabel: "Efekt: Wejście na nowy rynek z gotową strategią",
    result: "Kompletna strategia i realizacja postów social media dla niemieckiej agencji wchodzącej na polski rynek.",
  },
  {
    client: "Kevin, P&P Digitalisierungs-GmbH",
    type: "Agencja social media, Niemcy",
    service: "Cold Mailing",
    quote: "The newsletters are absolutely outstanding! Super informative, very well structured and definitely suitable for client acquisition…this will make it so much easier for us to turn strangers into warm leads!",
    rating: null,
    resultLabel: "Efekt: Cold audience zamieniona w ciepłych leadów",
    result: "Strategiczny e-mail marketing zrealizowany dla niemieckiej agencji social media.",
  },
];

const fadeUp = {
  hidden: { y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" fill={filled ? "#9fc6da" : "none"} stroke="#9fc6da" strokeWidth="1.2">
      <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.4l-3.6 1.9.7-4L2.2 5.7l4-.6z" />
    </svg>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-navy py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-sans not-italic text-[3rem] font-light leading-none text-white/10 select-none">
            ✦
          </span>
          <div>
            <div className="h-px w-12 bg-white/20 mb-2" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Opinie klientów
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-light leading-[1.3] text-cream mb-8 max-w-2xl"
        >
          Nasi klienci, którzy zaczęli
          <br />
          <em className="italic text-sky">przyciągać właściwych klientów.</em>
        </motion.h2>

        {/* Context */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-base text-cream/50 leading-relaxed mb-20 max-w-xl"
        >
          To nie są opinie o „ładnych treściach".<br />
          To są efekty zmiany sposobu komunikacji.
        </motion.p>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-3 divide-y divide-white/10 md:divide-y-0 md:divide-x"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="bg-navy p-8 lg:p-10 flex flex-col gap-6 group hover:bg-white/[0.07] hover:ring-1 hover:ring-sky/20 transition-colors duration-300 cursor-default"
            >
              {/* Service tag */}
              <span className="inline-flex self-start items-center rounded-full border border-sky/20 bg-sky/5 px-3 py-1 text-xs uppercase tracking-[0.15em] text-sky">
                {t.service}
              </span>

              {/* Stars */}
              {t.rating && (
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} filled={j < t.rating!} />
                  ))}
                  <span className="ml-2 text-xs text-muted">5.0</span>
                </div>
              )}

              {/* Quote */}
              {t.quote ? (
                <blockquote className="flex-1">
                  <p className="font-heading italic text-lg text-cream/80 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
              ) : (
                <div className="flex-1" />
              )}

              {/* Result */}
              <div className="text-sm leading-relaxed border-t border-white/10 pt-6">
                <p className="text-sky/80 font-medium mb-1">{t.resultLabel}</p>
                <p className="text-cream/50">{t.result}</p>
              </div>

              {/* Client */}
              <div>
                <p className="text-sm font-medium text-cream">{t.client}</p>
                <p className="text-xs text-muted mt-0.5">{t.type}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-16 text-base text-cream/60 leading-relaxed"
        >
          To dopiero początek. Efekt systemu widać w decyzjach klientów — nie tylko w opiniach.
        </motion.p>
      </div>
    </section>
  );
}
