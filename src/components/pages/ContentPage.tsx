import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PageBreadcrumbs from "@/components/layout/PageBreadcrumbs";
import type { NavCategory } from "@/data/navigation";
import type { Locale } from "@/i18n/config";
import type { PageContent } from "@/i18n/pages/types";
import type { Dictionary } from "@/i18n/types";
import { TRADING_PLATFORM_URL } from "@/config/urls";
import { buildContentBreadcrumbs } from "@/lib/structured-data";
import { localePath } from "@/lib/routes";

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

export default function ContentPage({ page, dict, locale, category, slug }: Props) {
  const breadcrumbs = buildContentBreadcrumbs(dict, locale, category, slug);
  const hasRichContent =
    Boolean(page.sections?.length) ||
    Boolean(page.features?.length) ||
    Boolean(page.awards?.length) ||
    Boolean(page.mediaItems?.length) ||
    Boolean(page.bullets?.length) ||
    Boolean(page.contacts?.length) ||
    Boolean(page.links?.length);

  return (
    <>
      <PageBreadcrumbs items={breadcrumbs} ariaLabel={dict.nav.breadcrumbAria} />
      <Box
        component="section"
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" sx={{ fontWeight: 500, mb: 2 }}>
            {page.title}
          </Typography>
          <Typography variant="h6" component="p" sx={{ opacity: 0.9, maxWidth: 720, fontWeight: 400 }}>
            {page.description}
          </Typography>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {page.image && page.body.length > 0 ? (
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              sx={{ alignItems: { md: "flex-start" }, mb: hasRichContent ? 6 : 0 }}
            >
              <Box
                sx={{
                  flexShrink: 0,
                  width: { xs: "100%", md: 420 },
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
                  width={840}
                  height={480}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  priority
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                {page.body.map((paragraph) => (
                  <Typography
                    key={paragraph.slice(0, 48)}
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.85 }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            </Stack>
          ) : (
            page.body.map((paragraph) => (
              <Typography
                key={paragraph.slice(0, 48)}
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, lineHeight: 1.85 }}
              >
                {paragraph}
              </Typography>
            ))
          )}

          {page.sections?.map((section) => (
            <SectionBlock
              key={section.title}
              title={section.title}
              body={section.body}
              image={section.image}
              alt={section.title}
            />
          ))}

          {page.featureTitle && page.features?.length ? (
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
                {page.featureTitle}
              </Typography>
              <Grid container spacing={3}>
                {page.features.map((feature) => (
                  <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 3 }}>
                    <Card elevation={1} sx={{ height: "100%" }}>
                      <CardContent>
                        {feature.image ? (
                          <Box
                            sx={{
                              width: 64,
                              height: 64,
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
                              sx={{ width: 56, height: 56, objectFit: "contain" }}
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

          {page.awards?.length ? (
            <Grid container spacing={2}>
              {page.awards.map((award) => (
                <Grid key={`${award.title}-${award.issuer}`} size={{ xs: 6, sm: 4, md: 3 }}>
                  <Card elevation={1} sx={{ height: "100%", textAlign: "center" }}>
                    <CardContent sx={{ p: 2 }}>
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: "1",
                          mb: 1.5,
                        }}
                      >
                        <Image
                          src={award.image}
                          alt={award.title}
                          fill
                          sizes="(max-width: 600px) 50vw, 25vw"
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                      <Typography variant="subtitle2" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {award.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
                        {award.issuer}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : null}

          {page.mediaItems?.length ? (
            <Grid container spacing={3}>
              {page.mediaItems.map((item) => (
                <Grid key={item.title} size={{ xs: 12, md: 6 }}>
                  <Card elevation={1} sx={{ height: "100%", overflow: "hidden" }}>
                    <Box sx={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <CardContent>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        {item.excerpt}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : null}

          {page.bulletTitle && page.bullets?.length ? (
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                {page.bulletTitle}
              </Typography>
              <List sx={{ listStyleType: "disc", pl: 3 }}>
                {page.bullets.map((item) => (
                  <ListItem key={item} sx={{ display: "list-item", py: 0.5, px: 0 }}>
                    <ListItemText
                      primary={item}
                      slotProps={{ primary: { variant: "body1", color: "text.secondary" } }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          ) : null}

          {page.contacts?.length ? (
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {page.contacts.map((field) => (
                <Grid key={field.label} size={{ xs: 12, sm: 4 }}>
                  <Card elevation={1} sx={{ height: "100%" }}>
                    <CardContent>
                      <Typography variant="overline" color="primary" sx={{ display: "block" }} gutterBottom>
                        {field.label}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        {field.value}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : null}

          {page.links?.length ? (
            <Stack spacing={1.5} sx={{ mb: 4 }}>
              {page.links.map((doc) => (
                <Link
                  key={doc.href}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: "1rem" }}
                >
                  {doc.label}
                </Link>
              ))}
            </Stack>
          ) : null}

          <Button
            variant="contained"
            color="primary"
            size="large"
            href={TRADING_PLATFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 2 }}
          >
            {dict.nav.openAccount}
          </Button>
        </Container>
      </Box>
    </>
  );
}
