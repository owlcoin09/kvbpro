import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { partnerImage } from "@/data/media";
import type { Dictionary } from "@/i18n/types";

const PARTNER_PROGRAM_URL = "https://www.kvbplus.com/prime/campaign/partner-program";

type Props = { dict: Dictionary };

export default function PartnerSection({ dict }: Props) {
  const { partner } = dict;

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              {partner.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {partner.description}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: "block" }}>
              {partner.disclaimer}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href={PARTNER_PROGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {partner.cta}
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Image
              src={partnerImage}
              alt={partner.title}
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", borderRadius: 16 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
