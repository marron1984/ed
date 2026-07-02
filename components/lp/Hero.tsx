import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
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
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 animate-float rounded-full bg-teal/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 animate-float-slow rounded-full bg-navy/5 blur-3xl"
      />
      <h1 className="sr-only">
        誰にも知られず、最短で、自信を取り戻す。スマホで完結するメンズヘルスのオンライン診療。
      </h1>
      <div className="container-page relative grid gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <p className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-teal shadow-card">
            DHP CARE for MEN&apos;S HEALTH
          </p>
          <p className="text-2xl font-black leading-snug text-navy sm:text-3xl">
            通院せず、スマホひとつで。
            <br className="hidden sm:block" />
            医師に相談できるオンライン診療。
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-navy/70 sm:text-base">
            人目や通院の手間を気にすることなく、医師に相談するための最初の一歩を、
            落ち着いた環境で踏み出せます。医師があなたに合った内容をご提案します。
          </p>
          <p className="mt-5 inline-flex items-baseline gap-2 rounded-xl bg-white px-4 py-2.5 shadow-card">
            <span className="text-xs font-bold text-navy/60">初回</span>
            <span className="text-2xl font-black text-navy">9,000</span>
            <span className="text-sm font-bold text-navy">円（税込）</span>
            <span className="text-[11px] text-navy/50">※デモ価格・問診は無料</span>
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <ButtonLink href="/consultation" size="lg" className="sm:self-start">
              無料で問診を始める（約3分）
            </ButtonLink>
            <p className="text-xs text-navy/50">
              匿名OK・途中でやめてもOK・入力内容で料金は発生しません（デモ）
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
        </Reveal>

        <Reveal variant="zoom" delay={120} className="order-1 w-full lg:order-2">
          <div className="overflow-hidden rounded-2xl bg-navy shadow-soft ring-1 ring-navy/5">
            <video
              className="aspect-video h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/hero.png"
              aria-label="DHP CARE for MEN'S HEALTH の紹介動画"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
              お使いのブラウザは動画の再生に対応していません。
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
