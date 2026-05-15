"use client";

import { useEffect, useMemo, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import CheckIcon from "@mui/icons-material/Check";
import { useColorScheme } from "@mui/material/styles";
import type { Dictionary } from "@/i18n/types";

type ThemeMode = "light" | "dark" | "system";

export default function ThemeModeToggle({
  labels,
}: {
  labels: Dictionary["theme"];
}) {
  const { mode, setMode } = useColorScheme();
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentMode = ((mounted ? mode : undefined) ?? "system") as ThemeMode;

  const icon = useMemo(() => {
    if (currentMode === "dark") return <Brightness4Icon fontSize="small" />;
    if (currentMode === "light") return <Brightness7Icon fontSize="small" />;
    return <SettingsBrightnessIcon fontSize="small" />;
  }, [currentMode]);

  const tooltip =
    currentMode === "system"
      ? labels.system
      : currentMode === "dark"
        ? labels.dark
        : labels.light;

  const selectMode = (next: ThemeMode) => {
    setMode(next);
    setAnchor(null);
  };

  return (
    <>
      <Tooltip title={tooltip}>
        <IconButton
          size="small"
          color="inherit"
          aria-label={labels.menuAria}
          aria-haspopup="true"
          aria-expanded={Boolean(anchor)}
          onClick={(e) => setAnchor(e.currentTarget)}
        >
          {icon}
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
        {(
          [
            { value: "system" as const, label: labels.system, icon: <SettingsBrightnessIcon fontSize="small" /> },
            { value: "light" as const, label: labels.light, icon: <Brightness7Icon fontSize="small" /> },
            { value: "dark" as const, label: labels.dark, icon: <Brightness4Icon fontSize="small" /> },
          ] as const
        ).map((item) => (
          <MenuItem key={item.value} selected={currentMode === item.value} onClick={() => selectMode(item.value)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
            {currentMode === item.value ? (
              <CheckIcon fontSize="small" sx={{ ml: 1, opacity: 0.7 }} />
            ) : null}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
