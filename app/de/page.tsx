import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { site, siteUrl } from "@/content/site";

const de = site.de;

export const metadata: Metadata = {
  title: { absolute: de.seo.title },
  description: de.seo.description,
  keywords: [
    ...de.seo.keywords,
    "Arbeitsmarkt Expertin",
    "Zukunft der Arbeit Deutschland",
    "Arbeitsmarktforscherin",
    "Automatisierung Arbeitsplätze",
    "KI und Arbeitsmarkt",
    "Recruiting Forschung",
    "Stepstone Arbeitsmarkt",
  ],
  alternates: {
    canonical: "/de",
    languages: {
      "en-US": `${siteUrl}/`,
      "de-DE": `${siteUrl}/de`,
      "x-default": `${siteUrl}/`,
    },
  },
  openGraph: {
    title: de.seo.title,
    description: de.seo.description,
    url: `${siteUrl}/de`,
    locale: "de_DE",
    alternateLocale: ["en_US"],
  },
  twitter: {
    title: de.seo.title,
    description: de.seo.description,
  },
};

export default function PageDe() {
  return <SiteShell locale="de" />;
}
