import Box from "@mui/material/Box";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

type Props = {
  dict: Dictionary;
  locale: Locale;
  children: React.ReactNode;
};

export default function SiteShell({ dict, locale, children }: Props) {
  return (
    <>
      <Header dict={dict} locale={locale} />
      <Box component="main">{children}</Box>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
