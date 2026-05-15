import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { brandSurface } from "@/theme/surfaces";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { localePath } from "@/lib/routes";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export default function ProfessionalHomeSection({ dict, locale }: Props) {
  const { homeProfessional } = dict;
  const professionalHref = localePath(locale, "/professional");

  return (
    <Box
      component="section"
      id="professional"
      aria-labelledby="home-professional-heading"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: brandSurface.bg,
        color: brandSurface.fg,
      }}
    >
      <Container maxWidth="lg">
        <Chip
          label={homeProfessional.badge}
          size="small"
          variant="outlined"
          sx={{
            mb: 2,
            bgcolor: "rgba(255,255,255,0.12)",
            color: "inherit",
            borderColor: "rgba(255,255,255,0.35)",
          }}
        />
        <Typography
          id="home-professional-heading"
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ maxWidth: 720 }}
        >
          {homeProfessional.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: 720, lineHeight: 1.8 }}>
          {homeProfessional.description}
        </Typography>

        <Grid container spacing={2} sx={{ mb: 4 }}>
          {homeProfessional.highlights.map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  bgcolor: "rgba(255,255,255,0.08)",
                  color: "inherit",
                  border: 1,
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                <CardContent>
                  <Typography variant="subtitle1" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.88 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Link href={professionalHref} style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large" sx={brandSurface.ctaContained}>
            {homeProfessional.cta}
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
