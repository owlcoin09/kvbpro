import { brand } from "./brand";

/** 品牌色块（Hero / CTA 等），不随暗色主题的 primary 变化 */
export const brandSurface = {
  bg: brand.navy,
  fg: "#FFFFFF",
  ctaContained: {
    bgcolor: "#FFFFFF",
    color: brand.navy,
    "&:hover": { bgcolor: brand.surfaceTint },
  },
  ctaOutlined: {
    borderColor: "#FFFFFF",
    color: "#FFFFFF",
    "&:hover": {
      borderColor: "#FFFFFF",
      bgcolor: "rgba(255,255,255,0.1)",
    },
  },
} as const;
