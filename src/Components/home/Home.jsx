import React from "react";
import Hero from "./Hero.jsx";
import Learn from "./Learn.jsx";
import Newsletter from "./Newsletter.jsx";
import Testimonials from "./testimonials/Testimonials.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Learn />
      <Newsletter />
      <Testimonials />
    </>
  );
};

export default Home;
