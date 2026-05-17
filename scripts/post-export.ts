import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  statSync,
  unlinkSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";
import { defaultLocale } from "@/i18n/config";

const outDir = join(process.cwd(), "out");
const localeDir = join(outDir, defaultLocale);
const localeHtml = join(outDir, `${defaultLocale}.html`);

function copyHtmlTree(srcDir: string) {
  for (const entry of readdirSync(srcDir)) {
    const src = join(srcDir, entry);
    if (statSync(src).isDirectory()) {
      copyHtmlTree(src);
      continue;
    }
    if (!entry.endsWith(".html")) continue;

    const rel = relative(localeDir, src);
    const dest = join(outDir, rel);
    mkdirSync(dirname(dest), { recursive: true });
    copyFileSync(src, dest);
  }
}

if (!existsSync(localeHtml)) {
  console.error(`post-export: missing ${localeHtml} — run "pnpm build" first`);
  process.exit(1);
}

const indexHtml = join(outDir, "index.html");
const localeIndexHtml = join(localeDir, "index.html");

copyFileSync(localeHtml, indexHtml);
console.log(`post-export: ${defaultLocale}.html → index.html`);

mkdirSync(localeDir, { recursive: true });
copyFileSync(localeHtml, localeIndexHtml);
console.log(`post-export: ${defaultLocale}.html → ${defaultLocale}/index.html`);

if (existsSync(localeDir)) {
  copyHtmlTree(localeDir);
  console.log(`post-export: mirrored ${defaultLocale}/**/*.html → out/ (no redirects)`);
}

const redirectsOut = join(outDir, "_redirects");
if (existsSync(redirectsOut)) {
  unlinkSync(redirectsOut);
  console.log(`post-export: removed ${redirectsOut}`);
}
