"use client";

import { useState } from "react";
import Link from "next/link";
import NextLink from "@/components/common/NextLink";
import BrandLogo from "@/components/layout/BrandLogo";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import ThemeModeToggle from "@/components/layout/ThemeModeToggle";
import type { NavCategory } from "@/data/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { TRADING_PLATFORM_URL } from "@/config/urls";
import { localePath, navChildPath, pagePath } from "@/lib/routes";

type HeaderProps = {
  dict: Dictionary;
  locale: Locale;
};

type MenuAnchor = {
  id: NavCategory;
  element: HTMLElement;
};

export default function Header({ dict, locale }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<MenuAnchor | null>(null);
  const { nav } = dict;
  const homeHref = localePath(locale, "/");
  const professionalHref = localePath(locale, "/professional");
  const groups = nav.groups;

  const openMenu = (id: NavCategory, element: HTMLElement) => {
    setMenuAnchor({ id, element });
  };

  const closeMenu = () => setMenuAnchor(null);

  const getGroup = (category: NavCategory) => groups.find((g) => g.id === category);

  return (
    <>
      <AppBar position="sticky" color="default" sx={{ bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ gap: 1, minHeight: { xs: 56, md: 72 } }}>
            <Link href={homeHref} aria-label={nav.homeAria}>
              <BrandLogo />
            </Link>

            <Box
              component="nav"
              aria-label={nav.mainNavAria}
              sx={{ display: { xs: "none", lg: "flex" }, gap: 0.25, flex: 1, ml: 1 }}
            >
              <Button component={NextLink} href={homeHref} color="inherit" size="small">
                {nav.home}
              </Button>
              <Button component={NextLink} href={professionalHref} color="inherit" size="small">
                {nav.professional}
              </Button>

              {groups.map((group) => (
                <Button
                  key={group.id}
                  color="inherit"
                  size="small"
                  endIcon={<KeyboardArrowDownIcon fontSize="small" />}
                  onClick={(e) => openMenu(group.id, e.currentTarget)}
                  aria-haspopup="true"
                  aria-expanded={menuAnchor?.id === group.id}
                >
                  {group.label}
                </Button>
              ))}
            </Box>

            <Menu
              anchorEl={menuAnchor?.element}
              open={Boolean(menuAnchor)}
              onClose={closeMenu}
              slotProps={{ paper: { sx: { minWidth: 220, mt: 0.5 } } }}
            >
              {menuAnchor
                ? (getGroup(menuAnchor.id)?.children ?? []).map((child) => (
                    <MenuItem
                      key={child.slug}
                      component={NextLink}
                      href={navChildPath(locale, menuAnchor.id, child)}
                      onClick={closeMenu}
                    >
                      {child.label}
                    </MenuItem>
                  ))
                : null}
            </Menu>

            <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 1, alignItems: "center" }}>
              <ThemeModeToggle labels={dict.theme} />
              <LanguageSwitcher locale={locale} />
              <Button
                variant="outlined"
                color="primary"
                component={NextLink}
                href={pagePath(locale, "about", "contact-us")}
              >
                {nav.contactUs}
              </Button>
              <Button
                variant="contained"
                color="primary"
                href={TRADING_PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {nav.openAccount}
              </Button>
            </Box>

            <Box sx={{ display: { lg: "none" }, ml: "auto", alignItems: "center", gap: 0.5 }}>
              <ThemeModeToggle labels={dict.theme} />
              <LanguageSwitcher locale={locale} />
              <IconButton edge="end" aria-label={nav.menuOpen} onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 300, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
            <IconButton aria-label={nav.menuClose} onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            <ListItemButton component={NextLink} href={homeHref} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary={nav.home} />
            </ListItemButton>
            <ListItemButton
              component={NextLink}
              href={professionalHref}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={nav.professional} />
            </ListItemButton>

            {groups.map((group) => (
              <Box key={group.id}>
                <ListSubheader sx={{ lineHeight: 2 }}>{group.label}</ListSubheader>
                {group.children.map((child) => (
                  <ListItemButton
                    key={child.slug}
                    component={NextLink}
                    href={navChildPath(locale, group.id, child)}
                    onClick={() => setDrawerOpen(false)}
                    sx={{ pl: 3 }}
                  >
                    <ListItemText primary={child.label} />
                  </ListItemButton>
                ))}
              </Box>
            ))}

            <ListItemButton
              component={NextLink}
              href={pagePath(locale, "about", "contact-us")}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={nav.contactUs} />
            </ListItemButton>
            <ListItemButton
              component="a"
              href={TRADING_PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={nav.openAccount} />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
