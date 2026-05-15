"use client";

import Image from "next/image";
import NextLink from "@/components/common/NextLink";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { footerLinks } from "@/data/footer-links";
import type { NavCategory } from "@/data/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { localePath, pagePath } from "@/lib/routes";

type FooterProps = {
  dict: Dictionary;
  locale: Locale;
};

const footerCategories: NavCategory[] = ["products", "trading", "about"];

function FooterColumn({
  title,
  labels,
  locale,
  category,
}: {
  title: string;
  labels: string[];
  locale: Locale;
  category: NavCategory;
}) {
  const links = footerLinks[category];

  return (
    <Box component="nav" aria-label={title}>
      <Typography variant="overline" sx={{ color: "rgba(255,255,255,0.55)" }} gutterBottom>
        {title}
      </Typography>
      <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
        {labels.map((label, index) => {
          const link = links[index];
          if (!link) return null;

          return (
            <Box component="li" key={link.slug} sx={{ mb: 1 }}>
              <Typography
                component={NextLink}
                href={
                  link.href
                    ? localePath(locale, link.href)
                    : pagePath(locale, link.category, link.slug)
                }
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  "&:hover": { color: "common.white" },
                }}
              >
                {label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default function Footer({ dict, locale }: FooterProps) {
  const { contact, legal, footer } = dict;
  const year = new Date().getFullYear();

  const columnItems: Record<NavCategory, string[]> = {
    products: footer.products,
    trading: footer.trading,
    about: footer.about,
  };

  const columnTitles: Record<NavCategory, string> = {
    products: footer.columns.products,
    trading: footer.columns.trading,
    about: footer.columns.about,
  };

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.dark", color: "primary.contrastText", pt: 8, pb: 4 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Image
              src="/assets/logo.svg"
              alt="KVB"
              width={120}
              height={32}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mt: 2, mb: 2 }}>
              {footer.contactTitle}
            </Typography>
            {contact.brands.map((brand) => (
              <Typography key={brand} variant="subtitle2" sx={{ mb: 0.5 }}>
                {brand}
              </Typography>
            ))}
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", display: "block", mt: 2 }}>
              {contact.operatingAddress}
            </Typography>
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", display: "block", mt: 1 }}>
              {contact.registeredAddress}
            </Typography>
          </Grid>

          {footerCategories.map((category) => (
            <Grid key={category} size={{ xs: 6, sm: 4, md: 2 }}>
              <FooterColumn
                title={columnTitles[category]}
                labels={columnItems[category]}
                locale={locale}
                category={category}
              />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", my: 4 }} />

        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", mb: 2, display: "block" }}>
          {legal.riskWarning}
        </Typography>
        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", mb: 2, display: "block" }}>
          {legal.regulation}
        </Typography>
        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", mb: 2, display: "block" }}>
          {legal.services} {legal.age} {legal.restricted}
        </Typography>

        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)", mt: 2, display: "block" }}>
          © {year} {legal.copyright}
        </Typography>
      </Container>
    </Box>
  );
}
