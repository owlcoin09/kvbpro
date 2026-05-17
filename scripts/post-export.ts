import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { defaultLocale } from "@/i18n/config";

const outDir = join(process.cwd(), "out");
const localeHtml = join(outDir, `${defaultLocale}.html`);
const indexHtml = join(outDir, "index.html");
const localeIndexHtml = join(outDir, defaultLocale, "index.html");

if (!existsSync(localeHtml)) {
  console.error(`post-export: missing ${localeHtml} — run "pnpm build" first`);
  process.exit(1);
}

copyFileSync(localeHtml, indexHtml);
console.log(`post-export: ${defaultLocale}.html → index.html`);

mkdirSync(dirname(localeIndexHtml), { recursive: true });
copyFileSync(localeHtml, localeIndexHtml);
console.log(`post-export: ${defaultLocale}.html → ${defaultLocale}/index.html`);
