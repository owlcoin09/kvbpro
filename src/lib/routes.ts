import type { Locale } from "@/i18n/config";
import type { NavCategory } from "@/data/navigation";
import { getPagePath } from "@/data/navigation";
import type { NavChildItem } from "@/i18n/types";

export function localePath(locale: Locale, path: string) {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pagePath(locale: Locale, category: NavCategory, slug: string) {
  return localePath(locale, getPagePath(category, slug));
}

export function navChildPath(locale: Locale, category: NavCategory, child: NavChildItem) {
  if (child.href) return localePath(locale, child.href);
  return pagePath(locale, category, child.slug);
}
