"use client";

import { useLocale } from "@/lib/locale";
import { SectionBand } from "@/components/primitives/SectionBand";
import { CapsEyebrow } from "@/components/primitives/CapsEyebrow";
import { MarginCounter } from "@/components/primitives/MarginCounter";
import { RevealUp } from "@/components/motion/RevealUp";

export function ExpertiseSection() {
  const { content } = useLocale();
  const e = content.expertise;

  return (
    <SectionBand tone="surface" id="expertise" padTop={false} padBottom={false} className="pt-14 md:pt-20 pb-20 md:pb-28 !px-4 md:!px-10 lg:!px-16">
      <div
        aria-hidden
        className="absolute top-0 left-margin-edge right-margin-edge h-px bg-primary/10"
      />

      <div className="max-w-screen-xl mx-auto relative z-10">
        <CapsEyebrow tone="bronze" tracking="wider" className="block mb-10">
          {e.eyebrow}
        </CapsEyebrow>

        <div className="space-y-14 md:space-y-24 pl-6 md:pl-24 border-l border-primary/20">
          {e.questions.map((q, i) => (
            <RevealUp key={q.number} delay={(i * 150) as 0 | 150 | 300}>
              <div className="relative">
                <MarginCounter value={q.number} />
                <h2 className="font-headline text-headline-lg uppercase">{q.text}</h2>
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </SectionBand>
  );
}
