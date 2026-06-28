import { Check } from "lucide-react";
import { clsx } from "@/lib/clsx";
import type { Option } from "@/data/questions";

export function FieldLabel({
  children,
  optional,
}: {
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <p className="mb-3 font-bold text-navy">
      {children}
      {optional && (
        <span className="ml-2 text-xs font-normal text-navy/50">（任意）</span>
      )}
    </p>
  );
}

/** 単一選択 */
export function ChoiceGroup({
  options,
  value,
  onSelect,
}: {
  options: Option[];
  value: string | null;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => {
        const selected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onSelect(option.value)}
            aria-pressed={selected}
            className={clsx(
              "flex items-center justify-between rounded-xl border px-5 py-4 text-left text-sm font-medium transition-colors",
              selected
                ? "border-teal bg-teal/5 text-navy"
                : "border-navy/15 bg-white text-navy/80 hover:border-teal/50"
            )}
          >
            <span>{option.label}</span>
            <span
              className={clsx(
                "flex h-5 w-5 items-center justify-center rounded-full border",
                selected ? "border-teal bg-teal text-white" : "border-navy/25"
              )}
            >
              {selected && <Check className="h-3 w-3" />}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/** 複数選択 */
export function CheckGroup({
  options,
  values,
  onToggle,
}: {
  options: Option[];
  values: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => {
        const selected = values.includes(option.value);
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onToggle(option.value)}
            aria-pressed={selected}
            className={clsx(
              "flex items-center justify-between rounded-xl border px-5 py-4 text-left text-sm font-medium transition-colors",
              selected
                ? "border-teal bg-teal/5 text-navy"
                : "border-navy/15 bg-white text-navy/80 hover:border-teal/50"
            )}
          >
            <span>{option.label}</span>
            <span
              className={clsx(
                "flex h-5 w-5 items-center justify-center rounded-md border",
                selected ? "border-teal bg-teal text-white" : "border-navy/25"
              )}
            >
              {selected && <Check className="h-3 w-3" />}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function TextField({
  value,
  onChange,
  placeholder,
  suffix,
  type = "text",
  multiline,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  suffix?: string;
  type?: string;
  multiline?: boolean;
}) {
  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-teal"
      />
    );
  }
  return (
    <div className="flex items-center gap-2">
      <input
        type={type}
        inputMode={type === "number" ? "numeric" : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-teal"
      />
      {suffix && <span className="text-sm text-navy/60">{suffix}</span>}
    </div>
  );
}
