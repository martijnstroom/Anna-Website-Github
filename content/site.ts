// Central content source of truth for the Anna Wittich site.
// Every editable string, href, image path, and label lives here.
// English is the canonical fill; German is a stub to be filled later.

export type Locale = "en" | "de";

export type NavLink = { label: string; href: string };

export type Hero = {
  prefixLines: string[];
  cyclingWords: string[];
  portrait: { src: string; alt: string };
  subtext?: string;
};

export type ExpertiseQuestion = {
  number: string;
  text: string;
  // Optional plain-text answer. When present, the page emits FAQPage JSON-LD
  // for this question — eligible for rich results in Google SERPs.
  // Keep answers 2–4 sentences, grounded in real positions / publications.
  // Leave undefined to skip schema emission for this item.
  answer?: string;
};

export type PressStat = {
  eyebrow: string;
  number: number;
  unit: string;
  caption: string;
};

export type PressQuote = { source: string; quote: string; href?: string };

export type About = {
  headlineLines: string[];
  paragraphs: string[];
  cta: { label: string; href: string };
};

export type Publication = { date: string; title: string; href: string };

export type ContactField = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  required?: boolean;
};

export type Contact = {
  headline: string;
  cyclingWords: string[];
  intro: string;
  fields: ContactField[];
  submitLabel: string;
};

export type FooterContent = {
  wordmark: string;
  tagline: string;
  links: NavLink[];
  meta: { copyright: string; rightLabel: string };
};

export type SeoBlock = {
  // Title used by <title> and og:title. Keep <= 60 chars for SERPs.
  title: string;
  // Meta description + og:description. Keep 150-160 chars.
  description: string;
  // Keywords (used by some engines and as a soft signal).
  keywords: string[];
  // Alt text for the generated OG image.
  ogImageAlt: string;
  // Person schema fields — feed Google's Knowledge Graph.
  person: {
    name: string;
    givenName: string;
    familyName: string;
    honorificPrefix: string;
    jobTitle: string;
    affiliation: string;
    description: string;
    sameAs: string[];
    alumniOf: string[];
    knowsAbout: string[];
  };
};

export type SiteContent = {
  meta: { title: string; description: string };
  brand: { wordmark: string; languageToggleLabel: string };
  nav: NavLink[];
  hero: Hero;
  expertise: { eyebrow: string; questions: ExpertiseQuestion[] };
  press: { stat: PressStat; quotes: PressQuote[] };
  about: About;
  publications: { eyebrow: string; items: Publication[] };
  contact: Contact;
  footer: FooterContent;
  seo: SeoBlock;
};

// Canonical production origin. Override at deploy time via NEXT_PUBLIC_SITE_URL.
// Host redirects apex → www, so canonical lives on www. Keep them aligned.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.annawittich.com";

const heroPortrait = {
  src: "/images/anna-portrait2.jpg",
  alt: "Portrait of Dr. Anna Wittich.",
};

