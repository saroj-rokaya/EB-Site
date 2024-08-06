import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-5 flex-col min-h-[90vh] mx-auto bg-gray-800 text-white">
      <p className="text-xl md:text-2xl ">Learn With Us</p>
      <h1 className="text-2xl md:text-4xl font-bold ">Grow With Us</h1>
      <p className="text-xl md:text-2xl">
        Learn
        <ReactTyped
          strings={["Web Development", "App Development", "Cyber Security"]}
          className="pl-[8px]"
          typeSpeed={80}
          backSpeed={80}
          loop
        ></ReactTyped>
      </p>
      <Link to="/courses">
        <button className="bg-[#5AE4A8] rounded-lg border-2 font-bold border-[#5AE4A8] text-white p-1.5 md:p-3 hover:border-2 hover:border-[#5AE4A8] hover:text-[#5AE4A8] duration-300 hover:bg-white">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Hero;
