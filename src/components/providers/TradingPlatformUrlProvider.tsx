"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { resolveTradingPlatformUrl, TRADING_PLATFORM_URL_DEFAULT } from "@/config/urls";

const TradingPlatformUrlContext = createContext(TRADING_PLATFORM_URL_DEFAULT);

export function TradingPlatformUrlProvider({ children }: { children: React.ReactNode }) {
  const [url, setUrl] = useState(TRADING_PLATFORM_URL_DEFAULT);

  useEffect(() => {
    setUrl(resolveTradingPlatformUrl(window.location.hostname));
  }, []);

  return (
    <TradingPlatformUrlContext.Provider value={url}>{children}</TradingPlatformUrlContext.Provider>
  );
}

export function useTradingPlatformUrl() {
  return useContext(TradingPlatformUrlContext);
}
