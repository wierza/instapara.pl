import type { Metadata } from "next";
import { PrawnicyPage } from "@/components/prawnicy-page";
import { Header } from "@/components/header";
import { ConnectSection } from "@/components/connect-section";

export const metadata: Metadata = {
  title: "Marketing wideo dla prawników — klienci, którzy ufają zanim zadzwonią | InstaPara",
  description: "Zanim Twój przyszły klient zadzwoni — 73% z nich spędza tydzień szukając kogoś, komu mogą zaufać. System C.A.S.H. buduje ten autorytet zamiast Ciebie.",
  alternates: { canonical: "https://instapara.pl/prawnicy" },
  openGraph: {
    title: "Marketing wideo dla prawników — klienci, którzy ufają zanim zadzwonią",
    description: "Zanim Twój przyszły klient zadzwoni — 73% z nich spędza tydzień szukając kogoś, komu mogą zaufać.",
    type: "website",
    locale: "pl_PL",
    url: "https://instapara.pl/prawnicy",
    images: [{ url: "https://instapara.pl/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <PrawnicyPage />
      <ConnectSection />
    </>
  );
}
