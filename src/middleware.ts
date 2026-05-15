import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

function getPreferredLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const lang of preferred) {
    if (isLocale(lang)) return lang;
    if (lang.startsWith("zh")) return "zh";
    if (lang.startsWith("ja")) return "ja";
    if (lang.startsWith("en")) return "en";
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|assets|favicon.ico|.*\\..*).*)"],
};
