import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Roboto, Noto_Sans_JP, Noto_Sans_SC } from "next/font/google";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import ThemeRegistry from "@/components/providers/ThemeRegistry";
import GoogleTag from "@/components/analytics/GoogleTag";
import GlobalStructuredData from "@/components/seo/GlobalStructuredData";
import { brand } from "@/theme/brand";
import { getDictionary } from "@/i18n/get-dictionary";
import { htmlLang, isLocale, locales, type Locale } from "@/i18n/config";
import { buildRootMetadata } from "@/lib/seo";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const notoSansSC = Noto_Sans_SC({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sc",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-jp",
});

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

  return buildRootMetadata(dict.site, raw);
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: brand.navy,
};

function fontClass(locale: Locale) {
  if (locale === "zh") return `${notoSansSC.variable} ${notoSansSC.className}`;
  if (locale === "ja") return `${notoSansJP.variable} ${notoSansJP.className}`;
  return `${roboto.variable} ${roboto.className}`;
}

function fontFamily(locale: Locale) {
  if (locale === "zh") return "var(--font-noto-sc), Noto Sans SC, sans-serif";
  if (locale === "ja") return "var(--font-noto-jp), Noto Sans JP, sans-serif";
  return "var(--font-roboto), Roboto, sans-serif";
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const dict = await getDictionary(raw);

  return (
    <html lang={htmlLang[raw]} className={fontClass(raw)} suppressHydrationWarning>
      <body style={{ fontFamily: fontFamily(raw) }}>
        <GoogleTag />
        <InitColorSchemeScript attribute="data" defaultMode="system" />
        <GlobalStructuredData dict={dict} locale={raw} />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
