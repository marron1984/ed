/** 依存ライブラリ不要の軽量クラス名結合ユーティリティ */
export function clsx(
  ...args: Array<string | false | null | undefined>
): string {
  return args.filter(Boolean).join(" ");
}
