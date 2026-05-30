"use client";

import { useLocale } from "@/lib/locale";
import { SectionBand } from "@/components/primitives/SectionBand";
import { CapsEyebrow } from "@/components/primitives/CapsEyebrow";

export function PublicationsSection() {
  const { content } = useLocale();
  const p = content.publications;

  return (
    <SectionBand tone="surface" id="publications" padTop={false}>
      <CapsEyebrow tone="bronze" tracking="wider" className="mb-16">
        {p.eyebrow}
      </CapsEyebrow>

      <div className="flex flex-col border-t border-primary/20">
        {p.items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="group py-12 md:py-16 border-b border-primary/20 hover:bg-stone-grey/50 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-8 -mx-4 md:-mx-8"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16 w-full">
              <span className="font-label text-[11px] leading-4 font-bold uppercase tracking-[0.2em] text-on-surface-variant opacity-60 md:w-24 group-hover:text-bronze-accent transition-colors">
                {item.date}
              </span>
              <h3 className="font-headline text-headline-md uppercase flex-1 group-hover:text-primary transition-colors duration-500">
                {item.title}
              </h3>
            </div>
            <span
              aria-hidden
              className="text-bronze-accent text-[20px] mt-4 md:mt-0 opacity-100 md:opacity-0 md:-translate-x-8 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500"
            >
              →
            </span>
          </a>
        ))}
      </div>
    </SectionBand>
  );
}
