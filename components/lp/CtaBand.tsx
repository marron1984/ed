import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Clock, Lock, XCircle } from "lucide-react";

const reassurances = [
  { icon: Clock, label: "約3分で完了" },
  { icon: Lock, label: "匿名OK" },
  { icon: XCircle, label: "途中でやめてもOK" },
];

/**
 * セクション間に挟む中間CTA。スクロール途中の離脱前に行動導線を提示する。
 */
export function CtaBand({ title }: { title: string }) {
  return (
    <div className="container-page pb-16 sm:pb-24">
      <Reveal>
        <div className="rounded-2xl border border-teal/20 bg-mist px-6 py-8 text-center">
          <p className="text-lg font-black text-navy sm:text-xl">{title}</p>
          <div className="mt-4 flex justify-center">
            <ButtonLink href="/consultation" size="lg">
              無料で問診を始める
            </ButtonLink>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {reassurances.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-xs font-medium text-navy/60"
              >
                <Icon className="h-3.5 w-3.5 text-teal" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
