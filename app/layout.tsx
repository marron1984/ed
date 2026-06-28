import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "オンライン診療モック | 誰にも知られず、最短で、自信を取り戻す",
  description:
    "メンズヘルス（ED治療薬）オンライン診療サービスのデモ用モックサイトです。実際の診療・販売は行いません。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJp.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
