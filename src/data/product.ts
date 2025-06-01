import first_1 from "../../public/assets/products/1_1.jpg";
import first_2 from "../../public/assets/products/1_2.jpg";
import second_1 from "../../public/assets/products/2_1.jpg";
import second_2 from "../../public/assets/products/2_2.jpg";
import third_1 from "../../public/assets/products/3_1.jpg";
import third_2 from "../../public/assets/products/3_2.jpg";
import fourth_1 from "../../public/assets/products/4_1.jpg";
import fourth_2 from "../../public/assets/products/4_2.jpg";
import fifth_1 from "../../public/assets/products/5_1.jpg";
import fifth_2 from "../../public/assets/products/5_2.jpg";
import sixth_1 from "../../public/assets/products/6_1.jpg";
import sixth_2 from "../../public/assets/products/6_2.jpg";
import seventh_1 from "../../public/assets/products/7_1.jpg";
import seventh_2 from "../../public/assets/products/7_2.jpg";

export const products = [
  {
    id: 1,
    name: "Royal Gold Jeera – Ultra-Pure Kitchen Edition (Grade 1) ",
    tagline: "100% Pure. Zero Waste. Royal Taste.",
    image: first_1,
    images: [first_1, first_2],
    description:
      "Our Royal Gold Jeera offers the highest quality cumin seeds, thoroughly machine-cleaned and polished. With no residue, husk, or stones, it's 100% pure and ready to use straight from the pack.",
    points: [
      "100% pure & clean",
      "No cleaning needed",
      "Strong aroma & flavor",
      "Ideal for direct kitchen use, restaurants, and spice brands",
    ],
    note: "This is our top-quality jeera with zero impurities.",
    similarProducts: [2, 3],

  },
  {
    id: 2,
    name: "Silver Select Jeera – Near-Perfect Purity (Grade 2)",
    tagline: "Almost Perfect – Just Like Home Needs.",
    image: second_1,
    images: [second_1, second_2],
    description:
      "Silver Select Jeera contains around 95% cumin seeds with a very small amount of dry leaf particles. It's nearly kitchen-ready and only needs light inspection before use.",
    points: [
      "95% clean jeera",
      "Very low residue",
      "Good aroma and oil retention",
      "Best for daily household or bulk spice use",
    ],
    note: "Slight natural husk or stem particles may be present.",
    similarProducts: [3, 4],
  },
  {
    id: 3,
    name: "Daily Fresh Jeera – Budget Friendly Choice (Grade 3)",
    tagline: "Smart Choice. Real Flavor. Big Savings.",
    image: third_1,
    images: [third_1, third_2],
    description:
      "This grade includes 85–90% cumin seeds mixed with dry husk, small twigs, and leaf particles. Ideal for users who prefer low-cost cumin and can do basic cleaning.",
    points: [
      "Budget-friendly cumin",
      "Needs light sieving",
      "Suitable for small spice processors or rural buyers",
    ],
    note: "Cleaning recommended before consumption.",
    similarProducts: [4, 5],
  },
  {
    id: 4,
    name: "Farmer’s Pick Jeera – Village Harvest Mix (Grade 4)",
    tagline: "Direct from Farms. Raw, Rich & Rustic.",
    image: fourth_1,
    images: [fourth_1, fourth_2],
    description:
      "Contains around 70–75% cumin seeds mixed with a noticeable quantity of dry stems, leaf fragments, and husk. Suitable for buyers with manual or machine-cleaning setups.",
    points: [
      "Medium-grade cumin for processing",
      "Moderate amount of residue",
      "Ideal for small businesses or cleaning units",
    ],
    note: "Not fit for direct consumption.",
    similarProducts: [5, 6],
  },
  {
    id: 5,
    name: "Raw Aroma Jeera – Spice Processor’s Bulk Pack (Grade 5)",
    tagline: "Raw Power for Spice Processors.",
    image: fifth_1,
    images: [fifth_1, fifth_2],
    description:
      "This grade includes about 50–60% cumin seeds, with a high amount of residue including husks, dry leaves, twigs, and occasional small stones.",
    points: [
      "Economical for industrial buyers",
      "Needs thorough cleaning",
      "Great for large-scale spice sorters",
    ],
    note: "Sold as raw material for further processing.",
    similarProducts: [6, 7],
  },
  {
    id: 6,
    name: "Desi Mandi Jeera – Farm Fresh Raw Stock (Grade 6)",
    tagline: "Bulk Value. Farm Raw. Clean Your Way.",
    image: sixth_1,
    images: [sixth_1, sixth_2],
    description:
      "A raw farm-direct batch with around 30–40% cumin seeds, mixed with stems, dry leaves, some soil, and husk. Ideal for large spice mills that perform full-scale cleaning and sorting.",
    points: [
      "Direct from farm",
      "Needs complete cleaning",
      "Best for industrial spice buyers",
    ],
    note: "Not suitable for personal kitchen use.",
    similarProducts: [7, 1],
  },
  {
    id: 7,
    name: "Jeera Base Blend – Residue Sorting Supply (Grade 7)",
    tagline: "Residue Mix for Feed & Compost Use.",
    image: seventh_1,
    images: [seventh_1, seventh_2],
    description:
      "This is a low-grade residue mix consisting of mostly stems, husks, dry leaves, and a small amount (~10–20%) of cumin seeds. It is typically sold as waste-grade raw material.",
    points: [
      "Very low-cost",
      "Used for sorting, animal feed, or compost",
      "For non-edible industrial use",
    ],
    note: "This is not for direct or edible use.",
    similarProducts: [1, 2],
  },
];