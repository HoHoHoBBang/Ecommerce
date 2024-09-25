import React, { createContext } from "react";
import { products, productsProps } from "../assets/assets";

interface ShopContextType {
  products: productsProps[];
  currency: string;
  deliveryCost: number;
}

interface Props {
  children: React.ReactNode;
}

const initialState: ShopContextType = {
  products: [],
  currency: "₩",
  deliveryCost: 3000,
};

export const shopContext = createContext<ShopContextType>(initialState);

const ShopContextProvider = ({ children }: Props) => {
  const currency = "₩";
  const deliveryCost = 3000;

  const value = {
    products,
    currency,
    deliveryCost,
  };

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

export default ShopContextProvider;
