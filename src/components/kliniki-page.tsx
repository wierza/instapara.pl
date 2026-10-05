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
            Marketing wideo dla klinik medycyny estetycznej
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2rem,4vw,5rem)] font-light leading-[1.55] tracking-tight text-cream max-w-4xl"
        >
          Pacjenci, którzy przychodzą
          <br />
          <em className="italic text-sky">już przekonani.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-8 font-display italic text-[clamp(1rem,1.6vw,1.3rem)] text-muted max-w-2xl"
        >
          Przeciętna pacjentka rozważa zabieg przez 6–8 lat, zanim się umówi.
          W tym czasie obserwuje kilkanaście profili, szuka sygnałów zaufania
          i czeka na lekarza, przy którym poczuje się bezpiecznie.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-4 text-base leading-relaxed text-cream/55 max-w-xl md:text-lg"
        >
          Pytanie nie brzmi: czy ją znajdzie. Pytanie brzmi: czy gdy znajdzie,
          znajdzie Ciebie — i czy to, co zobaczy, wystarczy, żeby w końcu zadzwoniła.
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
            Sprawdźmy, czy to ma sens w Twojej klinice
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
    title: "Ładny profil. Dużo serduszek. Żadnego nowego pacjenta w tym tygodniu.",
    body: "Większość klinik medycyny estetycznej ma spójny feed, regularne posty i kilka tysięcy obserwujących. I nie ma z tego ani jednej wizyty więcej. Piękny profil buduje estetykę — nie zaufanie. A bez zaufania nikt nie umawia się na zabieg.",
  },
  {
    num: "02",
    title: "Pacjenci pytają o cenę, zanim zapytają o cokolwiek innego.",
    body: "Gdy pacjentka nie ma powodu, żeby wybrać właśnie Ciebie — zostaje jej tylko porównanie cen. Nie dlatego, że jest skąpa. Dlatego, że nie dałaś jej innego kryterium. To nie jest problem rynku. To jest problem pozycjonowania.",
  },
  {
    num: "03",
    title: "Twoja konkurencja wygrywa nie jakością — wygrywa zaufaniem.",
    body: "W Polsce w 2024 roku powstało ponad 14 700 nowych firm w branży beauty. Pacjentka ma dziesiątki opcji. Wybiera nie tę klinikę, która robi najlepsze efekty — wybiera lekarza, którego twarz zna, którego głos słyszała, któremu zdążyła zaufać.",
  },
  {
    num: "04",
    title: "Dobry botoks wygląda jak dobry botoks — bez względu na to, kto go robi.",
    body: "Zdjęcia przed i po są dziś standardem. Każda klinika ma swoje najlepsze przypadki i każda je pokazuje. Pacjentka nie może z nich ocenić jakości — może tylko porównać ceny. Jedynego, czego nie da się porównać, to zaufanie do konkretnego lekarza.",
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
            Masz widoczność.
            <br />
            Nie masz <em className="italic text-sky/70">pacjentów.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-cream/50 leading-relaxed self-center">
            To jeden z najbardziej powszechnych problemów klinik medycyny estetycznej w Polsce.
            Piękny profil, regularne posty, rosnąca liczba obserwujących — i kalendarz, który
            nie jest pełen. To nie jest przypadek. To jest efekt konkretnej luki między
            widocznością a zaufaniem.
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
          Ładne posty zbierają serduszka.
          Strategiczne posty zbierają rezerwacje.
        </motion.p>
      </div>
    </section>
  );
}

// ─── 3. ZMIANA MYŚLENIA ───────────────────────────────────────────────────────

const paradigmShifts = [
  {
    from: "Zdjęcia przed i po mówią: patrz na efekty.",
    to: `Wideo mówi: patrz na lekarza, który te efekty osiąga — i zdecyduj, czy mu ufasz.`,
  },
  {
    from: "Piękny profil buduje estetykę kliniki.",
    to: "Autorytet lekarza buduje zaufanie pacjentki.",
  },
  {
    from: "Więcej postów = większy zasięg = więcej pacjentów.",
    to: "Więcej zaufania = mniej porównywania cen = więcej lojalnych pacjentów.",
  },
];

