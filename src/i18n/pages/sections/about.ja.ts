import type { PageContent } from "../types";

const legalPdf = "https://static.kvbplus.com/pdf";

const aboutPages: Record<string, PageContent> = {
  "who-we-are": {
    title: "会社概要",
    description:
      "KVBは技術最先端のブローカーとして、真のマーケットアクセスと優れた取引条件を提供します。",
    image: "/assets/about/who-we-are.png",
    body: [
      "KVBは技術最先端のブローカーとして、クライアントに真のマーケットアクセスと最高の取引条件を提供しています。2001年設立以来、グローバルな取引サービス企業へ成長。100カ国以上のクライアントに、5つのアセットクラスでブローカー業務を提供しています。",
    ],
    sections: [
      {
        title: "ミッション",
        image: "/assets/about/mission.png",
        body: [
          "20年以上の業界知識と経験を活かし、KVBはテクノロジー、金融市場、分析を融合した最先端のオンライン取引ソリューションを提供します。",
          "教育性と直感性を備えた市場最先端の取引体験を通じ、クライアントが金融の未来をコントロールできるよう支援します。",
        ],
      },
    ],
    featureTitle: "KVBで取引する理由",
    features: [
      {
        title: "優れた取引プラットフォーム",
        description:
          "技術への大規模投資により、PC・モバイル・Webから強力で革新的なプラットフォームにアクセス。いつでもどこでも取引可能。",
        image: "/assets/about/platforms.png",
      },
      {
        title: "プロフェッショナルツール",
        description:
          "使いやすく機能豊富なプラットフォームで、高度なツールとリソースにより取引スキル向上と意思決定をサポート。",
        image: "/assets/about/tools.png",
      },
      {
        title: "究極の取引条件",
        description:
          "コスト削減は利益率向上につながります。100以上の金融商品を、0.0からのスプレッドと低コミッションで取引。",
        image: "/assets/about/trading-conditions.png",
      },
      {
        title: "専任カスタマーサービス",
        description: "多言語の専任チームが週5日24時間、卓越したサポートを提供します。",
        image: "/assets/about/support.png",
      },
    ],
  },
  license: {
    title: "ライセンス",
    description: "KVB Prime Limitedの規制認可とライセンス情報。",
    image: "/assets/about/license-hero.png",
    body: [
      "KVB Prime Limited（「KVB」）は、国際ブローカー・クリアリングハウスとしてAOFAより認可され、ライセンス番号 L15626 / KVB で金融サービスを提供しています。",
      "KVB Prime Limitedは2005年政府告示第005号に基づき、外国為替、通貨、株式、コモディティ等の全ブローカー活動をAOFAの下で実施しています。",
      "財務報告、顧客資産管理、顧客資金分別など、あらゆる面で厳格な規制・コンプライアンスを実践しています。",
    ],
    sections: [
      {
        title: "規制当局",
        body: [
          "2001年設立のAOFAは、コモロ・アンジュアン金融部門の主要規制当局として、最高水準の誠実性と透明性を維持しています。",
          "包括的な規制枠組みを通じ、責任ある金融慣行を促進し、マネーロンダリング対策と2005年マネーロンダリング防止法の遵守を徹底しています。",
        ],
      },
    ],
    featureTitle: "クライアント保護",
    features: [
      {
        title: "顧客資金の分別管理",
        description:
          "KVBに預けられた顧客資金は会社資金と完全分別され、トップティア金融機関の専用口座で管理されます。",
        image: "/assets/about/segregation.png",
      },
      {
        title: "真のSTP・NDD",
        description: "KVBは仲介者として機能し、クライアントと対抗取引は行いません。",
        image: "/assets/about/stp.png",
      },
      {
        title: "マネーロンダリング対策",
        description: "2005年マネーロンダリング防止法に基づき、AMLポリシーと手続きを整備しています。",
        image: "/assets/about/aml.png",
      },
    ],
    links: [
      {
        label: "AOFAでのライセンス詳細",
        href: "https://anjouanoffshorefinanceauthority.org/register/kvb-prime-limited/",
      },
    ],
  },
  awards: {
    title: "受賞歴",
    description: "最先端技術による取引体験の変革へのコミットメントが認められています。",
    image: "/assets/about/awards-hero.png",
    body: [
      "長年にわたり、KVBは数々の権威ある賞を受賞。最先端技術と革新的ソリューションで取引体験を変革する取り組みが評価されています。",
    ],
    awards: [
      { title: "信頼とセキュリティ卓越賞", issuer: "Trustfinance", image: "/assets/about/awards/1.png" },
      { title: "2026 グローバル取引サービス卓越賞", issuer: "International Business Magazine", image: "/assets/about/awards/2.png" },
      { title: "2026 世界最高オンライン取引ソリューション", issuer: "International Business Magazine", image: "/assets/about/awards/3.png" },
      { title: "2026 世界で最も革新的な取引プラットフォーム", issuer: "International Business Magazine", image: "/assets/about/awards/4.png" },
      { title: "2025 最も人気のブローカー", issuer: "Followme", image: "/assets/about/awards/5.png" },
      { title: "2025 アジア最高取引プラットフォーム", issuer: "Global Business & Finance Magazine", image: "/assets/about/awards/6.png" },
      { title: "2025 タイ最高取引体験", issuer: "World Business Outlook", image: "/assets/about/awards/7.png" },
      { title: "ベストFXブローカー", issuer: "Trust Score FX", image: "/assets/about/awards/8.png" },
      { title: "2025 アジア最も信頼されるFXブローカー", issuer: "International Business Magazine", image: "/assets/about/awards/9.png" },
      { title: "2025 タイで最も人気のブローカー", issuer: "Finance Derivative", image: "/assets/about/awards/10.png" },
      { title: "2025 ベトナムで最も人気のブローカー", issuer: "Finance Derivative", image: "/assets/about/awards/11.png" },
      { title: "2025 アジア最高取引プラットフォーム", issuer: "Brands Review Magazine", image: "/assets/about/awards/12.png" },
      { title: "2024 ベストイノベーティブブローカー", issuer: "Brokersview", image: "/assets/about/awards/13.png" },
      { title: "2024 最も人気のブローカー", issuer: "Followme", image: "/assets/about/awards/14.png" },
      { title: "2022 最も人気のブローカー", issuer: "Followme", image: "/assets/about/awards/15.png" },
      { title: "2021 ベストFX取引体験", issuer: "Global Forex Awards", image: "/assets/about/awards/16.png" },
    ],
  },
  media: {
    title: "メディア",
    description: "報道と業界ハイライトを通じてKVBのストーリーをご覧ください。",
    image: "/assets/about/media-hero.png",
    body: [
      "KVBが世界の金融市場をどのように形作っているかをご紹介。専門家の洞察から主要なマイルストーンまで、メディアの評価と世界的なインパクトをご確認ください。",
    ],
    mediaItems: [
      {
        title: "共に歩む：KVBのCSRへの取り組み",
        excerpt: "KVBはタイ赤十字社に寄付し、タイの洪水被害支援に参加しました。",
        image: "/assets/about/media/1.jpg",
      },
      {
        title: "KVB取引プラットフォーム：トレーダーの本音レビュー",
        excerpt: "KVBは20年以上金融市場で活動するグローバルブローカーとして、世界中のトレーダーに信頼されています。",
        image: "/assets/about/media/2.jpg",
      },
      {
        title: "KVB、2024ベストイノベーティブブローカー受賞",
        excerpt: "BrokersViewが2024年Outstanding Broker賞でKVBをベストイノベーティブブローカーに選出。",
        image: "/assets/about/media/3.png",
      },
      {
        title: "KVB、2024最も人気のブローカーに",
        excerpt: "Followme主催の2024最も人気のブローカー賞で、KVBが圧倒的支持を集め受賞。",
        image: "/assets/about/media/4.png",
      },
      {
        title: "KVBのアジアにおける取引卓越性が評価",
        excerpt: "国際メディアが、技術・透明性・クライアント重視のソリューションを評価。",
        image: "/assets/about/media/5.png",
      },
      {
        title: "KVB、グローバルプレゼンスを強化",
        excerpt: "100カ国以上のトレーダーに革新的プラットフォームと競争力ある条件を提供。",
        image: "/assets/about/media/6.png",
      },
    ],
  },
  "join-us": {
    title: "採用情報",
    description: "真のグローバル金融・フィンテック企業でキャリアの視野を広げましょう。",
    image: "/assets/about/join-hero.png",
    body: [
      "国際的な企業で働くことで、より広い視野が得られます。チームの才能と情熱が私たちの強みの基盤です。金融サービスとフィンテックの最前線で未来を形作るKVBに参加しませんか。",
    ],
    sections: [
      {
        title: "私たちについて",
        image: "/assets/about/join-about.png",
        body: [
          "KVBは投資家に「安全・公正・透明な環境」を提供するために設立されました。コアバリューが行動を導き、クライアントの金融ニーズに応えるソリューションを提供してきました。",
          "革新への追求と優秀な現地プロフェッショナルが成功の基盤です。",
        ],
      },
      {
        title: "業界パイオニアに参加",
        image: "/assets/about/join-team.png",
        body: [
          "KVBではユニークなキャリア機会を提供。研修・ワークショップ・セミナーで自己成長を支援します。",
          "アイデアから始まる革新。ゲームチェンジャーとなるコンセプトを生み出す環境があります。",
        ],
      },
      {
        title: "採用アプローチ",
        image: "/assets/about/company-1.png",
        body: [
          "多様性を重視し、世界各地から人材を積極採用して視野を広げています。",
          "リーダー、意思決定者、クリエイティブな人材の参加を歓迎します。",
          "画期的なアイデアを共有してください。ここでは声が届き、影響を与える機会があります。",
        ],
      },
    ],
    bulletTitle: "職場におけるジェンダー平等",
    bullets: [
      "同等または比較可能な業務に対する同一賃金。",
      "女性の労働力への完全かつ平等な参加の障壁を除去。",
      "リーダーシップを含むすべての職種・業界で性別に関係なく機会の平等。",
      "特に家庭・介護責任に関する性差別の撤廃。",
    ],
    contacts: [
      { label: "メール", value: "support@kvbplus.com" },
      { label: "対応時間", value: "月曜〜金曜 7:30 - 23:00" },
      {
        label: "住所",
        value: "Hamchako, Mutsamudu, The Autonomous Island of Anjouan, Union of Comoros",
      },
    ],
  },
  "contact-us": {
    title: "お問い合わせ",
    description: "ご質問はありますか？お気軽にご連絡ください。",
    image: "/assets/about/contact-hero.png",
    body: ["多言語の専任カスタマーサービスチームが週5日24時間、卓越したサポートを提供します。"],
    contacts: [
      { label: "メール", value: "support@kvbplus.com" },
      { label: "対応時間", value: "月曜〜金曜 7:30 - 23:00" },
      {
        label: "住所",
        value:
          "Graha Arsa LT.1 Ruang 1T-1.1, JL Siaga Raya No. 31, Pejaten Barat, Pasar Minggu, Jakarta Selatan 12510, Indonesia",
      },
    ],
  },
  "legal-documents": {
    title: "法的文書",
    description: "口座開設前に確認・理解・同意すべき法的情報をご覧ください。",
    image: "/assets/about/legal-hero.png",
    body: ["取引前にリスク開示および関連ポリシーを十分にご理解ください。"],
    links: [
      { label: "クライアント契約", href: `${legalPdf}/client-agreement.pdf` },
      { label: "リスク開示", href: `${legalPdf}/risk-disclosure.pdf` },
      { label: "プライバシーポリシー", href: `${legalPdf}/privacy-policy.pdf` },
      { label: "利用規約", href: `${legalPdf}/terms-conditions.pdf` },
      { label: "Cookieポリシー", href: `${legalPdf}/cookies-policy.pdf` },
      { label: "KYCポリシー", href: `${legalPdf}/kyc-policy.pdf` },
      { label: "AMLポリシー", href: `${legalPdf}/aml-policy.pdf` },
      { label: "返金ポリシー", href: `${legalPdf}/refund-policy.pdf` },
    ],
  },
};

export default aboutPages;
