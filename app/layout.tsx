import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Hanken_Grotesk } from "next/font/google";
import { headers } from "next/headers";
import { site, defaultLocale, siteUrl, type Locale } from "@/content/site";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const seo = site[defaultLocale].seo;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: "%s — Dr. Anna Wittich",
  },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: "Dr. Anna Wittich",
  authors: [{ name: seo.person.name, url: siteUrl }],
  creator: seo.person.name,
  publisher: seo.person.name,
  category: "Research",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": `${siteUrl}/`,
      "de-DE": `${siteUrl}/de`,
      "x-default": `${siteUrl}/`,
    },
  },
  openGraph: {
    type: "profile",
    siteName: "Dr. Anna Wittich",
    title: seo.title,
    description: seo.description,
    url: siteUrl,
    locale: "en_US",
    firstName: seo.person.givenName,
    lastName: seo.person.familyName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3ece1",
  width: "device-width",
  initialScale: 1,
};

function PersonJsonLd() {
  const p = seo.person;
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: p.name,
    givenName: p.givenName,
    familyName: p.familyName,
    honorificPrefix: p.honorificPrefix,
    jobTitle: p.jobTitle,
    description: p.description,
    url: siteUrl,
    image: `${siteUrl}/images/anna-portrait2.jpg`,
    sameAs: p.sameAs,
    knowsAbout: p.knowsAbout,
    worksFor: { "@type": "Organization", name: p.affiliation },
    alumniOf: p.alumniOf.map((name) => ({
      "@type": "CollegeOrUniversity",
      name,
    })),
  };
  return (
    <script
      type="application/ld+json"
      // JSON-LD payload, not user input — escape stringify is safe here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

function WebsiteJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Dr. Anna Wittich",
    description: seo.description,
    inLanguage: "en-US",
    publisher: { "@id": `${siteUrl}/#person` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  // x-pathname is set by middleware; fall back gracefully.
  const pathname = h.get("x-pathname") || "";
  const lang: Locale = pathname.startsWith("/de") ? "de" : defaultLocale;
  return (
    <html lang={lang} className={`${bebas.variable} ${hanken.variable}`}>
      <body className="bg-surface text-primary font-body overflow-x-hidden">
        <PersonJsonLd />
        <WebsiteJsonLd />
        {children}
      </body>
    </html>
  );
}
