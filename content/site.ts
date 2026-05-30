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

export type ExpertiseQuestion = { number: string; text: string };

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
};

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
      },
      {
        number: "02",
        text: "Is your job at risk of automation? Let's talk about training and adoptation.",
      },
      {
        number: "03",
        text: "Does AI improve or challenge our workload, and how does this effect job oppurtunities, hiring, and firing?",
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
        href: "https://download.ssrn.com/ecoedu/a902586d-ab31-4e28-b071-104eb4e5abb7-meca.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLWVhc3QtMSJIMEYCIQC3dt%2B%2B%2FX6OXXLp3ee5vbRopBX3I5%2F0gdPdGQMcMsklxAIhAJDv5wCYo3AXHsR%2FQ2s1emlF%2Fc2WOXohYzAbQVosA08RKsYFCM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMMzA4NDc1MzAxMjU3IgxRrL36nw4ZReSSI1oqmgWmqpqJ4%2FChXfZ3cE58H3azV5sUJyvd7SJRsaCPeTcQ0D7cnOq7GypcUcGCQQ5lsiBYxgK5%2BP42hAmM5edvGJY43LoViN%2FTiXQpAzMQhsRi%2BhUJTazccjG2E0%2BwO6oL%2FKHmOI8oPVhrQ2H7kCL%2BApW3ECdqRxt4VRvFfD8vfGQW2b1ekZWsF3qtji%2FLitLO2aIbRQpFhpdWifOordFMya0mhsfs92q5%2BNKaHROo5sVJy0%2B3aD%2FQZV6HFu9afSjkatuEZW2LUeU%2F5JMYR5XYiqydRy8nXw1h1CRVjpJT4%2BXpcVSnPs5p0HdvhMvo4FIqGcl5Op%2FIsA3%2BXXnuVzWRVt77J%2F7BwGRjD1R%2BapFSvVs%2F4kkdT1hBx2tW0otCbJziNlaCoYacEHJnVYiJqUDGJBiIAAaKZcJCExs6KXg9h2UOF82agfcZanAj6LOKR3U%2BGqaNJaVX9SC27TXUKe7bNOWaPcBgxbO0MRCuwNBp6aMRQrOaYLQRdcI0kN6dMuf588e3yOV369nEGa1scQyWYPTWf0tmNcFq3o1PVBAxywf55uJ2tI7GWdsYUjwUAbu7Sir4eyfvGroh6FXcAHNrmfHtpwCV%2BvS8REJkPqY%2B5Rh9kfSbipnC%2BnucgCyJ3%2BR4pSldGUYjFaddQ10sA3YWAIUGVdutcqqny2aQjHf9IuQoz1tixw6n2h5roHv%2FgwdcBGVDUxfFWFU0BiWan6qyuF6B%2F%2BkMXQD62qbwKJQVh6A%2F9NXMFm2PDGGbImFtIuK3RDiJ1Gr5Gsqa5Hvk91WBnxLx80mW4b2bjNcPMXBvblICI7cPwdHXCTN5BhbpKicb2H8UFWEuTFVxnfIbztJGom%2BqoBOWP5Ce3Ngdgm3NcIugSOj0BcUWDfWmbr0wnpDo0AY6sAGoUz32NOMTNNqkxx%2FfYjS6BA7sxfQEXt%2Ff%2FUZbuYISquKqnsy4oWoCxIr9Erqrwz1xkS8FmpcsXGNALGP634VFIDWID2QzSeMlQTlh9NY7e4qg1kOFUDpoJvAqvO1EAqnugcVcKodSArvAgsR%2Fr%2FszfW8354IuohX4hFsVophZ2VhmMwTO6PJyg6dmlJCMGJdw8q735HZQIKTxYYZ6DOeGpz%2B%2FKvuqw0ZE6iGYAYS88A%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260529T223311Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUPUUPRWEVRHDKJ5D%2F20260529%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=86df00fb7878341096269cc2d70b78a71c90464fe8cd691ba458f90f2c1d27be&abstractId=5805655",
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
      { label: "Imprint", href: "#" },
      { label: "Privacy", href: "#" },
    ],
    meta: {
      copyright: "© 2026 DR. ANNA-LENA WITTICH.",
      rightLabel: "DESIGNED FOR PRECISION - by Porthos Studio",
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
      },
      {
        number: "02",
        text: "Ist Ihr Job durch Automatisierung gefährdet? Über Weiterbildung und Anpassungsfähigkeit.",
      },
      {
        number: "03",
        text: "Verbessert oder belastet KI unsere Arbeit – und welche Folgen hat das für Jobchancen, Einstellungen und Entlassungen?",
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
      { label: "Impressum", href: en.footer.links[1].href },
      { label: "Datenschutz", href: en.footer.links[2].href },
    ],
    meta: {
      copyright: "© 2026 DR. ANNA-LENA WITTICH.",
      rightLabel: "DESIGNED FOR PRECISION – by Porthos Studio",
    },
  },
};

export const site: Record<Locale, SiteContent> = { en, de };

export const defaultLocale: Locale = "en";
