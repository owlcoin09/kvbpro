import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TRADING_PLATFORM_URL } from "@/config/urls";
import { brand } from "@/theme/brand";
import { brandSurface } from "@/theme/surfaces";
import type { Dictionary } from "@/i18n/types";

type Props = { dict: Dictionary };

export default function CtaSection({ dict }: Props) {
  const { cta } = dict;

  return (
    <Box
      component="section"
      id="trade"
      sx={{
        py: { xs: 8, md: 10 },
        position: "relative",
        overflow: "hidden",
        color: "common.white",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            bgcolor: `${brand.navy}D9`,
          },
        }}
      >
        <Image
          src="/assets/download-bg.jpg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          aria-hidden
        />
      </Box>
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Typography variant="h3" component="h2" gutterBottom>
          {cta.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, opacity: 0.95 }}>
          {cta.description}
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          href={TRADING_PLATFORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={brandSurface.ctaContained}
        >
          {cta.button}
        </Button>
      </Container>
    </Box>
  );
}
