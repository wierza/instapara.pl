import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { EntityDescription } from "@/components/entity-description";
import { ProblemSection } from "@/components/problem-section";
import { ParadigmSection } from "@/components/paradigm-section";
import { SolutionSection } from "@/components/solution-section";
import { HandoffSection } from "@/components/handoff-section";
import { ResultsSection } from "@/components/results-section";
import { TargetSection } from "@/components/target-section";
import { NotForSection } from "@/components/not-for-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { AboutSection } from "@/components/about-section";
import { BookingSection } from "@/components/booking-section";
import { ConnectSection } from "@/components/connect-section";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Jak wygląda współpraca z InstaPara — od pierwszego kontaktu do systemu, który działa",
  description: "6 kroków od pierwszego kontaktu do uruchomienia Systemu C.A.S.H. — autorskiego modelu marketingu wideo dla prawników, klinik i agentów nieruchomości.",
  totalTime: "PT10D",
  supply: [
    { "@type": "HowToSupply", name: "Gotowość do pojawienia się przed kamerą" },
    { "@type": "HowToSupply", name: "Dostępy do profili social media" },
  ],
  tool: [
    { "@type": "HowToTool", name: "Profesjonalny sprzęt wideo InstaPara (kamera, mikrofon, lampy, teleprompter)" },
    { "@type": "HowToTool", name: "Gotowe scenariusze i strategia treści" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Pierwszy sygnał",
      text: "Wysyłasz krótką wiadomość. My zbieramy kluczowe informacje i przygotowujemy się do rozmowy. Wiesz, czy warto iść dalej.",
      url: "https://instapara.pl/#process",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Strategiczna rozmowa",
      text: "Spotykamy się na 45-minutowym callu. Analizujemy Twoją sytuację i sprawdzamy dopasowanie. Nie sprzedajemy — diagnozujemy. Widzisz, czy ten system ma sens dla Twojego biznesu.",
      url: "https://instapara.pl/#process",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Decyzja i start",
      text: "Otrzymujesz konkretną propozycję dopasowaną do Twojego biznesu w ciągu 1–2 dni. Po akceptacji przechodzimy od razu do działania. Masz jasny plan i wiesz, co dalej.",
      url: "https://instapara.pl/#process",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Przejęcie procesu",
      text: "W ciągu tygodnia zakładamy komunikację, zbieramy dostępy i analizujemy Twoją obecną sytuację. Porządkujemy fundamenty i przygotowujemy system do działania. Przestajesz myśleć o marketingu na co dzień.",
      url: "https://instapara.pl/#process",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Przygotowanie systemu",
      text: "Optymalizujemy profil, tworzymy strategię i scenariusze. Wszystko jest gotowe zanim pojawi się pierwsza publikacja. Twoja marka zaczyna wyglądać jak lider rynku.",
      url: "https://instapara.pl/#process",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Dzień nagraniowy",
      text: "Spotykamy się na kilka godzin z gotowymi scenariuszami i profesjonalnym sprzętem. Tworzymy materiały, które budują zaufanie i prowadzą do decyzji — i które działają przez cały miesiąc.",
      url: "https://instapara.pl/#process",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Ile czasu zajmuje mi współpraca z InstaPara?", acceptedAnswer: { "@type": "Answer", text: "Twój wkład to 3 godziny miesięcznie — jeden dzień nagraniowy. Przyjeżdżamy do Ciebie z profesjonalnym sprzętem, teleprompterem i gotowymi scenariuszami. Montaż, grafiki, publikacja i kampanie reklamowe — całą resztą zajmujemy się my." } },
    { "@type": "Question", name: "Ile kosztuje marketing wideo z InstaPara?", acceptedAnswer: { "@type": "Answer", text: "Nasze pakiety zaczynają się od 1 700 zł netto miesięcznie i są w pełni spersonalizowane pod Twój biznes. Dokładną wycenę ustalamy po bezpłatnym audycie strategii wideo — bez zobowiązań." } },
    { "@type": "Question", name: "Czym jest System C.A.S.H.?", acceptedAnswer: { "@type": "Answer", text: "To nasz autorski system oparty na 4 filarach: C — Content premium (jakość telewizyjna), A — Autorytet (scenariusze pozycjonujące Cię jako eksperta), S — Strategia i scenariusze (gotowe skrypty, plan publikacji), H — Hand-off (pełna delegacja — Ty nagrywasz, my robimy resztę). Jeden system. Jeden wynik." } },
    { "@type": "Question", name: "Dla kogo jest InstaPara?", acceptedAnswer: { "@type": "Answer", text: "Dla doświadczonych przedsiębiorców — prawników, agentów nieruchomości, lekarzy, konsultantów, coachów — którzy chcą zbudować autorytet wideo i przyciągać klientów premium, ale nie mają czasu ani chęci robić tego samodzielnie." } },
    { "@type": "Question", name: "Jak wygląda onboarding?", acceptedAnswer: { "@type": "Answer", text: "6 kroków: wiadomość START i brief (5 min) → strategiczna kawa online (45 min) → oferta i umowa (1–2 dni) → głęboki onboarding — audyt i dostępy (1 tydzień) → pakiet startowy — optymalizacja profili i projekt okładek → pierwszy dzień nagraniowy z naszym sprzętem i scenariuszami (3h)." } },
    { "@type": "Question", name: "Czy mogę zobaczyć efekty zanim się zdecyduję?", acceptedAnswer: { "@type": "Answer", text: "Tak. Zapraszamy na bezpłatny 45-minutowy audyt strategii wideo. Otrzymasz konkretną diagnozę swojej obecności w social mediach i plan działania na pierwsze 90 dni — niezależnie od tego, czy zdecydujesz się na współpracę." } },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <HeroSection />
        <EntityDescription />
        <ProblemSection />
        <ParadigmSection />
        <SolutionSection />
        <HandoffSection />
        <ResultsSection />
        <TargetSection />
        <NotForSection />
        <TestimonialsSection />
        <ProcessSection />
        <AboutSection />
        <FAQSection />
        <BookingSection />
      </main>
      <ConnectSection />
    </>
  );
}
