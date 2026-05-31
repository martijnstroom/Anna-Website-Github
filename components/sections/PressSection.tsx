"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale";
import { SectionBand } from "@/components/primitives/SectionBand";
import { RevealUp } from "@/components/motion/RevealUp";

export function PressSection() {
  const { content } = useLocale();
  const { quotes } = content.press;

  return (
    <SectionBand tone="primary" id="press" padTop={false} padBottom={false} className="py-10 md:py-14">
      <div className="grid grid-cols-12 gap-gutter max-w-screen-2xl mx-auto">
        {/* Left: portrait — stretches to match quotes column height */}
        <div className="col-span-12 md:col-span-5 relative h-80 md:h-auto md:self-stretch overflow-hidden">
          <Image
            src="/images/anna-aboutme.jpg"
            alt="Dr. Anna Wittich in conversation"
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover object-[65%_60%]"
          />
        </div>

        {/* Right: press quotes */}
        <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col justify-center gap-16 pt-8 md:pt-0">
          <div className="border-l border-paper-white/20 pl-12 space-y-16 md:space-y-20">
            {quotes.map((q, i) => {
              const inner = (
                <>
                  <div className="font-label text-[11px] leading-4 font-bold uppercase tracking-[0.4em] opacity-60 mb-4 text-paper-white group-hover:opacity-100 transition-opacity">
                    {q.source}
                  </div>
                  <blockquote className="font-headline text-headline-md leading-tight">
                    &ldquo;{q.quote}&rdquo;
                  </blockquote>
                  {q.href && q.href !== "#" && (
                    <span className="inline-block mt-4 font-label text-[11px] uppercase tracking-[0.2em] text-bronze-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Read →
                    </span>
                  )}
                </>
              );
              return (
                <RevealUp key={`${q.source}-${i}`} delay={(i * 150) as 0 | 150 | 300}>
                  {q.href ? (
                    <a
                      href={q.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block cursor-pointer"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div>{inner}</div>
                  )}
                </RevealUp>
              );
            })}
          </div>
        </div>
      </div>

      {/*
        ARCHIVED — data-driven stat (restore by replacing the portrait block above):

        import { CapsEyebrow } from "@/components/primitives/CapsEyebrow";
        import { ShimmerNumber } from "@/components/motion/ShimmerNumber";
        const { stat, quotes } = content.press;

        <div className="col-span-12 md:col-span-5 md:pr-16">
          <CapsEyebrow tone="paperWhite" tracking="wider" className="mb-16">
            {stat.eyebrow}
          </CapsEyebrow>
          <div className="flex items-start gap-4 mb-12 font-display leading-[0.8]">
            <ShimmerNumber target={stat.number} className="text-stat-lg" />
            <span className="text-stat-unit text-paper-white/80">{stat.unit}</span>
          </div>
          <p className="font-body text-body-lg opacity-90 leading-relaxed border-t border-paper-white/20 pt-8 mt-8">
            {stat.caption}
          </p>
        </div>
      */}
    </SectionBand>
  );
}
