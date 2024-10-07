import React from "react";

const NewsletterBox = () => {
  return (
    <div className="flex flex-col items-center bg-black py-5">
      <p className="text-center text-xl font-bold text-white sm:text-2xl">
        Subscribe now & get 20% off
      </p>
      <p className="text-center text-xs text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe
        voluptatibus esse exercitationem ad ipsum incidunt, placeat consequatur!
      </p>

      <form
        action=""
        className="flex w-full flex-col items-center justify-center gap-5 pt-5 sm:flex-row"
      >
        <input
          type="email"
          className="w-4/5 rounded-full border px-3 py-1 outline-none sm:w-1/3"
          placeholder="Enter your email"
          required
        />
        <button className="flex h-9 w-4/5 items-center justify-center rounded-full bg-white text-black sm:w-36">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
