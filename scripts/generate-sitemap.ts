import { existsSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { getSiteUrl } from "@/lib/seo";
import { getSitemap, serializeSitemap } from "@/lib/sitemap";

const siteUrl = getSiteUrl();
const publicDir = join(process.cwd(), "public");

const sitemapPath = join(publicDir, "sitemap.xml");
writeFileSync(sitemapPath, serializeSitemap(getSitemap(siteUrl)), "utf-8");
console.log(`Generated ${sitemapPath}`);

const robotsPath = join(publicDir, "robots.txt");
writeFileSync(
  robotsPath,
  "User-agent: *\nAllow: /\n\nSitemap: /sitemap.xml\n",
  "utf-8",
);
console.log(`Generated ${robotsPath}`);

const redirectsPath = join(publicDir, "_redirects");
if (existsSync(redirectsPath)) {
  unlinkSync(redirectsPath);
  console.log(`Removed ${redirectsPath}`);
}
