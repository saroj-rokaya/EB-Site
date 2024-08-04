import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="m-2 bg-gray-100 md:flex justify-between gap-5">
        {/* left section */}
        <div className="md:w-[50%] my-5 flex flex-col gap-5">
          <h1 className="font-bold text-2xl">
            <span className="bg-[#5AE4A8] border-2 rounded-l-lg border-[#5AE4A8]">
              ER
            </span>
            <span className="border-t-[#5AE4A8] border-l-[#5AE4A8] border-r-black border-b-black border-2">
              -
            </span>
            <span className="bg-black text-[#5AE4A8] border-2 border-black rounded-r-lg">
              Skills
            </span>
          </h1>
          <p>
            Start your journey towards becoming a tech expert with us. Enroll in
            our courses today and take the first step towards a brighter future
            in technology
          </p>
          <ul className="flex justify-center items-center rounded-full gap-10">
            <li className="hover:text-black text-[#5AE4A8] hover:bg-[#5AE4A8] bg-black ease-in-out duration-300 hover:scale-105 rounded-full p-2">
              <FaFacebook className="h-6 w-6 md:h-8 md:w-8" />
            </li>
            <li className="hover:text-black text-[#5AE4A8] hover:bg-[#5AE4A8] bg-black ease-in-out duration-300 hover:scale-105 rounded-full p-2">
              <AiFillInstagram className="h-6 w-6 md:h-8 md:w-8" />
            </li>
            <li className="hover:text-black text-[#5AE4A8] hover:bg-[#5AE4A8] bg-black ease-in-out duration-300 hover:scale-105 rounded-full p-2">
              <FaGithub className="h-6 w-6 md:h-8 md:w-8" />
            </li>
            <li className="hover:text-black text-[#5AE4A8] hover:bg-[#5AE4A8] bg-black ease-in-out duration-300 hover:scale-105 rounded-full p-2">
              <FaLinkedin className="h-6 w-6 md:h-8 md:w-8" />
            </li>
          </ul>
        </div>
        {/* //right section/ */}
        <div className=" md:w-[50%] m-2 flex justify-between">
          <ul className="flex flex-col gap-5">
            <li className="font-bold text-lg">Short Link</li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `
                ${
                  isActive ? "text-[#5ae4a8]" : "text-black"
                } cursor-pointer hover:underline`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `
                ${
                  isActive ? "text-[#5ae4a8]" : "text-black"
                } cursor-pointer hover:underline`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) => `
                ${
                  isActive ? "text-[#5ae4a8]" : "text-black"
                } cursor-pointer hover:underline`}
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `
                ${
                  isActive ? "text-[#5ae4a8]" : "text-black"
                } cursor-pointer hover:underline`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="font-bold text-lg">Support</li>
            <li className="cursor-pointer hover:underline">Pricing</li>
            <li className="cursor-pointer hover:underline">Documentation</li>
            <li className="cursor-pointer hover:underline">Guide</li>
            <li className="cursor-pointer hover:underline">Api Status</li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="font-bold text-lg">Company</li>
            <li className="cursor-pointer hover:underline">About</li>
            <li className="cursor-pointer hover:underline">Blog</li>
            <li className="cursor-pointer hover:underline">Job</li>
            <li className="cursor-pointer hover:underline">Careers</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto py-5 m-2 border-t border-black text-center">
        &copy;2024 || Saroj rokaya ||
      </div>
    </div>
  );
};

export default Footer;
