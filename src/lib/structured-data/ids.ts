import type { Locale } from "@/i18n/config";
import { getSiteUrl } from "@/lib/seo";

export function organizationId() {
  return `${getSiteUrl()}/#organization`;
}

export function websiteId(locale: Locale) {
  return `${getSiteUrl()}/${locale}/#website`;
}

export function keyPagesListId(locale: Locale) {
  return `${getSiteUrl()}/${locale}/#key-pages`;
}

export function pageFragmentId(canonicalUrl: string, fragment: string) {
  return `${canonicalUrl}#${fragment}`;
}
