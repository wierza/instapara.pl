"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalEmbed } from "@/components/cal-embed";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-display text-[2.5rem] font-light leading-none text-white/15 select-none">{number}</span>
      <div>
        <div className="h-px w-12 bg-white/20 mb-2" />
        <span className="text-xs uppercase tracking-[0.2em] text-sky/60">{text}</span>
      </div>
    </div>
  );
}

function SectionLabelLight({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-display text-[2.5rem] font-light leading-none text-navy/10 select-none">{number}</span>
      <div>
        <div className="h-px w-12 bg-navy/20 mb-2" />
        <span className="text-xs uppercase tracking-[0.2em] text-slate/70">{text}</span>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" className="size-3 shrink-0">
      <path d="M2 6l3 3 5-5" stroke="#9fc6da" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" className="size-3 shrink-0">
      <path d="M2 2l8 8M10 2l-8 8" stroke="#9fc6da" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="size-4 transition-transform group-hover:translate-x-1">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── 1. HERO ─────────────────────────────────────────────────────────────────

function HeroSection() {
  const { scrollY } = useScroll();
  const blobY1 = useTransform(scrollY, [0, 600], [0, -80]);
  const blobY2 = useTransform(scrollY, [0, 600], [0, -40]);
  const textY = useTransform(scrollY, [0, 500], [0, 60]);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-navy pt-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: blobY1, background: "radial-gradient(circle, rgba(159,198,218,0.07) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full"
        />
        <motion.div
          style={{ y: blobY2, background: "radial-gradient(circle, rgba(159,198,218,0.04) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] rounded-full"
        />
      </div>

      <motion.div style={{ y: textY }} className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 pb-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky/20 bg-sky/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-sky">
            Marketing wideo dla agentów nieruchomości
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2rem,4vw,5rem)] font-light leading-[1.55] tracking-tight text-cream max-w-4xl"
        >
          Klienci, którzy wybierają Ciebie
          <br />
          <em className="italic text-sky">zanim się odezwą.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-8 font-display italic text-[clamp(1rem,1.6vw,1.3rem)] text-muted max-w-2xl"
        >
          Zanim sprzedający postawi na Ciebie swoje kilkaset tysięcy złotych —
          obserwuje Cię tygodniami. Sprawdza, jak mówisz, jak myślisz, czy rozumie
          rynek tak jak on. Szuka jednego sygnału: że może Ci zaufać.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-4 text-base leading-relaxed text-cream/55 max-w-xl md:text-lg"
        >
          Pytanie nie brzmi: czy Cię znajdzie. Pytanie brzmi: czy gdy znajdzie,
          znajdzie powód, żeby wybrać właśnie Ciebie — a nie kolejnego agenta
          z tym samym zdjęciem i tabliczką SPRZEDANE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link
            href="#booking"
            className="group inline-flex items-center gap-3 rounded-full bg-sky px-7 py-3.5 text-sm font-medium text-navy transition-all hover:bg-cream hover:scale-105"
          >
            Sprawdźmy, czy to ma sens w Twojej działalności
            <ArrowIcon />
          </Link>
          <Link
            href="#cash"
            className="text-sm text-muted transition-colors hover:text-cream underline underline-offset-4 decoration-muted/40 hover:decoration-cream/40"
          >
            Zobacz jak działa System C.A.S.H.
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-20 flex items-center gap-4"
        >
          <div className="h-px flex-1 max-w-24 bg-white/10" />
          <span className="text-xs uppercase tracking-[0.25em] text-cream/25">scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── 2. PROBLEM ───────────────────────────────────────────────────────────────

const problems = [
  {
    num: "01",
    title: `„SPRZEDANE. SPRZEDANE. SPRZEDANE." — i żaden nowy klient nie zadzwonił.`,
    body: "Większość agentów nieruchomości ma setki postów z tabliczką SPRZEDANE. Każdy taki post mówi: zamknąłem transakcję. Żaden nie mówi: oto dlaczego powinieneś mi zaufać z Twoim mieszkaniem wartym 600 tysięcy złotych. To jest fundamentalna różnica między aktywnością a marketingiem.",
  },
  {
    num: "02",
    title: "Twoja konkurencja wygląda identycznie jak Ty — i oboje wiedzą o tym.",
    body: "W Polsce działa ponad 130 000 pośredników w obrocie nieruchomościami. Większość z nich ma ten sam profil, te same zdjęcia i ten sam opis. Klient, który szuka agenta, widzi morze identycznych twarzy. Wybiera na chybił trafił — albo wybiera tego, kogo kojarzy. Zazwyczaj to nie Ty.",
  },
  {
    num: "03",
    title: "Klienci zaczynają od pytania o prowizję — bo nie dałeś im innego powodu.",
    body: "Gdy sprzedający lub kupujący nie zna Cię na tyle, żeby Ci zaufać — zostaje mu tylko jedno kryterium wyboru: cena. Nie dlatego, że jest chciwy. Dlatego, że nie ma podstawy do innej decyzji. To nie jest problem rynku. To jest problem pozycjonowania.",
  },
  {
    num: "04",
    title: "Masz widoczność. Nie masz zaufania. To nie to samo.",
    body: "Zasięg mówi: jestem tu. Zaufanie mówi: wiem, co robię, i mogę Ci to udowodnić. Sprzedający oddaje w Twoje ręce decyzję wartą całe lata pracy. Kupujący wpłaca zadatek swojego życia. Żadne z nich nie zrobi tego na podstawie liczby polubień pod Twoim ostatnim postem.",
  },
];

function ProblemSection() {
  return (
    <section className="bg-navy py-24 md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <SectionLabel number="01" text="Problem" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-light leading-[1.55] text-cream"
          >
            Masz profile, posty
            <br />
            i zasięgi. Nie masz
            <br />
            <em className="italic text-sky/70">klientów z polecenia.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-cream/50 leading-relaxed self-center">
            To jeden z najbardziej powszechnych problemów agentów nieruchomości w Polsce.
            Regularna aktywność w social mediach, profesjonalne zdjęcia, setki zamkniętych
            transakcji w portfolio — i mimo to kolejni klienci trafiają do Ciebie przez
            przypadek, a nie dlatego, że świadomie Cię wybrali.
          </motion.p>
        </motion.div>

        <div className="border-t border-white/10">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group border-b border-white/10 py-10 hover:bg-white/[0.025] transition-all duration-300 cursor-default"
            >
              <div className="flex gap-8 lg:gap-0">
                <span className="font-display text-2xl font-light leading-none text-white/20 shrink-0 w-16 pt-1">
                  {p.num}
                </span>
                <div className="flex-1 lg:flex lg:gap-16">
                  <h3 className="lg:w-80 shrink-0 font-heading text-xl text-cream transition-transform duration-300 group-hover:translate-x-2">
                    {p.title}
                  </h3>
                  <p className="mt-3 lg:mt-0 font-sans text-base text-cream/45 leading-relaxed max-w-xl">
                    {p.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mt-14 font-sans italic text-[clamp(1rem,1.4vw,1.2rem)] text-cream/40 max-w-2xl leading-relaxed"
        >
          Posty z SPRZEDANE mówią, że zamykasz transakcje.
          Wideo pokazuje, dlaczego ktoś powinien Ci swoją transakcję powierzyć.
        </motion.p>
      </div>
    </section>
  );
}

// ─── 3. ZMIANA PARADYGMATU ────────────────────────────────────────────────────

const paradigmShifts = [
  {
    from: "Więcej ogłoszeń i postów = więcej zapytań = więcej klientów.",
    to: "Więcej zaufania = klienci, którzy wybierają Cię zanim porównają Cię z kimkolwiek innym.",
  },
  {
    from: "Portfel zamkniętych transakcji udowadnia, że jesteś dobry.",
    to: "To, jak mówisz o rynku, nieruchomościach i procesie sprzedaży — udowadnia, że jesteś ekspertem, któremu warto zaufać.",
  },
  {
    from: "Zasięg i widoczność = rozpoznawalność = wybór.",
    to: "Znajomość sposobu myślenia agenta = zaufanie = decyzja — zanim klient napisze do kogokolwiek innego.",
  },
];

function ParadigmSection() {
  return (
    <section className="bg-cream py-24 md:py-36 border-t border-warm">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <SectionLabelLight number="02" text="Zmiana perspektywy" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-light leading-[1.55] text-navy"
          >
            Problemem nie jest
            <br />
            <em className="italic text-sky/70">brak widoczności.</em>
            <br />
            Problemem jest brak <em className="italic text-sky">zaufania.</em>
          </motion.h2>
          <motion.div variants={fadeUp} className="self-center space-y-5">
            <p className="font-sans text-base text-slate leading-relaxed">
              Klient nie wybiera agenta, którego widzi najczęściej. Wybiera agenta,
              któremu ufa na tyle, żeby powierzyć mu transakcję wartą kilkaset tysięcy złotych.
              To nie jest ta sama rzecz.
            </p>
            <p className="font-sans text-base text-slate leading-relaxed">
              Nieruchomości to jedna z niewielu branż, gdzie decyzja o wyborze osoby,
              która Cię reprezentuje, jest podejmowana z ogromną starannością i ostrożnością.
              Klient nie chce najlepszej oferty — chce agenta, przy którym czuje się bezpiecznie.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="border border-navy/10 rounded-2xl p-10 md:p-14 mb-16 bg-white/60"
        >
          <p className="font-heading text-[clamp(1.2rem,2.5vw,2rem)] leading-relaxed text-navy/80 max-w-3xl">
            Sprzedający i kupujący nie szukają agenta z największym zasięgiem.
            Szukają kogoś, przy kim czują się
            <em className="italic text-sky"> bezpiecznie przy transakcji wartej całe lata pracy.</em>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-warm rounded-2xl overflow-hidden">
          {paradigmShifts.map((shift, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-cream p-8 group hover:bg-white transition-colors duration-300"
            >
              <p className="text-sm text-navy/30 leading-relaxed mb-4 line-through decoration-navy/20">
                {shift.from}
              </p>
              <div className="h-px w-8 bg-sky/40 mb-4" />
              <p className="font-sans text-base text-navy/70 leading-relaxed group-hover:text-navy transition-colors duration-300">
                {shift.to}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. JAK MYŚLI KLIENT ──────────────────────────────────────────────────────

const clientJourney = [
  {
    step: "01",
    title: "Obserwuje — ale nie daje znaku życia.",
    body: "Zanim sprzedający wyśle pierwszy SMS, śledzi kilku agentów tygodniami. Sprawdza, jak mówią o rynku, jak reagują na trudne pytania, jak traktują poprzednich klientów. To nie jest bierność — to jest staranny proces selekcji.",
  },
  {
    step: "02",
    title: "Boi się wybrać źle.",
    body: "Sprzedający boi się podpisać umowę z agentem, który zaniży cenę, żeby szybko zamknąć transakcję. Kupujący boi się, że agent pracuje dla sprzedającego, nie dla niego. Oboje szukają sygnału, że ten konkretny agent rozumie ich interes — nie tylko swój.",
  },
  {
    step: "03",
    title: "Chce bezpiecznej transakcji — nie najtańszego agenta.",
    body: "Sprzedający oddaje w Twoje ręce decyzję wartą kilkaset tysięcy złotych. Kupujący wpłaca zadatek swojego życia. Żadne z nich nie wybierze agenta tylko dlatego, że ma niską prowizję. Wybiorą tego, przy którym poczują się pewnie — nawet jeśli będzie droższy.",
  },
  {
    step: "04",
    title: "Szuka eksperta, nie sprzedawcy.",
    body: "Klient nieruchomości nie chce być poprowadzony do transakcji. Chce być dobrze doradzeony. Agent, który na wideo pokazuje, jak analizuje rynek, jak negocjuje, jak myśli o procesie — staje się doradcą, nie akwizytorem. A z doradcą rozmawiamy inaczej.",
  },
  {
    step: "05",
    title: "Gdy pisze — decyzja jest już podjęta.",
    body: "Klient, który trafił do Ciebie przez Twoje wideo, nie porównuje już prowizji z sąsiednim agentem. Pisze, bo wybrał. Pierwsze spotkanie to nie sprzedaż — to potwierdzenie decyzji, którą podjął tydzień temu, oglądając Twój materiał o błędach przy wycenie mieszkania.",
  },
];

function ClientMindSection() {
  return (
    <section className="bg-navy py-24 md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <SectionLabel number="03" text="Perspektywa klienta" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-light leading-[1.55] text-cream"
          >
            Twój przyszły klient
            <br />
            obserwuje Cię od
            <br />
            <em className="italic text-sky/70">trzech tygodni.</em>
            <br />
            Jeszcze się nie odezwał.
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-cream/50 leading-relaxed self-center">
            Klient rynku nieruchomości to nie osoba, która impulsywnie wybiera agenta.
            To osoba, która przed oddaniem komuś kilkuset tysięcy złotych chce mieć pewność,
            że trafia w dobre ręce. Jeśli nie dasz jej tej pewności — dasz ją ktoś inny.
          </motion.p>
        </motion.div>

        <div>
          {clientJourney.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 4 }}
              className="group border-t border-white/10 py-10 hover:bg-white/[0.025] transition-all duration-300"
            >
              <div className="flex gap-8 lg:gap-0">
                <span className="font-display text-2xl font-light leading-none text-white/15 shrink-0 w-16 pt-1">
                  {item.step}
                </span>
                <div className="flex-1 lg:flex lg:gap-16">
                  <h3 className="lg:w-72 shrink-0 font-heading text-xl text-cream transition-transform duration-300 group-hover:translate-x-2">
                    {item.title}
                  </h3>
                  <p className="mt-3 lg:mt-0 font-sans text-base text-cream/45 leading-relaxed max-w-xl">
                    {item.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mt-14 border border-sky/15 rounded-2xl p-8 md:p-10 bg-sky/[0.03]"
        >
          <p className="font-sans text-base text-cream/70 leading-relaxed max-w-2xl">
            Klienci, którzy trafiają do agenta przez jego wideo, zadają na pierwszym
            spotkaniu inne pytania. Nie pytają o prowizję. Nie porównują z konkurencją.
            Pytają o szczegóły swojej transakcji — bo decyzję o wyborze agenta podjęli już wcześniej.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 5. SYSTEM C.A.S.H. ──────────────────────────────────────────────────────

const cashPillars = [
  {
    letter: "C",
    name: "Content",
    subtitle: "Wideo, które pokazuje Twój styl pracy",
    body: "Nie kolejne SPRZEDANE. Wideo, które odpowiada na pytania klientów — o rynek, o proces sprzedaży, o błędy przy wycenie, o to, co wyróżnia dobrego agenta. Zanim klient zadzwoni, wie już, jak myślisz.",
  },
  {
    letter: "A",
    name: "Authority",
    subtitle: "Ty jako ekspert swojego rynku",
    body: "Klienci nie wybierają agencji — wybierają agenta. Twarz, wiedza, sposób analizy rynku i podejście do klienta budują autorytet, którego żaden wpis z SPRZEDANE nie zastąpi. Stajesz się pierwszym wyborem, nie kolejną opcją.",
  },
  {
    letter: "S",
    name: "Strategy & Scripts",
    subtitle: "Strategia, która prowadzi do kontaktu",
    body: "Każde wideo ma konkretne miejsce w ścieżce decyzyjnej klienta — od pierwszego kontaktu z Twoją twarzą aż do momentu, w którym poczuje się gotowy, żeby napisać. Bez przypadkowości. Z logiką.",
  },
  {
    letter: "H",
    name: "Hand-off",
    subtitle: "Zamiana wiadomości w spotkania",
    body: "Większość agentów kończy na publikacji. My zaczynamy tam, gdzie inni kończą: pomagamy zamieniać pierwsze zapytanie o prowizję w umówione spotkanie — z klientem, który już Ci ufa.",
  },
];

function CashSection() {
  return (
    <section id="cash" className="bg-cream py-24 md:py-36 border-t border-warm">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <SectionLabelLight number="04" text="System C.A.S.H." />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-light leading-[1.55] text-navy"
          >
            Jeden system.
            <br />
            Od pierwszego wideo
            <br />
            <em className="italic text-sky">do podpisanej umowy.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-slate leading-relaxed self-center">
            System C.A.S.H. nie jest listą usług. To logika przejścia klienta
            od obserwowania Twojego profilu — do spotkania, na które przychodzi
            zdecydowany. Bez targowania się o prowizję. Przez zaufanie.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-warm rounded-2xl overflow-hidden">
          {cashPillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-cream p-10 group hover:bg-white transition-colors duration-300"
            >
              <div className="flex items-start gap-5 mb-5">
                <span className="font-display text-[3rem] font-light leading-none text-sky/40 group-hover:text-sky/60 transition-colors duration-300">
                  {pillar.letter}
                </span>
                <div className="pt-2">
                  <p className="font-display text-xs uppercase tracking-[0.2em] text-slate/50 mb-1">{pillar.name}</p>
                  <p className="font-heading text-lg text-navy">{pillar.subtitle}</p>
                </div>
              </div>
              <p className="font-sans text-base text-slate/70 leading-relaxed group-hover:text-slate transition-colors duration-300">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. HAND-OFF ─────────────────────────────────────────────────────────────

const handoffPoints = [
  {
    num: "01",
    title: "Co odpisać, gdy ktoś pyta tylko o prowizję.",
    body: "Wiadomość z pytaniem o prowizję to nie odrzucenie — to zaproszenie do rozmowy. Klient, który trafiał do Ciebie przez wideo, jest gotowy zaufać. Odpowiedź musi tę gotowość podtrzymać, nie zresetować przez podanie liczby bez kontekstu.",
  },
  {
    num: "02",
    title: "Jak prowadzić rozmowę, która kończy się spotkaniem.",
    body: "Jest ogromna różnica między klientem, który zapytał o prowizję, a klientem, który umówił się na spotkanie. Ten mostek zbudowany jest z kilku zdań i jednej zasady: najpierw budujesz relację, potem rozmawiasz o szczegółach. Pomagamy zbudować ten mostek.",
  },
  {
    num: "03",
    title: "Pierwsze wrażenie, które potwierdza tygodnie obserwacji.",
    body: "Klient śledził Twój profil przez trzy tygodnie. Zbudował obraz agenta, któremu chce zaufać. Gdy w końcu napisał — to co dostanie w odpowiedzi zdecyduje, czy te tygodnie zaprocentują spotkaniem, czy zacznie szukać dalej.",
  },
];

function HandoffSection() {
  return (
    <section className="bg-navy py-24 md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <SectionLabel number="05" text="Hand-off" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-light leading-[1.55] text-cream"
          >
            Większość agentów
            <em className="italic text-sky/70"> publikuje i czeka.</em>
            <br />
            My dbamy o to,{" "}
            <em className="italic text-sky">co dzieje się potem.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-cream/50 leading-relaxed self-center">
            Wideo opublikowane. Klient ogląda. Obserwuje. I w końcu pisze — pytanie
            o prowizję. Tutaj większość agentów traci kogoś, kto był gotowy zaufać,
            przez jedną odpowiedź, która brzmi jak cennik, nie jak rozmowa.
          </motion.p>
        </motion.div>

        <div>
          {handoffPoints.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 4 }}
              className="group border-t border-white/10 py-10 hover:bg-white/[0.025] transition-all duration-300"
            >
              <div className="flex gap-8 lg:gap-0">
                <span className="font-display text-2xl font-light leading-none text-white/15 shrink-0 w-16 pt-1">
                  {p.num}
                </span>
                <div className="flex-1 lg:flex lg:gap-16">
                  <h3 className="lg:w-80 shrink-0 font-heading text-xl text-cream transition-transform duration-300 group-hover:translate-x-2">
                    {p.title}
                  </h3>
                  <p className="mt-3 lg:mt-0 font-sans text-base text-cream/45 leading-relaxed max-w-xl">
                    {p.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mt-14 font-sans italic text-[clamp(1rem,1.4vw,1.2rem)] text-cream/35 max-w-xl leading-relaxed"
        >
          Dla agenta każdy utracony klient to nie jedna transakcja.
          To wszystkie polecenia, które ten klient mógłby dać przez lata.
        </motion.p>
      </div>
    </section>
  );
}

// ─── 7 & 8. DLA KOGO / NIE ───────────────────────────────────────────────────

const forWho = [
  "Chcesz być agentem, którego klienci sami szukają — nie tym, który ściga leady.",
  "Chcesz budować markę osobistą w swoim rejonie i stać się pierwszym skojarzeniem, gdy ktoś myśli o sprzedaży lub zakupie nieruchomości.",
  "Rozumiesz, że jeden klient, który Cię poleca znajomym przez lata, jest wart więcej niż tuzin klientów z przypadkowego źródła.",
];

const notForWho = [
  {
    label: "Chcesz tylko więcej zasięgów i obserwujących.",
    sub: "Budujemy zaufanie i spotkania — nie liczby na dashboardzie. Jeśli celem są statystyki zasięgów, to nie jest narzędzie dla Ciebie.",
  },
  {
    label: "Kopiujesz innych agentów i chcesz robić to samo, tylko częściej.",
    sub: "System działa tylko wtedy, gdy jesteś wyraźnie inny. Kopia kopii nie buduje zaufania — tylko powiększa szum.",
  },
  {
    label: "Nie jesteś gotowy, żeby Twoja twarz i osobowość były widoczne.",
    sub: "Wideo działa, bo pokazuje człowieka za transakcją. Jeśli wolisz anonimowość — to narzędzie nie będzie działać tak, jak powinno.",
  },
];

function TargetSection() {
  return (
    <section className="bg-cream py-24 md:py-36 border-t border-warm">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabelLight number="06" text="Dla kogo" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(1.6rem,2.5vw,2.8rem)] font-light leading-[1.55] text-navy mb-10"
            >
              To rozwiązanie ma sens, jeśli...
            </motion.h2>
            <motion.ul variants={stagger} className="space-y-6">
              {forWho.map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-4">
                  <span className="mt-1 h-6 w-6 rounded-full bg-sky/15 flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </span>
                  <p className="font-sans text-base text-navy/70 leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </motion.ul>
            <motion.p
              variants={fadeUp}
              className="mt-10 text-sm italic text-slate/50 leading-relaxed border-l-2 border-sky/20 pl-4"
            >
              Rynek nieruchomości to jeden z niewielu rynków, gdzie reputacja agenta
              jest ważniejsza niż agencji, w której pracuje. To Ty jesteś marką — nie
              logo na wizytówce.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabelLight number="07" text="Dla kogo nie" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(1.6rem,2.5vw,2.8rem)] font-light leading-[1.55] text-navy mb-10"
            >
              To nie jest dla Ciebie, jeśli...
            </motion.h2>
            <motion.ul variants={stagger} className="space-y-6">
              {notForWho.map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-4">
                  <span className="mt-1 h-6 w-6 rounded-full bg-warm flex items-center justify-center shrink-0">
                    <XIcon />
                  </span>
                  <div>
                    <p className="font-sans text-base text-navy/70 leading-relaxed">{item.label}</p>
                    <p className="mt-1 text-sm text-slate/50 leading-relaxed">{item.sub}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 9. DOWÓD ─────────────────────────────────────────────────────────────────

const proofStats = [
  {
    stat: "130 000+",
    unit: "",
    label: "pośredników w obrocie nieruchomościami działa w Polsce.",
    insight: "Bez wyraźnego wyróżnienia jesteś kolejnym numerem w wynikach wyszukiwania. Klient nie ma powodu wybrać właśnie Ciebie.",
  },
  {
    stat: "78%",
    unit: "",
    label: "sprzedających przyznaje, że wybór agenta oparli na poczuciu zaufania — nie na portfelu transakcji.",
    insight: "Liczba zamkniętych transakcji mówi, że jesteś aktywny. Wideo mówi, że można Ci zaufać z własną. To nie to samo kryterium.",
  },
  {
    stat: "3–8",
    unit: "tyg.",
    label: "tyle obserwują Cię klienci, zanim wyślą pierwszą wiadomość.",
    insight: "Klient, który do Ciebie pisze, nie jest zimnym leadem. Jest kimś, kto przez tygodnie budował zaufanie — i jest gotowy działać.",
  },
];

function ProofSection() {
  return (
    <section className="bg-navy py-24 md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <SectionLabel number="08" text="Dane, nie obietnice" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-light leading-[1.55] text-cream"
          >
            Dlaczego 90% agentów
            <br />
            <em className="italic text-sky/70">wygląda tak samo</em>
            <br />
            w social mediach.
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-cream/50 leading-relaxed self-center">
            Bo wszyscy odpowiadają na to samo pytanie: ile mam transakcji?
            Zamiast na jedyne pytanie, które zadaje klient szukający agenta:
            dlaczego mam Ci zaufać akurat z moją nieruchomością?
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden mb-16">
          {proofStats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-navy p-8 group hover:bg-white/[0.03] transition-colors duration-300"
            >
              <p className="font-display font-light leading-none text-sky mb-1">
                <span className="text-[3rem]">{item.stat}</span>
                {item.unit && <span className="text-[1.5rem] ml-2">{item.unit}</span>}
              </p>
              <p className="font-sans text-sm text-cream/60 leading-relaxed mb-4">{item.label}</p>
              <p className="text-sm text-cream/30 leading-relaxed italic">{item.insight}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="border border-sky/10 rounded-2xl p-10 bg-sky/[0.03]"
        >
          <p className="font-heading text-[clamp(1rem,1.8vw,1.4rem)] leading-relaxed text-cream/70 max-w-3xl">
            Agenci nieruchomości mają jedną z najwyższych stóp poleceń wśród
            wszystkich branż usługowych. Zadowolony klient poleca.
          </p>
          <p className="font-sans text-base text-sky/80 leading-relaxed max-w-3xl mt-4">
            Problem leży gdzie indziej: polecenie działa, gdy klient już Cię zna.
            Wideo sprawia, że nowi klienci — jeszcze zanim się odezwą — znają Cię
            wystarczająco dobrze, żeby Cię wybrać. Zamiast tylko polecenia,
            dostajesz aktywny strumień klientów, którzy przychodzą zdecydowani.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 10. PROCES ───────────────────────────────────────────────────────────────

const processSteps = [
  {
    num: "01",
    title: "Rozmowa",
    body: "Zaczynamy od zrozumienia Twojego rynku, specjalizacji i tego, jakich klientów chcesz przyciągać. Bez tej wiedzy nie ma dobrej strategii — a bez strategii mamy tylko kolejne posty.",
  },
  {
    num: "02",
    title: "Strategia",
    body: "Plan treści oparty na pytaniach i obawach Twoich klientów — o rynek, o proces, o błędy przy sprzedaży i zakupie. Każde wideo ma cel w ich ścieżce decyzyjnej.",
  },
  {
    num: "03",
    title: "Scenariusze",
    body: "Przychodzimy z gotowymi skryptami dopasowanymi do Twojego głosu i stylu. Ty wnosisz wiedzę o rynku i osobowość — my strukturę, która buduje zaufanie.",
  },
  {
    num: "04",
    title: "Nagrania",
    body: "Jeden dzień nagraniowy w Twoim biurze lub w terenie. Profesjonalny sprzęt, teleprompter, spokojne środowisko. Kilka godzin miesięcznie — reszta to nasza praca.",
  },
  {
    num: "05",
    title: "Publikacja",
    body: "Montaż, grafiki, napisy, dystrybucja na wszystkich platformach. Ty się nie zajmujesz ani jedną minutą tego etapu.",
  },
  {
    num: "06",
    title: "Wsparcie przy konwersji",
    body: "Pomagamy zamieniać pierwsze zapytania w umówione spotkania — od wiadomości z pytaniem o prowizję, przez rozmowę, po podpisaną umowę pośrednictwa.",
  },
];

function ProcessSection() {
  return (
    <section className="bg-cream py-24 md:py-36 border-t border-warm">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <SectionLabelLight number="09" text="Jak wygląda współpraca" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-light leading-[1.55] text-navy"
          >
            Prosty flow.
            <br />
            <em className="italic text-sky">Żadnego chaosu.</em>
          </motion.h2>
          <motion.div variants={fadeUp} className="self-center space-y-3">
            <p className="font-sans text-base text-slate leading-relaxed">
              Twój wkład to kilka godzin miesięcznie — jeden dzień nagraniowy.
              Przyjeżdżamy do Ciebie z gotowym scenariuszem i profesjonalnym sprzętem.
            </p>
            <p className="font-sans text-base text-slate/60 leading-relaxed">
              Montaż, publikacja, wsparcie przy konwersji — całą resztą zajmujemy się my.
              Ty obsługujesz klientów.
            </p>
          </motion.div>
        </motion.div>

        <div>
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 4 }}
              className="group border-t border-warm py-10 hover:bg-navy/[0.03] transition-all duration-300"
            >
              <div className="flex gap-8 lg:gap-0">
                <span className="font-display text-2xl font-light leading-none text-navy/15 shrink-0 w-16 pt-1">
                  {step.num}
                </span>
                <div className="flex-1 lg:flex lg:gap-16">
                  <h3 className="lg:w-52 shrink-0 font-heading text-xl text-navy transition-transform duration-300 group-hover:translate-x-2">
                    {step.title}
                  </h3>
                  <p className="mt-3 lg:mt-0 font-sans text-base text-slate/60 leading-relaxed max-w-xl">
                    {step.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-warm" />
        </div>
      </div>
    </section>
  );
}

// ─── 11. CTA + BOOKING ────────────────────────────────────────────────────────

function BookingSection() {
  return (
    <section id="booking" className="bg-white py-24 md:py-36 border-t border-warm">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabelLight number="10" text="Rozmowa strategiczna" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-light leading-[1.55] text-navy"
            >
              Sprawdźmy, czy to podejście
              <br />
              <em className="italic text-sky">ma sens w Twojej działalności.</em>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 font-sans text-base text-slate leading-relaxed max-w-md">
              Bezpłatna, 45-minutowa rozmowa strategiczna. Analizujemy Twój rynek,
              obecność online i to, czego szukają Twoi klienci — zanim napiszą do
              jakiegokolwiek agenta.
            </motion.p>

            <motion.ul variants={stagger} className="mt-8 space-y-3">
              {[
                "Konkretna diagnoza Twojej widoczności i autorytetu na rynku",
                "Analiza tego, co robi Twoja lokalna konkurencja — i gdzie jest jej luka",
                "Plan pierwszych 90 dni budowania marki agenta, którego klienci sami szukają",
                "Bez zobowiązań. Bez sprzedażowej presji.",
              ].map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-sm text-navy/70">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-sky/20 flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.p variants={fadeUp} className="mt-10 text-sm italic text-slate/40 leading-relaxed">
              Wychodzisz z konkretną diagnozą — niezależnie od tego, czy zdecydujesz się na współpracę.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
          >
            <CalEmbed className="h-[560px] md:h-[680px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────

export function NieruchomosciPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ParadigmSection />
      <ClientMindSection />
      <CashSection />
      <HandoffSection />
      <TargetSection />
      <ProofSection />
      <ProcessSection />
      <BookingSection />
    </main>
  );
}
