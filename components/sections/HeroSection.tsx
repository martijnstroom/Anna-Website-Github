"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale";
import { CyclingWord } from "@/components/motion/CyclingWord";

export function HeroSection() {
  const { content } = useLocale();
  const h = content.hero;

  return (
    <header
      id="top"
      className="relative overflow-hidden md:min-h-[700px] md:flex md:items-center md:pt-24 md:pb-24"
    >
      {/* Portrait — in-flow on mobile (full-bleed), absolutely positioned on desktop */}
      <div className="relative h-[56vh] min-h-[300px] w-full md:absolute md:left-0 md:top-20 md:bottom-0 md:h-auto md:w-3/5 md:z-0">
        <Image
          src={h.portrait.src}
          alt={h.portrait.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover object-[50%_25%] hero-portrait"
        />
        {/* Mobile: gentle fade at the bottom so portrait blends into text section */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface to-transparent md:hidden" />
        {/* Desktop: right-edge fade so overlapping text stays readable */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-surface via-surface/25 to-transparent" />
      </div>

      {/* Text — below image on mobile, floated right on desktop */}
      <div className="relative z-10 w-full px-margin-edge pt-4 pb-16 md:pt-0 md:pb-0 md:pl-[55%] md:pr-[4vw]">
        <h1 className="font-display text-display-lg leading-[0.833] uppercase text-primary">
          {h.prefixLines.slice(0, -1).map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
          <span className="block">
            {h.prefixLines[h.prefixLines.length - 1]}
            <br className="md:hidden" />{" "}
            <CyclingWord words={h.cyclingWords} className="text-bronze-accent" />
          </span>
        </h1>

        {h.subtext && (
          <p className="font-body text-body-md md:text-body-lg text-primary/70 mt-10 max-w-lg leading-relaxed">
            {h.subtext}
          </p>
        )}
      </div>
    </header>
  );
}
