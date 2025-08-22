export type MenuItem = {
  id: string;
  name: string;
  price: number;
  comment?: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
};

export const recipes: MenuItem[] = [
  {
    id: "1",
    name: "マルゲリータピザ",
    price: 1800,
    comment:
      "新鮮なモッツァレラ、トマトソース、バジルを使用したクラシックなナポリタンピザ。完璧なイタリアンの定番です。",
    image: {
      url: "/Pizza.jpg",
      width: 500,
      height: 350,
    },
  },
  {
    id: "2",
    name: "スパゲッティカルボナーラ",
    price: 1400,
    comment:
      "卵、パンチェッタ、ペコリーノチーズ、黒胡椒を使用した伝統的なローマ風パスタ。リッチでクリーミーです。",
    image: {
      url: "/noodels.jpg",
      width: 500,
      height: 350,
    },
  },
  {
    id: "3",
    name: "グリルビーフステーキ",
    price: 2800,
    comment:
      "ハーブと赤ワインソースで完璧にグリルされたプレミアムビーフステーキ。",
    image: {
      url: "/beef.jpg",
      width: 500,
      height: 350,
    },
  },
  {
    id: "4",
    name: "カプレーゼサラダ",
    price: 1200,
    comment:
      "新鮮なモッツァレラ、完熟トマト、バジルをエクストラバージンオリーブオイルとバルサミコで。",
    image: {
      url: "/cheesetomato.jpg",
      width: 500,
      height: 350,
    },
  },
  {
    id: "5",
    name: "グリルイカ",
    price: 1600,
    comment: "レモン、ニンニク、地中海のハーブで完璧にグリルされた新鮮なイカ。",
    image: {
      url: "/squid.jpg",
      width: 500,
      height: 350,
    },
  },
  {
    id: "6",
    name: "ペンネアラビアータ",
    price: 1300,
    comment:
      "トマトソース、ニンニク、赤唐辛子を使用したスパイシーなペンネパスタ。辛いものが好きな方に最適です。",
    image: {
      url: "/roundpasta.jpg",
      width: 500,
      height: 350,
    },
  },
  {
    id: "7",
    name: "フェットチーネアルフレド",
    price: 1500,
    comment:
      "パルメザンチーズ、バター、黒胡椒を使用したクリーミーなフェットチーネ。リッチで贅沢なクラシックです。",
    image: {
      url: "/flatpasta.jpg",
      width: 500,
      height: 350,
    },
  },
  {
    id: "8",
    name: "ローストチキン",
    price: 2200,
    comment:
      "ローズマリー、ニンニク、レモンでローストされたハーブチキン。柔らかく風味豊かです。",
    image: {
      url: "/Roast.jpg",
      width: 500,
      height: 350,
    },
  },
  {
    id: "9",
    name: "とんこつラーメン",
    price: 1600,
    comment:
      "チャーシュー、温泉卵、新鮮な野菜が入ったリッチな豚骨スープラーメン。",
    image: {
      url: "/Ramen.jpg",
      width: 500,
      height: 350,
    },
  },
  {
    id: "10",
    name: "ベリータルト",
    price: 800,
    comment:
      "新鮮なベリーとバニラカスタードが入った甘いペイストリータルト。完璧なデザートです。",
    image: {
      url: "/Tarts.jpg",
      width: 500,
      height: 350,
    },
  },
  {
    id: "11",
    name: "野菜炒め",
    price: 1000,
    comment:
      "ニンニク、生姜、醤油で炒めた新鮮な季節の野菜。ヘルシーで美味しいです。",
    image: {
      url: "/sayabeans.jpg",
      width: 500,
      height: 350,
    },
  },
  {
    id: "12",
    name: "クラシックイタリアンプラター",
    price: 2400,
    comment:
      "生ハム、チーズ、オリーブ、新鮮なパンを含むイタリアンクラシックの盛り合わせ。",
    image: {
      url: "/210211141204-05-classic-italian-dishes.jpg",
      width: 500,
      height: 350,
    },
  },
];
