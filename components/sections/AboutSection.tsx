"use client";

import { useLocale } from "@/lib/locale";
import { SectionBand } from "@/components/primitives/SectionBand";
import { DisplayHeadline } from "@/components/primitives/DisplayHeadline";
import { Button } from "@/components/primitives/Button";

export function AboutSection() {
  const { content } = useLocale();
  const a = content.about;

  return (
    <SectionBand tone="surface" id="about">
      <div className="flex flex-col lg:flex-row gap-gutter lg:gap-32 items-start max-w-screen-xl mx-auto">
        <div className="lg:w-5/12 lg:sticky lg:top-32">
          <DisplayHeadline lines={a.headlineLines} as="h2" className="text-primary" />
          <div className="w-24 h-1 bg-bronze-accent mt-12" aria-hidden />
        </div>

        <div className="lg:w-7/12 flex flex-col gap-12 pt-8 lg:pt-0">
          <p className="font-body text-body-lg text-primary leading-relaxed font-light">
            {a.paragraphs[0]}
          </p>
          {a.paragraphs.slice(1).map((p, i) => (
            <p
              key={i}
              className="font-body text-body-md text-on-surface-variant leading-loose opacity-80"
            >
              {p}
            </p>
          ))}
          <div className="pt-12">
            <Button
              type="button"
              onClick={() => {
                const target = a.cta.href.startsWith("#")
                  ? document.querySelector(a.cta.href)
                  : null;
                if (target) target.scrollIntoView({ behavior: "smooth" });
                else if (a.cta.href) window.location.href = a.cta.href;
              }}
            >
              {a.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </SectionBand>
  );
}
