"use client";

import { useReveal } from "@/lib/motion";

type Props = { className?: string };

export function HairlineGrow({ className = "" }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      aria-hidden
      className={`hairline-grow ${visible ? "is-visible" : ""} ${className}`}
    />
  );
}
