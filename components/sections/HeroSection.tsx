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
      {/* === Mobile portrait: in-flow, pushes text down (hidden on desktop) === */}
      <div
        className="md:hidden relative w-full overflow-hidden"
        style={{ height: "58vh", minHeight: "320px" }}
      >
        <Image
          src={h.portrait.src}
          alt={h.portrait.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_20%] hero-portrait"
        />
      </div>

      {/* === Desktop portrait: absolutely positioned left (hidden on mobile) === */}
      <div className="hidden md:block absolute left-0 top-20 bottom-0 w-3/5 z-0">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src={h.portrait.src}
              alt={h.portrait.alt}
              fill
              priority
              sizes="60vw"
              className="object-cover object-[50%_25%] hero-portrait"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-surface via-surface/25 to-transparent" />
      </div>

      {/* Text — sits below mobile portrait in flow; floats right on desktop */}
      <div className="relative z-10 w-full px-margin-edge pt-6 pb-16 md:pt-0 md:pb-0 md:pl-[55%] md:pr-[4vw]">
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
