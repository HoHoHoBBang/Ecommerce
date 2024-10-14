import React, { createContext, useState } from "react";
import { products, productsProps } from "../assets/assets";

interface CartItemsType {
  [key: string]: {
    [size: string]: number;
  };
}

interface ShopContextType {
  products: productsProps[];
  currency: string;
  deliveryCost: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showSearchBar: boolean;
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (itemId: string, size: string, quantity: number) => void;
  updateQuantity: (itemId: string, size: string, quantity: number) => void;
  cartItemCount: () => number;
  cartItemAmount: () => number;
  cartItems: CartItemsType;
}

interface Props {
  children: React.ReactNode;
}

const initialState: ShopContextType = {
  products: [],
  currency: "₩",
  deliveryCost: 3000,
  search: "",
  setSearch: () => {},
  showSearchBar: false,
  setShowSearchBar: () => {},
  addToCart: () => {},
  updateQuantity: () => {},
  cartItemCount: () => 0,
  cartItemAmount: () => 0,
  cartItems: {},
};

export const shopContext = createContext<ShopContextType>(initialState);

const ShopContextProvider = ({ children }: Props) => {
  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemsType>({});

  const currency = "₩";
  const deliveryCost = 3000;

  const addToCart = (itemId: string, size: string, quantity: number) => {
    const cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += quantity;
      } else {
        cartData[itemId][size] = quantity;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = quantity;
    }

    setCartItems(cartData);
  };

  const updateQuantity = (itemId: string, size: string, quantity: number) => {
    const cartData = structuredClone(cartItems);

    if (quantity === 0) {
      cartData[itemId][size] = quantity;
    } else {
      cartData[itemId][size] += quantity;
    }

    setCartItems(cartData);
  };

  const cartItemCount = (): number => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    return totalCount;
  };

  const cartItemAmount = (): number => {
    let totalAmount = 0;

    for (const items in cartItems) {
      const itemInfo = products.find((product) => product.id === items);

      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += (itemInfo?.price || 0) * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    return totalAmount;
  };

  const value = {
    products,
    currency,
    deliveryCost,
    search,
    setSearch,
    showSearchBar,
    setShowSearchBar,
    cartItems,
    addToCart,
    cartItemCount,
    updateQuantity,
    cartItemAmount,
  };

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

export default ShopContextProvider;
