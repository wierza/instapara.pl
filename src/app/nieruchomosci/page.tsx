import type { Metadata } from "next";
import { NieruchomosciPage } from "@/components/nieruchomosci-page";
import { Header } from "@/components/header";
import { ConnectSection } from "@/components/connect-section";

export const metadata: Metadata = {
  title: "Marketing wideo dla agentów nieruchomości — klienci, którzy wybierają Ciebie zanim się odezwą | InstaPara",
  description: "Zanim sprzedający postawi na Ciebie swoje kilkaset tysięcy złotych — obserwuje Cię tygodniami. System C.A.S.H. sprawia, że gdy w końcu pisze, pisze do Ciebie.",
  alternates: { canonical: "https://instapara.pl/nieruchomosci" },
  openGraph: {
    title: "Marketing wideo dla agentów nieruchomości — klienci, którzy wybierają Ciebie zanim się odezwą",
    description: "Zanim sprzedający postawi na Ciebie swoje kilkaset tysięcy złotych — obserwuje Cię tygodniami. System C.A.S.H. buduje to zaufanie.",
    type: "website",
    locale: "pl_PL",
    url: "https://instapara.pl/nieruchomosci",
    images: [{ url: "https://instapara.pl/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <NieruchomosciPage />
      <ConnectSection />
    </>
  );
}
