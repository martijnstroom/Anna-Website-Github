type Props = {
  tone?: "primary" | "paperWhite";
  className?: string;
};

const toneClasses = {
  primary: "bg-primary/20",
  paperWhite: "bg-paper-white/20",
} as const;

export function Hairline({ tone = "primary", className = "" }: Props) {
  return <div className={`h-px w-full ${toneClasses[tone]} ${className}`} aria-hidden />;
}
