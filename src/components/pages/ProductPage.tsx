import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import NextLink from "@/components/common/NextLink";
import PageBreadcrumbs from "@/components/layout/PageBreadcrumbs";
import type { NavCategory } from "@/data/navigation";
import type { Locale } from "@/i18n/config";
import type { PageContent } from "@/i18n/pages/types";
import type { Dictionary } from "@/i18n/types";
import { TRADING_PLATFORM_URL } from "@/config/urls";
import { buildContentBreadcrumbs } from "@/lib/structured-data";
import { pagePath } from "@/lib/routes";

type Props = {
  page: PageContent;
  dict: Dictionary;
  locale: Locale;
  category: NavCategory;
  slug: string;
};

export default function ProductPage({ page, dict, locale, category, slug }: Props) {
  const breadcrumbs = buildContentBreadcrumbs(dict, locale, category, slug);
  const { nav, productsPage } = dict;
  const productNav = nav.groups.find((g) => g.id === "products");

  return (
    <>
      <PageBreadcrumbs items={breadcrumbs} ariaLabel={dict.nav.breadcrumbAria} />
      <Box
        component="section"
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: { xs: 5, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" sx={{ fontWeight: 500, mb: 2 }}>
            {page.title}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ opacity: 0.9, maxWidth: 720, fontWeight: 400 }}
          >
            {page.description}
          </Typography>
        </Container>
      </Box>

      {productNav ? (
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            position: "sticky",
            top: { xs: 56, md: 72 },
            zIndex: 10,
          }}
        >
          <Container maxWidth="lg">
            <Tabs
              value={slug}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{ minHeight: 48 }}
            >
              {productNav.children.map((child) => (
                <Tab
                  key={child.slug}
                  label={child.label}
                  value={child.slug}
                  component={NextLink}
                  href={pagePath(locale, "products", child.slug)}
                  sx={{ minHeight: 48, textTransform: "none", fontWeight: 500 }}
                />
              ))}
            </Tabs>
          </Container>
        </Box>
      ) : null}

      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{ alignItems: { md: "flex-start" }, mb: 6 }}
          >
            {page.image ? (
              <Box
                sx={{
                  flexShrink: 0,
                  width: { xs: "100%", md: 360 },
                  borderRadius: 2,
                  overflow: "hidden",
                  bgcolor: "background.default",
                  border: 1,
                  borderColor: "divider",
                }}
              >
                <Image
                  src={page.image}
                  alt={page.title}
                  width={720}
                  height={420}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  priority
                />
              </Box>
            ) : null}
            <Box sx={{ flex: 1 }}>
              {page.introTitle ? (
                <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                  {page.introTitle}
                </Typography>
              ) : null}
              {page.body.map((paragraph) => (
                <Typography
                  key={paragraph.slice(0, 48)}
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2, lineHeight: 1.85 }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
          </Stack>

          {page.symbolListTitle && page.symbols?.length ? (
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
                {page.symbolListTitle}
              </Typography>
              <TableContainer component={Paper} variant="outlined">
                <Table size="medium">
                  <TableHead>
                    <TableRow sx={{ bgcolor: "action.hover" }}>
                      <TableCell sx={{ fontWeight: 600 }}>{productsPage.symbolColumn}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {page.symbols.map((symbol) => (
                      <TableRow key={symbol} hover>
                        <TableCell>
                          <Typography variant="body1" sx={{ fontWeight: 500, fontFamily: "monospace" }}>
                            {symbol}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          ) : null}

          {page.tradingSessions ? (
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                {page.tradingSessions.title}
              </Typography>
              {page.tradingSessions.body.map((paragraph) => (
                <Typography
                  key={paragraph.slice(0, 48)}
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 1.5, lineHeight: 1.85 }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
          ) : null}

          {page.specifications ? (
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
                {page.specifications.title}
              </Typography>
              <Stack spacing={3}>
                {page.specifications.groups.map((group) => (
                  <TableContainer
                    key={group.name ?? group.rows[0]?.label}
                    component={Paper}
                    variant="outlined"
                  >
                    {group.name ? (
                      <Typography
                        variant="subtitle1"
                        sx={{ px: 2, pt: 2, pb: 1, fontWeight: 600 }}
                      >
                        {group.name}
                      </Typography>
                    ) : null}
                    <Table size="small">
                      <TableBody>
                        {group.rows.map((row) => (
                          <TableRow key={row.label}>
                            <TableCell sx={{ width: "40%", fontWeight: 500, color: "text.secondary" }}>
                              {row.label}
                            </TableCell>
                            <TableCell>{row.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ))}
              </Stack>
            </Box>
          ) : null}

          {page.footnote ? (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 6, lineHeight: 1.75, whiteSpace: "pre-line" }}
            >
              {page.footnote}
            </Typography>
          ) : null}

          {page.featureTitle && page.features?.length ? (
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
                {page.featureTitle}
              </Typography>
              <Grid container spacing={3}>
                {page.features.map((feature) => (
                  <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Card elevation={0} sx={{ height: "100%", border: 1, borderColor: "divider" }}>
                      <CardContent>
                        {feature.image ? (
                          <Box
                            sx={{
                              width: 56,
                              height: 56,
                              mb: 2,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Box
                              component="img"
                              src={feature.image}
                              alt={feature.title}
                              sx={{ width: 48, height: 48, objectFit: "contain" }}
                            />
                          </Box>
                        ) : null}
                        <Typography variant="h6" component="h3" gutterBottom sx={{ fontSize: "1rem" }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : null}

          <Button
            variant="contained"
            color="primary"
            size="large"
            href={TRADING_PLATFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {nav.openAccount}
          </Button>
        </Container>
      </Box>
    </>
  );
}
