import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/shopContext";
import ProductItems from "../components/ProductItems";

const Collection = () => {
  const { products, currency, search, showSearchBar } = useContext(shopContext);

  const [visible, setVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const categotyToggle = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const subCategotyToggle = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const productFilter = () => {
    let productsCopy = products;

    if (showSearchBar && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    setFilteredProducts(productsCopy);
  };

  const productSort = () => {
    let productCopy = filteredProducts;

    switch (sortType) {
      case "low-high":
        setFilteredProducts(productCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilteredProducts(productCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        productFilter();
        break;
    }
  };

  useEffect(() => {
    productFilter();
  }, [category, subCategory, search, showSearchBar]);

  useEffect(() => {
    productSort();
  }, [sortType]);

  return (
    <div className="flex flex-col pb-10 sm:flex-row">
      <div className="flex min-w-60 flex-col items-center gap-3 sm:py-8">
        <div className="flex w-full items-center gap-3 sm:w-3/4">
          <p className="text-start text-xl font-bold">FILTERS</p>

          <FontAwesomeIcon
            icon={faAngleRight}
            className={`${visible ? "rotate-90" : ""} cursor-pointer transition-all duration-200 sm:hidden`}
            onClick={() => setVisible(!visible)}
          />
        </div>

        <div
          className={`${visible ? "sm:flex" : "hidden sm:flex"} flex w-full flex-col gap-3 rounded-lg border p-3 sm:w-3/4`}
        >
          <p className="text-sm">CATEGORIES</p>
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-1 text-xs">
              <input type="checkbox" value={"man"} onChange={categotyToggle} />
              MAN
            </p>
            <p className="flex items-center gap-1 text-xs">
              <input
                type="checkbox"
                value={"women"}
                onChange={categotyToggle}
              />
              WOMEN
            </p>
            <p className="flex items-center gap-1 text-xs">
              <input type="checkbox" value={"kids"} onChange={categotyToggle} />
              KIDS
            </p>
          </div>
        </div>

        <div
          className={`${visible ? "sm:flex" : "hidden sm:flex"} flex w-full flex-col gap-3 rounded-lg border p-3 sm:w-3/4`}
        >
          <p className="text-sm">TYPES</p>
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-1 text-xs">
              <input
                type="checkbox"
                value={"top"}
                onChange={subCategotyToggle}
              />
              TOP
            </p>
            <p className="flex items-center gap-1 text-xs">
              <input
                type="checkbox"
                value={"bottom"}
                onChange={subCategotyToggle}
              />
              BOTTOM
            </p>
            <p className="flex items-center gap-1 text-xs">
              <input
                type="checkbox"
                value={"outer"}
                onChange={subCategotyToggle}
              />
              OUTER
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col">
        <div className="flex w-full justify-between py-8">
          <div className="flex flex-col items-start gap-2">
            <p className="text-center text-2xl font-bold sm:text-3xl">
              COLLECTION
            </p>
          </div>

          <div className="flex items-center gap-2">
            <p className="hidden text-sm sm:block">Sort By :</p>
            <select
              name=""
              id=""
              className="rounded border text-sm outline-none"
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="relevant">Relevant</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((items) => {
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
      </div>
    </div>
  );
};

export default Collection;
