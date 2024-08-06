import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import image from "../Assets/Logo/transparentLogo.png"

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="max-w-[1240px] mx-auto h-[10vh] p-2 flex justify-between items-center">
      <Link to="/">
        <div className=" font-bold text-2xl md:text-3xl ">
          <img src={image} alt="img" className="w-[50%] h-[50%] object-cover"/>
        </div>
      </Link>
      {toggle ? (
        <AiOutlineClose
          onClick={() => setToggle(!toggle)}
          className="md:hidden text-2xl font-bold block"
        />
      ) : (
        <AiOutlineMenu
          onClick={() => setToggle(!toggle)}
          className="md:hidden text-2xl font-bold block"
        />
      )}

      <ul className="hidden md:flex gap-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `
            ${isActive ? "text-[#5AE4A8]" : "text-black"}
            "cursor-pointer"`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => `
            ${isActive ? "text-[#5AE4A8]" : "text-black"}
            cursor-pointer`}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) => `
            ${isActive ? "text-[#5AE4A8]" : "text-black"}
            cursor-pointer`}
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => `
            ${isActive ? "text-[#5AE4A8]" : "text-black"}
            cursor-pointer`}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* //responsive menu */}
      <ul
        className={`md:hidden fixed bg-black text-white flex flex-col gap-5 top-[10vh] 
            ${toggle ? "left-[0]" : "left-[-100%]"}
             h-screen opacity-90 z-[1] w-full duration-500`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-[#5AE4A8]" : "text-white"}`
          }
        >
          <li className="hover:bg-gray-100 hover:text-black active:bg-gray-100 p-3 cursor-pointer rounded">
            Home
          </li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-[#5AE4A8]" : "text-white"}`
          }
        >
          <li className="hover:bg-gray-100 hover:text-black active:bg-gray-100 p-3 cursor-pointer rounded">
            About
          </li>
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `${isActive ? "text-[#5AE4A8]" : "text-white"}`
          }
        >
          <li className="hover:bg-gray-100 hover:text-black active:bg-gray-100 p-3 cursor-pointer rounded">
            Courses
          </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-[#5AE4A8]" : "text-white"}`
          }
        >
          <li className="hover:bg-gray-100 hover:text-black active:bg-gray-100 p-3 cursor-pointer rounded">
            contact
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
