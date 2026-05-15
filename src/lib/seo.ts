import type { Metadata } from "next";
import {
  defaultLocale,
  htmlLang,
  locales,
  openGraphLocale,
  type Locale,
} from "@/i18n/config";
import { localePath } from "@/lib/routes";

const defaultOgImage = "/assets/logo.png";

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kvbpro.com").replace(
    /\/$/,
    "",
  );
}

/** Normalize to a path suffix without locale, e.g. "" or "/products/forex" */
export function normalizePathSuffix(path?: string): string {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

/** Relative paths for metadata alternates.languages (resolved via metadataBase) */
export function buildLanguageAlternates(pathSuffix?: string): Record<string, string> {
  const suffix = normalizePathSuffix(pathSuffix);
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    languages[htmlLang[locale]] = localePath(locale, suffix || "/");
  }
  languages["x-default"] = localePath(defaultLocale, suffix || "/");

  return languages;
}

/** Absolute URLs for sitemap.xml hreflang entries */
export function buildAbsoluteLanguageAlternates(
  pathSuffix?: string,
  siteUrl?: string,
): Record<string, string> {
  const base = siteUrl ?? getSiteUrl();
  const relative = buildLanguageAlternates(pathSuffix);
  return Object.fromEntries(
    Object.entries(relative).map(([lang, path]) => [lang, `${base}${path}`]),
  );
}

export type BuildPageMetadataInput = {
  locale: Locale;
  /** Path without locale prefix, e.g. "/products/forex" or empty for home */
  pathSuffix?: string;
  title: string;
  description: string;
  keywords?: string | string[];
  siteName?: string;
};

/** Per-page TDK + canonical + hreflang + Open Graph + Twitter */
export function buildPageMetadata(input: BuildPageMetadataInput): Metadata {
  const pathSuffix = normalizePathSuffix(input.pathSuffix);
  const canonical = localePath(input.locale, pathSuffix || "/");
  const otherLocales = locales.filter((l) => l !== input.locale);

  return {
    title: input.title,
    description: input.description,
    ...(input.keywords ? { keywords: input.keywords } : {}),
    alternates: {
      canonical,
      languages: buildLanguageAlternates(pathSuffix),
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      locale: openGraphLocale[input.locale],
      alternateLocale: otherLocales.map((l) => openGraphLocale[l]),
      ...(input.siteName ? { siteName: input.siteName } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [defaultOgImage],
    },
  };
}

export type SiteMetaDict = {
  name: string;
  legalName: string;
  title: string;
  description: string;
  keywords: string[];
};

/** Locale layout defaults: metadataBase, title template, home TDK, global icons */
export function buildRootMetadata(dict: SiteMetaDict, locale: Locale): Metadata {
  const canonical = localePath(locale, "/");
  const otherLocales = locales.filter((l) => l !== locale);

  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: dict.title,
      template: `%s | ${dict.name}`,
    },
    description: dict.description,
    keywords: dict.keywords,
    authors: [{ name: dict.legalName }],
    creator: dict.legalName,
    publisher: dict.legalName,
    applicationName: dict.name,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    referrer: "origin-when-cross-origin",
    formatDetection: { telephone: false, address: false, email: false },
    openGraph: {
      type: "website",
      locale: openGraphLocale[locale],
      alternateLocale: otherLocales.map((l) => openGraphLocale[l]),
      url: canonical,
      siteName: dict.name,
      title: dict.title,
      description: dict.description,
      images: [{ url: defaultOgImage, width: 512, height: 512, alt: dict.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.title,
      description: dict.description,
      images: [defaultOgImage],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/favicon-32x32.png",
    },
  };
}
