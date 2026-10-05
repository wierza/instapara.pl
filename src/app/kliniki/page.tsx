import type { Metadata } from "next";
import { KlinikiPage } from "@/components/kliniki-page";
import { Header } from "@/components/header";
import { ConnectSection } from "@/components/connect-section";

export const metadata: Metadata = {
  title: "Marketing wideo dla klinik medycyny estetycznej — pacjenci, którzy przychodzą już przekonani | InstaPara",
  description: "Przeciętna pacjentka rozważa zabieg przez 6–8 lat zanim zadzwoni. System C.A.S.H. buduje zaufanie, które sprawia, że dzwoni do Ciebie — nie do konkurencji.",
  alternates: { canonical: "https://instapara.pl/kliniki" },
  openGraph: {
    title: "Marketing wideo dla klinik medycyny estetycznej — pacjenci, którzy przychodzą już przekonani",
    description: "Przeciętna pacjentka rozważa zabieg przez 6–8 lat zanim zadzwoni. System C.A.S.H. sprawia, że dzwoni do Ciebie.",
    type: "website",
    locale: "pl_PL",
    url: "https://instapara.pl/kliniki",
    images: [{ url: "https://instapara.pl/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <KlinikiPage />
      <ConnectSection />
    </>
  );
}
