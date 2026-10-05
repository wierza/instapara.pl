"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalEmbed } from "@/components/cal-embed";

const VSL_YOUTUBE_ID = "AKtT6NLZGoM";

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
      <span className="font-display text-[2.5rem] font-light leading-none text-white/15 select-none">
        {number}
      </span>
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
      <span className="font-display text-[2.5rem] font-light leading-none text-navy/10 select-none">
        {number}
      </span>
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

// ─── 1. HERO ────────────────────────────────────────────────────────────────

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
            Marketing wideo dla prawników
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2rem,4vw,5rem)] font-light leading-[1.55] tracking-tight text-cream max-w-4xl"
        >
          Klienci, którzy ufają
          <br />
          <em className="italic text-sky">zanim zadzwonią.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-8 font-display italic text-[clamp(1rem,1.6vw,1.3rem)] text-muted max-w-2xl"
        >
          Zanim Twój przyszły klient zadzwoni — 73% z nich spędza tydzień,
          szukając prawnika, któremu mogą zaufać.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-4 text-base leading-relaxed text-cream/55 max-w-xl md:text-lg"
        >
          To, co znajdą w ciągu tych siedmiu dni — decyduje o tym, do jakiego prawnika zadzwonią.
          Pytanie brzmi: czy będą znajdować Ciebie?
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
            Sprawdźmy, czy to ma sens dla Twojej kancelarii
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

// ─── 2. PROBLEM ─────────────────────────────────────────────────────────────

const problems = [
  {
    num: "01",
    title: "Klienci pytają o cenę, zanim zapytają o rozwiązanie.",
    body: "Kiedy ktoś kontaktuje się z kancelarią bez żadnego wcześniejszego kontaktu — jedynym kryterium, którym dysponuje, jest koszt. Nie dlatego, że nie ceni Twojej wiedzy. Dlatego, że jej jeszcze nie zna.",
  },
  {
    num: "02",
    title: "Z każdym nowym klientem zaczynasz od zera.",
    body: "Każda konsultacja zaczyna się od tłumaczenia kim jesteś i dlaczego jesteś właściwą osobą. Zamiast rozwiązywać problem — musisz najpierw uzasadnić, że w ogóle jesteś w stanie to zrobić.",
  },
  {
    num: "03",
    title: "Widoczność w internecie nie przekłada się na jakość zapytań.",
    body: "Strona www. Profil w Google. Może reklama. Ktoś kliknie, napisze, zapyta o cenę i zniknie. Widoczność przyciąga każdego — nie tylko tych, których szukasz.",
  },
  {
    num: "04",
    title: "Klienci porównują Cię z konkurencją, której nie widzisz.",
    body: "Ktoś szuka teraz prawnika w Twojej specjalizacji. Trafia na kilka kancelarii. Jedna z nich opublikowała 30 filmów wyjaśniających dokładnie jego problem. Inne mają tylko stronę. Jak myślisz — do kogo dzwoni?",
  },
];

function ProblemSection() {
  return (
    <section className="bg-navy py-24 md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionLabel number="01" text="Problem" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ ...stagger }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-light leading-[1.55] text-cream"
          >
            Masz zapytania.
            <br />
            Ale nie takie,{" "}
            <em className="italic text-sky/70">jakich szukasz.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-cream/50 leading-relaxed self-center">
            Każdy prawnik z działającą kancelarią ma jakieś zapytania. Problem rzadko polega na ich braku.
            Problemem jest jakość — klienci, którzy negocjują cenę, porównują Cię z tańszą konkurencją
            i potrzebują przekonania do każdej decyzji. To nie jest przypadek. To jest efekt konkretnej luki.
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
          className="mt-14 font-heading italic text-[clamp(1rem,1.4vw,1.2rem)] text-cream/40 max-w-2xl leading-relaxed"
        >
          To nie jest problem widoczności.
          To jest problem zaufania — i tylko jedno narzędzie potrafi je zbudować na skalę.
        </motion.p>
      </div>
    </section>
  );
}

// ─── 3. ZMIANA PARADYGMATU ──────────────────────────────────────────────────

const paradigmShifts = [
  {
    from: `Referencje mówią: „Inni mi ufają."`,
    to: `Wideo mówi: „Możesz sam zdecydować, czy mi ufasz."`,
  },
  {
    from: "Strona www pokazuje, co robisz.",
    to: "Wideo pokazuje, jak myślisz.",
  },
  {
    from: "Reklama trafia do wszystkich.",
    to: "Autorytet przyciąga właściwych.",
  },
];

