"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { defaultLocale, type Locale, site, type SiteContent } from "@/content/site";

type LocaleCtx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  content: SiteContent;
};

const Ctx = createContext<LocaleCtx | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Reflect locale on <html lang> for assistive tech and CSS hooks.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const toggle = useCallback(
    () => setLocaleState((l) => (l === "en" ? "de" : "en")),
    [],
  );

  const value: LocaleCtx = {
    locale,
    setLocale,
    toggle,
    content: site[locale],
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLocale(): LocaleCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLocale must be used inside <LocaleProvider>");
  return v;
}