function ParadigmSection() {
  return (
    <section className="bg-navy py-24 md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <SectionLabel number="02" text="Zmiana myślenia" />
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
            Problemem nie jest
            <br />
            <em className="italic text-sky/70">brak widoczności.</em>
            <br />
            Problemem jest brak <em className="italic text-sky">zaufania.</em>
          </motion.h2>
          <motion.div variants={fadeUp} className="self-center space-y-5">
            <p className="font-sans text-base text-cream/50 leading-relaxed">
              Pacjentka nie umawia się, gdy zobaczy Twój profil. Umawia się, gdy poczuje,
              że może Ci zaufać z twarzą. To nie jest ta sama rzecz.
            </p>
            <p className="font-sans text-base text-cream/50 leading-relaxed">
              Medycyna estetyczna to jedna z niewielu branż, gdzie decyzja jest podejmowana
              nie na podstawie ceny ani lokalizacji — ale na podstawie głębokiego, osobistego
              zaufania do konkretnego człowieka. Tego nie zbuduje piękny feed.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="border border-white/8 rounded-2xl p-10 md:p-14 mb-16 bg-white/[0.02]"
        >
          <p className="font-heading text-[clamp(1.2rem,2.5vw,2rem)] leading-relaxed text-cream/80 max-w-3xl">
            Pacjentki nie wybierają kliniki, która wygląda najlepiej.
            Wybierają <em className="italic text-sky"> lekarza, któremu ufają najbardziej.</em>
          </p>
        </motion.div>

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

// ─── 4. JAK MYŚLI PACJENTKA ───────────────────────────────────────────────────

const patientJourney = [
  {
    step: "01",
    title: "Myśli o tym od lat.",
    body: "Przeciętna pacjentka rozważa zabieg przez 6–8 lat zanim się umówi. Nie jest zimnym leadem. Jest ciepłym leadem, który czeka na jeden sygnał: że może Ci zaufać.",
  },
  {
    step: "02",
    title: "Obserwuje w ciszy.",
    body: "Śledzi kilkanaście profili. Ogląda wideo. Czyta komentarze. Szuka nie najpiękniejszych efektów — szuka lekarza, którego sposób myślenia jej odpowiada i przy którym poczuje się bezpiecznie.",
  },
  {
    step: "03",
    title: "Boi się — ale nie igły.",
    body: "64% polskich pacjentek boi się wyglądać nienaturalnie. Nie boją się bólu. Boją się stać się historią, o której ktoś opowiada. Boją się, że ktoś zauważy i oceni. Szukają lekarza, który tę odpowiedzialność rozumie.",
  },
  {
    step: "04",
    title: "Szuka sygnału bezpieczeństwa.",
    body: "Nie szuka najtańszej opcji ani najpiękniejszego gabinetu. Szuka odpowiedzi na jedno pytanie: czy mogę tej osobie zaufać z twarzą? Wideo daje jej tę odpowiedź zanim zadzwoni.",
  },
  {
    step: "05",
    title: "Gdy dzwoni — decyzja jest już podjęta.",
    body: "Pacjentka, która trafiła do Ciebie przez Twoje wideo, nie porównuje już cen z konkurencją. Dzwoni, bo wybrała. Konsultacja to już nie sprzedaż — to onboarding.",
  },
];

function PatientMindSection() {
  return (
    <section className="bg-navy py-24 md:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <SectionLabel number="03" text="Perspektywa pacjentki" />
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
            Ona ogląda Twój profil
            <br />
            od <em className="italic text-sky/70">dwóch lat.</em>
            <br />
            Jeszcze nie zadzwoniła.
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-cream/50 leading-relaxed self-center">
            Pacjentka medycyny estetycznej to nie jest osoba, która impulsywnie rezerwuje zabieg.
            To osoba, która czeka na moment, w którym jej wątpliwości znikną.
            Nie wątpliwości co do efektów — wątpliwości co do lekarza.
            Jeśli Cię tam nie ma, czeka dalej. Na kogoś innego.
          </motion.p>
        </motion.div>

        <div>
          {patientJourney.map((item, i) => (
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
            Pacjentki, które trafiają do kliniki przez wideo lekarza, zadają na pierwszej konsultacji
            inne pytania. Nie pytają o cenę. Nie porównują z konkurencją. Pytają o szczegóły swojego
            zabiegu — bo decyzję podjęły już wcześniej.
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
    subtitle: "Treść, która rozwiewa wątpliwości",
    body: "Nie posty dla postów. Treść, która odpowiada na prawdziwe pytania pacjentki — o bezpieczeństwo, efekty, proces i to, czego się boi. Zanim zadzwoni, jej wątpliwości są już za nią.",
  },
  {
    letter: "A",
    name: "Authority",
    subtitle: "Lekarz jako twarz kliniki",
    body: "Pacjentki nie wybierają kliniki — wybierają lekarza. Twarz, głos, sposób myślenia i filozofia estetyczna budują autorytet, którego żadne zdjęcie przed/po nie zastąpi.",
  },
  {
    letter: "S",
    name: "Strategy & Scripts",
    subtitle: "Strategia, która prowadzi do wizyty",
    body: "Każde wideo ma miejsce w ścieżce decyzyjnej pacjentki — od pierwszego kontaktu z Twoją twarzą aż do momentu, w którym poczuje się gotowa, żeby zadzwonić.",
  },
  {
    letter: "H",
    name: "Hand-off",
    subtitle: "Zamiana zapytań w wizyty",
    body: "Większość agencji kończy na publikacji. My zaczynamy tam, gdzie inni kończą: pomagamy zamieniać wiadomości z pytaniem o cenę w zarezerwowane wizyty.",
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
            <em className="italic text-sky">do pierwszej wizyty.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-slate leading-relaxed self-center">
            System C.A.S.H. nie jest listą usług. To logika przejścia pacjentki
            od obserwowania Twojego profilu w ciszy — do telefonu z pytaniem
            o wolny termin. Bez presji. Bez promocji. Przez zaufanie.
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
    title: "Co odpisać pacjentce, która pyta tylko o cenę.",
    body: "Wiadomość z pytaniem o cenę to nie odrzucenie — to zaproszenie do rozmowy. Pacjentka, która trafiła do Ciebie przez wideo, jest gotowa zaufać. Odpowiedź musi tę gotowość podtrzymać, nie zresetować.",
  },
  {
    num: "02",
    title: "Jak prowadzić rozmowę, która doprowadza do wizyty.",
    body: "Jest ogromna różnica między pacjentką, która zapytała o cenę, a pacjentką, która zarezerwowała wizytę. Ten mostek zbudowany jest z kilku zdań. Pomagamy go zbudować.",
  },
  {
    num: "03",
    title: "Pierwsze wrażenie, które potwierdza tygodnie budowania zaufania.",
    body: "Pacjentka spędziła miesiące obserwując Twój profil. Gdy w końcu napisała — to co dostanie w odpowiedzi zdecyduje, czy miesiące budowania zaufania zaowocują wizytą, czy zacznie szukać dalej.",
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
            Większość agencji
            <em className="italic text-sky/70"> publikuje.</em>
            <br />
            My dbamy o to,{" "}
            <em className="italic text-sky">co dzieje się potem.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-cream/50 leading-relaxed self-center">
            Wideo opublikowane. Pacjentka ogląda. Pisze wiadomość z pytaniem o cenę.
            I tutaj większość klinik traci kogoś, kto był gotowy zaufać — przez jedną złą odpowiedź.
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
          Dla kliniki każda utracona pacjentka to nie tylko jedna wizyta.
          To wszystkie zabiegi, które by wróciła zrobić przez lata.
        </motion.p>
      </div>
    </section>
  );
}

// ─── 7 & 8. DLA KOGO / NIE ───────────────────────────────────────────────────

const forWho = [
  "Chcesz pacjentek, które wybierają Ciebie — nie najtańszą opcję w okolicy.",
  "Chcesz budować klinikę opartą na autorytecie lekarza, nie na estetyce profilu.",
  "Rozumiesz, że lojalny pacjent, który wraca co kwartał, jest wart więcej niż dziesięciu pacjentów z promocji.",
];

const notForWho = [
  {
    label: "Chcesz tylko więcej obserwujących i zasięgów.",
    sub: "Budujemy zaufanie i wizyty — nie followersów. Jeśli Twoim celem są liczby w statystykach, to nie jest to narzędzie dla Ciebie.",
  },
  {
    label: "Konkurujesz ceną i chcesz przyciągać pacjentów promocjami.",
    sub: "Pacjent przyciągnięty ceną odejdzie do tańszej konkurencji. Pacjent przyciągnięty zaufaniem zostaje latami.",
  },
  {
    label: "Nie jesteś gotowa, żeby Twoja twarz była widoczna jako lekarz.",
    sub: "Wideo działa, bo pokazuje człowieka. Jeśli klinika ma być anonimowa — to narzędzie nie będzie działać.",
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
              Medycyna estetyczna to jedna z branż, gdzie najlepszy pacjent to lojalny pacjent.
              Zbudowanie tego rodzaju relacji przez wideo jest możliwe — i trwałe.
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
    stat: "6–8",
    unit: "lat",
    label: "tyle przeciętna pacjentka rozważa zabieg zanim się umówi.",
    insight: "Nie jest zimnym leadem. Jest ciepłym leadem, który czeka na jeden sygnał — że może Ci zaufać.",
  },
  {
    stat: "64%",
    unit: "",
    label: "polskich pacjentek boi się wyglądać nienaturalnie.",
    insight: "Nie boją się igły. Boją się oceny innych. Lekarz, który to rozumie i mówi o tym na wideo — wyróżnia się natychmiast.",
  },
  {
    stat: "43%",
    unit: "",
    label: "decyzji o pierwszej wizycie jest bezpośrednio wywoływanych przez wideo lekarza.",
    insight: "Social media nie są dodatkiem do marketingu kliniki. Dla prawie połowy pacjentek to jedyne miejsce, gdzie decyzja zapada.",
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
            Dlaczego kliniki przyciągają
            <br />
            <em className="italic text-sky/70">pacjentów, którzy tylko pytają o cenę.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-cream/50 leading-relaxed self-center">
            Gdy pacjentka nie ma powodu, żeby wybrać Ciebie — wybiera najtańszą opcję.
            Nie dlatego, że nie ceni jakości. Dlatego, że nie zna Cię na tyle,
            żeby zapłacić więcej za pewność.
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
                <span className="text-[3.5rem]">{item.stat}</span>
                {item.unit && <span className="text-[1.8rem] ml-1">{item.unit}</span>}
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
            Polscy pacjenci mają 71% NPS po wykonanym zabiegu.
            Są zadowoleni. Wracają. Polecają.
          </p>
          <p className="font-sans text-base text-sky/80 leading-relaxed max-w-3xl mt-4">
            Problem nie leży w jakości usług. Leży w barierze zaufania, którą pacjentka musi
            pokonać zanim zadzwoni po raz pierwszy. Wideo tę barierę usuwa.
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
    body: "Zaczynamy od zrozumienia Twojej kliniki, specjalizacji i tego, jakich pacjentek szukasz. Bez tego nie ma dobrej strategii.",
  },
  {
    num: "02",
    title: "Strategia",
    body: "Plan treści oparty na pytaniach, które zadają Twoje pacjentki — o bezpieczeństwo, efekty, proces i obawy. Każde wideo ma cel w ich ścieżce decyzyjnej.",
  },
  {
    num: "03",
    title: "Scenariusze",
    body: "Przychodzimy z gotowymi skryptami. Ty wnosisz wiedzę i osobowość — my strukturę i język, który buduje zaufanie.",
  },
  {
    num: "04",
    title: "Nagrania",
    body: "Jeden dzień nagraniowy w Twojej klinice. Profesjonalny sprzęt, teleprompter, spokojne środowisko. Kilka godzin miesięcznie — reszta to nasza praca.",
  },
  {
    num: "05",
    title: "Publikacja",
    body: "Montaż, grafiki, napisy, dystrybucja na wszystkich platformach. Ty nie dotykasz tego etapu.",
  },
  {
    num: "06",
    title: "Wsparcie przy konwersji",
    body: "Pomagamy zamieniać zapytania o cenę w zarezerwowane wizyty — od pierwszej wiadomości przez rozmowę po pojawienie się pacjentki w gabinecie.",
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
              Ty przyjmujesz pacjentów.
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
              <em className="italic text-sky">ma sens w Twojej klinice.</em>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 font-sans text-base text-slate leading-relaxed max-w-md">
              Bezpłatna, 45-minutowa rozmowa strategiczna. Analizujemy Twoją specjalizację,
              obecność online i to, czego szukają Twoje pacjentki.
            </motion.p>

            <motion.ul variants={stagger} className="mt-8 space-y-3">
              {[
                "Konkretna diagnoza Twojej widoczności i zaufania online",
                "Analiza tego, co robi Twoja konkurencja — i czego jej brakuje",
                "Plan pierwszych 90 dni budowania autorytetu lekarza",
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

export function KlinikiPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ParadigmSection />
      <PatientMindSection />
      <CashSection />
      <HandoffSection />
      <TargetSection />
      <ProofSection />
      <ProcessSection />
      <BookingSection />
    </main>
  );
}
