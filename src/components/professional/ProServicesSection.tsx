import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SpeedIcon from "@mui/icons-material/Speed";
import HubIcon from "@mui/icons-material/Hub";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import type { Dictionary } from "@/i18n/types";
import type { SvgIconComponent } from "@mui/icons-material";

type Props = { dict: Dictionary };

const serviceIcons: SvgIconComponent[] = [
  SupportAgentIcon,
  SpeedIcon,
  HubIcon,
  SavingsIcon,
  AccountBalanceWalletIcon,
];

export default function ProServicesSection({ dict }: Props) {
  const { services } = dict.professional;

  return (
    <Box component="section" id="services" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 }, maxWidth: 720, mx: "auto" }}>
          <Typography variant="h3" component="h2" gutterBottom>
            {services.sectionTitle}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {services.sectionSubtitle}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.items.map((service, index) => {
            const Icon = serviceIcons[index] ?? SupportAgentIcon;
            return (
              <Grid key={service.title} size={{ xs: 12, md: index < 2 ? 6 : 4 }}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    border: 1,
                    borderColor: "divider",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                    "&:hover": {
                      boxShadow: 4,
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2,
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                      }}
                    >
                      <Icon fontSize="medium" />
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {service.description}
                    </Typography>
                    <List dense disablePadding>
                      {service.highlights.map((highlight) => (
                        <ListItem key={highlight} disableGutters sx={{ py: 0.25 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleOutlinedIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText
                            primary={highlight}
                            slotProps={{ primary: { variant: "body2" } }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
