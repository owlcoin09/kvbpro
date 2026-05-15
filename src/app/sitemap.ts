import type { MetadataRoute } from "next";
import { getAllPageParams, getPagePath } from "@/data/navigation";
import { defaultLocale } from "@/i18n/config";
import { localePath } from "@/lib/routes";
import { buildAbsoluteLanguageAlternates, getSiteUrl } from "@/lib/seo";

const staticPaths = ["", "/professional"];

function sitemapEntry(
  pathSuffix: string,
  options: { changeFrequency: "weekly" | "monthly"; priority: number },
): MetadataRoute.Sitemap[number] {
  return {
    url: `${getSiteUrl()}${localePath(defaultLocale, pathSuffix || "/")}`,
    lastModified: new Date(),
    changeFrequency: options.changeFrequency,
    priority: options.priority,
    alternates: { languages: buildAbsoluteLanguageAlternates(pathSuffix) },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pageParams = getAllPageParams();

  const staticEntries = staticPaths.map((path) =>
    sitemapEntry(path, {
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.9,
    }),
  );

  const pageEntries = pageParams.map(({ category, slug }) =>
    sitemapEntry(getPagePath(category, slug), {
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [...staticEntries, ...pageEntries];
}
