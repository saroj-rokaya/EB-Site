import React from "react";
import image from "../../Assets/confuse.jpg";

const WhyJoin = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto min-h-[90vh] p-5 text-justify md:flex justify-center gap-10 items-center">
        <div className="md:w-[50%]">
          <img src={image} alt="img" className="  p-2 max-h-[90vh]" />
        </div>
        <div className="flex gap-5   p-2 flex-col justify-center items-center md:w-[50%]">
          <h1 className="text-2xl font-bold">Why Connect With US</h1>
          <ul className="flex flex-col gap-2">
            <li className="list-disc">
              <span className="font-semibold">Expert Curated Selection:</span> Our products are carefully chosen by IT experts to meet the needs
              of students and professionals.
            </li>
            <li className="list-disc">
              <span className="font-semibold">Passionate Team:</span> We love
              technology and are committed to providing exceptional customer
              service.
            </li>
            <li className="list-disc">
              <span className="font-semibold">Quality Assurance:</span> Trust in
              the quality of our products, ranging from the latest gadgets to
              essential study materials.
            </li>
            <li className="list-disc">
              <span className="font-semibold">Competitive Pricing:</span> Enjoy
              high-quality products at prices that won't break the bank.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WhyJoin;
