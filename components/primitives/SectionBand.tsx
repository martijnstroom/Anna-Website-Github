import type { ReactNode } from "react";

type Tone = "surface" | "stone" | "secondary" | "obsidian" | "primary";

const toneClasses: Record<Tone, string> = {
  surface: "bg-surface text-primary",
  stone: "bg-stone-grey text-primary",
  secondary: "bg-secondary text-paper-white",
  obsidian: "bg-deep-obsidian text-paper-white",
  primary: "bg-primary text-paper-white",
};

type Props = {
  tone: Tone;
  id?: string;
  className?: string;
  padTop?: boolean;
  padBottom?: boolean;
  children: ReactNode;
};

export function SectionBand({
  tone,
  id,
  className = "",
  padTop = true,
  padBottom = true,
  children,
}: Props) {
  const pad = `${padTop ? "pt-section-gap" : ""} ${padBottom ? "pb-section-gap" : ""}`.trim();
  return (
    <section
      id={id}
      className={`relative px-margin-edge ${pad} ${toneClasses[tone]} ${className}`}
    >
      {children}
    </section>
  );
}
