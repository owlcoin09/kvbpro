import { notFound } from "next/navigation";
import SiteShell from "@/components/layout/SiteShell";
import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import PlatformsSection from "@/components/home/PlatformsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProfessionalHomeSection from "@/components/home/ProfessionalHomeSection";
import ProfessionalWelcomeDialog from "@/components/home/ProfessionalWelcomeDialog";
import PartnerSection from "@/components/home/PartnerSection";
import CtaSection from "@/components/home/CtaSection";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import PageStructuredData from "@/components/seo/PageStructuredData";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale: Locale = raw;
  const dict = await getDictionary(locale);

  return (
    <SiteShell dict={dict} locale={locale}>
      <PageStructuredData kind="home" dict={dict} locale={locale} />
      <ProfessionalWelcomeDialog dict={dict} locale={locale} />
      <HeroSection dict={dict} />
      <ProductsSection dict={dict} />
      <PlatformsSection dict={dict} />
      <FeaturesSection dict={dict} />
      <ProfessionalHomeSection dict={dict} locale={locale} />
      <PartnerSection dict={dict} />
      <CtaSection dict={dict} />
    </SiteShell>
  );
}
