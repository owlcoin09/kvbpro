"use client";

import Button, { type ButtonProps } from "@mui/material/Button";
import { useTradingPlatformUrl } from "@/components/providers/TradingPlatformUrlProvider";

type Props = ButtonProps<"a"> & {
  children: React.ReactNode;
};

/** 开户链接：按当前域名在 kvbhub / 默认平台间切换 */
export default function TradingPlatformButton({ children, ...props }: Props) {
  const url = useTradingPlatformUrl();

  return (
    <Button
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      suppressHydrationWarning
      {...props}
    >
      {children}
    </Button>
  );
}
