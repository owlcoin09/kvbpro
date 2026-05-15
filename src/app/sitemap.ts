import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";
import { getSitemap } from "@/lib/sitemap";

/** Pre-rendered at build time — avoids Worker CPU on Cloudflare. */
export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemap(getSiteUrl());
}
