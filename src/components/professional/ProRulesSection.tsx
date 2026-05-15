import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import type { Dictionary } from "@/i18n/types";

type Props = { dict: Dictionary };

const perkIcons = [SpeedOutlinedIcon, GroupsOutlinedIcon];

export default function ProRulesSection({ dict }: Props) {
  const { rules } = dict.professional;

  return (
    <Box
      component="section"
      id="how-to-join"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 }, maxWidth: 720, mx: "auto" }}>
          <Typography variant="h3" component="h2" gutterBottom>
            {rules.sectionTitle}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {rules.sectionSubtitle}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={0} sx={{ height: "100%", border: 1, borderColor: "divider" }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <TrendingUpOutlinedIcon color="primary" />
                  <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1 }}>
                    {rules.eligibilityLabel}
                  </Typography>
                </Box>
                <Chip
                  label="USD 500+"
                  color="primary"
                  size="small"
                  sx={{ mb: 2, fontWeight: 600 }}
                />
                <Typography variant="h6" component="p" gutterBottom>
                  {rules.eligibility}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={0} sx={{ height: "100%", border: 1, borderColor: "divider" }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <SupportAgentOutlinedIcon color="primary" />
                  <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1 }}>
                    {rules.howToLabel}
                  </Typography>
                </Box>
                <Typography variant="h6" component="p">
                  {rules.howTo}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                border: 1,
                borderColor: "divider",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                {rules.perksLabel}
              </Typography>
              <List disablePadding sx={{ mb: 3 }}>
                {rules.perks.map((perk, index) => {
                  const Icon = perkIcons[index] ?? CheckCircleOutlinedIcon;
                  return (
                    <ListItem key={perk} disableGutters sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <Icon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={perk}
                        slotProps={{ primary: { variant: "body1", sx: { fontWeight: 500 } } }}
                      />
                    </ListItem>
                  );
                })}
              </List>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {rules.community}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
