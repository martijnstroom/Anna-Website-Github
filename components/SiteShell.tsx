import { TopNavBar } from "@/components/layout/TopNavBar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { PressSection } from "@/components/sections/PressSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LocaleProvider } from "@/lib/locale";
import { site, siteUrl, type Locale } from "@/content/site";

function PublicationsJsonLd({ locale }: { locale: Locale }) {
  const content = site[locale];
  const author = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: content.seo.person.name,
  };
  const json = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/${locale === "de" ? "de/" : ""}#publications`,
    name: content.publications.eyebrow,
    inLanguage: locale === "de" ? "de-DE" : "en-US",
    itemListElement: content.publications.items.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "ScholarlyArticle",
        headline: p.title,
        name: p.title,
        url: p.href,
        inLanguage: "en",
        author,
        publisher: {
          "@type": "Organization",
          name: "Maastricht University / The Stepstone Group",
        },
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function FaqJsonLd({ locale }: { locale: Locale }) {
  const content = site[locale];
  const qa = content.expertise.questions.filter((q) => q.answer && q.answer.trim().length > 0);
  if (qa.length === 0) return null;
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/${locale === "de" ? "de/" : ""}#faq`,
    inLanguage: locale === "de" ? "de-DE" : "en-US",
    mainEntity: qa.map((q) => ({
      "@type": "Question",
      name: q.text,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function PressJsonLd({ locale }: { locale: Locale }) {
  const content = site[locale];
  const json = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/${locale === "de" ? "de/" : ""}#press`,
    name: "Press coverage of Dr. Anna Wittich",
    inLanguage: locale === "de" ? "de-DE" : "en-US",
    itemListElement: content.press.quotes.map((q, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "NewsArticle",
        headline: q.quote,
        url: q.href,
        publisher: { "@type": "Organization", name: q.source },
        mentions: { "@id": `${siteUrl}/#person` },
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function SiteShell({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider initialLocale={locale}>
      <PublicationsJsonLd locale={locale} />
      <PressJsonLd locale={locale} />
      <FaqJsonLd locale={locale} />
      <TopNavBar />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <PressSection />
        <AboutSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
