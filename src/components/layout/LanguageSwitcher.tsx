"use client";

import { usePathname } from "next/navigation";
import NextLink from "@/components/common/NextLink";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import { localeNames, locales, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
};

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  const switchPath = (nextLocale: Locale) => {
    const segments = pathname.split("/");
    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = nextLocale;
      return segments.join("/") || `/${nextLocale}`;
    }
    return `/${nextLocale}`;
  };

  return (
    <>
      <Button
        size="small"
        color="inherit"
        startIcon={<LanguageIcon fontSize="small" />}
        onClick={(e) => setAnchor(e.currentTarget)}
        aria-haspopup="true"
        aria-expanded={Boolean(anchor)}
        aria-label="Language"
      >
        {localeNames[locale]}
      </Button>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
        {locales.map((loc) => (
          <MenuItem
            key={loc}
            component={NextLink}
            href={switchPath(loc)}
            selected={loc === locale}
            onClick={() => setAnchor(null)}
          >
            {localeNames[loc]}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
