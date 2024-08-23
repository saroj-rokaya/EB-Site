"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { BackgroundBeams } from "../ui/BackgroundBeams";
import image from '../../Assets/Hero/coding.svg'


const Hero = () => {
  return (
    <div className="mx-auto light-back">
      <div className="w-[90%] mx-auto flex justify-center items-start gap-5 flex-col min-h-[90vh]">
        <h1 className="text-2xl md:text-4xl font-bold dark-text ">Welcome to ER Skills</h1>
        <p className="text-xl font-semibold md:text-2xl dark-text">
          Learn
          <ReactTyped
            strings={["Web Development", "App Development", "Cyber Security"]}
            className="pl-[8px]"
            typeSpeed={80}
            backSpeed={80}
            loop
          ></ReactTyped>
        </p>
        <p className="text-xl w-full md:w-[50%] normal-text ">Confused on which course to take? I have got you covered. Browse courses and find out the best course for you.</p>
        <Link to="/courses" className="z-10">
          <button className="bg-white shadow-lg rounded-xl  font-bold dark-text p-3 md:px-5 hover:normal-text duration-300 hover:bg-white">
            Get Start
          </button>
        </Link>
        <img src={image} alt="img" className="absolute h-[35%] top-24 sm:block hidden md:h-[70%] lg:h-[80%] right-0 bg-red" />
      </div>
      <BackgroundBeams />
    </div>

  );
};

export default Hero;
