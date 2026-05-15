"use client";

import { useEffect, useState } from "react";
import NextLink from "@/components/common/NextLink";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { localePath } from "@/lib/routes";

const STORAGE_KEY = "kvb-professional-welcome-seen";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export default function ProfessionalWelcomeDialog({ dict, locale }: Props) {
  const [open, setOpen] = useState(false);
  const { homeProfessional } = dict;
  const { welcome } = homeProfessional;
  const professionalHref = localePath(locale, "/professional");

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "1") {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore quota / private mode
    }
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={dismiss}
      maxWidth="sm"
      fullWidth
      aria-labelledby="professional-welcome-title"
    >
      <DialogTitle id="professional-welcome-title" sx={{ pb: 1 }}>
        <Chip label={homeProfessional.badge} size="small" color="primary" sx={{ mb: 1.5 }} />
        <Typography variant="h5" component="span" sx={{ display: "block" }}>
          {welcome.title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" color="text.secondary">
          {welcome.description}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3, pt: 0, flexDirection: { xs: "column", sm: "row" }, gap: 1 }}>
        <Button onClick={dismiss} color="inherit" sx={{ order: { xs: 2, sm: 1 } }}>
          {welcome.dismiss}
        </Button>
        <Box sx={{ flex: 1, display: { xs: "none", sm: "block" } }} />
        <Button
          component={NextLink}
          href={professionalHref}
          variant="contained"
          color="primary"
          onClick={dismiss}
          sx={{ order: { xs: 1, sm: 2 }, width: { xs: "100%", sm: "auto" } }}
        >
          {welcome.cta}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
