import { SiteHeader } from "@/components/lp/SiteHeader";
import { Hero } from "@/components/lp/Hero";
import { Concerns } from "@/components/lp/Concerns";
import { Values } from "@/components/lp/Values";
import { Flow } from "@/components/lp/Flow";
import { Pricing } from "@/components/lp/Pricing";
import { Privacy } from "@/components/lp/Privacy";
import { Faq } from "@/components/lp/Faq";
import { FinalCta } from "@/components/lp/FinalCta";
import { SiteFooter } from "@/components/lp/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Concerns />
        <Values />
        <Flow />
        <Pricing />
        <Privacy />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
