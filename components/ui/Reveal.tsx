"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "@/lib/clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** 表示開始までの遅延（ms）。グリッドのスタガー表示に使用 */
  delay?: number;
  /** 拡大しながらのフェードイン */
  variant?: "up" | "zoom";
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(variant === "zoom" ? "reveal-zoom" : "reveal", className)}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
