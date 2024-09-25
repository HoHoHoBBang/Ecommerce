import React from "react";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import BestSellers from "../components/BestSellers";
import NewsletterBox from "../components/NewsLetterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <BestSellers />
      <NewsletterBox />
    </div>
  );
};

export default Home;
