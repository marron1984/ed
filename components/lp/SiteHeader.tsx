import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { HeartPulse } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-navy">
          <HeartPulse className="h-6 w-6 text-teal" />
          <span className="flex items-baseline gap-2">
            <span className="text-base font-black tracking-tight sm:text-lg">
              DHP CARE
            </span>
            <span className="hidden text-[10px] font-bold tracking-wider text-navy/50 sm:inline">
              for MEN&apos;S HEALTH
            </span>
            <span className="text-[10px] font-bold text-gold">DEMO</span>
          </span>
        </Link>
        <ButtonLink href="/consultation" size="md" className="hidden sm:inline-flex">
          無料で問診を始める
        </ButtonLink>
      </div>
    </header>
  );
}
