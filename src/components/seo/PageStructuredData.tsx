import type { NavCategory } from "@/data/navigation";
import type { Locale } from "@/i18n/config";
import type { FaqItem } from "@/i18n/pages/types";
import type { Dictionary } from "@/i18n/types";
import {
  buildContentBreadcrumbs,
  buildPageGraph,
  buildProfessionalBreadcrumbs,
} from "@/lib/structured-data";
import { getSiteUrl } from "@/lib/seo";
import StructuredData from "./StructuredData";

type HomeProps = {
  kind: "home";
  dict: Dictionary;
  locale: Locale;
};

type ProfessionalProps = {
  kind: "professional";
  dict: Dictionary;
  locale: Locale;
  title: string;
  description: string;
};

type ContentProps = {
  kind: "content";
  dict: Dictionary;
  locale: Locale;
  category: NavCategory;
  slug: string;
  title: string;
  description: string;
  image?: string;
  faqs?: FaqItem[];
};

type Props = HomeProps | ProfessionalProps | ContentProps;

export default function PageStructuredData(props: Props) {
  const { dict, locale } = props;
  const siteUrl = getSiteUrl();

  if (props.kind === "home") {
    const canonicalUrl = `${siteUrl}/${locale}`;
    return (
      <StructuredData
        data={buildPageGraph({
          locale,
          canonicalUrl,
          title: dict.site.title,
          description: dict.site.description,
          pageKind: "home",
        })}
      />
    );
  }

  if (props.kind === "professional") {
    const canonicalUrl = `${siteUrl}/${locale}/professional`;
    return (
      <StructuredData
        data={buildPageGraph({
          locale,
          canonicalUrl,
          title: props.title,
          description: props.description,
          breadcrumbs: buildProfessionalBreadcrumbs(dict, locale),
          pageKind: "professional",
        })}
      />
    );
  }

  const canonicalUrl = `${siteUrl}/${locale}/${props.category}/${props.slug}`;
  return (
    <StructuredData
      data={buildPageGraph({
        locale,
        canonicalUrl,
        title: props.title,
        description: props.description,
        breadcrumbs: buildContentBreadcrumbs(dict, locale, props.category, props.slug),
        category: props.category,
        slug: props.slug,
        image: props.image,
        faqs: props.faqs,
        pageKind: "content",
      })}
    />
  );
}
