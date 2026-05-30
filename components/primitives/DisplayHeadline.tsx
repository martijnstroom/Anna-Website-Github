import type { ReactNode } from "react";

type Props = {
  lines: string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** Inline content appended after the last line (e.g. the cycling word). */
  trailing?: ReactNode;
};

export function DisplayHeadline({ lines, as: Tag = "h2", className = "", trailing }: Props) {
  return (
    <Tag
      className={`font-display text-display-lg leading-[0.86] uppercase break-words ${className}`}
    >
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line}
          {i === lines.length - 1 && trailing ? <> {trailing}</> : null}
        </span>
      ))}
    </Tag>
  );
}
