import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="my-5 flex flex-col items-center sm:flex-row">
      <div className="relative flex w-full flex-1 flex-col gap-3">
        <p className="left-2 top-2 px-5 text-5xl font-bold sm:absolute sm:px-0 sm:text-white">
          LOGO<span className="text-yellow-500">.</span>
        </p>
        <img src={assets.hero_img} alt="" className="hidden sm:flex" />
      </div>
      <div className="flex flex-1 flex-col gap-5 p-5">
        <p className="text-2xl font-bold sm:text-3xl">ABOUT US</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, voluptates? Beatae corrupti laboriosam dolores
          molestias possimus obcaecati similique, quod temporibus vitae quis
          fugit iure? Eos dolorum quisquam debitis et harum?
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, voluptates? Beatae corrupti laboriosam dolores
          molestias possimus obcaecati similique, quod temporibus vitae quis
          fugit iure? Eos dolorum quisquam debitis et harum?
        </p>
      </div>
    </div>
  );
};

export default About;
