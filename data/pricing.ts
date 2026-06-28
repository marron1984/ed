export type PricingPlan = {
  id: string;
  name: string;
  badge?: string;
  price: number;
  unit: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  note?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "first",
    name: "初回プラン",
    badge: "はじめての方",
    price: 9000,
    unit: "（初回・税込）",
    description: "まずは試してみたい方向けの単発プランです。",
    features: [
      "オンライン問診",
      "医師による内容確認",
      "1回分のお届け",
    ],
    note: "※ 表示はデモ用のダミー価格です。",
  },
  {
    id: "subscription",
    name: "定期プラン",
    badge: "おすすめ",
    price: 8500,
    unit: "（月・税込）",
    description: "継続して相談したい方向けの定期プランです。",
    features: [
      "オンライン問診",
      "医師による内容確認",
      "毎月のお届け",
      "継続フォローのご相談",
    ],
    highlighted: true,
    note: "※ 定期プランはいつでも休止・解約が可能です。表示はデモ用のダミー価格です。",
  },
];
