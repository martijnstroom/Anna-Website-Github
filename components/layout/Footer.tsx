"use client";

import { useLocale } from "@/lib/locale";

export function Footer() {
  const { content } = useLocale();
  const f = content.footer;

  return (
    <footer className="bg-surface text-primary pt-10 md:pt-14 pb-8 w-full border-t border-primary/10">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end px-margin-edge w-full gap-16">
        <div className="flex flex-col gap-6">
          <div className="font-headline text-headline-lg leading-none uppercase tracking-[-0.05em] text-primary hover:text-bronze-accent transition-colors duration-500 cursor-default">
            {f.wordmark}
          </div>
          <p className="font-label text-[12px] leading-4 font-bold uppercase opacity-50 tracking-[0.3em]">
            {f.tagline}
          </p>
        </div>

        <nav className="flex flex-col md:flex-row gap-8 md:gap-12 items-start lg:items-end pb-2" aria-label="Footer">
          {f.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-label text-[12px] leading-4 font-bold uppercase tracking-[0.2em] text-primary/60 hover:text-bronze-accent hover:tracking-[0.3em] transition-all duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-8 px-margin-edge border-t border-primary/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] font-label uppercase font-bold opacity-40 tracking-[0.2em]">
        <span>{f.meta.copyright}</span>
        <span>{f.meta.rightLabel}</span>
      </div>
    </footer>
  );
}
