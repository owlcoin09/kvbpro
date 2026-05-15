import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { featureImages } from "@/data/media";
import type { Dictionary } from "@/i18n/types";

type Props = { dict: Dictionary };

export default function FeaturesSection({ dict }: Props) {
  const { features } = dict;

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {features.items.map((feature, index) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card elevation={1} sx={{ height: "100%", textAlign: "center" }}>
                <CardContent>
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      mx: "auto",
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      bgcolor: "background.default",
                    }}
                  >
                    <Box
                      component="img"
                      src={featureImages[index]}
                      alt={feature.title}
                      sx={{ width: 48, height: 48, display: "block" }}
                    />
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
