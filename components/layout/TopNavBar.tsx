"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/locale";

export function TopNavBar() {
  const { locale, content } = useLocale();
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const onDe = pathname.startsWith("/de");
  const toggleHref = onDe ? "/" : "/de";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-surface/70 glass-nav h-24 border-b border-primary/5"
      aria-label="Primary"
    >
      <div className="h-full flex justify-between items-center px-margin-edge">
        <a
          href="#top"
          className="font-headline text-headline-md leading-9 tracking-[-0.05em] uppercase text-primary"
        >
          {content.brand.wordmark}
        </a>

        <div className="hidden md:flex gap-12 items-center">
          {content.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-label text-[12px] leading-4 font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:text-bronze-accent transition-colors duration-500 py-2"
            >
              {n.label}
            </a>
          ))}
          <a
            href={toggleHref}
            hrefLang={onDe ? "en" : "de"}
            aria-label={content.brand.languageToggleLabel}
            className="font-label text-[12px] leading-4 font-bold uppercase tracking-[0.2em] text-bronze-accent ml-8 border-b border-bronze-accent pb-1"
          >
            {locale === "en" ? (
              <>
                DE/<span className="underline underline-offset-4">EN</span>
              </>
            ) : (
              <>
                <span className="underline underline-offset-4">DE</span>/EN
              </>
            )}
          </a>
        </div>

        <button
          type="button"
          className="md:hidden font-label text-[12px] font-bold uppercase tracking-[0.2em] text-primary"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav-panel"
          className="md:hidden bg-surface/95 glass-nav border-t border-primary/10 px-margin-edge py-8 flex flex-col gap-6"
        >
          {content.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="font-label text-[12px] leading-4 font-bold uppercase tracking-[0.2em] text-primary"
            >
              {n.label}
            </a>
          ))}
          <a
            href={toggleHref}
            hrefLang={onDe ? "en" : "de"}
            onClick={() => setOpen(false)}
            className="font-label text-[12px] leading-4 font-bold uppercase tracking-[0.2em] text-bronze-accent self-start"
          >
            {locale === "en" ? (
                <>
                  DE/<span className="underline underline-offset-4">EN</span>
                </>
              ) : (
                <>
                  <span className="underline underline-offset-4">DE</span>/EN
                </>
              )}
          </a>
        </div>
      )}
    </nav>
  );
}
