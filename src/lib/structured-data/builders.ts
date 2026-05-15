import type { NavCategory } from "@/data/navigation";
import { htmlLang, type Locale } from "@/i18n/config";
import type { FaqItem } from "@/i18n/pages/types";
import type { Dictionary } from "@/i18n/types";
import { localePath } from "@/lib/routes";
import { getSiteUrl } from "@/lib/seo";
import type { BreadcrumbItem } from "./breadcrumbs";
import { breadcrumbAbsoluteUrl } from "./breadcrumbs";
import {
  keyPagePathSuffix,
  KEY_SITE_PAGES,
  type KeySitePage,
} from "./key-pages";
import {
  keyPagesListId,
  organizationId,
  pageFragmentId,
  websiteId,
} from "./ids";

const SCHEMA = "https://schema.org";

export function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function wrapGraph(nodes: object[]) {
  return {
    "@context": SCHEMA,
    "@graph": nodes.filter(Boolean),
  };
}

function keyPageLabel(dict: Dictionary, entry: KeySitePage): string {
  if (entry.kind === "home") return dict.nav.home;
  if (entry.kind === "professional") return dict.nav.professional;
  const group = dict.nav.groups.find((g) => g.id === entry.category);
  const child = group?.children.find((c) => c.slug === entry.slug);
  return child?.label ?? entry.slug;
}

function resolveWebPageType(category: NavCategory | undefined, slug: string | undefined) {
  if (!category || !slug) return "WebPage";
  if (slug === "who-we-are" || slug === "company-blog" || slug === "esg") return "AboutPage";
  if (slug === "contact-us") return "ContactPage";
  if (category === "products") return "WebPage";
  return "WebPage";
}

export function buildOrganizationNode(dict: Dictionary) {
  const siteUrl = getSiteUrl();
  const { site, contact, markets } = dict;

  return {
    "@type": "FinancialService",
    "@id": organizationId(),
    name: site.legalName,
    alternateName: site.name,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/assets/logo.svg`,
    },
    image: `${siteUrl}/assets/logo.png`,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.operatingAddress,
      addressCountry: "ID",
    },
    sameAs: [siteUrl],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: markets.products.map((p) => p.name),
  };
}

export function buildKeyPagesListNode(dict: Dictionary, locale: Locale) {
  const siteUrl = getSiteUrl();

  return {
    "@type": "ItemList",
    "@id": keyPagesListId(locale),
    name: dict.nav.mainNavAria,
    itemListElement: KEY_SITE_PAGES.map((entry, index) => {
      const pathSuffix = keyPagePathSuffix(entry);
      const url = `${siteUrl}${localePath(locale, pathSuffix || "/")}`;
      return {
        "@type": "SiteNavigationElement",
        position: index + 1,
        name: keyPageLabel(dict, entry),
        url,
      };
    }),
  };
}

export function buildWebsiteNode(dict: Dictionary, locale: Locale) {
  const siteUrl = getSiteUrl();
  const homeUrl = `${siteUrl}/${locale}`;

  return {
    "@type": "WebSite",
    "@id": websiteId(locale),
    url: homeUrl,
    name: dict.site.name,
    description: dict.site.description,
    inLanguage: htmlLang[locale],
    publisher: { "@id": organizationId() },
    hasPart: { "@id": keyPagesListId(locale) },
  };
}

export function buildGlobalGraph(dict: Dictionary, locale: Locale) {
  return wrapGraph([
    buildOrganizationNode(dict),
    buildWebsiteNode(dict, locale),
    buildKeyPagesListNode(dict, locale),
  ]);
}

function buildBreadcrumbListNode(canonicalUrl: string, items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": pageFragmentId(canonicalUrl, "breadcrumb"),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: breadcrumbAbsoluteUrl(item.href),
    })),
  };
}

function buildFaqNode(canonicalUrl: string, faqs: FaqItem[]) {
  if (!faqs.length) return null;

  return {
    "@type": "FAQPage",
    "@id": pageFragmentId(canonicalUrl, "faq"),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function buildServiceNode(canonicalUrl: string, title: string, description: string) {
  return {
    "@type": "Service",
    "@id": pageFragmentId(canonicalUrl, "service"),
    name: title,
    description,
    url: canonicalUrl,
    provider: { "@id": organizationId() },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: "Professional trading services",
  };
}

function buildFinancialProductNode(
  canonicalUrl: string,
  title: string,
  description: string,
) {
  return {
    "@type": "FinancialProduct",
    "@id": pageFragmentId(canonicalUrl, "product"),
    name: title,
    description,
    url: canonicalUrl,
    provider: { "@id": organizationId() },
  };
}

export type PageGraphInput = {
  locale: Locale;
  canonicalUrl: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  category?: NavCategory;
  slug?: string;
  image?: string;
  faqs?: FaqItem[];
  pageKind: "home" | "professional" | "content";
};

export function buildPageGraph(input: PageGraphInput) {
  const {
    locale,
    canonicalUrl,
    title,
    description,
    breadcrumbs,
    category,
    slug,
    image,
    faqs,
    pageKind,
  } = input;

  const webPageType =
    pageKind === "home"
      ? "WebPage"
      : pageKind === "professional"
        ? "WebPage"
        : resolveWebPageType(category, slug);

  const nodes: object[] = [];

  const serviceNode =
    pageKind === "professional" ? buildServiceNode(canonicalUrl, title, description) : null;

  const productNode =
    category === "products" && pageKind === "content"
      ? buildFinancialProductNode(canonicalUrl, title, description)
      : null;

  const faqNode = faqs?.length ? buildFaqNode(canonicalUrl, faqs) : null;

  const mainEntityId = serviceNode
    ? pageFragmentId(canonicalUrl, "service")
    : productNode
      ? pageFragmentId(canonicalUrl, "product")
      : faqNode
        ? pageFragmentId(canonicalUrl, "faq")
        : undefined;

  nodes.push({
    "@type": webPageType,
    "@id": pageFragmentId(canonicalUrl, "webpage"),
    url: canonicalUrl,
    name: title,
    description,
    inLanguage: htmlLang[locale],
    isPartOf: { "@id": websiteId(locale) },
    about: { "@id": organizationId() },
    ...(breadcrumbs?.length
      ? { breadcrumb: { "@id": pageFragmentId(canonicalUrl, "breadcrumb") } }
      : {}),
    ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
    ...(image
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: image.startsWith("http") ? image : `${getSiteUrl()}${image}`,
          },
        }
      : {}),
  });

  if (breadcrumbs?.length) {
    nodes.push(buildBreadcrumbListNode(canonicalUrl, breadcrumbs));
  }

  if (serviceNode) nodes.push(serviceNode);
  if (productNode) nodes.push(productNode);
  if (faqNode) nodes.push(faqNode);

  return wrapGraph(nodes);
}
