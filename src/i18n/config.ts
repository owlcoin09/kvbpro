export const locales = ["en", "zh", "ja"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "简体中文",
  ja: "日本語",
};

export const htmlLang: Record<Locale, string> = {
  en: "en",
  zh: "zh-CN",
  ja: "ja",
};

export const openGraphLocale: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
  ja: "ja_JP",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
