import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShowcaseImage } from "@/components/ui/ShowcaseImage";
import { assurancePoints } from "@/data/lp";

export function Privacy() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="PRIVACY & SAFETY"
          title="安心・プライバシーへの配慮"
          description="国内正規品を医師が処方。プライバシーに配慮した梱包・配送でお届けします。"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ShowcaseImage
            src="/images/quality-medicine.png"
            alt="国内正規品を、医師が処方。安心して続けられる品質とサポート。"
            width={1122}
            height={1402}
          />
          <ShowcaseImage
            src="/images/private-delivery.png"
            alt="中身がわからない梱包でお届け。ご家族や同居人に知られる心配はありません。"
            width={1122}
            height={1402}
          />
        </div>

        <div className="mt-12 rounded-2xl bg-navy px-6 py-12 text-white shadow-soft sm:px-12">
          <div className="grid gap-6 md:grid-cols-3">
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
