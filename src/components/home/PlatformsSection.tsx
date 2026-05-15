"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { TRADING_PLATFORM_URL } from "@/config/urls";
import { platformImages } from "@/data/media";
import { brand } from "@/theme/brand";
import type { Dictionary } from "@/i18n/types";

type Props = { dict: Dictionary };

export default function PlatformsSection({ dict }: Props) {
  const { tools } = dict;

  return (
    <Box
      component="section"
      id="platforms"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundImage: (theme) =>
          `linear-gradient(180deg, ${brand.navy}0F 0%, ${theme.palette.background.default} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: "center" }}>
          {tools.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center", mb: 6, maxWidth: 800, mx: "auto" }}
        >
          {tools.description}
        </Typography>

        <Grid container spacing={4}>
          {tools.platforms.map((platform, index) => (
            <Grid key={platform.name} size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: index % 2 === 0 ? "row" : "row-reverse",
                  },
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {platform.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {platform.description}
                  </Typography>
                  <Button
                    variant="text"
                    color="primary"
                    href={TRADING_PLATFORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tools.learnMore}
                  </Button>
                </Box>
                <Box
                  sx={{
                    flexShrink: 0,
                    width: { xs: "100%", sm: 200 },
                    maxWidth: 240,
                    mx: { xs: "auto", sm: 0 },
                  }}
                >
                  <Box
                    component="img"
                    src={platformImages[index]}
                    alt={platform.name}
                    sx={{ width: "100%", height: "auto", display: "block" }}
                  />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
