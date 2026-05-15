import { getSiteUrlFromRequest } from "@/lib/seo";
import { getSitemap, serializeSitemap } from "@/lib/sitemap";

export const dynamic = "force-dynamic";

const sitemapHeaders = {
  "Content-Type": "text/xml; charset=utf-8",
  "X-Content-Type-Options": "nosniff",
  "Cache-Control": "public, max-age=3600, s-maxage=3600",
} as const;

export async function GET(request: Request) {
  const siteUrl = getSiteUrlFromRequest(request);
  return new Response(serializeSitemap(getSitemap(siteUrl)), {
    headers: sitemapHeaders,
  });
}
