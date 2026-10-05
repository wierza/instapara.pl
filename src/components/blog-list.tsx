"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { posts, type PostCategory } from "@/lib/posts";

const MONTHS = ["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"];
function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

const CATEGORIES: PostCategory[] = ["Kliniki", "Prawnicy", "Nieruchomości", "Strategia"];

export function BlogList() {
  const [active, setActive] = useState<PostCategory | null>(null);

  const filtered = active ? posts.filter((p) => p.category === active) : posts;

  return (
    <div className="bg-cream px-6 lg:px-12 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActive(null)}
            className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.15em] border transition-colors ${
              active === null
                ? "bg-navy text-cream border-navy"
                : "bg-transparent text-slate border-warm hover:border-slate"
            }`}
          >
            Wszystkie
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(active === cat ? null : cat)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.15em] border transition-colors ${
                active === cat
                  ? "bg-navy text-cream border-navy"
                  : "bg-transparent text-slate border-warm hover:border-slate"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post list */}
        <div className="flex flex-col divide-y divide-warm">
          {filtered.length === 0 && (
            <p className="py-16 text-sm text-muted text-center">
              Brak artykułów w tej kategorii — wkrótce.
            </p>
          )}
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row gap-6 lg:gap-10 py-10 first:pt-0 last:pb-0"
            >
              {/* Thumbnail */}
              <div className="w-full h-52 sm:w-48 sm:h-36 lg:w-56 lg:h-44 shrink-0 overflow-hidden rounded-lg bg-warm">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={224}
                  height={168}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 224px"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-0.5 rounded-full text-[10px] uppercase tracking-[0.15em] border border-warm text-muted">
                    {post.category}
                  </span>
                  <span className="text-xs uppercase tracking-[0.15em] text-muted">
                    {formatDate(post.date)}
                  </span>
                  <span className="h-px w-4 bg-warm" />
                  <span className="text-xs uppercase tracking-[0.15em] text-muted">
                    {post.readTime} min czytania
                  </span>
                </div>
                <h2 className="font-heading text-[clamp(1.1rem,1.8vw,1.45rem)] font-normal leading-[1.35] text-navy mb-3 group-hover:text-slate transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-slate leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-sky group-hover:gap-3 transition-all">
                  <span>Czytaj dalej</span>
                  <svg viewBox="0 0 16 16" fill="none" className="size-3.5">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
