import React from "react";
import image from "../../assets/image.png";

const Intro = () => {
  return (
    <div className="md:flex max-w-[1240px] mx-auto justify-center items-center gap-10 p-2">
      <div className="flex gap-5 flex-col justify-center items-center md:w-[50%] text-justify">
        <h1 className="font-bold text-2xl">About Our Business</h1>
        <p>
          We are IT professionals dedicated to providing high quality courses
          and services to students in technology field. We offer a essential and
          best course in minimum cost <br /> Our mission is to create a wide
          range IT courses business where we can teach and grow our connections
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img src={image} loading="lazy" alt="img" />
      </div>
    </div>
  );
};

export default Intro;
