import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../context/shopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import RelatedProducts from "../components/RelatedProducts";
import { productsProps } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(shopContext);
  const [productData, setProductData] = useState<productsProps | null>(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const fetchProductData = () => {
    products.map((item) => {
      if (item.id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex flex-1 items-center justify-center gap-2">
          <div className="mx-3 flex w-[15%] flex-col gap-3">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                className="cursor-pointer"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="flex w-[85%] items-center justify-center">
            <img src={image} alt="" className="h-auto w-[80%]" />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-5">
          <p className="text-3xl font-bold sm:text-5xl">{productData.name}</p>
          <p className="text-2xl font-bold">
            {currency}
            {productData.price.toLocaleString("ko-KR")}
          </p>
          <p className="text-sm">{productData.description}</p>

          <hr />

          <p className="font-bold">Selet Size</p>
          <div className="flex gap-2">
            {productData.sizes.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-full px-8 py-2 ${size === item ? "bg-black" : "bg-gray-100"}`}
                onClick={() => setSize(item)}
              >
                <p className={`text-xs ${size === item ? "text-white" : ""}`}>
                  {item}
                </p>
              </div>
            ))}
          </div>
          <hr />

          <div className="flex flex-col gap-5">
            <div className="flex gap-2">
              <div className="flex w-[25%] items-center justify-between rounded-full bg-gray-100 px-4 py-2">
                <FontAwesomeIcon
                  icon={faMinus}
                  className="flex cursor-pointer items-center text-sm"
                  onClick={() => {
                    if (quantity > 0) {
                      setQuantity(quantity - 1);
                    }
                  }}
                />

                <p className="text-sm">{quantity}</p>

                <FontAwesomeIcon
                  icon={faPlus}
                  className="flex cursor-pointer items-center text-sm"
                  onClick={() => setQuantity(quantity + 1)}
                />
              </div>
              <div
                className="flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-black px-8 py-2"
                onClick={() => {
                  addToCart(productData.id, size, quantity);
                  setQuantity(1);
                }}
              >
                <p className="text-sm text-white">Add to Cart</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-xs">Shipping fee ₩3,000</p>
              <p className="text-xs">
                (Free shipping for purchases over ₩59,900)
              </p>
              <p className="text-xs">
                (An additional ₩3,000 for delivery to remote areas)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-2xl">Product Detail</p>
        <hr className="my-5" />

        <p className="my-5">{productData.description}</p>
      </div>
      <div>
        <p className="text-2xl">Related Products</p>
        <hr className="my-5" />
        <RelatedProducts
          id={productData.id}
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : null;
};

export default Product;