function ParadigmSection() {
  return (
    <section className="bg-navy py-24 md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionLabel number="02" text="Zmiana perspektywy" />
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
            Klient nie wybiera prawnika,
            <br />
            którego <em className="italic text-sky/70">widzi.</em>
            <br />
            Wybiera tego, któremu <em className="italic text-sky">ufa.</em>
          </motion.h2>
          <motion.div variants={fadeUp} className="self-center space-y-5">
            <p className="font-sans text-base text-cream/50 leading-relaxed">
              Zanim klient prawnika zadzwoni — zdążył już podjąć 80% decyzji.
              Sprawdził, obejrzał, ocenił. Jeśli Cię tam nie było,
              decyzja zapadła bez Ciebie.
            </p>
            <p className="font-sans text-base text-cream/50 leading-relaxed">
              Zaufanie nie wynika z listy usług ani z CV. Wynika z wielokrotnego kontaktu —
              z głosem, twarzą, sposobem myślenia. Czegoś, czego żadna strona www nie zastąpi.
            </p>
          </motion.div>
        </motion.div>

        {/* Big quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="border border-white/8 rounded-2xl p-10 md:p-14 mb-16 bg-white/[0.02]"
        >
          <p className="font-heading text-[clamp(1.2rem,2.5vw,2rem)] leading-relaxed text-cream/80 max-w-3xl">
            Klient, który obejrzał 5 Twoich filmów, nie pyta już
            <em className="italic text-sky"> czy jesteś dobry</em> —
            pyta tylko{" "}
            <em className="italic text-sky">kiedy możemy zacząć</em>.
          </p>
        </motion.div>

        {/* Paradigm shifts */}
        <div className="grid md:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden">
          {paradigmShifts.map((shift, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-navy p-8 group hover:bg-white/[0.03] transition-colors duration-300"
            >
              <p className="text-sm text-cream/30 leading-relaxed mb-4 line-through decoration-white/20">
                {shift.from}
              </p>
              <div className="h-px w-8 bg-sky/30 mb-4" />
              <p className="font-sans text-base text-cream/80 leading-relaxed group-hover:text-cream transition-colors duration-300">
                {shift.to}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. VSL ─────────────────────────────────────────────────────────────────

function VslSection() {
  return (
    <section className="bg-cream py-24 md:py-32 border-t border-warm">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.2em] text-slate/60 mb-6"
          >
            Obejrzyj
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(1.6rem,2.8vw,3rem)] font-light leading-[1.6] text-navy mb-10 max-w-2xl"
          >
            Zobacz, dlaczego większość kancelarii nie przyciąga właściwych klientów.
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-navy/20"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${VSL_YOUTUBE_ID}?rel=0&modestbranding=1`}
              title="InstaPara — marketing wideo dla prawników"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 5. JAK MYŚLI KLIENT PRAWNIKA ───────────────────────────────────────────

const clientJourney = [
  {
    step: "01",
    title: "Coś złego się wydarzyło.",
    body: "Sprawa, spór, pismo, zagrożenie. Emocje: strach, presja, poczucie braku kontroli. Klient nie jest w trybie zakupowym — jest w trybie kryzysowym.",
  },
  {
    step: "02",
    title: "Próbuje sam to rozwiązać.",
    body: "Google. Fora. Portale prawne. 54% Polaków wierzy, że poradzi sobie bez prawnika. Docierają do sprzecznych informacji. Niepokój rośnie.",
  },
  {
    step: "03",
    title: "Szuka kogoś, komu może zaufać.",
    body: "Nie szuka najlepszego prawnika. Szuka kogoś, kto zrozumie jego problem i nie będzie traktował jak numeru sprawy. Sprawdza średnio 3–4 kancelarie.",
  },
  {
    step: "04",
    title: "Moment rozpoznania.",
    body: `Trafia na film, który opisuje dokładnie jego sytuację. Ktoś mówi spokojnie, jasno, bez żargonu. Myśli: „Ten człowiek rozumie mój problem." To jest moment, w którym decyzja zapada.`,
  },
  {
    step: "05",
    title: "Decyzja jest już podjęta.",
    body: "Zadzwoni. Nie do pięciu kancelarii. Do jednej. Bo czuje, że Cię zna — zanim się jeszcze poznali.",
  },
];

function ClientMindSection() {
  return (
    <section className="bg-navy py-24 md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
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
            Zanim zadzwoni,
            <br />
            przeżywa coś, czego{" "}
            <em className="italic text-sky/70">większość kancelarii nie rozumie.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-cream/50 leading-relaxed self-center">
            Klient prawnika to nie jest osoba, która porównuje oferty jak przy zakupie ubezpieczenia.
            To osoba w kryzysie, która szuka bezpieczeństwa. I wybiera nie prawnika z najlepszym CV —
            tylko prawnika, przy którym czuje, że jej sprawa jest zrozumiana.
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
          <p className="font-heading text-base text-cream/70 leading-relaxed max-w-2xl">
            Klienci, którzy znajdą Cię przez Twoje wideo, zadają podczas pierwszej konsultacji
            inne pytania. Pytają o szczegóły swojej sprawy — nie o Twoje kwalifikacje.
            Etap budowania zaufania jest już za nimi.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 6. SYSTEM C.A.S.H. ─────────────────────────────────────────────────────

const cashPillars = [
  {
    letter: "C",
    name: "Content",
    subtitle: "Treść, która pozycjonuje",
    body: "Nie treść dla treści. Treść, która pokazuje Twój sposób myślenia na każdym etapie problemu klienta. Zanim do Ciebie napisze — już wie, że jesteś właściwą osobą.",
  },
  {
    letter: "A",
    name: "Authority",
    subtitle: "Pozycja eksperta",
    body: "Autorytet nie wynika z lat doświadczenia widocznych w stopce. Wynika z obecności. Klient, który obejrzał kilka Twoich filmów, nie pyta czy jesteś dobry — tylko kiedy zaczynamy.",
  },
  {
    letter: "S",
    name: "Strategy & Scripts",
    subtitle: "Strategia i scenariusze",
    body: `Każde nagranie ma cel i miejsce w ścieżce decyzyjnej klienta. Nie publikujemy „bo tak." Prowadzimy klienta — od pierwszego kontaktu z Twoją twarzą — aż do decyzji.`,
  },
  {
    letter: "H",
    name: "Hand-off",
    subtitle: "Konwersja zapytań w klientów",
    body: "Większość agencji kończy pracę na publikacji. My zaczynamy tam, gdzie inni kończą: pomagamy zamieniać zapytania w klientów — od pierwszej wiadomości, przez rozmowę, do podpisania umowy.",
  },
];

function CashSection() {
  return (
    <section id="cash" className="bg-cream py-24 md:py-36 border-t border-warm">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
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
            Cztery mechanizmy.
            <br />
            <em className="italic text-sky">Jeden cel.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-heading text-base text-slate leading-relaxed self-center">
            System C.A.S.H. to nie jest lista usług. To logika przejścia klienta
            od „nigdy o Tobie nie słyszałem" do „chcę z Tobą pracować" —
            zanim dojdzie do pierwszej rozmowy.
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

// ─── 7. HAND-OFF ─────────────────────────────────────────────────────────────

const handoffPoints = [
  {
    num: "01",
    title: "Jak odpowiadać na zapytania po wideo.",
    body: "Klient, który trafił do Ciebie przez film, jest inny niż zimny lead. Ma kontekst, ma zaufanie, ma konkretne pytania. Odpowiedź na to zapytanie musi to potwierdzić — nie zresetować tygodnia pracy, który już wykonało wideo.",
  },
  {
    num: "02",
    title: "Pierwsze wrażenie po pierwszym kliknięciu.",
    body: "Szybkość i styl odpowiedzi decydują o tym, czy tydzień budowania zaufania przez wideo zaowocuje rozmową — czy klient pójdzie szukać dalej. Pomagamy zbudować ten mostek.",
  },
  {
    num: "03",
    title: "Skrócenie procesu decyzyjnego.",
    body: "Klient, który obejrzał kilka Twoich filmów, jest gotowy podjąć decyzję szybciej niż jakikolwiek zimny lead. Jeśli odpowiedź na zapytanie tę gotowość podtrzymuje — decyzja zapada. Jeśli ją zaburza — zaczyna szukać dalej.",
  },
];

function HandoffSection() {
  return (
    <section className="bg-navy py-24 md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
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
            Większość kancelarii
            <em className="italic text-sky/70"> publikuje.</em>
            <br />
            Nieliczne{" "}
            <em className="italic text-sky">zarabiają na tym, co publikują.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-cream/50 leading-relaxed self-center">
            Film opublikowany. Wyświetlenia rosną. Ktoś pisze zapytanie.
            I tutaj zaczyna się miejsce, gdzie większość kancelarii traci potencjalnych klientów —
            nie przez złą ofertę, ale przez zły mostek między treścią a rozmową.
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
          Dla prawnika każda zmarnowana szansa kosztuje więcej
          niż koszt systemu, który mógł jej zapobiec.
        </motion.p>
      </div>
    </section>
  );
}

// ─── 8 & 9. DLA KOGO / NIE ───────────────────────────────────────────────────

const forWho = [
  "Chcesz klientów, którzy decydują się przed pierwszą rozmową — nie w jej trakcie.",
  "Chcesz budować kancelarię opartą na autorytecie, nie na widoczności.",
  "Nie chcesz konkurować ceną z każdym, kto założył działalność w zeszłym roku.",
];

const notForWho = [
  {
    label: "Szukasz szybkich efektów i viralowych filmów.",
    sub: "Budujemy autorytet — nie zasięgi. To proces, który działa przez lata, nie kampania na tydzień.",
  },
  {
    label: `Chcesz tylko „być widoczny" w internecie.`,
    sub: "Widoczność bez zaufania to koszt bez zysku. Wyświetlenia nie podpisują umów.",
  },
  {
    label: "Nie jesteś gotowy pokazywać swojej wiedzy i sposobu myślenia.",
    sub: "Wideo działa, bo pokazuje człowieka. Jeśli klienci nie mają Cię zobaczyć zanim zadzwonią — to narzędzie nie jest dla Ciebie.",
  },
];

function TargetSection() {
  return (
    <section className="bg-cream py-24 md:py-36 border-t border-warm">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Dla kogo */}
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
              className="font-display text-[clamp(1.6rem,2.5vw,2.8rem)] font-light leading-[1.6] text-navy mb-10"
            >
              To rozwiązanie ma sens, jeśli...
            </motion.h2>
            <motion.ul variants={stagger} className="space-y-6">
              {forWho.map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-4">
                  <span className="mt-1 h-6 w-6 rounded-full bg-sky/15 flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </span>
                  <p className="font-heading text-base text-navy/70 leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </motion.ul>
            <motion.p
              variants={fadeUp}
              className="mt-10 text-sm italic text-slate/50 leading-relaxed border-l-2 border-sky/20 pl-4"
            >
              To nie jest narzędzie dla każdego prawnika. To jest narzędzie dla prawnika,
              który rozumie, że prestiż buduje się przez lata — ale obecność cyfrowa
              może skrócić ten czas do miesięcy.
            </motion.p>
          </motion.div>

          {/* Dla kogo nie */}
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
              className="font-display text-[clamp(1.6rem,2.5vw,2.8rem)] font-light leading-[1.6] text-navy mb-10"
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
                    <p className="font-heading text-base text-navy/70 leading-relaxed">{item.label}</p>
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

// ─── 10. DOWÓD ───────────────────────────────────────────────────────────────

const proofStats = [
  {
    stat: "73%",
    label: "klientów szuka prawnika przez 3–7 dni zanim zadzwoni.",
    insight:
      "To tydzień, w którym decyzja jest stopniowo podejmowana — bez Twojego udziału, o ile nie jesteś obecny w postaci treści.",
  },
  {
    stat: "70%",
    label: "bardziej skłonnych do konsultacji po obejrzeniu 3+ filmów prawnika.",
    insight:
      "Nie potrzebują więcej informacji. Potrzebują potwierdzenia tego, co już czują: że mogą zaufać.",
  },
  {
    stat: "68%",
    label: "klientów wybiera specjalistę nawet, jeśli płaci więcej.",
    insight:
      "Specjalizacja to nie ograniczenie — to przepustka do klientów, którzy rozumieją wartość ekspertyzy.",
  },
];

function ProofSection() {
  return (
    <section className="bg-navy py-24 md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
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
            Dlaczego prawnicy przyciągają
            <br />
            klientów,{" "}
            <em className="italic text-sky/70">którzy negocjują cenę.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-cream/50 leading-relaxed self-center">
            Klient negocjuje cenę, gdy nie ma innego kryterium porównania.
            To nie jest problem klienta. To jest problem pozycjonowania.
            A pozycjonowanie buduje się przez autorytet — nie przez reklamę.
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
              <p className="font-display text-[3.5rem] font-light leading-none text-sky mb-4">
                {item.stat}
              </p>
              <p className="font-heading text-sm text-cream/60 leading-relaxed mb-4">{item.label}</p>
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
            Tylko 19% Polaków ufa prawnikom jako profesji.
            Ale 76% jest zadowolonych, gdy już z prawnika skorzysta.
          </p>
          <p className="font-sans text-base text-sky/80 leading-relaxed max-w-3xl mt-4">
            Ta luka między obrazem a rzeczywistością to Twoja szansa —
            jeśli potrafisz się przez nią przebić zanim klient zadzwoni.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 11. PROCES ──────────────────────────────────────────────────────────────

const processSteps = [
  {
    num: "01",
    title: "Analiza",
    body: "Sprawdzamy Twoją obecną widoczność, specjalizację i konkurencję. Szukamy miejsca, gdzie Twój autorytet może rosnąć najszybciej.",
  },
  {
    num: "02",
    title: "Strategia",
    body: "Plan treści oparty na pytaniach, które zadają Twoi klienci. Każdy film ma konkretny cel w ich ścieżce decyzyjnej.",
  },
  {
    num: "03",
    title: "Scenariusze",
    body: "Przychodzimy z gotowymi skryptami. Ty wnosisz wiedzę — my wnosimy strukturę, język i scenariusz, który buduje autorytet.",
  },
  {
    num: "04",
    title: "Nagrania",
    body: "Jeden dzień nagraniowy u Ciebie. Profesjonalny sprzęt, teleprompter, spokojne środowisko. Zero chaosu.",
  },
  {
    num: "05",
    title: "Montaż i publikacja",
    body: "Montaż, grafiki, napisy, dystrybucja na wszystkich platformach. Ty nie dotykasz tego etapu.",
  },
  {
    num: "06",
    title: "Wsparcie przy konwersji",
    body: "Pomagamy zamieniać zapytania w klientów — od pierwszej wiadomości przez rozmowę wstępną po podpisanie umowy.",
  },
];

function ProcessSection() {
  return (
    <section className="bg-cream py-24 md:py-36 border-t border-warm">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionLabelLight number="09" text="Jak to działa" />
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
            Sześć kroków.
            <br />
            <em className="italic text-sky">Żadnego chaosu.</em>
          </motion.h2>
          <motion.div variants={fadeUp} className="self-center space-y-3">
            <p className="font-sans text-base text-slate leading-relaxed">
              Twój wkład to kilka godzin miesięcznie — jeden dzień nagraniowy.
              Przyjeżdżamy do Ciebie z profesjonalnym sprzętem i gotowymi scenariuszami.
            </p>
            <p className="font-sans text-base text-slate/60 leading-relaxed">
              Montaż, grafiki, publikacja, wsparcie przy konwersji — całą resztą zajmujemy się my.
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

// ─── 12. CTA + BOOKING ───────────────────────────────────────────────────────

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
              className="font-display text-[clamp(1.8rem,3vw,3.5rem)] font-light leading-[1.6] text-navy"
            >
              Sprawdźmy, czy to podejście
              <br />
              <em className="italic text-sky">ma sens w Twojej kancelarii.</em>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 font-heading text-base text-slate leading-relaxed max-w-md">
              Bezpłatna, 45-minutowa rozmowa strategiczna. Analizujemy Twoją specjalizację,
              obecność online i to, czego szukają Twoi potencjalni klienci.
            </motion.p>

            <motion.ul variants={stagger} className="mt-8 space-y-3">
              {[
                "Konkretna diagnoza Twojej widoczności i autorytetu online",
                "Analiza tego, co robi Twoja konkurencja — a czego nie robi",
                "Plan pierwszych 90 dni obecności wideo",
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

// ─── ARROW ICON ──────────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="size-4 transition-transform group-hover:translate-x-1">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────

export function PrawnicyPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ParadigmSection />
      {/* <VslSection /> */}
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
