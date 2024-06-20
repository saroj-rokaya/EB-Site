import React, {useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  

  return (
    <nav className="max-w-[1240px] mx-auto h-[10vh] flex justify-between items-center">
      <div className="font-extrabold text-2xl md:text-3xl">Rokaya Ji</div>
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
        <li className="hover:underline cursor-pointer ">Home</li>
        <li className="hover:underline cursor-pointer ">About</li>
        <li className="hover:underline cursor-pointer ">Courses</li>
        <li className="hover:underline cursor-pointer ">Contact</li>
      </ul>
      {/* //responsive menu */}
      <ul
        className={`md:hidden fixed bg-black text-white flex flex-col gap-5 top-[10vh] 
            ${toggle ? "left-[0]" : "left-[-100%]"}
             h-screen opacity-90 z-[1] w-full duration-500`}
      >
        <li className="hover:bg-gray-100 hover:text-black active:bg-gray-100 p-3 cursor-pointer rounded">
          Home
        </li>
        <li className="hover:bg-gray-100 hover:text-black active:bg-gray-100 p-3 cursor-pointer rounded">
          About
        </li>
        <li className="hover:bg-gray-100 hover:text-black active:bg-gray-100 p-3 cursor-pointer rounded">
          Blog
        </li>
        <li className="hover:bg-gray-100 hover:text-black active:bg-gray-100 p-3 cursor-pointer rounded">
          contact
        </li>
      </ul>
    </nav>
  );
};

export default Header;
