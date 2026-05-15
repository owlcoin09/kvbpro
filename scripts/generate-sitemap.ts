import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { getSiteUrl } from "@/lib/seo";
import { getSitemap, serializeSitemap } from "@/lib/sitemap";

const output = join(process.cwd(), "public", "sitemap.xml");
writeFileSync(output, serializeSitemap(getSitemap(getSiteUrl())), "utf-8");
console.log(`Generated ${output}`);
