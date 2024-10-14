import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleRight,
  faBarsStaggered,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { shopContext } from "../context/shopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearchBar, cartItemCount } = useContext(shopContext);

  return (
    <div className="flex items-center justify-between py-5">
      <Link to="/">
        <p className="text-3xl font-bold sm:text-4xl">
          LOGO<span className="text-yellow-500">.</span>
        </p>
      </Link>
      <ul className="hidden items-center gap-3 text-sm font-medium md:flex">
        <NavLink to="/" className="flex flex-col items-center">
          <p>HOME</p>
          <hr className="hidden h-[1.5px] w-full border-none bg-black" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center">
          <p>COLLECTION</p>
          <hr className="hidden h-[1.5px] w-full border-none bg-black" />
        </NavLink>
        <NavLink to="/new-arrivals" className="flex flex-col items-center">
          <p>NEW ARRIVALS</p>
          <hr className="hidden h-[1.5px] w-full border-none bg-black" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center">
          <p>ABOUT</p>
          <hr className="hidden h-[1.5px] w-full border-none bg-black" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center">
          <p>CONTACT</p>
          <hr className="hidden h-[1.5px] w-full border-none bg-black" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-5">
        <div className="cursor-pointer">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-lg"
            onClick={() => setShowSearchBar(true)}
          />
        </div>
        <div className="group relative cursor-pointer">
          <FontAwesomeIcon icon={faUser} className="text-lg" />
          <div className="absolute right-0 hidden pt-3 group-hover:block">
            <div className="flex w-32 flex-col gap-2 rounded border bg-white px-3 py-5 text-gray-500">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative cursor-pointer">
          <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
          <p className="absolute -right-1.5 -top-1.5 flex aspect-square h-4 w-4 items-center justify-center rounded-full border border-white bg-black text-[9px] text-white">
            {cartItemCount()}
          </p>
        </Link>
        <div
          className="flex cursor-pointer md:hidden"
          onClick={() => setVisible(true)}
        >
          <FontAwesomeIcon icon={faBarsStaggered} className="text-lg" />
        </div>
      </div>

      <div
        className={`absolute bottom-0 right-0 top-0 overflow-hidden bg-white shadow transition-all duration-300 ${visible ? "w-1/2" : "w-0"}`}
      >
        <div className="flex flex-col">
          <div
            className="flex cursor-pointer items-center gap-3 p-5"
            onClick={() => setVisible(false)}
          >
            <p className="text-sm">Back</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>

          <ul className="flex flex-col items-start gap-5 text-sm font-medium">
            <NavLink
              to="/"
              className="flex flex-col items-center pl-5"
              onClick={() => setVisible(false)}
            >
              <p>HOME</p>
              <hr className="hidden h-[1.5px] w-full border-none bg-black" />
            </NavLink>
            <NavLink
              to="/collection"
              className="flex flex-col items-center pl-5"
              onClick={() => setVisible(false)}
            >
              <p>COLLECTION</p>
              <hr className="hidden h-[1.5px] w-full border-none bg-black" />
            </NavLink>
            <NavLink
              to="/new-arrivals"
              className="flex flex-col items-center pl-5"
              onClick={() => setVisible(false)}
            >
              <p>NEW ARRIVALS</p>
              <hr className="hidden h-[1.5px] w-full border-none bg-black" />
            </NavLink>
            <NavLink
              to="/about"
              className="flex flex-col items-center pl-5"
              onClick={() => setVisible(false)}
            >
              <p>ABOUT</p>
              <hr className="hidden h-[1.5px] w-full border-none bg-black" />
            </NavLink>
            <NavLink
              to="/contact"
              className="flex flex-col items-center pl-5"
              onClick={() => setVisible(false)}
            >
              <p>CONTACT</p>
              <hr className="hidden h-[1.5px] w-full border-none bg-black" />
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
