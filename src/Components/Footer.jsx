import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import image from "../Assets/Logo/transparentLogo.png";

const Footer = () => {
  return (
    <>
      <div className="px-5 py-5 md:flex justify-between gap-5 dark-back">
        {/* left section */}
        <div className="md:w-[50%] my-5 flex flex-col gap-5">
          <Link to="/">
            <div className="font-bold text-2xl md:text-3xl ">
              <img
                src={image}
                alt="img"
                className="h-[40%] w-[40%] object-cover"
              />
            </div>
          </Link>
          <p className="text-white">
            Start your journey towards becoming a tech expert with us. Enroll in
            our courses today and take the first step towards a brighter future
            in technology
          </p>
          <ul className="flex justify-center items-center rounded-full gap-10">
            <li className="hover:scale-[1.2] ease-in-out duration-300 text-white">
              <FaFacebook className="h-6 w-6 md:h-8 md:w-8" />
            </li>
            <li className="hover:scale-[1.2] ease-in-out duration-300 text-white">
              <AiFillInstagram className="h-6 w-6 md:h-8 md:w-8" />
            </li>
            <li className="hover:scale-[1.2] ease-in-out duration-300 text-white">
              <FaGithub className="h-6 w-6 md:h-8 md:w-8" />
            </li>
            <li className="hover:scale-[1.2] ease-in-out duration-300 text-white">
              <FaLinkedin className="h-6 w-6 md:h-8 md:w-8" />
            </li>
          </ul>
        </div>
        {/* //right section/ */}
        <div className=" md:w-[50%] m-2 flex justify-between">
          <ul className="flex flex-col gap-5">
            <li className="font-semibold text-lg light-text">Short Link</li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `
                ${
                  isActive ? "text-white" : "light-text"
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
                  isActive ? "text-white" : "light-text"
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
                  isActive ? "text-white" : "light-text"
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
                  isActive ? "text-white" : "light-text"
                } cursor-pointer hover:underline`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="font-semibold text-lg light-text">Support</li>
            <li className="cursor-pointer hover:underline light-text ">Pricing</li>
            <li className="cursor-pointer hover:underline light-text ">Documentation</li>
            <li className="cursor-pointer hover:underline light-text ">Guide</li>
            <li className="cursor-pointer hover:underline light-text ">Api Status</li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="font-semibold text-lg light-text">Company</li>
            <li className="cursor-pointer hover:underline light-text">About</li>
            <li className="cursor-pointer hover:underline light-text">Blog</li>
            <li className="cursor-pointer hover:underline light-text">Job</li>
            <li className="cursor-pointer hover:underline light-text">Careers</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto py-5 border-t border-white text-white text-center dark-back">
        &copy;2024 || Saroj rokaya ||
      </div>
    </>
  );
};

export default Footer;
