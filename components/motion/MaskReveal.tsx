"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/lib/motion";

type Props = { children: ReactNode; className?: string };

export function MaskReveal({ children, className = "" }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.05 });
  return (
    <div ref={ref} className={`mask-image ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
