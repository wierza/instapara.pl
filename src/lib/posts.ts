export type PostCategory = "Kliniki" | "Prawnicy" | "Nieruchomości" | "Strategia";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: number;
  image: string;
  category: PostCategory;
};

export const posts: Post[] = [
  {
    slug: "dlaczego-kliniki-maja-obserwujacych-ale-malo-pacjentow",
    title: "Dlaczego kliniki medycyny estetycznej mają dużo obserwujących, ale mało pacjentów?",
    excerpt: "8 000 followersów. Reele do 6 000 wyświetleń. Piękny feed. I kilka nowych rezerwacji miesięcznie. To nie jest problem contentu — to problem zrozumienia, jak naprawdę działa decyzja pacjentki.",
    author: "Marysia Grygosińska",
    authorRole: "Estetyka & Produkcja",
    date: "2026-04-22",
    readTime: 10,
    image: "https://images.pexels.com/photos/34297957/pexels-photo-34297957.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Kliniki",
  },
  {
    slug: "dlaczego-marketing-kancelarii-nie-przynosi-klientow",
    title: "Dlaczego marketing kancelarii nie przekłada się na realne sprawy?",
    excerpt: "Strona, blog, social media, SEO. I nadal 80% klientów przychodzi z polecenia. Mechanizm jest prosty — ale większość kancelarii go ignoruje.",
    author: "Dawid Wierzycki",
    authorRole: "Strategia & System",
    date: "2026-04-24",
    readTime: 10,
    image: "https://images.pexels.com/photos/7841463/pexels-photo-7841463.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Prawnicy",
  },
  {
    slug: "dlaczego-agenci-nieruchomosci-maja-zasiegi-ale-nie-maja-klientow",
    title: "Dlaczego agenci nieruchomości mają zasięgi, ale nie mają klientów?",
    excerpt: "5 000 obserwujących. Reele o mieszkaniach do 3 000 wyświetleń. I tyle samo transakcji z polecenia co rok temu. Zasięgi nie sprzedają nieruchomości — zaufanie tak.",
    author: "Dawid Wierzycki",
    authorRole: "Strategia & System",
    date: "2026-04-26",
    readTime: 10,
    image: "https://images.pexels.com/photos/8962573/pexels-photo-8962573.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Nieruchomości",
  },
  {
    slug: "marketing-wideo-kliniki-beauty-medycyna-estetyczna",
    title: "Marketing wideo dla klinik beauty i medycyny estetycznej — jak zbudować zaufanie zanim klient przekroczy próg",
    excerpt: "Klienci klinik estetycznych podejmują jedne z najbardziej osobistych decyzji w swoim życiu. Zanim umówią wizytę, chcą wiedzieć dokładnie, komu powierzają swoją twarz.",
    author: "Marysia Grygosińska",
    authorRole: "Estetyka & Produkcja",
    date: "2026-04-15",
    readTime: 10,
    image: "https://images.pexels.com/photos/4586713/pexels-photo-4586713.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Kliniki",
  },
  {
    slug: "system-cash-jak-zbudowac-marke-eksperta",
    title: "System C.A.S.H. — jak zbudować markę eksperta poświęcając tylko 3 godziny miesięcznie",
    excerpt: "Większość przedsiębiorców próbowała publikować regularnie i porzuciła po miesiącu. Nie dlatego, że brakowało im wiedzy. Dlatego, że brakowało im systemu.",
    author: "Dawid Wierzycki",
    authorRole: "Strategia & System",
    date: "2026-04-10",
    readTime: 10,
    image: "https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Strategia",
  },
  {
    slug: "marketing-wideo-prawnicy-agenci-nieruchomosci",
    title: "Marketing wideo dla prawników i agentów nieruchomości — dlaczego wideo buduje zaufanie szybciej niż cokolwiek innego",
    excerpt: "Twoi klienci decydują się na współpracę zanim jeszcze do Ciebie zadzwonią. Pytanie brzmi: co znajdują, kiedy Cię szukają?",
    author: "Marysia Grygosińska",
    authorRole: "Estetyka & Produkcja",
    date: "2026-04-05",
    readTime: 10,
    image: "https://images.pexels.com/photos/7144262/pexels-photo-7144262.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Prawnicy",
  },
  {
    slug: "dlaczego-konkurencja-wygrywa-social-media",
    title: "Dlaczego Twoja konkurencja wygrywa na social mediach — i co możesz z tym zrobić w 30 dni",
    excerpt: "Masz większe doświadczenie. Lepsze referencje. A mimo to klient trafia do kogoś innego. To nie jest przypadek — i da się to zmienić.",
    author: "Dawid Wierzycki",
    authorRole: "Strategia & System",
    date: "2026-03-28",
    readTime: 10,
    image: "https://images.pexels.com/photos/7616841/pexels-photo-7616841.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Strategia",
  },
];
