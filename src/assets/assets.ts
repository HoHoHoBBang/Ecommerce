import { v4 as uuid } from "uuid";

import hero_img from "./hero_img.jpg";
import hero_img2 from "./hero_img2.jpg";
import t_shirts from "./t-shirts.png";
import t_shirts2 from "./t-shirts2.png";
import t_shirts3 from "./t-shirts3.png";
import t_shirts4 from "./t-shirts4.png";
import t_shirts5 from "./t-shirts5.png";
import t_shirts6 from "./t-shirts6.png";
import t_shirts7 from "./t-shirts7.png";
import t_shirts8 from "./t-shirts8.png";
import t_shirts8_1 from "./t-shirts8-1.png";
import t_shirts8_2 from "./t-shirts8-2.png";
import shirts from "./shirts.png";
import shirts2 from "./shirts2.png";
import pants from "./pants.png";
import pants2 from "./pants2.png";
import shorts from "./shorts.png";

export const assets = {
  hero_img,
  hero_img2,
  t_shirts,
  t_shirts2,
  t_shirts3,
  t_shirts4,
  t_shirts5,
  t_shirts6,
  t_shirts7,
  t_shirts8,
  t_shirts8_1,
  t_shirts8_2,
  shirts,
  shirts2,
  pants,
  pants2,
  shorts,
};

export interface productsProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  bestseller: boolean;
}

export const products: productsProps[] = [
  {
    id: uuid(),
    name: "T-Shirts",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorem expedita possimus unde nesciunt laborum architecto voluptatibus optio autem.",
    price: 100,
    image: [t_shirts],
    category: "Man",
    subCategory: "Top",
    sizes: ["S", "M", "L"],
    date: 1727234532668,
    bestseller: false,
  },
  {
    id: uuid(),
    name: "T-Shirts2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorem expedita possimus unde nesciunt laborum architecto voluptatibus optio autem.",
    price: 100,
    image: [t_shirts2],
    category: "Man",
    subCategory: "Top",
    sizes: ["S", "M", "L"],
    date: 1727234532669,
    bestseller: true,
  },
  {
    id: uuid(),
    name: "T-Shirts3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorem expedita possimus unde nesciunt laborum architecto voluptatibus optio autem.",
    price: 100,
    image: [t_shirts3],
    category: "Man",
    subCategory: "Top",
    sizes: ["S", "M", "L"],
    date: 1727234532670,
    bestseller: false,
  },
  {
    id: uuid(),
    name: "T-Shirts4",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorem expedita possimus unde nesciunt laborum architecto voluptatibus optio autem.",
    price: 100,
    image: [t_shirts4],
    category: "Man",
    subCategory: "Top",
    sizes: ["S", "M", "L"],
    date: 1727234532671,
    bestseller: true,
  },
  {
    id: uuid(),
    name: "T-Shirts5",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorem expedita possimus unde nesciunt laborum architecto voluptatibus optio autem.",
    price: 100,
    image: [t_shirts5],
    category: "Man",
    subCategory: "Top",
    sizes: ["S", "M", "L"],
    date: 1727234532672,
    bestseller: false,
  },
  {
    id: uuid(),
    name: "T-Shirts6",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorem expedita possimus unde nesciunt laborum architecto voluptatibus optio autem.",
    price: 100,
    image: [t_shirts6],
    category: "Man",
    subCategory: "Top",
    sizes: ["S", "M", "L"],
    date: 1727234532673,
    bestseller: true,
  },
  {
    id: uuid(),
    name: "T-Shirts7",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorem expedita possimus unde nesciunt laborum architecto voluptatibus optio autem.",
    price: 100,
    image: [t_shirts7],
    category: "Man",
    subCategory: "Top",
    sizes: ["S", "M", "L"],
    date: 1727234532674,
    bestseller: false,
  },
  {
    id: uuid(),
    name: "T-Shirts8",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorem expedita possimus unde nesciunt laborum architecto voluptatibus optio autem.",
    price: 100,
    image: [t_shirts8, t_shirts8_1, t_shirts8_2],
    category: "Man",
    subCategory: "Top",
    sizes: ["S", "M", "L"],
    date: 1727234532675,
    bestseller: true,
  },
  {
    id: uuid(),
    name: "Shirts",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorem expedita possimus unde nesciunt laborum architecto voluptatibus optio autem.",
    price: 100,
    image: [shirts],
    category: "Man",
    subCategory: "Top",
    sizes: ["S", "M", "L"],
    date: 1727234532676,
    bestseller: false,
  },
  {
    id: uuid(),
    name: "Shirts2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorem expedita possimus unde nesciunt laborum architecto voluptatibus optio autem.",
    price: 100,
    image: [shirts2],
    category: "Man",
    subCategory: "Top",
    sizes: ["S", "M", "L"],
    date: 1727234532677,
    bestseller: true,
  },
  {
    id: uuid(),
    name: "Pants",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorem expedita possimus unde nesciunt laborum architecto voluptatibus optio autem.",
    price: 100,
    image: [pants],
    category: "Man",
    subCategory: "Top",
    sizes: ["S", "M", "L"],
    date: 1727234532678,
    bestseller: false,
  },
  {
    id: uuid(),
    name: "Pants2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorem expedita possimus unde nesciunt laborum architecto voluptatibus optio autem.",
    price: 100,
    image: [pants2],
    category: "Man",
    subCategory: "Top",
    sizes: ["S", "M", "L"],
    date: 1727234532679,
    bestseller: true,
  },
  {
    id: uuid(),
    name: "Shorts",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dolorem expedita possimus unde nesciunt laborum architecto voluptatibus optio autem.",
    price: 100,
    image: [shorts],
    category: "Man",
    subCategory: "Top",
    sizes: ["S", "M", "L"],
    date: 1727234532680,
    bestseller: false,
  },
];