const en: SiteContent = {
  meta: {
    title: "Dr. Anna Wittich | Architecting Labor Markets",
    description:
      "Independent labor market researcher decoding automation, value, and the architecture of modern work.",
  },
  brand: {
    wordmark: "DR. ANNA WITTICH",
    languageToggleLabel: "Switch language",
  },
  nav: [
    { label: "Expertise", href: "#expertise" },
    { label: "Press", href: "#press" },
    { label: "Publications", href: "#publications" },
    { label: "About", href: "#about" },
  ],
  hero: {
    prefixLines: ["Where work is", "going"],
    cyclingWords: ["now.", "wrong.", "next."],
    portrait: heroPortrait,
    subtext:
      "Dr. Anna Wittich combines data-driven insights into the labor market with practical recommendations for employees, job seekers, and companies. She examines how career decisions are changing, what people expect from work, and what constitutes effective application and recruitment processes today.",
  },
  expertise: {
    eyebrow: "HOT TOPICS IN THE CURRENT LABOR MARKET",
    questions: [
      {
        number: "01",
        text: "What is the current state and future of work: trends, challenges, & oppurtunities on the labor market.",
        // DRAFT — refine with Anna before deploy.
        answer:
          "The German labor market is shifting structurally: skill shortages persist in high-demand fields while expectations around flexibility, hybrid work, and meaningful work are reshaping employer–employee relationships. My research at The Stepstone Group tracks how careers, hiring, and workplace conditions are evolving in real time, using large-scale data on job seekers and employers.",
      },
      {
        number: "02",
        text: "Is your job at risk of automation? Let's talk about training and adoptation.",
        // DRAFT — refine with Anna before deploy.
        answer:
          "Automation risk is real but unevenly distributed, and workers' perceptions of that risk often don't match the data. My research on the automation training gap shows that when workers accurately perceive their exposure, they engage more with training — but information has to be framed carefully to drive action rather than fatalism.",
      },
      {
        number: "03",
        text: "Does AI improve or challenge our workload, and how does this effect job oppurtunities, hiring, and firing?",
        // DRAFT — refine with Anna before deploy.
        answer:
          "AI changes which tasks are automatable, which skills companies hire for, and how application processes work. The effects on hiring and firing are more nuanced than headlines suggest: some roles compress, others expand, and recruiting itself is being rebuilt. My work examines how labor market information shapes the decisions of both employers and candidates as AI adoption accelerates.",
      },
    ],
  },
  press: {
    stat: {
      eyebrow: "DATA DRIVEN INSIGHTS",
      number: 8,
      unit: "%",
      caption:
        "Salary negotiations act as structural amplifiers. A single 8% variance at entry level compoundingly dictates career trajectory over decades.",
    },
    quotes: [
      {
        source: "STEPSTONE INSIGHTS",
        quote:
          "Apprenticeship 2026: Entry-level salaries reflect economic change",
        href: "https://www.thestepstonegroup.com/english/newsroom/press-releases/apprenticeship-2026-entry-level-salaries-reflect-economic-change/", // TODO: add real article URL
      },
      {
        source: "BUSINESS INSIDER",
        quote:
          "I take 55 days of paid vacation a year: My boss even celebrates this work-life balance.",
        href: "https://www.businessinsider.de/karriere/55-tage-urlaub-bei-vollem-gehalt-meine-chefin-feiert-das-modell/", // TODO: add real article URL
      },
      {
        source: "BILD",
        quote:
          "These are the professions that pay the most money after training.",
        href: "https://www.bild.de/leben-wissen/mein-geld-finanzportal/ueber-50-000-euro-einstiegsgehalt-in-diesen-berufen-gibts-die-meiste-kohle-69ce79cc0aecbf4b48bd8ac5", // TODO: add real article URL
      },
      {
        source: "STEPSTONE INSIGHTS",
        quote:
          "Ahead of the long weekend: How employees in Germany experience shortened working weeks",
        href: "https://www.thestepstonegroup.com/english/newsroom/press-releases/ahead-of-the-long-weekend-how-employees-in-germany-experience-shortened-working-weeks/", // TODO: add real article URL
      },
    ],
  },
  about: {
    headlineLines: ["Academic", "Rigor."],
    paragraphs: [
      "Dr. Anna Wittich is a labor economist and currently labor market research manager at The Stepstone Group, where she specializes in job search, application, recruiting, and job satisfaction. Her research focuses on what motivates people during their job search, the application process, and their daily work, and how companies can respond.", 
      "Her work analyzes how the expectations, decisions, and experiences of employees, job seekers, and companies are changing in the labor market. Using Stepstone data, Dr. Anna Wittich examines career paths, application behavior, willingness to change jobs, working conditions, and modern HR practices.",
    ],
    cta: { label: "View Credentials", href: "#publications" },
  },
  publications: {
    eyebrow: "RECENT RESEARCH",
    items: [
      {
        date: "Working Paper",
        title: "Mind the Gap: The Role of Workers’ Automation Perceptions for the Automation Training Gap",
        href: "https://ssrn.com/abstract=5805655",
      },
      {
        date: "Working Paper",
        title: "The Impact of Framed Labor Market Information on Training Engagement: Field Experimental Evidence",
        href: "https://cris.maastrichtuniversity.nl/ws/portalfiles/portal/304937326/c9143.pdf",
      },
      {
        date: "Working Paper",
        title: "Relevant or not? Experimental evidence on the conditional effectiveness of labor market information in shaping training decisions",
        href: "https://cris.maastrichtuniversity.nl/ws/portalfiles/portal/304937326/c9143.pdf",
      },
      {
        date: "Working Paper",
        title: "Digital communication overload in the hybrid workplace – Can it be contained?",
        href: "https://cris.maastrichtuniversity.nl/ws/portalfiles/portal/304937326/c9143.pdf",
      },
    ],
  },
  contact: {
    headline: "Let's get to",
    cyclingWords: ["talk.", "insights.", "work."],
    intro:
      "For speaking engagements, consultation, or press inquiries regarding labor market dynamics.",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "affiliation", label: "Affiliation", type: "text" },
      { name: "inquiry", label: "Inquiry", type: "textarea", required: true },
    ],
    submitLabel: "Send Message",
  },
  footer: {
    wordmark: "DR. ANNA WITTICH",
    tagline: "ARCHITECTING LABOR MARKETS.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/annawittich/" },
     // { label: "Imprint", href: "#" },
     // { label: "Privacy", href: "#" },
    ],
    meta: {
      copyright: "© 2026 DR. ANNA-LENA WITTICH.",
      rightLabel: "DESIGNED FOR PRECISION - by Porthos Studio",
    },
  },
  seo: {
    title: "Dr. Anna Wittich — Labor Market Researcher | Future of Work",
    description:
      "Dr. Anna Wittich is a labor economist researching automation, AI, recruiting, and the future of work. Independent insights for press, speaking, and consulting.",
    keywords: [
      // Name variants — every form someone might Google
      "Anna Wittich",
      "Anna-Lena Wittich",
      "Anna Lena Wittich",
      "Lena Wittich",
      "Anna-Lena Wittich, PhD",
      "Anna Wittich, PhD",
      "Dr. Anna Wittich",
      "Anna-Lena Wittich",
      "Dr. Anna-Lena Wittich",
      "Wittich Stepstone",
      "Anna Wittich Stepstone",
      "Anna Wittich Maastricht",
      // Role / title
      "labor market researcher",
      "labor market Expert",
      "job market researcher",
      "job market Expert",
      "labor economist",
      "labor market research manager",
      "Arbeitsökonomin",
      "Arbeitsmarktforscherin",
      // Topical authority — what she's quoted on
      "future of work",
      "Zukunft der Arbeit",
      "automation and jobs",
      "automation training gap",
      "AI and labor market",
      "KI Arbeitsmarkt",
      "recruiting research",
      "hiring research",
      "job satisfaction research",
      "salary negotiation research",
      "entry-level salary Germany",
      "Einstiegsgehalt Deutschland",
      "apprenticeship Germany",
      "Ausbildung Arbeitsmarkt",
      "hybrid work research",
      "digital communication overload",
      "workforce trends Germany",
      // Institutional / press
      "Stepstone research",
      "Stepstone Insights",
      "The Stepstone Group research",
      "Maastricht University labor economics",
      // Speaker / consulting intent
      "labor market expert Germany",
      "future of work speaker",
      "Arbeitsmarkt Expertin",
      "labor market keynote speaker",
      "labor market consultant",
    ],
    ogImageAlt: "Dr. Anna Wittich — Labor Markets Expert",
    person: {
      name: "Dr. Anna-Lena Wittich",
      givenName: "Anna-Lena",
      familyName: "Wittich",
      honorificPrefix: "Dr.",
      jobTitle: "Labor Market Research Manager",
      affiliation: "The Stepstone Group",
      description:
        "Labor economist and labor market research manager at The Stepstone Group. Research focus: job search, recruiting, automation, AI, and job satisfaction.",
      sameAs: [
        "https://www.linkedin.com/in/annawittich/",
        "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=9278547",
      ],
      alumniOf: ["Maastricht University"],
      knowsAbout: [
        "Labor economics",
        "Future of work",
        "Automation and workforce training",
        "Recruiting and hiring",
        "Job satisfaction",
        "Hybrid work",
      ],
    },
  },
};

