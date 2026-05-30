import type { ContactField } from "@/content/site";

type Props = { field: ContactField; dark?: boolean };

export function FormField({ field, dark = false }: Props) {
  const id = `field-${field.name}`;

  const labelClass = [
    "font-label text-[12px] leading-4 font-bold uppercase tracking-widest block mb-4 opacity-60",
    "group-focus-within:opacity-100 group-focus-within:text-bronze-accent transition-all",
  ].join(" ");

  const inputBase =
    "w-full bg-transparent border-t-0 border-x-0 border-b-2 px-0 py-4 focus:ring-0 focus:border-bronze-accent transition-colors text-[20px] leading-8 font-body";

  const inputClass = dark
    ? `${inputBase} border-paper-white/20 text-paper-white placeholder-paper-white/40`
    : `${inputBase} border-primary/20 text-primary placeholder-primary/40`;

  return (
    <div className="group">
      <label htmlFor={id} className={labelClass}>
        {field.label}
      </label>
      {field.type === "textarea" ? (
        <textarea
          id={id}
          name={field.name}
          required={field.required}
          rows={4}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type}
          required={field.required}
          className={inputClass}
        />
      )}
    </div>
  );
}
