import { clsx } from "@/lib/clsx";

export function ProgressBar({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  const total = steps.length;
  const percent = Math.round(((current + 1) / total) * 100);

  return (
    <div>
      <div className="flex items-center justify-between text-xs font-bold text-navy/60">
        <span className="text-teal">{steps[current]}</span>
        <span>
          STEP {current + 1} / {total}
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-navy/10">
        <div
          className={clsx("h-full rounded-full bg-teal transition-all duration-500")}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
