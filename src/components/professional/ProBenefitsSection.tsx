import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import type { Dictionary } from "@/i18n/types";

type Props = { dict: Dictionary };

export default function ProBenefitsSection({ dict }: Props) {
  const { benefits } = dict.professional;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 }, maxWidth: 640, mx: "auto" }}>
          <Typography variant="h3" component="h2" gutterBottom>
            {benefits.sectionTitle}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {benefits.sectionSubtitle}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {benefits.items.map((item, index) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  textAlign: "center",
                  border: 1,
                  borderColor: "divider",
                }}
              >
                <Typography
                  variant="h3"
                  component="span"
                  color="primary"
                  sx={{ fontWeight: 700, display: "block", mb: 1 }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
