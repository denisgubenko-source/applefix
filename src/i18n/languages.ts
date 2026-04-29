export const supportedLangs = ["ru", "et", "en"] as const;
export type Lang = (typeof supportedLangs)[number];
export const fallbackLang: Lang = "en";

export function isLang(value: string): value is Lang {
  return (supportedLangs as readonly string[]).includes(value);
}
