import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/context/language-context";
import { CookieConsentBanner } from "@/components/cookie-consent";
import { FacebookPixel } from "@/components/facebook-pixel";

const tanMonCheri = localFont({
  src: "../../public/fonts/TAN-Mon-Cheri/TAN-MON CHERI-Regular.woff2",
  variable: "--font-display",
  display: "swap",
});

const cyGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/Cy-Grotesk-Key/cy-grotesk-key-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cy-Grotesk-Key/cy-grotesk-key-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-heading",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  icons: { icon: "/favicon-logo.png" },
  title: "InstaPara — marketing wideo dla prawników, klinik i nieruchomości",
  description:
    "Marketing wideo dla kancelarii, klinik medycyny estetycznej i agentów nieruchomości z Wrocławia, Poznania i całej Polski. System C.A.S.H.: 3 godziny nagrań miesięcznie, resztę robimy my.",
  alternates: {
    canonical: "https://instapara.pl",
  },
  openGraph: {
    title: "InstaPara — marketing wideo dla prawników, klinik i nieruchomości",
    description:
      "Twoja marka lidera pracuje 24/7. Ty poświęcasz 3 godziny miesięcznie. System C.A.S.H.",
    type: "website",
    locale: "pl_PL",
    url: "https://instapara.pl",
    siteName: "InstaPara",
    images: [
      {
        url: "https://instapara.pl/og-image.png",
        width: 1200,
        height: 630,
        alt: "InstaPara — Agencja Premium Marketingu Wideo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaPara — marketing wideo dla prawników, klinik i nieruchomości",
    description: "Twoja marka lidera pracuje 24/7. Ty poświęcasz 3 godziny miesięcznie. System C.A.S.H.",
    images: ["https://instapara.pl/og-image.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://instapara.pl/#organization",
    name: "InstaPara",
    url: "https://instapara.pl",
    logo: {
      "@type": "ImageObject",
      url: "https://instapara.pl/logo-icon.png",
      width: 200,
      height: 200,
    },
    image: "https://instapara.pl/og-image.png",
    description:
      "Rodzinna agencja premium marketingu wideo. Pomagamy doświadczonym przedsiębiorcom zbudować autorytet wideo i przyciągać klientów premium przez System C.A.S.H. — przy nakładzie 3 godzin miesięcznie.",
    telephone: "+48572260289",
    email: "kontakt@instapara.pl",
    foundingDate: "2026-01-09",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wrocław",
      addressRegion: "Dolny Śląsk",
      addressCountry: "PL",
    },
    areaServed: ["Wrocław", "Poznań", "Polska"],
    priceRange: "zł zł zł",
    sameAs: [
      "https://instagram.com/_instapara",
      "https://youtube.com/@InstaPara",
      "https://facebook.com/instapara.smm",
      "https://www.linkedin.com/company/instapara/",
      "https://pl.trustpilot.com/review/instapara.pl",
    ],
    founder: [
      { "@id": "https://instapara.pl/#marysia" },
      { "@id": "https://instapara.pl/#dawid" },
    ],
    knowsAbout: [
      "Marketing wideo",
      "Personal branding",
      "Content marketing",
      "Social media marketing",
      "Produkcja wideo",
      "LinkedIn marketing",
      "Instagram marketing",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://instapara.pl/#marysia",
    name: "Marysia Grygosińska",
    url: "https://instapara.pl/#about",
    jobTitle: "Estetyka & Produkcja",
    description: "Prawnik z okiem reżysera. Prawnicza precyzja przekłada się na content dokładny, przemyślany i wyróżniający.",
    worksFor: { "@id": "https://instapara.pl/#organization" },
    sameAs: ["https://www.linkedin.com/in/maria-grygosinska/"],
    knowsAbout: ["Produkcja wideo", "Estetyka marki", "Content wideo", "Video marketing"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://instapara.pl/#dawid",
    name: "Dawid Wierzycki",
    url: "https://instapara.pl/#about",
    jobTitle: "Strategia & System",
    description: "Strateg i budowniczy Systemu C.A.S.H. Filozoficzne i strategiczne myślenie przekładane na powtarzalny proces.",
    worksFor: { "@id": "https://instapara.pl/#organization" },
    sameAs: ["https://www.linkedin.com/in/dawid-wierzycki/"],
    knowsAbout: ["Strategia marketingowa", "Personal branding", "Content marketing", "Budowanie marki eksperta"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://instapara.pl/#service",
    name: "Premium Video Marketing — System C.A.S.H.",
    provider: { "@id": "https://instapara.pl/#organization" },
    description:
      "Kompleksowa produkcja wideo premium dla przedsiębiorców: strategia, scenariusze, nagrania, montaż i publikacja. Wkład klienta: 3 godziny miesięcznie.",
    areaServed: "PL",
    offers: {
      "@type": "Offer",
      priceCurrency: "PLN",
      price: "1700",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1700",
        priceCurrency: "PLN",
        unitText: "miesiąc",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://instapara.pl/#website",
    name: "InstaPara",
    url: "https://instapara.pl",
    inLanguage: "pl",
    publisher: { "@id": "https://instapara.pl/#organization" },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className={`${tanMonCheri.variable} ${cyGrotesk.variable} ${playfair.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){function c(){document.documentElement.toggleAttribute('data-scrolled',window.scrollY>60)}window.addEventListener('scroll',c,{passive:true});c()})()` }} />
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {/* Consent Mode v2 — must run before gtag.js */}
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'wait_for_update': 500
          });
          try {
            if (/(?:^|; )instapara_cookie_consent=accepted/.test(document.cookie) || localStorage.getItem('instapara_cookie_consent') === 'accepted') {
              gtag('consent', 'update', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
              });
            }
          } catch(e) {}
        `}} />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KDR9Z5CGSW"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`gtag('js', new Date()); gtag('config', 'G-KDR9Z5CGSW');`}
        </Script>
        <Script
          src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="afterInteractive"
        />
        <Script id="cursor-dot" strategy="afterInteractive">{`
          (function(){
            if(window.innerWidth < 768) return;
            var s = document.createElement('style');
            s.textContent = '*,*::before,*::after{cursor:none!important}';
            document.head.appendChild(s);
            var d = document.createElement('div');
            d.style.cssText = 'position:fixed;top:0;left:0;width:10px;height:10px;border-radius:50%;background:#9fc6da;pointer-events:none;z-index:2147483647;opacity:0;transition:opacity 0.15s;';
            document.body.appendChild(d);
            window.addEventListener('mousemove',function(e){
              d.style.transform='translate('+(e.clientX-5)+'px,'+(e.clientY-5)+'px)';
              d.style.opacity='0.8';
            });
            window.addEventListener('mouseleave',function(){d.style.opacity='0';});
          })();
        `}</Script>
        <LanguageProvider>{children}</LanguageProvider>
        <CookieConsentBanner />
        <FacebookPixel />
      </body>
    </html>
  );
}
