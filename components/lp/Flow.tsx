import { SectionHeading } from "@/components/ui/SectionHeading";
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
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {flowSteps.map((step, index) => (
            <li key={step.step} className="relative">
              <div className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-card">
                <span className="text-sm font-black text-gold">{step.step}</span>
                <h3 className="mt-2 font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {step.description}
                </p>
              </div>
              {index < flowSteps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-2 top-1/2 hidden -translate-y-1/2 text-2xl text-teal/40 lg:block"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
