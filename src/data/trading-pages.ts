export const TRADING_POLICY_SLUGS = [
  "account-types",
  "deposit-withdrawal",
  "leverage-margin",
  "negative-balance-protection",
] as const;

export type TradingPolicySlug = (typeof TRADING_POLICY_SLUGS)[number];

export function isTradingPolicySlug(slug: string): slug is TradingPolicySlug {
  return (TRADING_POLICY_SLUGS as readonly string[]).includes(slug);
}
