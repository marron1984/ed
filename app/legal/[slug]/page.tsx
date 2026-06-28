import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const legalPages: Record<string, { title: string }> = {
  tokushoho: { title: "特定商取引法に基づく表記" },
  privacy: { title: "プライバシーポリシー" },
  terms: { title: "利用規約" },
};

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const page = legalPages[params.slug];
  if (!page) notFound();

  return (
    <main className="min-h-screen bg-mist">
      <div className="container-narrow py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-navy"
        >
          <ArrowLeft className="h-4 w-4" />
          トップに戻る
        </Link>
        <h1 className="mt-6 text-2xl font-black text-navy sm:text-3xl">
          {page.title}
        </h1>
        <div className="mt-8 rounded-2xl border border-navy/10 bg-white p-8 shadow-card">
          <p className="rounded-xl bg-mist p-4 text-sm leading-relaxed text-navy/70">
            本ページはデモ用のダミーページです。本サイトはモックであり、
            実際の診療・販売・契約は行いません。掲載内容はサンプルです。
          </p>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-navy/70">
            <p>
              （ここに「{page.title}」の内容が入ります。デモのため、本文は省略しています。）
            </p>
            <p>
              実サービスでは、関連法令・ガイドラインに沿った正式な記載を掲載します。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
