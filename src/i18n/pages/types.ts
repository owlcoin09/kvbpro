import type { NavCategory } from "@/data/navigation";

export type PageFeature = {
  title: string;
  description: string;
  image?: string;
};

export type PageSection = {
  title: string;
  body: string[];
  image?: string;
};

export type PageAward = {
  title: string;
  issuer: string;
  image: string;
};

export type PageMediaItem = {
  title: string;
  excerpt: string;
  image: string;
};

export type PageContactField = {
  label: string;
  value: string;
};

export type PageLink = {
  label: string;
  href: string;
};

export type ComparisonColumn = {
  id: string;
  label: string;
};

export type ComparisonRow = {
  label: string;
  values: Record<string, string>;
};

export type ComparisonTable = {
  title?: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageSpecRow = {
  label: string;
  value: string;
};

export type PageSpecGroup = {
  name?: string;
  rows: PageSpecRow[];
};

export type PageContent = {
  title: string;
  description: string;
  body: string[];
  image?: string;
  introTitle?: string;
  symbolListTitle?: string;
  symbols?: readonly string[];
  tradingSessions?: {
    title: string;
    body: string[];
  };
  specifications?: {
    title: string;
    groups: PageSpecGroup[];
  };
  footnote?: string;
  featureTitle?: string;
  features?: PageFeature[];
  sections?: PageSection[];
  awards?: PageAward[];
  mediaItems?: PageMediaItem[];
  bulletTitle?: string;
  bullets?: string[];
  contacts?: PageContactField[];
  links?: PageLink[];
  comparisonTable?: ComparisonTable;
  faqs?: {
    title?: string;
    items: FaqItem[];
  };
};

export type PageContentMap = Record<NavCategory, Record<string, PageContent>>;
