import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { site, siteUrl } from "@/content/site";

const en = site.en;

export const metadata: Metadata = {
  title: { absolute: en.seo.title },
  description: en.seo.description,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": `${siteUrl}/`,
      "de-DE": `${siteUrl}/de`,
      "x-default": `${siteUrl}/`,
    },
  },
  openGraph: {
    title: en.seo.title,
    description: en.seo.description,
    url: `${siteUrl}/`,
    locale: "en_US",
    alternateLocale: ["de_DE"],
  },
  twitter: {
    title: en.seo.title,
    description: en.seo.description,
  },
};

export default function Page() {
  return <SiteShell locale="en" />;
}
