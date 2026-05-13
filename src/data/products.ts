import heroBg from "@/assets/hero-bg.jpg";

export interface SpecGroup {
  label: string;
  values: string[];
}

export interface UsageImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProductData {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  description: string;
  specs: string[];
  specGroups: SpecGroup[];
  gallery: { src: string; alt: string }[];
  usageImages: UsageImage[];
  specImage: string;
  careNotes: string[];
  craftNote: string;
}

export const products: Record<string, ProductData> = {
  "flora-pitcher": {
    id: "flora-pitcher",
    name: "Hana Pitcher",
    subtitle: "花 · Celadon",
    price: "$185",
    description:
      "Wheel-thrown from Arita porcelain stone with hand-painted floral motifs by Yuki. Fired in our noborigama climbing kiln at 1300°C, the celadon glaze develops its depth through wood-ash atmosphere. Each piece is unique — slight variations in colour and pattern are the signature of handwork.",
    specs: [
      "Arita porcelain stone",
      "Wood ash celadon glaze",
      "Hand-painted floral motifs",
      "Noborigama fired at 1300°C",
      "Food safe and dishwasher safe",
      "Height: 24cm",
      "Capacity: 1.4 litres",
    ],
    specGroups: [
      { label: "Clay", values: ["Arita porcelain stone", "Wheel-thrown by Kenji"] },
      { label: "Glaze", values: ["Wood ash celadon", "Noborigama fired"] },
      { label: "Decoration", values: ["Hand-painted by Yuki", "Underglaze pigments"] },
      { label: "Dimensions", values: ["24cm height", "1.4 litre capacity"] },
      { label: "Weight", values: ["520g"] },
      { label: "Care", values: ["Food safe", "Dishwasher safe"] },
    ],
    specImage: heroBg,
    gallery: [
      { src: heroBg, alt: "Hana Pitcher front view" },
      { src: heroBg, alt: "Hana Pitcher floral detail" },
      { src: heroBg, alt: "Hana Pitcher handle detail" },
      { src: heroBg, alt: "Hana Pitcher in use" },
    ],
    usageImages: [
      { src: heroBg, alt: "Pouring from the Hana Pitcher", caption: "Poured with care" },
      { src: heroBg, alt: "Hana Pitcher on table", caption: "At home on any table" },
    ],
    careNotes: [
      "Dishwasher safe, hand wash recommended",
      "Avoid sudden temperature changes",
      "Not intended for stovetop or oven use",
    ],
    craftNote: "Thrown by Kenji, painted by Yuki\nNo two are exactly alike",
  },
  "moss-vase": {
    id: "moss-vase",
    name: "Koke Vase",
    subtitle: "苔 · Ash Glaze",
    price: "$145",
    description:
      "A quiet form for holding a single branch or ikebana arrangement. The ash glaze is made from wood ash collected after each noborigama firing, creating a surface that shifts between moss green and amber. Coil-built by Kenji over several days.",
    specs: [
      "Arita stoneware clay",
      "Wood ash glaze",
      "Coil-built by hand",
      "Noborigama fired at 1300°C",
      "Watertight interior",
      "Height: 28cm",
      "Opening: 8cm diameter",
    ],
    specGroups: [
      { label: "Clay", values: ["Arita stoneware", "Coil-built by Kenji"] },
      { label: "Glaze", values: ["Wood ash", "From our noborigama"] },
      { label: "Dimensions", values: ["28cm height", "8cm opening"] },
      { label: "Weight", values: ["620g"] },
      { label: "Use", values: ["Watertight", "Fresh or dried flowers"] },
    ],
    specImage: heroBg,
    gallery: [
      { src: heroBg, alt: "Koke Vase front view" },
      { src: heroBg, alt: "Koke Vase glaze detail" },
      { src: heroBg, alt: "Koke Vase with dried branches" },
      { src: heroBg, alt: "Koke Vase from above" },
    ],
    usageImages: [
      { src: heroBg, alt: "Koke Vase with flowers", caption: "A single stem is enough" },
      { src: heroBg, alt: "Koke Vase surface detail", caption: "Ash glaze in morning light" },
    ],
    careNotes: [
      "Hand wash only",
      "Dry thoroughly after emptying water",
      "Glaze may develop patina over time — this is intentional",
    ],
    craftNote: "Coil-built by Kenji over three days\nWood ash from our own noborigama",
  },
  "ember-cup-set": {
    id: "ember-cup-set",
    name: "Hi Cup Set",
    subtitle: "火 · Tenmoku",
    price: "$95",
    description:
      "A pair of yunomi tea cups for daily use. The iron-rich clay shows through a thin tenmoku glaze, creating a surface that deepens with each cup of tea. Shaped to sit naturally in the palm — refined over years to feel like an extension of the hand.",
    specs: [
      "Iron-rich stoneware clay",
      "Tenmoku glaze",
      "Wheel-thrown",
      "Noborigama fired at 1300°C",
      "Food and dishwasher safe",
      "Height: 7cm each",
      "Capacity: 180ml each",
    ],
    specGroups: [
      { label: "Clay", values: ["Iron-rich stoneware", "Wheel-thrown by Kenji"] },
      { label: "Glaze", values: ["Tenmoku", "Noborigama fired at 1300°C"] },
      { label: "Dimensions", values: ["7cm height each", "180ml capacity each"] },
      { label: "Weight", values: ["165g each"] },
      { label: "Set", values: ["Two yunomi cups"] },
    ],
    specImage: heroBg,
    gallery: [
      { src: heroBg, alt: "Hi Cup Set overhead" },
      { src: heroBg, alt: "Hi Cup glaze detail" },
      { src: heroBg, alt: "Hi Cup in hand" },
      { src: heroBg, alt: "Hi Cup Set on tray" },
    ],
    usageImages: [
      { src: heroBg, alt: "Tea in Hi Cup", caption: "Made for daily ritual" },
      { src: heroBg, alt: "Hi Cup surface", caption: "Tenmoku deepens with use" },
    ],
    careNotes: [
      "Dishwasher safe",
      "Surface will develop character over time",
      "Unglazed foot — dry base after washing",
    ],
    craftNote: "Refined by Kenji over many years\nDesigned to feel inevitable in the hand",
  },
  "stone-bowl": {
    id: "stone-bowl",
    name: "Ishi Bowl",
    subtitle: "石 · Unglazed",
    price: "$165",
    description:
      "A generous serving bowl with quiet presence. The exterior is left unglazed to honour the texture of Arita clay, while the interior carries a smooth white slip. Heavy enough to anchor a table, graceful enough to hold fruit or nothing at all.",
    specs: [
      "Arita stoneware clay",
      "White slip interior",
      "Unglazed exterior",
      "Noborigama fired at 1300°C",
      "Food safe",
      "Diameter: 30cm",
      "Height: 10cm",
    ],
    specGroups: [
      { label: "Clay", values: ["Arita stoneware", "Wheel-thrown by Kenji"] },
      { label: "Surface", values: ["White slip interior", "Unglazed exterior"] },
      { label: "Dimensions", values: ["30cm diameter", "10cm height"] },
      { label: "Weight", values: ["1.1kg"] },
      { label: "Care", values: ["Food safe", "Hand wash recommended"] },
    ],
    specImage: heroBg,
    gallery: [
      { src: heroBg, alt: "Ishi Bowl from above" },
      { src: heroBg, alt: "Ishi Bowl exterior texture" },
      { src: heroBg, alt: "Ishi Bowl with fruit" },
      { src: heroBg, alt: "Ishi Bowl profile view" },
    ],
    usageImages: [
      { src: heroBg, alt: "Ishi Bowl on table", caption: "Generous enough for gathering" },
      { src: heroBg, alt: "Ishi Bowl texture detail", caption: "Raw clay, left honest" },
    ],
    careNotes: [
      "Hand wash recommended",
      "Unglazed exterior may absorb oils — this adds character",
      "Not microwave safe",
    ],
    craftNote: "Thrown by Kenji in a single pull\nThe exterior is left raw to honour the clay",
  },
};

export const allProductsList = Object.values(products);
