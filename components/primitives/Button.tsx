import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  widenSpacingOnHover?: boolean;
  fullWidthOnMobile?: boolean;
};

export function Button({
  children,
  className = "",
  widenSpacingOnHover = false,
  fullWidthOnMobile = false,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={[
        "group inline-block bg-primary text-paper-white",
        "px-14 py-7 font-label text-[12px] leading-4 font-bold uppercase tracking-widest",
        "hover:bg-bronze-accent transition-colors duration-500",
        widenSpacingOnHover ? "hover:tracking-[0.3em] transition-all" : "",
        fullWidthOnMobile ? "w-full md:w-auto" : "",
        className,
      ].join(" ")}
    >
      <span className="inline-block transform group-hover:-translate-y-0.5 transition-transform duration-300">
        {children}
      </span>
    </button>
  );
}
