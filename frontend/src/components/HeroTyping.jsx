import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { CircleArrowRight } from "lucide-react";

const Hero1 = () => {
  return (
    <div className="text-white bg-black pt-10">
      <div className="w-full mx-auto text-center flex flex-col justify-center">
        {/* Main Heading */}
        <h1 className="md:text-8xl sm:text-5xl text-6xl font-extrabold md:py-6 flex justify-center gap-2">
          Welcome to
          <span className="italic text-green-500"> Cryptick</span>
        </h1>

        {/* Typed Text */}
        <div className="flex justify-center items-center text-gray-400 mt-2">
          <p className="md:text-2xl sm:text-xl text-lg font-semibold">
            Analyze real-time data for coins like
          </p>
          <ReactTyped
            className="md:text-3xl sm:text-2xl text-lg font-bold md:pl-4 pl-2 text-white"
            strings={["USDT", "LINK", "DOGE"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        {/* Subtext */}
        <p className="md:text-xl text-lg font-medium text-gray-400 mt-3">
          Monitor real-time data and detect pump-and-dump scam patterns.
        </p>

        {/* CTA Link */}
        <Link
          to={`/coin`}
          className="mt-6 inline-flex items-center gap-2 px-5 py-3 justify-center rounded-md  font-semibold text-white
          hover:text-green-500 hover:border-green-500 transition-all duration-300"
        >
          All Coins
          <CircleArrowRight size={18} className="" />
        </Link>
      </div>
    </div>
  );
};

export default Hero1;
