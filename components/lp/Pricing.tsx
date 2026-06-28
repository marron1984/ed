import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { pricingPlans } from "@/data/pricing";
import { Check } from "lucide-react";
import { clsx } from "@/lib/clsx";

export function Pricing() {
  return (
    <section className="bg-mist py-16 sm:py-24" id="pricing">
      <div className="container-page">
        <SectionHeading
          eyebrow="PRICING"
          title="料金プラン"
          description="価格は明朗に表示しています。定期プランはいつでも休止・解約が可能です。"
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={clsx(
                "relative flex flex-col rounded-2xl bg-white p-8 shadow-card",
                plan.highlighted && "ring-2 ring-teal"
              )}
            >
              {plan.badge && (
                <span
                  className={clsx(
                    "absolute -top-3 left-8 rounded-full px-3 py-1 text-xs font-bold",
                    plan.highlighted
                      ? "bg-teal text-white"
                      : "bg-navy/10 text-navy"
                  )}
                >
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-bold text-navy">{plan.name}</h3>
              <p className="mt-2 text-sm text-navy/70">{plan.description}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-3xl font-black text-navy">
                  {plan.price.toLocaleString()}
                </span>
                <span className="text-sm font-bold text-navy">円</span>
                <span className="ml-1 text-xs text-navy/60">{plan.unit}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-navy/80">
                    <Check className="h-4 w-4 flex-shrink-0 text-teal" />
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.note && (
                <p className="mt-5 text-xs leading-relaxed text-navy/50">
                  {plan.note}
                </p>
              )}
              <ButtonLink
                href="/consultation"
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-6"
              >
                このプランで問診を始める
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
