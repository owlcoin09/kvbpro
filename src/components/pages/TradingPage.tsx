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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

function SectionBlock({
  title,
  body,
  image,
  alt,
}: {
  title: string;
  body: string[];
  image?: string;
  alt: string;
}) {
  return (
    <Box sx={{ mb: { xs: 6, md: 8 } }}>
      <Stack
        direction={{ xs: "column", md: image ? "row" : "column" }}
        spacing={4}
        sx={{ alignItems: { md: image ? "center" : "stretch" } }}
      >
        {image ? (
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: "100%", md: 400 },
              borderRadius: 2,
              overflow: "hidden",
              bgcolor: "background.default",
              border: 1,
              borderColor: "divider",
            }}
          >
            <Image
              src={image}
              alt={alt}
              width={800}
              height={500}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Box>
        ) : null}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
            {title}
          </Typography>
          {body.map((paragraph) => (
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
    </Box>
  );
}

export default function TradingPage({ page, dict, locale, category, slug }: Props) {
  const { nav, tradingPage } = dict;
  const tradingNav = nav.groups.find((g) => g.id === "trading");
  const tabItems = tradingNav?.children.filter((child) => !child.href) ?? [];
  const breadcrumbs = buildContentBreadcrumbs(dict, locale, category, slug);

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

      {tabItems.length > 0 ? (
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
              {tabItems.map((child) => (
                <Tab
                  key={child.slug}
                  label={child.label}
                  value={child.slug}
                  component={NextLink}
                  href={pagePath(locale, "trading", child.slug)}
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
            direction={{ xs: "column", md: page.image ? "row" : "column" }}
            spacing={4}
            sx={{ alignItems: { md: "flex-start" }, mb: page.comparisonTable || page.sections?.length ? 6 : 0 }}
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

          {page.comparisonTable ? (
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
                {page.comparisonTable.title ?? tradingPage.compareAccounts}
              </Typography>
              <TableContainer component={Paper} variant="outlined" sx={{ overflowX: "auto" }}>
                <Table size="small">
                  <TableHead>
                    <TableRow sx={{ bgcolor: "action.hover" }}>
                      <TableCell sx={{ fontWeight: 600, minWidth: 160 }} />
                      {page.comparisonTable.columns.map((col) => (
                        <TableCell key={col.id} align="center" sx={{ fontWeight: 600, minWidth: 120 }}>
                          {col.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {page.comparisonTable.rows.map((row) => (
                      <TableRow key={row.label} hover>
                        <TableCell sx={{ fontWeight: 500, color: "text.secondary" }}>
                          {row.label}
                        </TableCell>
                        {page.comparisonTable!.columns.map((col) => (
                          <TableCell key={col.id} align="center">
                            {row.values[col.id] ?? "—"}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          ) : null}

          {page.sections?.map((section) => (
            <SectionBlock
              key={section.title}
              title={section.title}
              body={section.body}
              image={section.image}
              alt={section.title}
            />
          ))}

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

          {page.featureTitle && page.features?.length ? (
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
                {page.featureTitle}
              </Typography>
              <Grid container spacing={3}>
                {page.features.map((feature) => (
                  <Grid key={feature.title} size={{ xs: 12, sm: 6 }}>
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

          {page.bulletTitle && page.bullets?.length ? (
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                {page.bulletTitle}
              </Typography>
              <Stack component="ul" spacing={1} sx={{ pl: 2.5, m: 0 }}>
                {page.bullets.map((item) => (
                  <Typography
                    key={item}
                    component="li"
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.85 }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Box>
          ) : null}

          {page.faqs?.items.length ? (
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                {page.faqs.title ?? tradingPage.faqs}
              </Typography>
              {page.faqs.items.map((item) => (
                <Accordion
                  key={item.question}
                  elevation={0}
                  sx={{
                    border: 1,
                    borderColor: "divider",
                    mb: 1,
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.85 }}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          ) : null}

          {page.footnote ? (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 4, lineHeight: 1.75, whiteSpace: "pre-line" }}
            >
              {page.footnote}
            </Typography>
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
