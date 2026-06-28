import { AlertTriangle, Info } from "lucide-react";

export function ReferralNotice() {
  return (
    <div className="mt-5 flex gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4">
      <AlertTriangle className="h-5 w-5 flex-shrink-0 text-gold" />
      <p className="text-sm leading-relaxed text-navy/80">
        ご回答の内容によっては、オンラインでの対応が難しく、
        <strong className="font-bold">対面診療をご案内する場合があります</strong>。
        安全のための確認です。医師が内容を確認したうえで、適切な方法をご提案します。
      </p>
    </div>
  );
}

export function InfoNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl bg-mist p-4">
      <Info className="h-5 w-5 flex-shrink-0 text-teal" />
      <p className="text-sm leading-relaxed text-navy/70">{children}</p>
    </div>
  );
}
