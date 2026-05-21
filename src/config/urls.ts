/** kvbhub 域名使用的开户与交易平台 */
export const TRADING_PLATFORM_URL_KVBHUB = "https://yzwl4j59q.plusiaa.com";

/** 默认开户与交易平台 */
export const TRADING_PLATFORM_URL_DEFAULT = "https://qudbwiz7a.plusiaa.com";

/** 根据当前访问域名解析交易平台跳转链接 */
export function resolveTradingPlatformUrl(hostname: string): string {
  if (hostname.includes("kvbhub")) {
    return TRADING_PLATFORM_URL_KVBHUB;
  }
  return process.env.NEXT_PUBLIC_TRADING_PLATFORM_URL ?? TRADING_PLATFORM_URL_DEFAULT;
}
