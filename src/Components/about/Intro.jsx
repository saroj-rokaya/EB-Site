import React, { useState } from "react";
import image from "../../Assets/image.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Intro = () => {
useState(()=>{
  AOS.init({
    duration: 1000,
  });
 }, []);
  return (
    <div className="md:flex max-w-[1240px] mx-auto justify-center items-center gap-10 p-2">
      <div data-aos="fade-right" className="flex gap-5 flex-col justify-center sm:items-start items-center md:w-[50%] text-justify">
        <h1 className="font-bold text-2xl">About Our Business</h1>
        <p>
          We are IT professionals dedicated to providing high quality courses
          and services to students in technology field. We offer a essential and
          best course in minimum cost <br /> Our mission is to create a wide
          range IT courses business where we can teach and grow our connections
        </p>
      </div>
      <div data-aos="fade-left" className="flex justify-center items-center">
        <img src={image} loading="lazy" alt="img" />
      </div>
    </div>
  );
};

export default Intro;
