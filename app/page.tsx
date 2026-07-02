import { SiteHeader } from "@/components/lp/SiteHeader";
import { Hero } from "@/components/lp/Hero";
import { TrustStrip } from "@/components/lp/TrustStrip";
import { Concerns } from "@/components/lp/Concerns";
import { Values } from "@/components/lp/Values";
import { CtaBand } from "@/components/lp/CtaBand";
import { Pricing } from "@/components/lp/Pricing";
import { Flow } from "@/components/lp/Flow";
import { Privacy } from "@/components/lp/Privacy";
import { Faq } from "@/components/lp/Faq";
import { FinalCta } from "@/components/lp/FinalCta";
import { SiteFooter } from "@/components/lp/SiteFooter";
import { StickyCta } from "@/components/lp/StickyCta";

export default function HomePage() {
  return (
    // pb はモバイルの追従CTAとフッターの重なり回避
    <div className="pb-20 lg:pb-0">
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <Concerns />
        <Values />
        <CtaBand title="その一歩を、今日はスマホの中で。" />
        <Pricing />
        <Flow />
        <Privacy />
        <CtaBand title="不安な点は、問診の中でも確認できます。" />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta />
    </div>
  );
}
