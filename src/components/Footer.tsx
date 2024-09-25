import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-y-5 py-5 sm:flex-row">
      <div className="flex w-full flex-[1.5] flex-col gap-3">
        <p className="text-3xl font-bold sm:text-4xl">
          LOGO<span className="text-yellow-500">.</span>
        </p>

        <p className="w-2/3 text-[10px]">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
      </div>

      <div className="grid flex-[4] grid-cols-2 gap-y-5 sm:grid-cols-4">
        <ul className="flex w-full flex-col gap-3">
          <p className="font-bold">COMPANY</p>

          <li className="text-xs">About</li>
          <li className="text-xs">Features</li>
          <li className="text-xs">Works</li>
          <li className="text-xs">Career</li>
        </ul>
        <ul className="flex w-full flex-col gap-3">
          <p className="font-bold">Help</p>

          <li className="text-xs">Customer Support</li>
          <li className="text-xs">Delivery Details</li>
          <li className="text-xs">Terms & Conditions</li>
          <li className="text-xs">Privacy Policy</li>
        </ul>
        <ul className="flex w-full flex-col gap-3">
          <p className="font-bold">FAQ</p>

          <li className="text-xs">Account</li>
          <li className="text-xs">Manage Deliveries</li>
          <li className="text-xs">Orders</li>
          <li className="text-xs">Payments</li>
        </ul>
        <ul className="flex w-full flex-col gap-3">
          <p className="font-bold">Resources</p>

          <li className="text-xs">Free eBooks</li>
          <li className="text-xs">Development Tutorial</li>
          <li className="text-xs">How to - Blog</li>
          <li className="text-xs">Youtube Playlist</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
