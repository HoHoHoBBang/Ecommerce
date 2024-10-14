import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col sm:h-[600px] sm:flex-row">
      <div className="flex w-full items-center justify-center py-10 sm:w-1/2 sm:py-0">
        <div className="flex w-full flex-col items-start gap-5 py-5">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-4xl font-bold sm:text-5xl">FIND CLOTHES</p>
              <p className="text-4xl font-bold sm:text-5xl">THAT MATCHES</p>
              <p className="text-4xl font-bold sm:text-5xl">YOUR STYLE</p>
            </div>

            <div>
              <p className="text-xs">
                Browse through our diverse range of meticulously crafted
                garments,
              </p>
              <p className="text-xs">
                designed to bring out your individuality and cater to your sense
                of style.
              </p>
            </div>
          </div>

          <div className="flex w-full items-start">
            <Link
              to="/collection"
              className="flex h-10 w-36 items-center justify-center rounded-full bg-black text-white"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <img
        src={assets.hero_img}
        alt=""
        className="w-full object-cover sm:w-1/2"
      />
    </div>
  );
};

export default Hero;
