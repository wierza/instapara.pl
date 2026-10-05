import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { ConnectSection } from "@/components/connect-section";

type Props = {
  title: string;
  description: string;
  url: string;
  author: string;
  authorRole: string;
  date: string;
  dateModified?: string;
  readTime: number;
  image: string;
  children: React.ReactNode;
};

const MONTHS = ["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"];
function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export function ArticleLayout({ title, description, url, author, authorRole, date, dateModified, readTime, image, children }: Props) {
  const authorId = author === "Marysia Grygosińska"
    ? "https://instapara.pl/#marysia"
    : "https://instapara.pl/#dawid";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: { "@type": "ImageObject", url: image, width: 800, height: 600 },
    datePublished: `${date}T00:00:00+01:00`,
    dateModified: `${dateModified || date}T00:00:00+01:00`,
    author: { "@type": "Person", "@id": authorId, name: author },
    publisher: { "@id": "https://instapara.pl/#organization" },
    inLanguage: "pl",
    wordCount: readTime * 200,
    isPartOf: { "@id": "https://instapara.pl/#website" },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".prose-instapara p:first-of-type"],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://instapara.pl" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://instapara.pl/blog" },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <div className="bg-navy pt-28 lg:pt-32 pb-16 lg:pb-20 px-6 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted hover:text-sky transition-colors mb-10"
            >
              <svg viewBox="0 0 16 16" fill="none" className="size-3.5">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Blog
            </Link>
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-stretch">
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl w-full min-h-[280px]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>

              {/* Text */}
              <div>
                <h1 className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-light leading-[1.3] text-cream">
                  {title}
                </h1>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div>
                    <p className="text-sm font-medium text-cream">{author}</p>
                    <p className="text-xs text-muted mt-0.5">{authorRole}</p>
                  </div>
                  <div className="h-8 w-px bg-white/10 hidden sm:block" />
                  <p className="text-xs uppercase tracking-[0.15em] text-muted">
                    {formatDate(date)}
                  </p>
                  <div className="h-8 w-px bg-white/10 hidden sm:block" />
                  <p className="text-xs uppercase tracking-[0.15em] text-muted">
                    {readTime} min czytania
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="bg-cream px-6 lg:px-12 py-20">
          <div className="mx-auto max-w-3xl">
            <div className="prose-instapara">
              {children}
            </div>

            {/* CTA */}
            <div className="mt-20 bg-navy rounded-2xl p-8 lg:p-12">
              <div className="mb-6 h-px w-8 bg-sky" />
              <p className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-light leading-[1.35] text-cream mb-2">
                Gotowy, żeby twoja marka zaczęła
                <br />
                <em className="italic text-sky">pracować bez twojego udziału?</em>
              </p>
              <p className="mt-4 text-sm text-cream/60 max-w-md mb-8">
                45 minut. Zero sprzedawania. Otrzymasz konkretną diagnozę swojej obecności w social mediach i plan na pierwsze 90 dni.
              </p>
              <Link
                href="/#booking"
                className="inline-flex items-center gap-2 rounded-full bg-sky px-6 py-3 text-sm font-medium text-navy hover:bg-cream transition-all hover:scale-105"
              >
                Umów bezpłatny audyt
                <svg viewBox="0 0 16 16" fill="none" className="size-4">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <ConnectSection />
    </>
  );
}
