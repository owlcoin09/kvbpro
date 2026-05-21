import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TradingPlatformButton from "@/components/common/TradingPlatformButton";
import { brandSurface } from "@/theme/surfaces";
import { brand } from "@/theme/brand";
import type { Dictionary } from "@/i18n/types";
import HeroCampaignCarousel from "./HeroCampaignCarousel";

type Props = { dict: Dictionary };

export default function HeroSection({ dict }: Props) {
  const { hero } = dict;

  return (
    <Box
      component="section"
      aria-labelledby="hero-heading"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: brandSurface.bg,
        color: brandSurface.fg,
        pt: { xs: 6, md: 8 },
        pb: { xs: 6, md: 10 },
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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: 4, lg: 6 },
            alignItems: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Box sx={{ zIndex: 1 }}>
            <Typography
              id="hero-heading"
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 300,
                fontSize: { xs: "2.5rem", md: "3.25rem" },
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              {hero.headline}
              <Box component="br" sx={{ display: { xs: "none", sm: "block" } }} />
              <Box
                component="span"
                sx={{
                  display: "block",
                  fontWeight: 600,
                  mt: { xs: 0.5, sm: 0 },
                }}
              >
                {hero.subheadline}
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{ opacity: 0.9, maxWidth: 520, lineHeight: 1.8, mb: 4 }}
            >
              {hero.description}
            </Typography>
            <TradingPlatformButton
              variant="contained"
              size="large"
              sx={{
                ...brandSurface.ctaContained,
                px: 4,
                py: 1.25,
                fontWeight: 600,
              }}
            >
              {hero.ctaPrimary}
            </TradingPlatformButton>
          </Box>

          <Box
            sx={{
              position: "relative",
              display: { xs: "none", md: "block" },
              borderRadius: 2,
              overflow: "hidden",
              aspectRatio: "2 / 1",
              maxHeight: 420,
              boxShadow: `0 24px 48px ${brand.navyDark}80`,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(135deg, ${brand.navyLight}40 0%, transparent 60%)`,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <Box
              component="video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/assets/home-mt.png"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            >
              <source src="/assets/home.mp4" type="video/mp4" />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            bgcolor: "background.paper",
            color: "text.primary",
            borderRadius: 2,
            px: { xs: 2.5, md: 4 },
            py: { xs: 3, md: 4 },
            mx: { md: 0 },
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            {hero.campaigns.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {hero.campaigns.subtitle}
          </Typography>
          <HeroCampaignCarousel
            learnMore={hero.campaigns.learnMore}
            items={hero.campaigns.items}
          />
        </Box>
      </Container>
    </Box>
  );
}
