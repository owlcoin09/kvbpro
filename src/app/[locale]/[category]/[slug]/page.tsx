import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/layout/SiteShell";
import ContentPage from "@/components/pages/ContentPage";
import ProductPage from "@/components/pages/ProductPage";
import TradingPage from "@/components/pages/TradingPage";
import { getAllPageParams, isNavCategory } from "@/data/navigation";
import { isTradingPolicySlug } from "@/data/trading-pages";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getPageContent } from "@/i18n/get-page-content";
import { getPagePath } from "@/data/navigation";
import PageStructuredData from "@/components/seo/PageStructuredData";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  const pages = getAllPageParams();
  return locales.flatMap((locale) =>
    pages.map(({ category, slug }) => ({ locale, category, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, category, slug } = await params;
  if (!isLocale(raw) || !isNavCategory(category)) return {};

  const page = await getPageContent(raw, category, slug);
  if (!page) return {};

  const dict = await getDictionary(raw);

  return buildPageMetadata({
    locale: raw,
    pathSuffix: getPagePath(category, slug),
    title: page.title,
    description: page.description,
    siteName: dict.site.name,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}) {
  const { locale: raw, category, slug } = await params;
  if (!isLocale(raw) || !isNavCategory(category)) notFound();

  const locale: Locale = raw;
  const page = await getPageContent(locale, category, slug);
  if (!page) notFound();

  const dict = await getDictionary(locale);

  const isProductPage = category === "products";
  const isTradingPolicyPage = category === "trading" && isTradingPolicySlug(slug);

  return (
    <SiteShell dict={dict} locale={locale}>
      <PageStructuredData
        kind="content"
        dict={dict}
        locale={locale}
        category={category}
        slug={slug}
        title={page.title}
        description={page.description}
        image={page.image}
        faqs={page.faqs?.items}
      />
      {isProductPage ? (
        <ProductPage page={page} dict={dict} locale={locale} category={category} slug={slug} />
      ) : isTradingPolicyPage ? (
        <TradingPage page={page} dict={dict} locale={locale} category={category} slug={slug} />
      ) : (
        <ContentPage page={page} dict={dict} locale={locale} category={category} slug={slug} />
      )}
    </SiteShell>
  );
}
