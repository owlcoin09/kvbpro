import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { brandSurface } from "@/theme/surfaces";
import type { Dictionary } from "@/i18n/types";

type Props = { dict: Dictionary };

export default function ProHeroSection({ dict }: Props) {
  const { hero } = dict.professional;

  return (
    <Box
      component="section"
      aria-labelledby="pro-hero-heading"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: brandSurface.bg,
        color: brandSurface.fg,
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          backgroundImage: "url(/assets/index-des-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Chip
          label={hero.badge}
          size="small"
          sx={{
            mb: 3,
            bgcolor: "rgba(255,255,255,0.15)",
            color: "inherit",
            borderColor: "rgba(255,255,255,0.35)",
          }}
          variant="outlined"
        />
        <Typography
          id="pro-hero-heading"
          variant="h2"
          component="h1"
          sx={{ fontWeight: 400, mb: 1, maxWidth: 720 }}
        >
          {hero.headline}
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 2, fontWeight: 500, opacity: 0.95 }}>
          {hero.subheadline}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, opacity: 0.88, maxWidth: 640, lineHeight: 1.8 }}>
          {hero.description}
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="contained"
            size="large"
            href="#contact"
            sx={brandSurface.ctaContained}
          >
            {hero.ctaPrimary}
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="#services"
            sx={brandSurface.ctaOutlined}
          >
            {hero.ctaSecondary}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
