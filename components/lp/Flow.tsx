import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShowcaseImage } from "@/components/ui/ShowcaseImage";
import { flowSteps } from "@/data/lp";

export function Flow() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="サービスの流れ"
          description="お申し込みからお届け、継続フォローまで。スマホひとつで進められます。"
        />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <ShowcaseImage
            src="/images/flow-smartphone.png"
            alt="スマホひとつで、すべて完結。オンライン問診 約3分、医師による診察、お薬を自宅へ。"
            width={1122}
            height={1402}
            className="mx-auto w-full max-w-md lg:max-w-none"
          />
          <ol className="space-y-4">
            {flowSteps.map((step) => (
              <li
                key={step.step}
                className="flex gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-card"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy text-sm font-black text-gold-light">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy/70">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
