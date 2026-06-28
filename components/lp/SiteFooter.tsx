import Link from "next/link";

const legalLinks = [
  { href: "/legal/tokushoho", label: "特定商取引法に基づく表記" },
  { href: "/legal/privacy", label: "プライバシーポリシー" },
  { href: "/legal/terms", label: "利用規約" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="text-base font-black">メンズケア オンライン診療</p>
            <p className="mt-2 text-sm text-white/70">
              株式会社dhpケアマネジメント
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 rounded-xl bg-white/5 p-4 text-center text-xs leading-relaxed text-white/70 ring-1 ring-white/10">
          本サイトはデモ用モックです。実際の診療・販売は行いません。
          掲載している会社名・価格・サービス内容・リンク先はすべてデモ用のダミーです。
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} dhp Care Management (Demo Mock)
        </p>
      </div>
    </footer>
  );
}
