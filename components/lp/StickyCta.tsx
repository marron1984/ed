"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { clsx } from "@/lib/clsx";

/**
 * モバイル専用の追従CTA。ヒーローを通過したら表示する。
 * デスクトップはヘッダーCTAが常時見えるため非表示。
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={clsx(
        "fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-white/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_-12px_rgba(21,49,91,0.25)] backdrop-blur transition-transform duration-300 lg:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-black leading-tight text-navy">
            問診は無料・約3分
          </p>
          <p className="text-[11px] leading-tight text-navy/60">
            匿名OK・いつでも中断できます
          </p>
        </div>
        <ButtonLink href="/consultation" className="flex-shrink-0 px-5">
          問診を始める
        </ButtonLink>
      </div>
    </div>
  );
}
