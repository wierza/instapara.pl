"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLang } from "@/context/language-context";

const fadeUp = {
  hidden: { y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

function TeamCard({
  data,
  photo,
  imgClass,
  initials,
  revealFrom,
  linkedin,
}: {
  data: { name: string; role: string; title: string; body: string };
  photo: string;
  imgClass: string;
  initials: string;
  revealFrom: "left" | "right";
  linkedin: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });
  const scale = useSpring(1, { stiffness: 200, damping: 20 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
    scale.set(1.02);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    scale.set(1);
  };

  const clipStart = revealFrom === "left" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";

  return (
    <motion.div
      initial={{ clipPath: "inset(0 0% 0 0%)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
        className="bg-navy p-8 lg:p-12 group cursor-default h-full"
      >
        {/* Photo */}
        <div className="relative mb-8 w-20 h-20 rounded-full border-2 border-white/10 group-hover:border-sky/40 transition-colors duration-300 overflow-hidden bg-navy">
          {photo ? (
            <Image
              src={photo}
              alt={data.name}
              fill
              style={{ objectFit: "cover", objectPosition: imgClass }}
              className="transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <span className="font-display text-xl font-light text-muted group-hover:text-sky transition-colors flex items-center justify-center w-full h-full">
              {initials}
            </span>
          )}
        </div>

        <span className="text-xs uppercase tracking-[0.2em] text-sky">
          {data.role}
        </span>
        <h3 className="mt-3 font-display text-xl font-light text-cream">
          {data.name}
        </h3>
        <p className="mt-2 font-heading text-lg text-muted">
          {data.title}
        </p>
        <p className="mt-4 font-sans text-sm leading-relaxed text-cream/60">
          {data.body}
        </p>
        <Link
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted hover:text-sky transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function AboutSection() {
  const { t } = useLang();

  return (
    <section id="about" className="bg-cream py-24 md:py-36 overflow-hidden">
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
            {t.about.label}
          </span>
          <div>
            <div className="h-px w-12 bg-muted mb-2" />
            <span className="text-xs uppercase tracking-[0.2em] text-slate">
              {t.about.labelText}
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(2rem,4vw,4.5rem)] font-light leading-[1.25] text-navy tracking-tight"
          >
            {t.about.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 font-display italic text-2xl text-sky"
          >
            {t.about.subheadline}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-6 space-y-4 max-w-2xl"
          >
            {t.about.story.split("\n\n").map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-slate">
                {para}
              </p>
            ))}
          </motion.div>
        </motion.div>

        {/* Team cards */}
        <div className="grid md:grid-cols-2 gap-px bg-warm mb-16">
          <TeamCard
            data={t.about.marysia}
            photo="/marysia.jpg"
            imgClass="center top"
            initials="MG"
            revealFrom="left"
            linkedin="https://www.linkedin.com/in/maria-grygosinska/"
          />
          <TeamCard
            data={t.about.dawid}
            photo="/dawid.jpg"
            imgClass="center 20%"
            initials="DW"
            revealFrom="right"
            linkedin="https://www.linkedin.com/in/dawid-wierzycki/"
          />
        </div>

        {/* Proof statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="border-l-2 border-sky/40 pl-8 max-w-2xl"
        >
          <p className="text-base leading-relaxed text-slate italic">
            &ldquo;{t.about.proof}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
