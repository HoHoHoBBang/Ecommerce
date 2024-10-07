import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/shopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearchBar, setShowSearchBar } =
    useContext(shopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearchBar && visible ? (
    <div className="flex items-center justify-center">
      <div className="my-5 flex w-1/2 items-center rounded-full border px-3 py-1">
        <input
          type="text"
          className="w-full bg-transparent text-sm outline-none"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <FontAwesomeIcon
        icon={faX}
        className="m-2 cursor-pointer text-sm"
        onClick={() => setShowSearchBar(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
