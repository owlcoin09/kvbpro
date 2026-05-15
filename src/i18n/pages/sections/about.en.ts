import type { PageContent } from "../types";

const legalPdf = "https://static.kvbplus.com/pdf";

const aboutPages: Record<string, PageContent> = {
  "who-we-are": {
    title: "Who We Are",
    description:
      "KVB prides itself on being a broker on the technological frontier, offering clients true market access with competitive trading conditions.",
    image: "/assets/about/who-we-are.png",
    body: [
      "KVB prides itself on being a broker that is on the technological frontier, offering its clients true market access with the best trading conditions. Established in 2001, KVB is now a global leading trading services company. Today, we have clients in over 100 countries and offer brokerage in five different asset classes.",
    ],
    sections: [
      {
        title: "Our Mission",
        image: "/assets/about/mission.png",
        body: [
          "With more than 20 years of industry knowledge and experience, KVB is where technology, financial markets and analytics merge to bring you cutting-edge online trading solutions.",
          "Our goal is to provide you with a market-leading innovative trading experience that is educational and intuitive, empowering our clients to take control of their financial future.",
        ],
      },
    ],
    featureTitle: "Why Trade with KVB?",
    features: [
      {
        title: "Superior Trading Platforms",
        description:
          "We have invested heavily in technology, giving our clients access to the most powerful and innovative trading platforms from PC, mobile or web. Trade anytime, anywhere.",
        image: "/assets/about/platforms.png",
      },
      {
        title: "Professional Tools",
        description:
          "Our trading platforms are user-friendly and feature-rich, with a range of advanced tools and resources to help you improve your trading skill and make informed trading decisions.",
        image: "/assets/about/tools.png",
      },
      {
        title: "Ultimate Trading Conditions",
        description:
          "Every cost savings translates into higher profit margins. Trade more than 100 financial products with spreads as low as 0.0 and some of the lowest commissions on the market.",
        image: "/assets/about/trading-conditions.png",
      },
      {
        title: "Dedicated Customer Service",
        description:
          "Our dedicated, multilingual customer service team works 24/5 to provide you with an exceptional level of support.",
        image: "/assets/about/support.png",
      },
    ],
  },
  license: {
    title: "License",
    description: "Regulatory authorization and licensing information for KVB Prime Limited.",
    image: "/assets/about/license-hero.png",
    body: [
      'KVB Prime Limited ("KVB") is authorized by the Anjouan Offshore Finance Authority (AOFA) as an International Brokerage and Clearing House for the provision of financial services under License No. L15626 / KVB.',
      "KVB Prime Limited is approved and regulated by the AOFA, in exercise of the powers conferred by Government Notice No. 005 of 2005, to carry on all types of brokerage activities including foreign exchange, currency, shares, commodities and any kind of permitted regulated securities.",
      "KVB Prime Limited practices strict regulatory and compliance requirements in each and every aspect of the firm's operations including financial reporting, client asset management, segregation of client funds and more.",
    ],
    sections: [
      {
        title: "Our Regulator",
        body: [
          "Established in 2001, the Anjouan Offshore Finance Authority (AOFA) serves as the primary regulatory authority for the Financial Sector in Anjouan, Comoros. With an unwavering commitment to maintaining the highest standards of integrity and transparency, AOFA diligently upholds its regulatory powers and mandate derived from the Comoros's Constitution of 2001.",
          "AOFA plays a vital role in ensuring a robust and thriving financial ecosystem in Anjouan. Through its comprehensive regulatory framework, AOFA facilitates responsible financial practices, protects against money laundering, and enforces adherence to the Money Laundering (Prevention) Act 2005.",
        ],
      },
    ],
    featureTitle: "Client Protection",
    features: [
      {
        title: "Segregation of Trader Funds",
        description:
          "All client funds deposited with KVB are fully segregated from the company's own funds and are kept in separate ring-fenced client money bank accounts with top-tier banking institutions.",
        image: "/assets/about/segregation.png",
      },
      {
        title: "True STP & NDD Practice",
        description:
          "KVB acts only as a mediator and strictly does not trade against our clients, bringing together counterparties on mutually acceptable terms.",
        image: "/assets/about/stp.png",
      },
      {
        title: "Anti-Money Laundering",
        description:
          "In accordance with the Anjouan Money Laundering (Prevention) Act 2005, KVB has policies and procedures designed to prevent money laundering activities from occurring.",
        image: "/assets/about/aml.png",
      },
    ],
    links: [
      {
        label: "Learn more about our license on AOFA",
        href: "https://anjouanoffshorefinanceauthority.org/register/kvb-prime-limited/",
      },
    ],
  },
  awards: {
    title: "Awards",
    description:
      "Industry recognition highlighting our commitment to transforming the trading experience with cutting-edge technology.",
    image: "/assets/about/awards-hero.png",
    body: [
      "Over the years, KVB has received multiple prestigious awards, highlighting our commitment to transforming the trading experience with cutting-edge technology and innovative solutions.",
    ],
    awards: [
      { title: "Excellence in Trust & Security Award", issuer: "Trustfinance", image: "/assets/about/awards/1.png" },
      {
        title: "Global Excellence in Trading Services 2026",
        issuer: "International Business Magazine",
        image: "/assets/about/awards/2.png",
      },
      {
        title: "Best Online Trading Solutions Provider Globe 2026",
        issuer: "International Business Magazine",
        image: "/assets/about/awards/3.png",
      },
      {
        title: "Most Innovative Trading Platform Globe 2026",
        issuer: "International Business Magazine",
        image: "/assets/about/awards/4.png",
      },
      { title: "Most Popular Broker 2025", issuer: "Followme", image: "/assets/about/awards/5.png" },
      {
        title: "Best Trading Platform Asia 2025",
        issuer: "Global Business & Finance Magazine",
        image: "/assets/about/awards/6.png",
      },
      {
        title: "Best Trading Experience Thailand 2025",
        issuer: "World Business Outlook",
        image: "/assets/about/awards/7.png",
      },
      { title: "Best Forex Broker", issuer: "Trust Score FX", image: "/assets/about/awards/8.png" },
      {
        title: "Most Trusted Forex Trading Broker Asia 2025",
        issuer: "International Business Magazine",
        image: "/assets/about/awards/9.png",
      },
      {
        title: "Most Popular Broker Thailand 2025",
        issuer: "Finance Derivative",
        image: "/assets/about/awards/10.png",
      },
      {
        title: "Most Popular Broker Vietnam 2025",
        issuer: "Finance Derivative",
        image: "/assets/about/awards/11.png",
      },
      {
        title: "Best Trading Platform Asia 2025",
        issuer: "Brands Review Magazine",
        image: "/assets/about/awards/12.png",
      },
      { title: "Best Innovative Broker 2024", issuer: "Brokersview", image: "/assets/about/awards/13.png" },
      { title: "Most Popular Broker 2024", issuer: "Followme", image: "/assets/about/awards/14.png" },
      { title: "Most Popular Broker 2022", issuer: "Followme", image: "/assets/about/awards/15.png" },
      {
        title: "Best Forex Trading Experience 2021",
        issuer: "Global Forex Awards",
        image: "/assets/about/awards/16.png",
      },
    ],
  },
  media: {
    title: "Media",
    description: "Discover our story through press coverage and industry highlights.",
    image: "/assets/about/media-hero.png",
    body: [
      "Explore how KVB continues to shape global financial markets. From expert insights to major milestones, see what the media is saying about us and the impact we're making worldwide.",
    ],
    mediaItems: [
      {
        title: "Standing Together: KVB's CSR Commitment",
        excerpt:
          "KVB took part in flood relief efforts in Thailand by making a contribution to the Thai Red Cross Society, supporting communities affected by severe flooding.",
        image: "/assets/about/media/1.jpg",
      },
      {
        title: "KVB Trading Platform: Traders' True Reviews",
        excerpt:
          "KVB is a global broker trading platform that has been active in the financial markets for more than two decades, trusted by traders worldwide.",
        image: "/assets/about/media/2.jpg",
      },
      {
        title: "KVB Honored as Best Innovative Broker 2024",
        excerpt:
          "BrokersView announced that KVB has been awarded Best Innovative Broker at the 2024 Award for Brokers with Outstanding Performance.",
        image: "/assets/about/media/3.png",
      },
      {
        title: "KVB Crowned Most Popular Broker of 2024",
        excerpt:
          "KVB emerged as the ultimate winner of the prestigious Most Popular Broker 2024 award presented by Followme after breaking participation records.",
        image: "/assets/about/media/4.png",
      },
      {
        title: "KVB Recognised for Trading Excellence in Asia",
        excerpt:
          "International publications continue to highlight KVB's commitment to technology, transparency, and client-focused trading solutions across Asian markets.",
        image: "/assets/about/media/5.png",
      },
      {
        title: "KVB Strengthens Global Market Presence",
        excerpt:
          "Media outlets report on KVB's expanding footprint as the firm delivers innovative platforms and competitive conditions to traders in over 100 countries.",
        image: "/assets/about/media/6.png",
      },
    ],
  },
  "join-us": {
    title: "Join Us",
    description: "Build your career with a genuinely international financial services and fintech team.",
    image: "/assets/about/join-hero.png",
    body: [
      "You get a broader perspective working for a genuinely international firm! Our combined team members' talents and enthusiasm are the foundation of our strength and expertise. The brightest minds in the financial services and fintech sectors are shaping the future at KVB. Join us!",
    ],
    sections: [
      {
        title: "Learn More About Us",
        image: "/assets/about/join-about.png",
        body: [
          "KVB was established to give investors \"a secure, fair, and transparent environment.\" Our company's fundamental principles guide our actions. We have been providing solutions to satisfy the financial demands of our clients.",
          "Two invaluable resources—the relentless pursuit of innovation and gifted local professionals—are the foundation of our success.",
        ],
      },
      {
        title: "Join An Industry Pioneer!",
        image: "/assets/about/join-team.png",
        body: [
          "Unique work options are available at KVB. With training, workshops, and seminars, we assist your attempts at self-improvement. We are a creative organization, and innovation begins with ideas.",
          "We provide the ideal working atmosphere for you to generate that original, game-changing concept!",
        ],
      },
      {
        title: "Our Recruitment Approach",
        image: "/assets/about/company-1.png",
        body: [
          "Because we value diversity, KVB actively seeks out local talent from around the globe to join us and broaden our viewpoint.",
          "We are happy to have leaders, decision-makers, and creative thinkers join us in presenting fresh approaches to the problems we face every day.",
          "Join our team and tell us about your ground-breaking ideas. You will be heard and have the chance to have an influence here.",
        ],
      },
    ],
    bulletTitle: "Gender Equality in the Workplace",
    bullets: [
      "Equal pay for equal or comparable work in the workplace.",
      "Remove barriers to women's full and equal participation in the labor force.",
      "Equality of opportunity in all occupations and industries, including leadership roles, regardless of gender.",
      "The abolition of gender discrimination, particularly in relation to family and caring responsibilities.",
    ],
    contacts: [
      { label: "Email", value: "support@kvbplus.com" },
      { label: "Hours", value: "Monday - Friday 7:30 a.m. - 23:00 p.m." },
      {
        label: "Address",
        value:
          "Hamchako, Mutsamudu, The Autonomous Island of Anjouan, Union of Comoros",
      },
    ],
  },
  "contact-us": {
    title: "Contact Us",
    description: "Got any questions? Let us know how we can help.",
    image: "/assets/about/contact-hero.png",
    body: [
      "Our dedicated, multilingual customer service team works 24/5 to provide you with an exceptional level of support.",
    ],
    contacts: [
      { label: "Email", value: "support@kvbplus.com" },
      { label: "Hours", value: "Monday - Friday 7:30 a.m. - 23:00 p.m." },
      {
        label: "Address",
        value:
          "Graha Arsa LT.1 Ruang 1T-1.1, JL Siaga Raya No. 31, Pejaten Barat, Pasar Minggu, Jakarta Selatan 12510, Indonesia",
      },
    ],
  },
  "legal-documents": {
    title: "Legal Documents",
    description:
      "Find all necessary legal information you should review, understand and accept before opening an account.",
    image: "/assets/about/legal-hero.png",
    body: [
      "Please read and ensure you fully understand our Risk Disclosure and related policies before trading.",
    ],
    links: [
      { label: "Client Agreement", href: `${legalPdf}/client-agreement.pdf` },
      { label: "Risk Disclosure", href: `${legalPdf}/risk-disclosure.pdf` },
      { label: "Privacy Policy", href: `${legalPdf}/privacy-policy.pdf` },
      { label: "Terms and Conditions", href: `${legalPdf}/terms-conditions.pdf` },
      { label: "Cookies Policy", href: `${legalPdf}/cookies-policy.pdf` },
      { label: "KYC Policy", href: `${legalPdf}/kyc-policy.pdf` },
      { label: "AML Policy", href: `${legalPdf}/aml-policy.pdf` },
      { label: "Refund Policy", href: `${legalPdf}/refund-policy.pdf` },
    ],
  },
};

export default aboutPages;
