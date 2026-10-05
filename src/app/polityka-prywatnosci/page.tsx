import Link from "next/link";
import { Header } from "@/components/header";
import { LogoIcon } from "@/components/logo-icon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności — InstaPara",
  description: "Zasady przetwarzania danych osobowych oraz plików cookies przez InstaPara Dawid Wierzycki w serwisie instapara.pl i sklepie sklep.instapara.pl.",
  alternates: { canonical: "https://instapara.pl/polityka-prywatnosci" },
  robots: { index: true, follow: true },
};

const mailLink = (
  <Link href="mailto:kontakt@instapara.pl" className="text-sky hover:underline">
    kontakt@instapara.pl
  </Link>
);

const sections = [
  {
    id: "informacje-ogolne",
    number: "01",
    title: "Informacje ogólne",
    content: (
      <>
        <p>
          Niniejsza polityka dotyczy serwisów internetowych działających pod adresami{" "}
          <strong>instapara.pl</strong> oraz <strong>sklep.instapara.pl</strong> (dalej łącznie:
          Serwis), w tym sklepu internetowego z e-bookami (dalej: Sklep).
        </p>
        <p className="mt-4">
          Operatorem Serwisu oraz Administratorem danych osobowych jest:
        </p>
        <div className="mt-3 border-l-2 border-sky/40 pl-6 space-y-1">
          <p className="font-medium text-navy">Instapara Dawid Wierzycki</p>
          <p>Proszkowa 6, 56-100 Proszkowa</p>
          <p>NIP: 6782866804 &nbsp;·&nbsp; REGON: 543687373</p>
          <p>E-mail: {mailLink}</p>
        </div>
        <p className="mt-4">
          Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych
          dobrowolnie w Serwisie oraz danych zebranych automatycznie w sposób opisany poniżej. We
          wszystkich sprawach dotyczących danych osobowych możesz skontaktować się z nami pod
          adresem e-mail wskazanym powyżej.
        </p>
        <p className="mt-4">Serwis pozyskuje informacje o użytkownikach i ich zachowaniu poprzez:</p>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>Dobrowolnie wprowadzone w formularzach dane osobowe, w tym w formularzu zamówienia w Sklepie</li>
          <li>Zapisywanie w urządzeniach końcowych plików cookies (tzw. „ciasteczek”)</li>
          <li>Logi serwera prowadzone przez firmę hostingową</li>
        </ul>
      </>
    ),
  },
  {
    id: "cele-i-podstawy",
    number: "02",
    title: "Cele i podstawy prawne przetwarzania",
    content: (
      <ul className="space-y-3">
        <li>
          <strong>Obsługa zapytań przez formularz i korespondencji</strong> — na podstawie prawnie
          uzasadnionego interesu Administratora polegającego na udzieleniu odpowiedzi (art. 6 ust. 1
          lit. f RODO), a jeżeli zapytanie dotyczy zawarcia umowy — w celu podjęcia działań przed jej
          zawarciem (art. 6 ust. 1 lit. b RODO).
        </li>
        <li>
          <strong>Realizacja zamówionych usług</strong> — w celu wykonania umowy (art. 6 ust. 1 lit. b
          RODO).
        </li>
        <li>
          <strong>Sprzedaż i dostarczanie e-booków w Sklepie</strong> — w celu zawarcia i wykonania
          umowy o dostarczanie treści cyfrowej, w tym przyjęcia płatności, przesłania pliku i
          potwierdzenia zamówienia (art. 6 ust. 1 lit. b RODO).
        </li>
        <li>
          <strong>Wystawianie faktur i prowadzenie dokumentacji księgowej</strong> — w celu
          wypełnienia obowiązków prawnych wynikających z przepisów podatkowych i o rachunkowości
          (art. 6 ust. 1 lit. c RODO).
        </li>
        <li>
          <strong>Rozpatrywanie reklamacji i oświadczeń o odstąpieniu od umowy</strong> — w celu
          wypełnienia obowiązków wynikających z ustawy o prawach konsumenta (art. 6 ust. 1 lit. c
          RODO).
        </li>
        <li>
          <strong>Dokumentowanie zgód złożonych przy zamówieniu</strong>, w szczególności zgody na
          dostarczenie treści cyfrowej przed upływem terminu do odstąpienia od umowy, oraz{" "}
          <strong>ustalanie, dochodzenie i obrona roszczeń</strong> — na podstawie prawnie
          uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO).
        </li>
        <li>
          <strong>Prowadzenie rozmów i umawianie spotkań</strong> — w celu podjęcia działań przed
          zawarciem umowy lub wykonania umowy (art. 6 ust. 1 lit. b RODO) albo na podstawie prawnie
          uzasadnionego interesu (art. 6 ust. 1 lit. f RODO).
        </li>
        <li>
          <strong>Wysyłka newslettera</strong> — na podstawie Twojej zgody wyrażonej przy zamówieniu
          (art. 6 ust. 1 lit. a RODO). Zgodę możesz wycofać w każdej chwili. Dokumentowanie udzielenia
          zgody (data, adres IP) — na podstawie prawnie uzasadnionego interesu Administratora (art. 6
          ust. 1 lit. f RODO).
        </li>
        <li>
          <strong>Prezentacja oferty, analityka i marketing</strong>, w tym remarketing — na
          podstawie prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO), a w
          zakresie plików cookies, które nie są niezbędne — na podstawie Twojej zgody (art. 6 ust. 1
          lit. a RODO).
        </li>
      </ul>
    ),
  },
  {
    id: "sklep",
    number: "03",
    title: "Sklep — jakie dane przetwarzamy przy zamówieniu",
    content: (
      <>
        <p>
          Składając zamówienie w Sklepie, podajesz imię i nazwisko oraz adres e-mail, a jeżeli
          chcesz otrzymać fakturę — także nazwę firmy, NIP i adres. Dane do faktury
          przekazujemy do systemu iFirma, w którym wystawiamy fakturę i z którego wysyłamy ją na Twój
          adres e-mail. Dodatkowo
          zapisujemy: numer i historię zamówienia, informację o akceptacji Regulaminu i o zgodzie na
          dostarczenie treści cyfrowej, status płatności, adres IP oraz dane o pobraniach pliku
          (data, liczba pobrań, adres IP), które służą do obsługi limitu pobrań i wyjaśniania
          ewentualnych problemów z dostarczeniem.
        </p>
        <p className="mt-4">
          Podanie danych oznaczonych w formularzu jako wymagane jest warunkiem zawarcia umowy. Bez
          nich nie możemy przyjąć zamówienia ani dostarczyć e-booka. Podanie danych do faktury jest
          dobrowolne, ale niezbędne do jej wystawienia.
        </p>
        <p className="mt-4">
          Zakup możesz zrealizować bez zakładania konta. Jeżeli skorzystasz z panelu „Moje konto”,
          przetwarzamy również dane logowania, a hasło przechowujemy wyłącznie w postaci hashowanej.
        </p>
      </>
    ),
  },
  {
    id: "platnosci",
    number: "04",
    title: "Płatności — Stripe",
    content: (
      <>
        <p>
          Płatności w Sklepie (BLIK, karta płatnicza, Apple Pay i Google Pay) obsługuje Stripe Payments Europe, Limited z
          siedzibą w Dublinie, 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Irlandia
          (Stripe). Przekazujemy Stripe dane niezbędne do realizacji płatności (imię i nazwisko, adres
          e-mail, dane rozliczeniowe, kwotę i numer zamówienia). Stripe przetwarza też dane karty i
          dane techniczne urządzenia w celu przeprowadzenia płatności i zapobiegania oszustwom. Stripe
          może przekazywać dane do Stripe, Inc. w USA na podstawie EU-US Data Privacy Framework albo
          standardowych klauzul umownych. Informacje o przetwarzaniu danych przez Stripe znajdziesz w{" "}
          <Link
            href="https://stripe.com/pl/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky hover:underline"
          >
            polityce prywatności Stripe
          </Link>
          .
        </p>
        <p className="mt-4">
          W zakresie danych przetwarzanych w związku z realizacją płatności (np. danych karty lub
          konta bankowego) Stripe jest odrębnym administratorem danych. Nie mamy dostępu do pełnych
          danych Twojej karty ani loginów do bankowości.
        </p>
      </>
    ),
  },
  {
    id: "newsletter",
    number: "05",
    title: "Newsletter",
    content: (
      <>
        <p>
          Jeżeli przy zamówieniu zaznaczysz zgodę na newsletter, po opłaceniu zamówienia przekażemy
          Twój adres e-mail, imię i nazwisko oraz datę i adres IP udzielenia zgody do systemu
          wysyłkowego MailerLite. Możemy poprosić Cię o potwierdzenie zapisu kliknięciem w link w
          wiadomości e-mail. W ramach newslettera przetwarzamy też informacje o otwarciach wiadomości
          i kliknięciach w linki, aby dopasowywać treści i mierzyć ich skuteczność.
        </p>
        <p className="mt-4">
          Dostawcą systemu jest MailerLite Limited, 88 Harcourt Street, Dublin 2, D02 DK18, Irlandia,
          który przetwarza dane w naszym imieniu (podmiot przetwarzający). MailerLite może przekazywać
          dane do MailerLite, Inc. w USA na podstawie EU-US Data Privacy Framework.
        </p>
        <p className="mt-4">
          Z newslettera możesz zrezygnować w każdej chwili, klikając link rezygnacji w stopce każdej
          wiadomości albo pisząc na {mailLink}. Wycofanie zgody nie wpływa na zgodność z prawem
          wysyłki dokonanej przed jej wycofaniem ani na realizację Twojego zamówienia.
        </p>
      </>
    ),
  },
  {
    id: "ochrona-danych",
    number: "06",
    title: "Wybrane metody ochrony danych",
    content: (
      <ul className="space-y-3">
        <li>
          <strong>Szyfrowanie SSL</strong> — miejsca logowania i wprowadzania danych osobowych są
          chronione w warstwie transmisji. Dane osobowe i dane logowania wprowadzone na stronie
          zostają zaszyfrowane i mogą być odczytane jedynie na docelowym serwerze.
        </li>
        <li>
          <strong>Hashowanie haseł</strong> — hasła użytkowników są przechowywane w postaci
          hashowanej. Funkcja hashująca działa jednokierunkowo — nie jest możliwe odwrócenie jej
          działania.
        </li>
        <li>
          <strong>Kopie bezpieczeństwa</strong> — Operator regularnie wykonuje kopie zapasowe danych.
        </li>
        <li>
          <strong>Aktualizacje oprogramowania</strong> — wszelkie oprogramowanie wykorzystywane do
          przetwarzania danych osobowych, w tym system sklepu, jest regularnie aktualizowane.
        </li>
      </ul>
    ),
  },
  {
    id: "hosting",
    number: "07",
    title: "Hosting",
    content: (
      <>
        <p>
          Serwis, w tym Sklep, jest technicznie utrzymywany na serwerach zewnętrznego dostawcy
          hostingu. Firma hostingowa prowadzi logi na poziomie serwera, w których mogą być
          zapisywane:
        </p>
        <ul className="mt-3 space-y-1 list-disc list-inside">
          <li>Adresy żądanych zasobów (URL)</li>
          <li>Czas nadejścia zapytania i czas wysłania odpowiedzi</li>
          <li>Nazwa stacji klienta (identyfikacja przez protokół HTTP)</li>
          <li>Informacje o błędach przy realizacji transakcji HTTP</li>
          <li>Adres URL strony poprzednio odwiedzanej (referer)</li>
          <li>Informacje o przeglądarce i adresie IP użytkownika</li>
        </ul>
      </>
    ),
  },
  {
    id: "odbiorcy",
    number: "08",
    title: "Odbiorcy danych",
    content: (
      <>
        <p>
          Administrator może przekazywać dane osobowe innym odbiorcom, jeżeli jest to niezbędne do
          wykonania zawartej umowy lub realizacji obowiązków prawnych. Dotyczy to:
        </p>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>Firmy hostingowej (na zasadzie powierzenia)</li>
          <li>Operatora płatności — Stripe Payments Europe, Limited (Stripe)</li>
          <li>Dostawcy systemu do wysyłki newslettera — MailerLite Limited (MailerLite)</li>
          <li>
            Dostawców poczty elektronicznej i narzędzi informatycznych, z których korzystamy przy
            obsłudze zamówień i korespondencji
          </li>
          <li>
            Dostawcy systemu do fakturowania i księgowości — IFIRMA S.A., ul. Grabiszyńska 241G,
            53-234 Wrocław (iFirma), oraz biura rachunkowego lub innych podmiotów prowadzących dla nas
            księgowość, w zakresie danych z faktur
          </li>
          <li>Upoważnionych pracowników i współpracowników</li>
          <li>Firm świadczących usługi marketingowe na rzecz Administratora</li>
          <li>Organów publicznych, jeżeli obowiązek przekazania danych wynika z przepisów prawa</li>
        </ul>
        <p className="mt-4">
          Niektórzy dostawcy narzędzi (np. Google, Meta) mogą przetwarzać dane poza Europejskim
          Obszarem Gospodarczym. W takim przypadku przekazanie odbywa się na podstawie decyzji
          Komisji Europejskiej stwierdzającej odpowiedni stopień ochrony (w tym EU-US Data Privacy
          Framework) albo standardowych klauzul umownych.
        </p>
      </>
    ),
  },
  {
    id: "okres-przechowywania",
    number: "09",
    title: "Jak długo przechowujemy dane",
    content: (
      <ul className="space-y-1 list-disc list-inside">
        <li>
          Dane związane z zamówieniem i umową — przez czas wykonania umowy, a następnie do upływu
          terminu przedawnienia roszczeń
        </li>
        <li>
          Faktury i dokumenty księgowe — przez 5 lat, licząc od końca roku kalendarzowego, w którym
          upłynął termin płatności podatku
        </li>
        <li>
          Dane dotyczące reklamacji i odstąpień — przez czas ich rozpatrywania, a następnie do upływu
          terminu przedawnienia roszczeń
        </li>
        <li>
          Dane z formularzy kontaktowych i korespondencji — przez czas niezbędny do obsługi sprawy, a
          następnie do upływu terminu przedawnienia ewentualnych roszczeń
        </li>
        <li>
          Dane subskrybentów newslettera — do czasu wycofania zgody, a informacje potwierdzające
          udzielenie zgody — do upływu terminu przedawnienia ewentualnych roszczeń
        </li>
        <li>
          Dane przetwarzane w celach marketingowych — nie dłużej niż 3 lata albo do czasu wniesienia
          sprzeciwu lub cofnięcia zgody
        </li>
      </ul>
    ),
  },
  {
    id: "twoje-prawa",
    number: "10",
    title: "Twoje prawa",
    content: (
      <>
        <p className="font-medium text-navy">Przysługują Ci następujące prawa:</p>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>Dostęp do danych osobowych i otrzymanie ich kopii</li>
          <li>Sprostowanie danych</li>
          <li>Usunięcie danych</li>
          <li>Ograniczenie przetwarzania</li>
          <li>Przenoszenie danych</li>
          <li>Sprzeciw wobec przetwarzania opartego na prawnie uzasadnionym interesie, w tym wobec marketingu</li>
          <li>
            Cofnięcie zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania
            dokonanego przed jej cofnięciem
          </li>
        </ul>
        <p className="mt-4">
          Aby skorzystać z tych praw, napisz na adres {mailLink}. Na działania Administratora
          przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193
          Warszawa.
        </p>
        <p className="mt-4">
          Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu i realizacji
          zamówień w zakresie wskazanym w pkt 03. Nie podejmujemy wobec Ciebie decyzji opartych
          wyłącznie na zautomatyzowanym przetwarzaniu, w tym profilowaniu, które wywoływałyby skutki
          prawne.
        </p>
      </>
    ),
  },
  {
    id: "formularze",
    number: "11",
    title: "Informacje w formularzach",
    content: (
      <ul className="space-y-3 list-disc list-inside">
        <li>
          Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile
          zostaną one podane.
        </li>
        <li>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</li>
        <li>
          Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego
          formularza, np. obsługi zgłoszenia, kontaktu handlowego lub realizacji zamówienia.
          Każdorazowo opis formularza informuje, do czego służy.
        </li>
      </ul>
    ),
  },
  {
    id: "techniki-marketingowe",
    number: "12",
    title: "Istotne techniki marketingowe",
    content: (
      <ul className="space-y-4">
        <li>
          <strong>Google Analytics</strong> — w Serwisie (instapara.pl i sklep.instapara.pl) Operator stosuje analizę
          statystyczną ruchu na stronie poprzez Google Analytics (Google LLC, USA). Do operatora tej
          usługi przekazywane są jedynie zanonimizowane informacje. Użytkownik może przeglądać i
          edytować swoje preferencje pod adresem:{" "}
          <Link
            href="https://www.google.com/ads/preferences/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky hover:underline break-all"
          >
            google.com/ads/preferences
          </Link>
        </li>
        <li>
          <strong>Remarketing</strong> — Operator stosuje techniki remarketingowe dopasowujące
          przekazy reklamowe do zachowania użytkownika na stronie. Wymaga to włączonej obsługi plików
          cookies.
        </li>
        <li>
          <strong>Piksel Facebooka</strong> — Operator korzysta z piksela Facebooka (Meta Platforms
          Inc., USA). Serwis Facebook może wiedzieć, że zarejestrowana w nim osoba korzysta z Serwisu
          — na podstawie własnych danych Facebooka. Operator nie przekazuje żadnych dodatkowych danych
          osobowych serwisowi Facebook. W Sklepie piksel rejestruje też zdarzenia zakupowe (wyświetlenie
          produktu, rozpoczęcie zamówienia, zakup z kwotą i numerem zamówienia), które służą do mierzenia
          skuteczności reklam.
        </li>
      </ul>
    ),
  },
  {
    id: "cookies",
    number: "13",
    title: "Informacja o plikach cookies",
    content: (
      <>
        <p>Serwis korzysta z plików cookies.</p>
        <p className="mt-3">
          Pliki cookies (tzw. „ciasteczka”) to dane informatyczne — pliki tekstowe przechowywane w
          urządzeniu końcowym użytkownika, służące do korzystania ze stron internetowych. Zazwyczaj
          zawierają nazwę strony, czas przechowywania oraz unikalny numer.
        </p>
        <p className="mt-3">Pliki cookies wykorzystywane są w celu:</p>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>
            Utrzymania sesji użytkownika (po zalogowaniu), dzięki której użytkownik nie musi ponownie
            wpisywać danych na każdej podstronie
          </li>
          <li>
            Obsługi koszyka i procesu zamówienia w Sklepie (pliki niezbędne, np. zapamiętanie
            zawartości koszyka)
          </li>
          <li>Realizacji celów opisanych w sekcji „Istotne techniki marketingowe”</li>
        </ul>
        <p className="mt-4">W ramach Serwisu stosowane są dwa rodzaje plików cookies:</p>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>
            <strong>Sesyjne</strong> — pliki tymczasowe, usuwane przy zamknięciu przeglądarki
          </li>
          <li>
            <strong>Stałe</strong> — przechowywane przez czas określony w parametrach pliku lub do
            czasu ręcznego usunięcia przez użytkownika
          </li>
        </ul>
        <p className="mt-4">
          Pliki cookies zamieszczane w urządzeniu użytkownika mogą być wykorzystywane przez podmioty
          współpracujące z Operatorem, w szczególności: Google (Google LLC, USA), Facebook (Meta
          Platforms Inc., USA).
        </p>
      </>
    ),
  },
  {
    id: "zarzadzanie-cookies",
    number: "14",
    title: "Zarządzanie plikami cookies",
    content: (
      <>
        <p>
          Pliki cookies analityczne (Google Analytics) i marketingowe (piksel Meta) stosujemy wyłącznie
          za Twoją zgodą, wyrażoną w banerze przy pierwszej wizycie. Bez zgody Google Analytics działa w
          trybie bez plików cookies, a piksel Meta nie jest ładowany. Twój wybór zapisujemy w pliku
          cookie <em>instapara_cookie_consent</em> na 12 miesięcy; obowiązuje on zarówno w instapara.pl,
          jak i w sklep.instapara.pl. Zgodę możesz w każdej chwili zmienić lub wycofać, klikając
          „Ustawienia cookies” w stopce strony.
        </p>
        <p className="mt-4">
          Przeglądarka internetowa domyślnie dopuszcza przechowywanie plików cookies. Jeśli nie
          chcesz otrzymywać plików cookies, możesz zmienić ustawienia przeglądarki lub je usunąć.
          Wyłączenie plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa lub
          obsługi koszyka może utrudnić, a w skrajnych przypadkach uniemożliwić korzystanie ze
          strony, w tym złożenie zamówienia w Sklepie.
        </p>
        <p className="mt-4">Instrukcje zarządzania cookies dla popularnych przeglądarek:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            ["Chrome", "https://support.google.com/chrome/answer/95647"],
            ["Firefox", "https://support.mozilla.org/pl/kb/usuwanie-ciasteczek"],
            ["Safari", "https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"],
            ["Edge", "https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"],
            ["Opera", "https://help.opera.com/pl/latest/web-preferences/"],
          ].map(([name, href]) => (
            <Link
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-warm px-4 py-1.5 text-sm text-slate hover:border-sky/40 hover:text-sky transition-colors"
            >
              {name}
            </Link>
          ))}
        </div>
      </>
    ),
  },
];

