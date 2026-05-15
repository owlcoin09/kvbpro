export const NAV_CATEGORIES = ["products", "trading", "about"] as const;

export type NavCategory = (typeof NAV_CATEGORIES)[number];

export type NavChild = {
  slug: string;
};

export type NavGroup = {
  id: NavCategory | "home" | "professional";
  href?: string;
  children?: NavChild[];
};

export const NAV_GROUPS: NavGroup[] = [
  { id: "home", href: "/" },
  {
    id: "products",
    children: [
      { slug: "forex" },
      { slug: "commodities" },
      { slug: "indices" },
      { slug: "shares" },
      { slug: "cryptocurrencies" },
    ],
  },
  {
    id: "trading",
    children: [
      { slug: "account-types" },
      { slug: "deposit-withdrawal" },
      { slug: "leverage-margin" },
      { slug: "negative-balance-protection" },
      { slug: "metatrader-4" },
      { slug: "metatrader-5" },
      { slug: "kvb-desktop" },
      { slug: "kvb-app" },
      { slug: "actstrade" },
      { slug: "copy-trading" },
    ],
  },
  {
    id: "about",
    children: [
      { slug: "who-we-are" },
      { slug: "license" },
      { slug: "awards" },
      { slug: "media" },
      { slug: "company-blog" },
      { slug: "esg" },
      { slug: "join-us" },
      { slug: "contact-us" },
      { slug: "legal-documents" },
      { slug: "announcements" },
    ],
  },
];

export function getPagePath(category: NavCategory, slug: string) {
  return `/${category}/${slug}`;
}

export function isNavCategory(value: string): value is NavCategory {
  return (NAV_CATEGORIES as readonly string[]).includes(value);
}

export function getAllPageParams() {
  return NAV_GROUPS.flatMap((group) => {
    if (!group.children || group.id === "home") {
      return [];
    }
    return group.children.map((child) => ({
      category: group.id as NavCategory,
      slug: child.slug,
    }));
  });
}
