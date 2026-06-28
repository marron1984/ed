import { SectionHeading } from "@/components/ui/SectionHeading";
import { assurancePoints } from "@/data/lp";

export function Privacy() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page">
        <div className="rounded-2xl bg-navy px-6 py-12 text-white shadow-soft sm:px-12">
          <SectionHeading
            eyebrow="PRIVACY & SAFETY"
            title="安心・プライバシーへの配慮"
            description="安心してご相談いただくための設計を大切にしています。"
            className="[&_h2]:text-white [&_p]:text-white/80"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {assurancePoints.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
                  <Icon className="h-6 w-6 text-gold-light" />
                </div>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
