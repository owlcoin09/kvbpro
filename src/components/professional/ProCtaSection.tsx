import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { TRADING_PLATFORM_URL } from "@/config/urls";
import { brandSurface } from "@/theme/surfaces";
import type { Dictionary } from "@/i18n/types";

type Props = { dict: Dictionary };

export default function ProCtaSection({ dict }: Props) {
  const { cta } = dict.professional;

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: brandSurface.bg,
        color: brandSurface.fg,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h2" gutterBottom>
          {cta.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, lineHeight: 1.8 }}>
          {cta.description}
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ justifyContent: "center" }}
        >
          <Button
            variant="contained"
            size="large"
            href={TRADING_PLATFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={brandSurface.ctaContained}
          >
            {cta.primary}
          </Button>
          <Button
            variant="outlined"
            size="large"
            href={TRADING_PLATFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={brandSurface.ctaOutlined}
          >
            {cta.secondary}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