const de: SiteContent = {
  ...en,
  meta: {
    title: "Dr. Anna Wittich | Arbeitsmarktforschung",
    description:
      "Unabhängige Arbeitsmarktforscherin, die Automatisierung, Wert und die Architektur moderner Arbeit entschlüsselt.",
  },
  brand: {
    wordmark: "DR. ANNA WITTICH",
    languageToggleLabel: "Sprache wechseln",
  },
  nav: [
    { label: "Expertise", href: "#expertise" },
    { label: "Presse", href: "#press" },
    { label: "Publikationen", href: "#publications" },
    { label: "Über", href: "#about" },
  ],
  hero: {
    prefixLines: ["Wohin die Arbeit", "wirklich geht"],
    cyclingWords: ["jetzt.", "schief.", "weiter."],
    portrait: heroPortrait,
    subtext:
      "Dr. Anna Wittich verbindet datenbasierte Einblicke in den Arbeitsmarkt mit konkreten Empfehlungen für Arbeitnehmer, Jobsuchende und Unternehmen. Sie untersucht, wie sich Karriereentscheidungen verändern, was Menschen von der Arbeit erwarten und was heute effektive Bewerbungs- und Rekrutierungsprozesse ausmacht.",
  },
  expertise: {
    eyebrow: "AKTUELLE THEMEN IM ARBEITSMARKT",
    questions: [
      {
        number: "01",
        text: "Wie steht es um die Zukunft der Arbeit? Trends, Herausforderungen und Chancen auf dem Arbeitsmarkt.",
        // ENTWURF — vor Veröffentlichung mit Anna abstimmen.
        answer:
          "Der deutsche Arbeitsmarkt verändert sich strukturell: Fachkräftemangel besteht in vielen Bereichen fort, während sich Erwartungen an Flexibilität, hybrides Arbeiten und sinnstiftende Arbeit grundlegend wandeln. Meine Forschung bei The Stepstone Group verfolgt diese Entwicklungen in Echtzeit anhand großer Datensätze zu Jobsuchenden und Unternehmen.",
      },
      {
        number: "02",
        text: "Ist Ihr Job durch Automatisierung gefährdet? Über Weiterbildung und Anpassungsfähigkeit.",
        answer:
          "Das Automatisierungsrisiko ist real, aber ungleich verteilt – und die Wahrnehmung der Arbeitnehmer stimmt oft nicht mit den Daten überein. Meine Forschung zur Automatisierungs-Weiterbildungslücke zeigt: Wer das eigene Risiko realistisch einschätzt, beteiligt sich stärker an Weiterbildung. Entscheidend ist, wie Informationen vermittelt werden.",
      },
      {
        number: "03",
        text: "Verbessert oder belastet KI unsere Arbeit – und welche Folgen hat das für Jobchancen, Einstellungen und Entlassungen?",
        answer:
          "KI verändert, welche Aufgaben automatisierbar sind, welche Kompetenzen gefragt sind und wie Bewerbungsprozesse funktionieren. Die Effekte auf Einstellungen und Entlassungen sind differenzierter, als Schlagzeilen vermuten lassen: Manche Rollen werden komprimiert, andere wachsen, und Recruiting selbst wird neu gedacht. Meine Arbeit untersucht, wie Arbeitsmarktinformationen die Entscheidungen von Arbeitgebern und Bewerbern prägen.",
      },
    ],
  },
  press: {
    stat: {
      eyebrow: "DATENGESTÜTZTE ERKENNTNISSE",
      number: 8,
      unit: "%",
      caption:
        "Gehaltsverhandlungen wirken als strukturelle Verstärker. Eine einmalige Abweichung von 8 % beim Berufseinstieg bestimmt den Karriereverlauf kumulativ über Jahrzehnte.",
    },
    quotes: [
      {
        source: "STEPSTONE INSIGHTS",
        quote:
          "Ausbildung 2026: Einstiegsgehälter spiegeln den wirtschaftlichen Wandel wider",
        href: en.press.quotes[0].href,
      },
      {
        source: "BUSINESS INSIDER",
        quote:
          "Ich nehme 55 Tage bezahlten Urlaub pro Jahr – meine Chefin feiert dieses Work-Life-Balance-Modell.",
        href: en.press.quotes[1].href,
      },
      {
        source: "BILD",
        quote:
          "Das sind die Berufe mit dem höchsten Gehalt nach der Ausbildung.",
        href: en.press.quotes[2].href,
      },
      {
        source: "STEPSTONE INSIGHTS",
        quote:
          "Vor dem langen Wochenende: Wie Beschäftigte in Deutschland verkürzte Arbeitswochen erleben",
        href: en.press.quotes[3].href,
      },
    ],
  },
  about: {
    headlineLines: ["Akademische", "Präzision."],
    paragraphs: [
      "Dr. Anna Wittich ist Arbeitsmarktökonomin und leitet aktuell das Arbeitsmarktforschungsteam bei The Stepstone Group. Dort spezialisiert sie sich auf Jobsuche, Bewerbung, Recruiting und Arbeitszufriedenheit. Ihre Forschung widmet sich der Frage, was Menschen in der Jobsuche und im Arbeitsalltag antreibt – und wie Unternehmen darauf reagieren können.",
      "Ihre Arbeit analysiert, wie sich Erwartungen, Entscheidungen und Erfahrungen von Arbeitnehmern, Jobsuchenden und Unternehmen auf dem Arbeitsmarkt verändern. Auf Basis von Stepstone-Daten untersucht Dr. Anna Wittich Karrierewege, Bewerbungsverhalten, Wechselbereitschaft, Arbeitsbedingungen und moderne HR-Praktiken.",
    ],
    cta: { label: "Qualifikationen ansehen", href: "#publications" },
  },
  publications: {
    eyebrow: "AKTUELLE FORSCHUNG",
    items: en.publications.items,
  },
  contact: {
    headline: "Lass uns",
    cyclingWords: ["reden.", "forschen.", "arbeiten."],
    intro:
      "Für Vortragsanfragen, Beratungen oder Presseanfragen rund um den Arbeitsmarkt.",
    fields: [
      { name: "name", label: "Vollständiger Name", type: "text", required: true },
      { name: "email", label: "E-Mail-Adresse", type: "email", required: true },
      { name: "affiliation", label: "Organisation", type: "text" },
      { name: "inquiry", label: "Anfrage", type: "textarea", required: true },
    ],
    submitLabel: "Nachricht senden",
  },
  footer: {
    wordmark: "DR. ANNA WITTICH",
    tagline: "DEN ARBEITSMARKT GESTALTEN.",
    links: [
      { label: "LinkedIn", href: en.footer.links[0].href },
     // { label: "Impressum", href: en.footer.links[1].href },
     // { label: "Datenschutz", href: en.footer.links[2].href },
    ],
    meta: {
      copyright: "© 2026 DR. ANNA-LENA WITTICH.",
      rightLabel: "DESIGNED FOR PRECISION – by Porthos Studio",
    },
  },
  seo: {
    ...en.seo,
    title: "Dr. Anna Wittich — Arbeitsmarktforscherin | Zukunft der Arbeit",
    description:
      "Dr. Anna Wittich ist Arbeitsökonomin und forscht zu Automatisierung, KI, Recruiting und der Zukunft der Arbeit. Unabhängige Einblicke für Presse, Vorträge und Beratung.",
    ogImageAlt: "Dr. Anna Wittich — Den Arbeitsmarkt gestalten",
  },
};

export const site: Record<Locale, SiteContent> = { en, de };

export const defaultLocale: Locale = "en";
