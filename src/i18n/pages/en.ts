import type { PageContentMap } from "./types";
import aboutPages from "./sections/about.en";
import productPages from "./sections/products.en";
import tradingPages from "./sections/trading.en";

const pages: PageContentMap = {
  products: productPages,
  trading: tradingPages,
  about: {
    ...aboutPages,
    "company-blog": {
      title: "Company Blog",
      description: "News, education, and updates from the KVB team.",
      body: [
        "The Company Blog features articles on market trends, platform updates, and trading education.",
        "Subscribe to stay informed about product launches and company news.",
      ],
    },
    esg: {
      title: "ESG",
      description: "Environmental, social, and governance initiatives.",
      body: [
        "KVB is committed to responsible business practices across environmental, social, and governance dimensions.",
        "Learn about our community programmes, ethical standards, and sustainability goals.",
      ],
    },
    announcements: {
      title: "Announcements",
      description: "Official notices and service updates from KVB.",
      body: [
        "Stay informed about platform maintenance, product changes, and regulatory announcements.",
        "Check this page regularly for the latest official notices.",
      ],
    },
  },
};

export default pages;
