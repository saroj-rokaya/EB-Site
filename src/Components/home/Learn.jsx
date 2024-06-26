import React from "react";
import image from "../../assets/image.png/";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div className="max-w-[1240px] p-2 mx-auto min-h-[30vh] md:grid grid-cols-3 gap-5">
      <div>
        <img
          className=" rounded-lg h-full md:w-[80%] p-2 mt-5"
          src={image}
          loading="lazy"
          alt="img"
        />
      </div>
      {/* //right side */}
      <div className=" col-span-2 flex flex-col gap-5 justify-center mt-5">
        <p className="font-bold text-2xl text-black">
          Learn the latest IT skills and stay ahead
        </p>
        <p className="text-justify">
          Join us for access to fresh courses, helpful tech tips, and the latest
          industry news. Our newsletter keeps it simple just the essentials you
          need to stay ahead. Sign up now and stay in the loop!
        </p>
        <Link to="/Courses">
          <button className="bg-[#5AE4A8]  w-[120px] md:w-[150px] rounded-lg border-2 font-bold border-[#5AE4A8] text-white p-1.5 md:p-3 hover:border-2 hover:border-[#5AE4A8] hover:text-[#5AE4A8] duration-300 hover:bg-white">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Learn;
