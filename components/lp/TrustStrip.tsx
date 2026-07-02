import { BadgeCheck, PackageCheck, CalendarX, Stethoscope } from "lucide-react";

const items = [
  { icon: Stethoscope, label: "医師が内容を確認" },
  { icon: BadgeCheck, label: "国内正規品" },
  { icon: PackageCheck, label: "匿名配送に配慮" },
  { icon: CalendarX, label: "定期はいつでも解約可" },
];

/** ヒーロー直下の信頼バー。ファーストビュー直後に不安要素を先回りで解消する */
export function TrustStrip() {
  return (
    <div className="border-y border-navy/10 bg-white">
      <div className="container-page grid grid-cols-2 gap-x-4 gap-y-3 py-4 sm:flex sm:items-center sm:justify-between">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 text-xs font-bold text-navy/70 sm:text-sm"
          >
            <Icon className="h-4 w-4 flex-shrink-0 text-teal" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
