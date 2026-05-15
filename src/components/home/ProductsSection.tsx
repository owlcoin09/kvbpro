import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { productImages } from "@/data/media";
import type { Dictionary } from "@/i18n/types";

type Props = { dict: Dictionary };

export default function ProductsSection({ dict }: Props) {
  const { markets } = dict;

  return (
    <Box component="section" id="products" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: "center" }}>
          {markets.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center", mb: 5, maxWidth: 720, mx: "auto" }}
        >
          {markets.description}
        </Typography>

        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {markets.products.map((product, index) => (
            <Grid key={product.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  border: 1,
                  borderColor: "divider",
                  transition: "box-shadow 0.2s",
                  "&:hover": { boxShadow: 4 },
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
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
                      src={productImages[index]}
                      alt={product.name}
                      sx={{ width: 48, height: 48, display: "block" }}
                    />
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", mt: 4, textAlign: "center" }}
        >
          {markets.disclaimer}
        </Typography>
      </Container>
    </Box>
  );
}
