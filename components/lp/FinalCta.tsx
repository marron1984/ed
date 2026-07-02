import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page">
        <Reveal variant="zoom">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal to-navy px-6 py-14 text-center text-white shadow-soft sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
            <div className="relative">
              <h2 className="text-2xl font-black leading-snug sm:text-3xl">
                まずは、約3分の問診から。
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                気になることがあれば、無理のない範囲で相談の一歩を。
                入力内容で料金は発生しません（デモ）。
              </p>
              <div className="mt-8 flex justify-center">
                <ButtonLink href="/consultation" size="lg">
                  無料で問診を始める（約3分）
                </ButtonLink>
              </div>
              <p className="mt-4 text-xs text-white/60">
                匿名OK・途中でやめてもOK・定期プランはいつでも解約できます
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
