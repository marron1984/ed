import { ButtonLink } from "@/components/ui/Button";
import { ShieldCheck, Clock, Lock } from "lucide-react";

const badges = [
  { icon: Lock, label: "プライバシーに配慮" },
  { icon: Clock, label: "問診は約3分" },
  { icon: ShieldCheck, label: "医師が内容を確認" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-navy/5 blur-3xl"
      />
      <div className="container-page relative grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold text-teal shadow-card">
            メンズヘルス オンライン診療
          </p>
          <h1 className="text-3xl font-black leading-tight text-navy sm:text-4xl lg:text-5xl">
            誰にも知られず、
            <br className="hidden sm:block" />
            最短で、自信を取り戻す。
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-navy/70 sm:text-base">
            スマホで完結するオンライン問診。通院の手間や人目を気にすることなく、
            医師に相談するための最初の一歩を、落ち着いた環境で踏み出せます。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/consultation" size="lg">
              無料で問診を始める
            </ButtonLink>
            <p className="text-xs text-navy/50">
              ※ 入力内容で料金は発生しません（デモ）
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-navy/70">
                <Icon className="h-4 w-4 text-teal" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-navy-light shadow-soft">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center text-white/90">
              <ShieldCheck className="h-14 w-14 text-gold-light" />
              <p className="text-lg font-bold">安心して相談できる場所を</p>
              <p className="max-w-xs text-sm text-white/70">
                （イメージ画像のプレースホルダー）
                <br />
                清潔感のある medical × consumer なトーン
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
