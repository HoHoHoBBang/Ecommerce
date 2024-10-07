import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/shopContext";
import ProductItems from "./ProductItems";

const RelatedProducts = ({ id, category, subCategory }) => {
  const { products, currency } = useContext(shopContext);
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products;

      productsCopy = productsCopy.filter((item) => id !== item.id);
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory,
      );
      setRelatedProduct(productsCopy.slice(0, 5));
    }
  }, [products]);

  return relatedProduct ? (
    <div className="my-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
      {relatedProduct.map((items) => (
        <ProductItems
          key={items.id}
          id={items.id}
          image={items.image}
          name={items.name}
          price={items.price}
          currency={currency}
        />
      ))}
    </div>
  ) : null;
};

export default RelatedProducts;
