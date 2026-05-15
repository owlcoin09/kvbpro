import { PRODUCT_SYMBOLS } from "@/data/product-symbols";
import { featureImages } from "@/data/media";
import type { PageContent, PageFeature } from "../types";

const whyTradeFeatures = (title: string): Pick<PageContent, "featureTitle" | "features"> => ({
  featureTitle: title,
  features: WHY_TRADE,
});

const WHY_TRADE: PageFeature[] = [
  {
    title: "迅速な入出金",
    description:
      "KVBは安全で迅速な現地通貨オンライン決済を提供。柔軟な支払い方法で、入金・振替・出金を簡単に行えます。",
    image: featureImages[2],
  },
  {
    title: "専任カスタマーサポート",
    description: "24時間5日体制の国際チームが、卓越したサポートを提供します。",
    image: featureImages[1],
  },
  {
    title: "プロフェッショナルツール",
    description:
      "使いやすく機能豊富な取引プラットフォームと高度なツールで、取引スキルの向上と情報に基づく判断をサポートします。",
    image: featureImages[0],
  },
  {
    title: "優れた取引プラットフォーム",
    description:
      "技術への投資により、PC・モバイル・ウェブから強力で革新的なプラットフォームにアクセス。いつでもどこでも取引可能です。",
    image: featureImages[0],
  },
  {
    title: "最高の取引条件",
    description:
      "コスト削減は利益率の向上につながります。100以上の金融商品を、0.0ピップスからのスプレッドで取引できます。",
    image: featureImages[3],
  },
  {
    title: "プライム流動性",
    description:
      "STPおよびNDD技術により、常に最良価格と公正で透明な注文執行を実現します。",
    image: featureImages[3],
  },
];

const footnote = "*詳細はカスタマーサービスまでお問い合わせください。";

