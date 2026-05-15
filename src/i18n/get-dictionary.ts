import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  zh: () => import("./dictionaries/zh").then((m) => m.default),
  ja: () => import("./dictionaries/ja").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return loaders[locale]();
}
