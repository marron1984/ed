import { ButtonLink } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export function DoneStep() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-mist px-5 py-16">
      <div className="w-full max-w-lg rounded-2xl border border-navy/10 bg-white p-8 text-center shadow-soft sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
          <CheckCircle2 className="h-9 w-9 text-teal" />
        </div>
        <h1 className="mt-6 text-2xl font-black text-navy">
          問診を受け付けました
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-navy/70">
          ご回答ありがとうございました。
          医師が内容を確認のうえ、ご連絡します。
          内容によっては、対面診療をご案内する場合があります。
        </p>
        <div className="mt-6 rounded-xl bg-mist p-4 text-xs leading-relaxed text-navy/60">
          本サイトはデモ用モックです。実際の送信・決済・診療は行われていません。
          入力内容は保存されません。
        </div>
        <div className="mt-8">
          <ButtonLink href="/" size="lg">
            トップページに戻る
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
