"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export type CookieConsent = "accepted" | "declined" | null;

// Ta sama nazwa i domena co w sklepie (sklep.instapara.pl), więc jedna zgoda działa w obu serwisach.
const STORAGE_KEY = "instapara_cookie_consent";
const ONE_YEAR = 60 * 60 * 24 * 365;

function cookieAttributes(maxAge: number) {
  const onInstapara = window.location.hostname.endsWith("instapara.pl");
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  return `${onInstapara ? "; domain=.instapara.pl" : ""}; path=/; max-age=${maxAge}; SameSite=Lax${secure}`;
}

export function getCookieConsent(): CookieConsent {
  if (typeof window === "undefined") return null;
  const match = document.cookie.match(/(?:^|; )instapara_cookie_consent=([^;]+)/);
  if (match) return match[1] as CookieConsent;
  try {
    return (localStorage.getItem(STORAGE_KEY) as CookieConsent) ?? null;
  } catch {
    return null;
  }
}

function saveConsent(value: Exclude<CookieConsent, null>) {
  document.cookie = `${STORAGE_KEY}=${value}${cookieAttributes(ONE_YEAR)}`;
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {}
}

type GtagFn = (...args: unknown[]) => void;

function updateConsent(granted: boolean) {
  const w = window as Window & { gtag?: GtagFn };
  if (typeof w.gtag === "function") {
    const value = granted ? "granted" : "denied";
    w.gtag("consent", "update", {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    });
  }
}

// Link „Ustawienia cookies”: wycofuje zapisaną zgodę i ponownie pokazuje baner.
export function openCookieSettings() {
  document.cookie = `${STORAGE_KEY}=${cookieAttributes(0)}`;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
  updateConsent(false);
  window.dispatchEvent(new Event("cookieConsentUpdate"));
  window.dispatchEvent(new Event("cookieSettingsOpen"));
}

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getCookieConsent() === null) setVisible(true);

    const open = () => setVisible(true);
    window.addEventListener("cookieSettingsOpen", open);
    return () => window.removeEventListener("cookieSettingsOpen", open);
  }, []);

  function accept() {
    saveConsent("accepted");
    setVisible(false);
    updateConsent(true);
    window.dispatchEvent(new Event("cookieConsentUpdate"));
  }

  function decline() {
    saveConsent("declined");
    setVisible(false);
    updateConsent(false);
    window.dispatchEvent(new Event("cookieConsentUpdate"));
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
      <div className="mx-auto max-w-4xl bg-navy border border-white/10 rounded-2xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <p className="flex-1 text-sm text-cream/70 leading-relaxed">
          Używamy plików cookies niezbędnych do działania strony, a za Twoją zgodą także analitycznych
          (Google Analytics) i marketingowych (piksel Meta). Klikając „Akceptuj”, zgadzasz się na ich
          użycie. Zgodę możesz w każdej chwili wycofać w „Ustawieniach cookies” w stopce.{" "}
          <Link
            href="/polityka-prywatnosci"
            className="text-sky hover:text-cream transition-colors underline underline-offset-2"
          >
            Polityka prywatności
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-cream/50 hover:text-cream transition-colors rounded-full border border-white/10 hover:border-white/25"
          >
            Odrzuć
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-medium bg-sky text-navy rounded-full hover:bg-cream transition-colors"
          >
            Akceptuj
          </button>
        </div>
      </div>
    </div>
  );
}
