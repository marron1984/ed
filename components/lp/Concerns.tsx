import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { concerns } from "@/data/lp";
import { HelpCircle } from "lucide-react";

export function Concerns() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="CONCERNS"
            title="こんなお悩みありませんか？"
            description="ひとりで抱え込みやすいテーマだからこそ、相談のハードルを下げたいと考えています。"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {concerns.map((concern, index) => (
            <Reveal key={concern.title} delay={index * 90}>
              <div className="flex h-full gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <HelpCircle className="h-6 w-6 flex-shrink-0 text-teal" />
                <div>
                  <h3 className="font-bold text-navy">{concern.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy/70">
                    {concern.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
