import {
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Lock,
  PackageCheck,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

export type Concern = {
  title: string;
  description: string;
};

export const concerns: Concern[] = [
  {
    title: "人目が気になる",
    description: "クリニックの待合室で誰かに会わないか、つい気になってしまう。",
  },
  {
    title: "通院する時間がない",
    description: "仕事や予定が忙しく、平日に受診の時間を確保しづらい。",
  },
  {
    title: "何科に行けばいいか分からない",
    description: "どこに相談すればよいのか分からず、一歩を踏み出せない。",
  },
  {
    title: "価格が不透明で不安",
    description: "いくらかかるのか分からないと、相談すること自体をためらう。",
  },
];

export type ValueCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const valueCards: ValueCard[] = [
  {
    icon: Lock,
    title: "心理的な安心感",
    description:
      "スマホで完結し、対面の気まずさがありません。プライバシーに配慮した設計です。",
  },
  {
    icon: Smartphone,
    title: "手軽さ・利便性",
    description:
      "通院は不要。スキマ時間に問診を入力でき、最短で次のステップへ進めます。",
  },
  {
    icon: Stethoscope,
    title: "医療的な安心感",
    description:
      "医師がオンラインで内容を確認します。状況により対面受診をご案内する場合があります。",
  },
];

export type FlowStep = {
  step: string;
  title: string;
  description: string;
};

export const flowSteps: FlowStep[] = [
  {
    step: "01",
    title: "お申し込み",
    description: "スマホから問診ページにアクセスします。",
  },
  {
    step: "02",
    title: "オンライン問診",
    description: "選択式の質問に回答（約3分）。",
  },
  {
    step: "03",
    title: "医師の確認",
    description: "医師が内容を確認します。",
  },
  {
    step: "04",
    title: "お届け",
    description: "ご案内に沿って手続き後、配送されます。",
  },
  {
    step: "05",
    title: "継続フォロー",
    description: "必要に応じて継続のご相談が可能です。",
  },
];

export type AssurancePoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const assurancePoints: AssurancePoint[] = [
  {
    icon: PackageCheck,
    title: "匿名配送に配慮",
    description:
      "中身が分からない梱包での配送に配慮します（デモ上の表記です）。",
  },
  {
    icon: BadgeCheck,
    title: "国内正規品",
    description: "正規の流通品を取り扱う前提のサービス設計です。",
  },
  {
    icon: ShieldCheck,
    title: "プライバシー厳守",
    description: "入力いただく情報の取り扱いに配慮した設計を想定しています。",
  },
];