const pages: Record<string, PageContent> = {
  forex: {
    title: "FX",
    description: "KVBで主要・マイナー・エキゾチック通貨ペアを競争力のあるスプレッドで取引。",
    introTitle: "FXとは？",
    body: [
      "FX（外国為替）は世界最大かつ最も流動性の高い金融市場で、1日の平均取引量は5兆ドルを超えます。",
      "世界最大かつ最も活発な市場で、KVBの安全な戦略と強力なツールを活用して取引しましょう。",
    ],
    image: "/assets/products/forex.png",
    symbolListTitle: "取引ペア一覧：",
    symbols: PRODUCT_SYMBOLS.forex,
    tradingSessions: {
      title: "取引時間",
      body: [
        "FX市場は月曜01:05から金曜23:00まで24時間稼働（UTC+2）。",
        "サーバー時間：UTC+2",
      ],
    },
    specifications: {
      title: "シンボル仕様",
      groups: [
        {
          rows: [
            { label: "契約サイズ", value: "100,000通貨単位" },
            { label: "最小ロット", value: "0.01ロット" },
            { label: "最大ロット", value: "20ロット" },
            { label: "有効期限", value: "金曜まで有効" },
            { label: "スワップタイプ", value: "ポイント" },
            { label: "トリプルスワップ", value: "水曜日" },
          ],
        },
      ],
    },
    footnote,
    ...whyTradeFeatures("KVBでFXを取引する理由"),
  },
  commodities: {
    title: "コモディティ",
    description: "金、銀、原油などグローバル商品市場にアクセス。",
    introTitle: "コモディティとは？",
    body: [
      "KVBプラットフォームで金、銀、原油などを取引し、ポートフォリオを分散。タイトなスプレッドと迅速な約定で、グローバル市場の機会を捉えましょう。",
    ],
    image: "/assets/products/commodities.png",
    symbolListTitle: "コモディティ一覧：",
    symbols: PRODUCT_SYMBOLS.commodities,
    tradingSessions: {
      title: "取引時間",
      body: [
        "貴金属：月曜〜金曜 01:05–23:00（UTC+2）。",
        "USOIL：月曜〜金曜 01:05–23:00（UTC+2）。",
        "UKOIL（ブレント原油）：月曜〜金曜 03:06–22:00（UTC+2）。",
        "サーバー時間：UTC+2",
      ],
    },
    specifications: {
      title: "シンボル仕様",
      groups: [
        {
          name: "UKOIL, USOIL",
          rows: [
            { label: "契約サイズ", value: "1,000バレル" },
            { label: "最小ロット", value: "0.01ロット" },
            { label: "最大ロット", value: "20ロット" },
            { label: "有効期限", value: "金曜まで有効" },
            { label: "スワップタイプ", value: "ポイント" },
            { label: "トリプルスワップ", value: "水曜日" },
          ],
        },
        {
          name: "XAUUSD",
          rows: [
            { label: "契約サイズ", value: "100トロイオンス" },
            { label: "最小ロット", value: "0.01ロット" },
            { label: "最大ロット", value: "20ロット" },
            { label: "有効期限", value: "金曜まで有効" },
            { label: "スワップタイプ", value: "ポイント" },
            { label: "トリプルスワップ", value: "水曜日" },
          ],
        },
        {
          name: "XAGUSD",
          rows: [
            { label: "契約サイズ", value: "5,000トロイオンス" },
            { label: "最小ロット", value: "0.01ロット" },
            { label: "最大ロット", value: "20ロット" },
            { label: "有効期限", value: "金曜まで有効" },
            { label: "スワップタイプ", value: "ポイント" },
            { label: "トリプルスワップ", value: "水曜日" },
          ],
        },
      ],
    },
    footnote,
    ...whyTradeFeatures("KVBでコモディティを取引する理由"),
  },
  indices: {
    title: "指数",
    description: "米国・欧州・アジアの主要株価指数を取引。",
    introTitle: "指数とは？",
    body: [
      "指数は取引所の株式グループの価格パフォーマンスを測定します。例えばFTSE 100はロンドン証券取引所の最大100社を追跡します。",
      "KVBで指数を取引すれば、1つのポジションで経済全体やセクターにエクスポージャーできます。",
    ],
    image: "/assets/products/indices.png",
    symbolListTitle: "指数一覧：",
    symbols: PRODUCT_SYMBOLS.indices,
    tradingSessions: {
      title: "取引時間",
      body: [
        "指数ごとに取引時間が異なります。例：NASDAQ100 / S&P500 — 月00:05〜金22:59（UTC+2）、日次休止22:16–22:30；FTSE100 — 月00:05〜金22:55（UTC+2）；ChinaA50 — 月03:15〜金19:30（UTC+2）。",
        "サーバー時間：UTC+2",
      ],
    },
    specifications: {
      title: "シンボル仕様",
      groups: [
        {
          rows: [
            { label: "契約サイズ", value: "1契約" },
            { label: "最小ロット", value: "0.01ロット" },
            { label: "最大ロット", value: "20ロット" },
            { label: "有効期限", value: "当日有効" },
            { label: "スワップタイプ", value: "パーセンテージ" },
            { label: "トリプルスワップ", value: "金曜日" },
          ],
        },
      ],
    },
    footnote,
    ...whyTradeFeatures("KVBで指数を取引する理由"),
  },
  shares: {
    title: "株式",
    description: "主要取引所のグローバル株式に投資。",
    introTitle: "株式とは？",
    body: [
      "KVBの株式取引では、原資産を保有せずに価格変動から利益を狙えます。コスト効率と時間効率の高い市場アクセスが可能です。",
      "世界で最も人気のある株式を厳選して提供。実際の株式を購入せずにボラティリティを活用できます。",
    ],
    image: "/assets/products/shares.png",
    symbolListTitle: "株式一覧：",
    symbols: PRODUCT_SYMBOLS.shares,
    tradingSessions: {
      title: "取引時間",
      body: [
        "株式市場により取引時間が異なります。",
        "米国株：月曜〜金曜 16:36–22:50（UTC+2）。",
        "欧州株：月曜〜金曜 10:05–18:30（UTC+2）。",
        "サーバー時間：UTC+2",
      ],
    },
    specifications: {
      title: "シンボル仕様",
      groups: [
        {
          rows: [
            { label: "契約サイズ", value: "1株" },
            { label: "最小ロット", value: "1ロット" },
            { label: "最大ロット", value: "20ロット" },
            { label: "有効期限", value: "当日有効" },
            { label: "スワップタイプ", value: "パーセンテージ" },
            { label: "トリプルスワップ", value: "水曜日" },
          ],
        },
      ],
    },
    footnote:
      "*米国株は決算発表前の取引日にレバレッジが1倍に調整され、翌日の寄付き後15分以内に通常に戻ります。ポジション管理にご注意ください。\n\n" +
      footnote,
    ...whyTradeFeatures("KVBで株式を取引する理由"),
  },
  cryptocurrencies: {
    title: "暗号資産",
    description: "人気のデジタル資産を柔軟なレバレッジで取引。",
    introTitle: "暗号資産とは？",
    body: [
      "KVBの暗号資産取引はデリバティブによる価格投機で、原資産を保有する必要がありません。上昇を見込めばロング、下落を見込めばショートが可能です。",
      "ビットコイン、イーサリアム、ライトコインなど世界で最も人気の暗号資産をKVBで取引！",
    ],
    image: "/assets/products/crypto.png",
    symbolListTitle: "暗号資産一覧：",
    symbols: PRODUCT_SYMBOLS.cryptocurrencies,
    tradingSessions: {
      title: "取引時間",
      body: [
        "暗号資産：月〜土 00:01–23:55、日曜 00:01–00:59 および 03:01–23:55（UTC+2）。",
        "サーバー時間：UTC+2",
      ],
    },
    specifications: {
      title: "シンボル仕様",
      groups: [
        {
          name: "BTCUSD",
          rows: [
            { label: "契約サイズ", value: "5トークン" },
            { label: "最小ロット", value: "0.01ロット" },
            { label: "最大ロット", value: "20ロット" },
            { label: "有効期限", value: "キャンセルまで有効" },
            { label: "スワップタイプ", value: "パーセンテージ" },
            { label: "トリプルスワップ", value: "金曜日" },
          ],
        },
        {
          name: "BCHUSD, BNBUSD, ETHUSD",
          rows: [
            { label: "契約サイズ", value: "10トークン" },
            { label: "最小ロット", value: "0.01ロット" },
            { label: "最大ロット", value: "20ロット" },
            { label: "有効期限", value: "キャンセルまで有効" },
            { label: "スワップタイプ", value: "パーセンテージ" },
            { label: "トリプルスワップ", value: "金曜日" },
          ],
        },
        {
          name: "AVAXUSD, LTCUSD, SOLUSD",
          rows: [
            { label: "契約サイズ", value: "100トークン" },
            { label: "最小ロット", value: "0.01ロット" },
            { label: "最大ロット", value: "20ロット" },
            { label: "有効期限", value: "キャンセルまで有効" },
            { label: "スワップタイプ", value: "パーセンテージ" },
            { label: "トリプルスワップ", value: "金曜日" },
          ],
        },
        {
          name: "DOTUSD",
          rows: [
            { label: "契約サイズ", value: "1,000トークン" },
            { label: "最小ロット", value: "0.01ロット" },
            { label: "最大ロット", value: "20ロット" },
            { label: "有効期限", value: "キャンセルまで有効" },
            { label: "スワップタイプ", value: "パーセンテージ" },
            { label: "トリプルスワップ", value: "金曜日" },
          ],
        },
      ],
    },
    footnote,
    ...whyTradeFeatures("KVBで暗号資産を取引する理由"),
  },
};

export default pages;
