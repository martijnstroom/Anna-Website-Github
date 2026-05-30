import type { ReactNode } from "react";

type Tone = "bronze" | "paperWhite" | "primary";

const toneClasses: Record<Tone, string> = {
  bronze: "text-bronze-accent",
  paperWhite: "text-paper-white/70",
  primary: "text-primary",
};

type Tracking = "wide" | "wider" | "widest";

const trackingClasses: Record<Tracking, string> = {
  wide: "tracking-widest", // 0.1em
  wider: "tracking-[0.3em]",
  widest: "tracking-[0.4em]",
};

type Props = {
  tone?: Tone;
  tracking?: Tracking;
  as?: "span" | "div" | "p";
  className?: string;
  children: ReactNode;
};

export function CapsEyebrow({
  tone = "bronze",
  tracking = "wider",
  as: Tag = "div",
  className = "",
  children,
}: Props) {
  return (
    <Tag
      className={`font-label text-[12px] leading-4 font-bold uppercase ${toneClasses[tone]} ${trackingClasses[tracking]} ${className}`}
    >
      {children}
    </Tag>
  );
}
