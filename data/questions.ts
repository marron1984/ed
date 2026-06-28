export type Option = {
  value: string;
  label: string;
  /** 選択時に対面診療への誘導注意を表示する重い項目 */
  referral?: boolean;
};

export const ageOptions: Option[] = [
  { value: "20s", label: "20代" },
  { value: "30s", label: "30代" },
  { value: "40s", label: "40代" },
  { value: "50s", label: "50代" },
  { value: "60plus", label: "60代以上" },
];

export const smokingOptions: Option[] = [
  { value: "none", label: "吸わない" },
  { value: "sometimes", label: "ときどき吸う" },
  { value: "daily", label: "毎日吸う" },
];

export const drinkingOptions: Option[] = [
  { value: "none", label: "飲まない" },
  { value: "sometimes", label: "ときどき飲む" },
  { value: "daily", label: "ほぼ毎日飲む" },
];

export const exerciseOptions: Option[] = [
  { value: "often", label: "週に数回する" },
  { value: "sometimes", label: "ときどきする" },
  { value: "rarely", label: "ほとんどしない" },
];

/** 既往歴・服薬。referral: true は対面診療をご案内する場合がある項目 */
export const historyOptions: Option[] = [
  { value: "none", label: "特になし" },
  { value: "hypertension", label: "高血圧", referral: true },
  { value: "heart", label: "心臓の病気（心疾患）", referral: true },
  { value: "diabetes", label: "糖尿病" },
  { value: "nitrate", label: "硝酸薬を服用中", referral: true },
  { value: "other_med", label: "その他、服用中の薬がある" },
];

export const symptomOptions: Option[] = [
  { value: "confidence", label: "自信を取り戻したい" },
  { value: "stress", label: "ストレスや疲れが気になる" },
  { value: "consult", label: "まずは相談してみたい" },
  { value: "continue", label: "継続的にケアしたい" },
];

/** 確認画面で値をラベルに戻すためのヘルパー */
export function labelOf(options: Option[], value: string | null): string {
  if (!value) return "未選択";
  return options.find((o) => o.value === value)?.label ?? "未選択";
}

export function labelsOf(options: Option[], values: string[]): string {
  if (values.length === 0) return "未選択";
  return values
    .map((v) => options.find((o) => o.value === v)?.label ?? v)
    .join("、 ");
}
