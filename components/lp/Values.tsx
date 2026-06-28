import { SectionHeading } from "@/components/ui/SectionHeading";
import { valueCards } from "@/data/lp";

export function Values() {
  return (
    <section className="bg-mist py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="OUR VALUE"
          title="3つの提供価値"
          description="心理的な安心感・手軽さ・医療的な安心感の両立をめざしたサービス設計です。"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {valueCards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-8 text-center shadow-card transition-shadow hover:shadow-soft"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal/10">
                <Icon className="h-7 w-7 text-teal" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
