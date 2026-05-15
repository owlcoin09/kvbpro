import type { NavCategory } from "./navigation";

export type FooterLink = {
  category: NavCategory;
  slug: string;
  href?: string;
};

export const footerLinks: Record<NavCategory, FooterLink[]> = {
  products: [
    { category: "products", slug: "forex" },
    { category: "products", slug: "commodities" },
    { category: "products", slug: "indices" },
    { category: "products", slug: "shares" },
    { category: "products", slug: "cryptocurrencies" },
  ],
  trading: [
    { category: "trading", slug: "account-types" },
    { category: "trading", slug: "deposit-withdrawal" },
    { category: "trading", slug: "leverage-margin" },
    { category: "trading", slug: "negative-balance-protection" },
    { category: "trading", slug: "metatrader-4" },
    { category: "trading", slug: "metatrader-5" },
    { category: "trading", slug: "kvb-desktop" },
    { category: "trading", slug: "kvb-app" },
    { category: "trading", slug: "actstrade" },
    { category: "trading", slug: "copy-trading" },
  ],
  about: [
    { category: "about", slug: "who-we-are" },
    { category: "about", slug: "license" },
    { category: "about", slug: "awards" },
    { category: "about", slug: "media" },
    { category: "about", slug: "company-blog" },
    { category: "about", slug: "esg" },
    { category: "about", slug: "join-us" },
    { category: "about", slug: "contact-us" },
    { category: "about", slug: "legal-documents" },
    { category: "about", slug: "announcements" },
  ],
};
