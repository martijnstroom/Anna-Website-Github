"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/motion";

type Props = {
  target: number;
  /** ms between increments */
  stepMs?: number;
  className?: string;
};

/**
 * Counter that increments from 0 to `target` on first intersect,
 * with the shimmer-text gradient fill applied.
 */
export function ShimmerNumber({ target, stepMs = 180, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setValue(target);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let started = false;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            let count = 0;
            const id = window.setInterval(() => {
              count += 1;
              setValue(count);
              if (count >= target) window.clearInterval(id);
            }, stepMs);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, stepMs, reduced]);

  return (
    <span ref={ref} className={`shimmer-text inline-block ${className}`}>
      {value}
    </span>
  );
}
