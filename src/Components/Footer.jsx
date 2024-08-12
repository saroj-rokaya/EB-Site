import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import image from "../Assets/Logo/transparentLogo.png";

const Footer = () => {
  return (
    <>
      <div className="px-5 py-5 md:flex justify-between gap-5 light-back">
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
          <p className="normal-text">
            Start your journey towards becoming a tech expert with us. Enroll in
            our courses today and take the first step towards a brighter future
            in technology
          </p>
          <ul className="flex justify-center items-center rounded-full gap-10">
            <li className="hover:scale-[1.2] ease-in-out duration-300 dark-text">
              <FaFacebook className="h-6 w-6 md:h-8 md:w-8" />
            </li>
            <li className="hover:scale-[1.2] ease-in-out duration-300 dark-text">
              <AiFillInstagram className="h-6 w-6 md:h-8 md:w-8" />
            </li>
            <li className="hover:scale-[1.2] ease-in-out duration-300 dark-text">
              <FaGithub className="h-6 w-6 md:h-8 md:w-8" />
            </li>
            <li className="hover:scale-[1.2] ease-in-out duration-300 dark-text">
              <FaLinkedin className="h-6 w-6 md:h-8 md:w-8" />
            </li>
          </ul>
        </div>
        {/* //right section/ */}
        <div className=" md:w-[50%] m-2 flex justify-between">
          <ul className="flex flex-col gap-5">
            <li className="font-bold text-lg dark-text">Short Link</li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `
                ${
                  isActive ? "normal-text font-semibold" : "dark-text font-semibold"
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
                  isActive ? "normal-text font-semibold" : "dark-text font-semibold"
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
                  isActive ? "normal-text font-semibold" : "dark-text font-semibold"
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
                  isActive ? "normal-text font-semibold" : "dark-text font-semibold"
                } cursor-pointer hover:underline`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="font-bold text-lg dark-text">Support</li>
            <li className="cursor-pointer hover:underline dark-text font-semibold">Pricing</li>
            <li className="cursor-pointer hover:underline dark-text font-semibold">Documentation</li>
            <li className="cursor-pointer hover:underline dark-text font-semibold">Guide</li>
            <li className="cursor-pointer hover:underline dark-text font-semibold">Api Status</li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="font-bold text-lg dark-text">Company</li>
            <li className="cursor-pointer hover:underline dark-text font-semibold">About</li>
            <li className="cursor-pointer hover:underline dark-text font-semibold">Blog</li>
            <li className="cursor-pointer hover:underline dark-text font-semibold">Job</li>
            <li className="cursor-pointer hover:underline dark-text font-semibold">Careers</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto py-5 border-t border-black text-center light-back">
        &copy;2024 || Saroj rokaya ||
      </div>
    </>
  );
};

export default Footer;
