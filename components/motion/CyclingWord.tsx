"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/motion";

type Props = {
  words: string[];
  /** Time each word stays before swapping, in ms. */
  intervalMs?: number;
  /** Stop cycling on the last word instead of looping. */
  stopOnLast?: boolean;
  /** Only begin cycling once the element is in the viewport. */
  startOnVisible?: boolean;
  /** Per-word class overrides. Falls back to className for any index not provided. */
  wordClassNames?: string[];
  className?: string;
};

export function CyclingWord({
  words,
  intervalMs = 3200,
  stopOnLast = false,
  startOnVisible = false,
  wordClassNames,
  className = "",
}: Props) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [started, setStarted] = useState(!startOnVisible);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  // Intersection observer — fires once when element enters viewport.
  useEffect(() => {
    if (!startOnVisible || started) return;
    const el = spanRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [startOnVisible, started]);

  // Cycling effect — only runs once `started` is true.
  useEffect(() => {
    if (!started || reduced || words.length <= 1) return;
    let counter = 0;
    const id = window.setInterval(() => {
      counter++;
      const next = counter % words.length;
      setActive(next);
      if (stopOnLast && next === words.length - 1) {
        window.clearInterval(id);
      }
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [started, words.length, intervalMs, reduced, stopOnLast]);

  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span ref={spanRef} className="cycling-word" aria-live="polite">
      <span aria-hidden className="invisible whitespace-nowrap">
        {longest}
      </span>
      {words.map((w, i) => {
        const wordClass = wordClassNames?.[i] ?? className;
        return (
          <span
            key={w}
            className={`cycling-word__slot whitespace-nowrap ${wordClass} ${
              i === active ? "cycling-word__slot--active" : ""
            }`}
          >
            {w}
          </span>
        );
      })}
    </span>
  );
}
