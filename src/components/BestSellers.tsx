import { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/shopContext";
import { productsProps } from "../assets/assets";
import { Link } from "react-router-dom";
import ProductItems from "./ProductItems";

const BestSellers = () => {
  const { products, currency } = useContext(shopContext);
  const [bestProducts, setBestProducts] = useState<productsProps[]>([]);

  useEffect(() => {
    setBestProducts(products.filter((items) => items.bestseller).slice(0, 4));
  }, []);

  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-2 py-8">
        <p className="text-center text-3xl font-bold sm:text-5xl">
          BEST SELLERS
        </p>
        <p className="text-center text-xs">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          repellat laboriosam veniam.
        </p>
      </div>

      <div className="my-5 grid grid-cols-2 gap-5 md:grid-cols-4">
        {bestProducts.map((items) => {
          return (
            <ProductItems
              key={items.id}
              id={items.id}
              image={items.image}
              name={items.name}
              price={items.price}
              currency={currency}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-center py-5">
        <Link
          to="/collection"
          className="flex h-10 w-full items-center justify-center rounded-full border border-black hover:bg-black hover:text-white sm:w-36"
        >
          View All
        </Link>
      </div>

      <hr className="my-5 h-[1.5px] w-full border-none bg-gray-100" />
    </div>
  );
};

export default BestSellers;