export default function PolitykaPrywatnosci() {
  return (
    <>
      <Header />
      <main className="bg-cream min-h-screen">
        {/* Hero */}
        <div className="bg-navy pt-36 pb-20 px-6 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky/20 bg-sky/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-sky mb-8">
              Dokument prawny
            </span>
            <h1 className="font-display text-[clamp(2rem,4vw,4rem)] font-light leading-[1.25] text-cream">
              Polityka
              <br />
              <em className="italic text-sky">prywatności</em>
            </h1>
            <p className="mt-6 text-base text-cream/50 max-w-xl leading-relaxed">
              Zasady przetwarzania przez nas informacji na Twój temat, w tym
              danych osobowych oraz plików cookies.
            </p>
            <p className="mt-3 text-xs text-cream/30 uppercase tracking-widest">
              Ostatnia aktualizacja: 1 października 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-6 lg:px-12 py-20">
          <div className="space-y-0">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="border-t border-warm py-12 grid lg:grid-cols-[120px_1fr] gap-6 lg:gap-12"
              >
                <div className="flex items-start gap-3 lg:flex-col lg:gap-1">
                  <span className="font-display text-3xl font-light text-warm leading-none">
                    {section.number}
                  </span>
                </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-navy mb-5">
                    {section.title}
                  </h2>
                  <div className="text-sm leading-relaxed text-gray space-y-2">
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-warm" />
          </div>

          {/* Contact block */}
          <div className="mt-16 bg-navy rounded-2xl p-8 lg:p-12">
            <div className="mb-6 h-px w-8 bg-sky" />
            <p className="font-heading text-lg font-medium text-cream mb-2">
              Pytania dotyczące danych osobowych?
            </p>
            <p className="text-sm text-cream/60 mb-6">
              Skontaktuj się bezpośrednio z Administratorem danych.
            </p>
            <Link
              href="mailto:kontakt@instapara.pl"
              className="inline-flex items-center gap-2 rounded-full bg-sky/10 border border-sky/20 px-5 py-2.5 text-sm text-sky hover:bg-sky hover:text-navy transition-all"
            >
              kontakt@instapara.pl
            </Link>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="bg-navy border-t border-white/10 py-10 px-6">
        <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-light text-cream">
            <LogoIcon className="h-6 w-6 text-sky" />
            <span className="translate-y-[3px]">instapara</span>
          </Link>
          <p className="text-xs text-cream/20">© 2026 InstaPara. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </>
  );
}
