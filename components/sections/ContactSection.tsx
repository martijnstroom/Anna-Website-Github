"use client";

import { type FormEvent, useState } from "react";
import Image from "next/image";
import { useLocale } from "@/lib/locale";
import { SectionBand } from "@/components/primitives/SectionBand";
import { FormField } from "@/components/primitives/FormField";
import { Button } from "@/components/primitives/Button";
import { CyclingWord } from "@/components/motion/CyclingWord";

export function ContactSection() {
  const { content } = useLocale();
  const c = content.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
      });
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <SectionBand
      tone="primary"
      id="contact"
      padTop={false}
      padBottom={false}
      className="!px-0 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-12">

        {/* ── Left panel: full-bleed portrait with text overlay ── */}
        <div className="relative col-span-12 lg:col-span-5 min-h-[420px] lg:min-h-0 overflow-hidden">
          {/* Portrait fills the panel */}
          <Image
            src="/images/anna-portrait.jpg"
            alt="Dr. Anna Wittich"
            fill
            className="object-cover object-top"
          />

          {/* Gradient: transparent at top → solid primary at bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(107,90,90,0.05) 0%, rgba(107,90,90,0.3) 40%, rgba(107,90,90,0.92) 80%, #6b5a5a 100%)",
            }}
          />

          {/* Text floats over the gradient bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-8 md:px-10 lg:px-12 pb-10 lg:pb-12">
            {/* Bronze hairline */}
            <div className="w-10 h-px bg-bronze-accent mb-6" aria-hidden />

            <h2 className="font-display text-display-lg leading-[0.833] uppercase mb-6">
              <span className="block text-paper-white">{c.headline}</span>
              <CyclingWord
                words={c.cyclingWords}
                stopOnLast
                startOnVisible
                intervalMs={2400}
                wordClassNames={[
                  "text-paper-white",
                  "text-paper-white",
                  "text-bronze-accent",
                ]}
              />
            </h2>

            <p className="font-body text-body-md text-paper-white/65 leading-relaxed max-w-xs">
              {c.intro}
            </p>
          </div>
        </div>

        {/* ── Right panel: form ── */}
        <div className="col-span-12 lg:col-span-7 px-margin-edge lg:px-14 py-14 lg:py-16">
          <form onSubmit={onSubmit} className="space-y-14" noValidate>
            {c.fields.map((f) => (
              <FormField key={f.name} field={f} dark />
            ))}

            <div className="flex flex-col gap-4 items-start pt-2">
              <Button type="submit" widenSpacingOnHover fullWidthOnMobile>
                {status === "sending" ? "Sending…" : c.submitLabel}
              </Button>
              {status === "sent" && (
                <p
                  role="status"
                  className="font-label text-[12px] uppercase tracking-[0.2em] text-bronze-accent"
                >
                  Message received.
                </p>
              )}
              {status === "error" && (
                <p
                  role="status"
                  className="font-label text-[12px] uppercase tracking-[0.2em] text-bronze-accent"
                >
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>

      </div>
    </SectionBand>
  );
}
