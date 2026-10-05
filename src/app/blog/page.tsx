import type { Metadata } from "next";
import { Header } from "@/components/header";
import { ConnectSection } from "@/components/connect-section";
import { BlogList } from "@/components/blog-list";

export const metadata: Metadata = {
  title: "Blog — InstaPara | Marketing wideo dla przedsiębiorców",
  description: "Artykuły o budowaniu marki eksperta, marketingu wideo i System C.A.S.H. — dla prawników, agentów nieruchomości i doświadczonych przedsiębiorców.",
  alternates: { canonical: "https://instapara.pl/blog" },
  openGraph: {
    title: "Blog — InstaPara | Marketing wideo dla przedsiębiorców",
    description: "Artykuły o budowaniu marki eksperta, marketingu wideo i System C.A.S.H.",
    type: "website",
    locale: "pl_PL",
    url: "https://instapara.pl/blog",
    images: [{ url: "https://instapara.pl/og-image.png", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="bg-navy pt-36 pb-20 px-6 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-6">Blog</p>
            <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.2] text-cream">
              Wiedza, która<br />
              <em className="italic text-sky">pracuje za Ciebie</em>
            </h1>
            <p className="mt-6 text-sm text-cream/50 max-w-md leading-relaxed">
              Artykuły o budowaniu marki eksperta, marketingu wideo i delegowaniu obecności online — bez poświęcania na to całego tygodnia.
            </p>
          </div>
        </div>

        <BlogList />
      </main>

      <ConnectSection />
    </>
  );
}
