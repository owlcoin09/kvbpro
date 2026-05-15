import type { NavCategory } from "@/data/navigation";
import { getPagePath } from "@/data/navigation";

/** High-priority destinations for WebSite navigation / sitelink hints */
export const KEY_SITE_PAGES = [
  { kind: "home" as const },
  { kind: "professional" as const },
  { kind: "page" as const, category: "about" as NavCategory, slug: "who-we-are" },
  { kind: "page" as const, category: "about" as NavCategory, slug: "contact-us" },
  { kind: "page" as const, category: "about" as NavCategory, slug: "license" },
  { kind: "page" as const, category: "products" as NavCategory, slug: "forex" },
] as const;

export type KeySitePage = (typeof KEY_SITE_PAGES)[number];

export function keyPagePathSuffix(entry: KeySitePage): string {
  if (entry.kind === "home") return "";
  if (entry.kind === "professional") return "/professional";
  return getPagePath(entry.category, entry.slug);
}
