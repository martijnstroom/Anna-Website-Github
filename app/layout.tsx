import type { Metadata } from "next";
import { Bebas_Neue, Hanken_Grotesk } from "next/font/google";
import { LocaleProvider } from "@/lib/locale";
import { site, defaultLocale } from "@/content/site";
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

export const metadata: Metadata = {
  title: site[defaultLocale].meta.title,
  description: site[defaultLocale].meta.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={defaultLocale} className={`${bebas.variable} ${hanken.variable}`}>
      <body className="bg-surface text-primary font-body overflow-x-hidden">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
