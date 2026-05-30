type Props = { value: string };

export function MarginCounter({ value }: Props) {
  return (
    <span
      aria-hidden
      className="hidden md:block absolute -left-16 lg:-left-32 top-2 font-label text-[12px] tracking-[0.2em] uppercase font-bold text-bronze-accent/50"
    >
      {value}
    </span>
  );
}
