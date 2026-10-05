"use client";

import { useLang } from "@/context/language-context";

export function EntityDescription() {
  const { t } = useLang();
  return (
    <div className="bg-navy px-6 lg:px-12 pb-14">
      <div className="mx-auto max-w-7xl border-t border-white/5 pt-8">
        <p className="text-xs text-cream/35 leading-relaxed max-w-2xl">
          {t.entityDescription}
        </p>
      </div>
    </div>
  );
}
