"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/lib/motion";

type Props = {
  children: ReactNode;
  delay?: 0 | 150 | 300 | 450;
  className?: string;
};

export function RevealUp({ children, delay = 0, className = "" }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const delayClass = delay ? `delay-${delay}` : "";
  return (
    <div
      ref={ref}
      className={`reveal-up ${delayClass} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
