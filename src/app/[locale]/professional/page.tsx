import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/layout/SiteShell";
import ProHeroSection from "@/components/professional/ProHeroSection";
import ProServicesSection from "@/components/professional/ProServicesSection";
import ProBenefitsSection from "@/components/professional/ProBenefitsSection";
import ProRulesSection from "@/components/professional/ProRulesSection";
import ProCtaSection from "@/components/professional/ProCtaSection";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import PageStructuredData from "@/components/seo/PageStructuredData";
import PageBreadcrumbs from "@/components/layout/PageBreadcrumbs";
import { buildProfessionalBreadcrumbs } from "@/lib/structured-data";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};

  const dict = await getDictionary(raw);
  const { meta } = dict.professional;

  return buildPageMetadata({
    locale: raw,
    pathSuffix: "/professional",
    title: meta.title,
    description: meta.description,
    siteName: dict.site.name,
  });
}

export default async function ProfessionalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale: Locale = raw;
  const dict = await getDictionary(locale);

  const { meta } = dict.professional;

  return (
    <SiteShell dict={dict} locale={locale}>
      <PageStructuredData
        kind="professional"
        dict={dict}
        locale={locale}
        title={meta.title}
        description={meta.description}
      />
      <PageBreadcrumbs items={buildProfessionalBreadcrumbs(dict, locale)} ariaLabel={dict.nav.breadcrumbAria} />
      <ProHeroSection dict={dict} />
      <ProServicesSection dict={dict} />
      <ProBenefitsSection dict={dict} />
      <ProRulesSection dict={dict} />
      <ProCtaSection dict={dict} />
    </SiteShell>
  );
}
