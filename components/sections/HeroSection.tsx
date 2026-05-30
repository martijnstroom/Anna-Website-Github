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
      className="relative min-h-screen md:min-h-[700px] flex items-center pt-24 pb-24 overflow-hidden"
    >
      {/* Portrait — landscape image on the LEFT, text on the right */}
      <div className="absolute left-0 top-20 bottom-0 w-full md:w-3/5 z-0">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src={h.portrait.src}
              alt={h.portrait.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-[50%_25%] hero-portrait"
            />
          </div>
        </div>
        {/* Mobile: covers left (text overlay). Desktop: only right edge fades — mirrors the original md:via-transparent trick. */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent md:bg-gradient-to-l md:via-surface/25" />
      </div>

      <div className="relative z-10 w-full px-margin-edge md:pl-[55%] md:pr-[4vw]">
        <h1 className="font-display text-display-lg leading-[0.833] uppercase text-primary mix-blend-multiply md:mix-blend-normal">
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
