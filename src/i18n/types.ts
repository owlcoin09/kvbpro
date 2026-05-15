export type NavChildItem = {
  label: string;
  slug: string;
  /** Custom path (e.g. /professional); defaults to /{category}/{slug} */
  href?: string;
};

export type NavGroupItem = {
  id: "products" | "trading" | "about";
  label: string;
  children: NavChildItem[];
};

export type Dictionary = {
  site: {
    name: string;
    legalName: string;
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    home: string;
    professional: string;
    groups: NavGroupItem[];
    contactUs: string;
    openAccount: string;
    menuOpen: string;
    menuClose: string;
    homeAria: string;
    mainNavAria: string;
    breadcrumbAria: string;
  };
  theme: {
    light: string;
    dark: string;
    system: string;
    menuAria: string;
  };
  footer: {
    contactTitle: string;
    columns: {
      products: string;
      trading: string;
      about: string;
    };
    products: string[];
    trading: string[];
    about: string[];
  };
  hero: {
    headline: string;
    subheadline: string;
    description: string;
    ctaPrimary: string;
    campaigns: {
      title: string;
      subtitle: string;
      learnMore: string;
      items: { title: string; description: string }[];
    };
  };
  markets: {
    title: string;
    description: string;
    disclaimer: string;
    products: { name: string; description: string }[];
  };
  tools: {
    title: string;
    description: string;
    learnMore: string;
    platforms: { name: string; description: string }[];
  };
  features: {
    items: { title: string; description: string }[];
  };
  productsPage: {
    symbolColumn: string;
    tradingSessions: string;
    specifications: string;
    serverTime: string;
    footnote: string;
  };
  tradingPage: {
    compareAccounts: string;
    faqs: string;
  };
  partner: {
    title: string;
    description: string;
    disclaimer: string;
    cta: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  homeProfessional: {
    badge: string;
    title: string;
    description: string;
    cta: string;
    highlights: { title: string; description: string }[];
    welcome: {
      title: string;
      description: string;
      cta: string;
      dismiss: string;
    };
  };
  contact: {
    brands: string[];
    operatingAddress: string;
    registeredAddress: string;
  };
  legal: {
    riskWarning: string;
    regulation: string;
    services: string;
    age: string;
    restricted: string;
    copyright: string;
  };
  professional: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      badge: string;
      headline: string;
      subheadline: string;
      description: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    services: {
      sectionTitle: string;
      sectionSubtitle: string;
      items: {
        title: string;
        description: string;
        highlights: string[];
      }[];
    };
    benefits: {
      sectionTitle: string;
      sectionSubtitle: string;
      items: { title: string; description: string }[];
    };
    rules: {
      sectionTitle: string;
      sectionSubtitle: string;
      eligibilityLabel: string;
      eligibility: string;
      howToLabel: string;
      howTo: string;
      perksLabel: string;
      perks: string[];
      community: string;
    };
    cta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
  };
};
