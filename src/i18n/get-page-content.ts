import "server-only";
import type { Locale } from "./config";
import type { NavCategory } from "@/data/navigation";
import type { PageContent, PageContentMap } from "./pages/types";

const loaders: Record<Locale, () => Promise<PageContentMap>> = {
  en: () => import("./pages/en").then((m) => m.default),
  zh: () => import("./pages/zh").then((m) => m.default),
  ja: () => import("./pages/ja").then((m) => m.default),
};

export async function getPageContentMap(locale: Locale): Promise<PageContentMap> {
  return loaders[locale]();
}

export async function getPageContent(
  locale: Locale,
  category: NavCategory,
  slug: string,
): Promise<PageContent | undefined> {
  const map = await getPageContentMap(locale);
  return map[category]?.[slug];
}
