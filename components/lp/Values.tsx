import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShowcaseImage } from "@/components/ui/ShowcaseImage";
import { Reveal } from "@/components/ui/Reveal";
import { valueCards } from "@/data/lp";

export function Values() {
  return (
    <section className="bg-mist py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="OUR VALUE"
            title="3つの提供価値"
            description="心理的な安心感・手軽さ・医療的な安心感の両立をめざしたサービス設計です。"
          />
        </Reveal>
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <Reveal variant="zoom">
            <ShowcaseImage
              src="/images/support-staff.png"
              alt="女性スタッフが丁寧に問診をサポート。はじめてでも安心してご相談いただけます。"
              width={1448}
              height={1086}
            />
          </Reveal>
          <div className="grid gap-5">
            {valueCards.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 110}>
                <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
                    <Icon className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy/70">
                      {description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
