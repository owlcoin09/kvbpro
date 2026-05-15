"use client";

import Image, { type ImageProps } from "next/image";
import Box from "@mui/material/Box";

type BrandLogoProps = Omit<ImageProps, "src" | "alt"> & {
  alt?: string;
  /** 始终显示为浅色（用于 Footer 等深色背景） */
  onDark?: boolean;
};

export default function BrandLogo({
  alt = "KVB",
  width = 120,
  height = 32,
  onDark = false,
  className,
  style,
  ...props
}: BrandLogoProps) {
  return (
    <Box
      className={onDark ? undefined : ["brand-logo", className].filter(Boolean).join(" ")}
      sx={{
        display: "inline-flex",
        lineHeight: 0,
        ...(onDark ? { filter: "brightness(0) invert(1)" } : {}),
      }}
    >
      <Image
        src="/assets/logo.svg"
        alt={alt}
        width={width}
        height={height}
        priority
        style={style}
        {...props}
      />
    </Box>
  );
}
