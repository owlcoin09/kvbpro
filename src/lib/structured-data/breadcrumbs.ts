import type { NavCategory } from "@/data/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { localePath, pagePath } from "@/lib/routes";
import { getSiteUrl } from "@/lib/seo";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

function categoryLabel(dict: Dictionary, category: NavCategory): string {
  return dict.nav.groups.find((g) => g.id === category)?.label ?? category;
}

function pageLabel(dict: Dictionary, category: NavCategory, slug: string): string {
  const child = dict.nav.groups
    .find((g) => g.id === category)
    ?.children.find((c) => c.slug === slug);
  return child?.label ?? slug;
}

function categoryLandingHref(dict: Dictionary, locale: Locale, category: NavCategory): string {
  const firstChild = dict.nav.groups.find((g) => g.id === category)?.children[0];
  if (firstChild) return pagePath(locale, category, firstChild.slug);
  return localePath(locale, "/");
}

export function buildContentBreadcrumbs(
  dict: Dictionary,
  locale: Locale,
  category: NavCategory,
  slug: string,
): BreadcrumbItem[] {
  return [
    { label: dict.nav.home, href: localePath(locale, "/") },
    {
      label: categoryLabel(dict, category),
      href: categoryLandingHref(dict, locale, category),
    },
    {
      label: pageLabel(dict, category, slug),
      href: pagePath(locale, category, slug),
    },
  ];
}

export function buildProfessionalBreadcrumbs(
  dict: Dictionary,
  locale: Locale,
): BreadcrumbItem[] {
  return [
    { label: dict.nav.home, href: localePath(locale, "/") },
    { label: dict.nav.professional, href: localePath(locale, "/professional") },
  ];
}

export function breadcrumbAbsoluteUrl(href: string) {
  return `${getSiteUrl()}${href}`;
}
