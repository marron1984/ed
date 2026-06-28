import { clsx } from "@/lib/clsx";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-bold tracking-wider text-teal">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-black leading-snug text-navy sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-navy/70 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
