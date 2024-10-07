import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/shopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus, faTag } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const {
    products,
    currency,
    deliveryCost,
    cartItems,
    updateQuantity,
    cartItemAmount,
  } = useContext(shopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="flex flex-col pb-5">
      <div className="py-2">
        <p className="text-2xl font-bold sm:text-3xl">YOUR CART</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        {cartData.length > 0 ? (
          <div className="flex flex-[1.5] flex-col gap-5 rounded-xl border p-3">
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product.id === item.id,
              );

              return (
                <div key={index} className="flex flex-col">
                  <div className="flex">
                    <img
                      src={productData?.image[0]}
                      alt=""
                      className="h-32 w-32 object-cover"
                    />
                    <div className="flex w-full">
                      <div className="flex w-full flex-col justify-between pb-3">
                        <div>
                          <div className="flex items-end justify-between">
                            <p className="font-bold">{productData?.name}</p>
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              onClick={() =>
                                updateQuantity(item.id, item.size, 0)
                              }
                              className="cursor-pointer text-red-500"
                            />
                          </div>
                          <p className="text-xs">
                            Size : <span className="text-xs">{item.size}</span>
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold sm:text-lg">
                              {currency}
                              {productData?.price.toLocaleString("ko-kr")}
                            </p>
                          </div>
                          <div className="flex w-[45%] items-center justify-between rounded-full bg-gray-100 px-4 py-2 sm:w-[25%]">
                            <FontAwesomeIcon
                              icon={faMinus}
                              className="flex cursor-pointer items-center text-sm"
                              onClick={() =>
                                updateQuantity(item.id, item.size, -1)
                              }
                            />

                            <p className="text-sm">{item.quantity}</p>

                            <FontAwesomeIcon
                              icon={faPlus}
                              className="flex cursor-pointer items-center text-sm"
                              onClick={() =>
                                updateQuantity(item.id, item.size, 1)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="h-[1px] w-full border-none bg-black" />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-[1.5] flex-col gap-5 rounded-xl border p-3">
            <p className="flex h-full items-center justify-center text-lg sm:text-xl">
              No items in cart
            </p>
          </div>
        )}
        <div className="flex h-full flex-1">
          <div className="flex w-full flex-col gap-5 rounded-xl border p-3">
            <div>
              <p className="text-lg font-bold">Order Summary</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="text-sm">Subtotal</p>
                <p className="font-bold">
                  {currency}
                  {cartItemAmount().toLocaleString("ko-kr")}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Discount</p>
                <p className="font-bold text-red-500">-{currency}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Delivery Fee</p>
                <p className="font-bold">
                  {currency}
                  {cartItemAmount() < 59900
                    ? deliveryCost.toLocaleString("ko-kr")
                    : 0}
                </p>
              </div>

              <hr className="h-[1px] w-full border-none bg-black" />

              <div className="flex items-center justify-between">
                <p className="text-lg">Total</p>
                <p className="font-bold">
                  {currency}
                  {(
                    cartItemAmount() +
                    (cartItemAmount() < 59900 ? deliveryCost : 0)
                  ).toLocaleString("ko-kr")}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-[2] items-center gap-2 rounded-full bg-gray-100 px-2 py-2">
                <FontAwesomeIcon icon={faTag} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
              <div className="flex flex-1 cursor-pointer items-center justify-center rounded-full bg-black px-2 py-2">
                <p className="text-sm text-white">Apply</p>
              </div>
            </div>
            <div className="flex cursor-pointer items-center justify-center rounded-full bg-black px-2 py-2">
              <p className="text-sm text-white">Go to Checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
