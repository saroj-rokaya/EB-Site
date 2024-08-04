import React from "react";

const Userfeed = ({ image, message, course, userName }) => {
  return (
    <>
      {/* <div className="shadow-md  grid grid-cols-3 justify-center p-2 rounded-lg my-5 md:max-h-[30%] md:max-w-[45%]">
        <div className="col-span-1">
          <img src={image} alt="img" className="h-24" />
        </div>

        <div className="col-span-2 grid items-center">
          <h1 className="text-xl font-semibold border-black">{userName}</h1>
          <h2 className="text-md text-gray-700 font-semibold border-b border-black mb-2">
            {course}
          </h2>
          {message}
        </div>
      </div> */}
      <div className="flex flex-col justify-between sm:h-[80vh] max-w-sm m-2 shadow-lg ring-1 ring-green-200 bg-white rounded-xl">
        <div className="px-2 pb-12 rounded-t-lg sm:px-8 md:px-12 bg-white">
          <p className="relative pt-2  italic text-justify">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-8 h-8 text-[#5AE4A8]"
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
            </svg>
            {message}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute right-0 w-8 h-8 text-[#5AE4A8]"
            >
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
            </svg>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#5AE4A8]">
          <img
            src={image}
            alt="avatar"
            className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full ring-[#5AE4A8]"
          />
          <p className="text-xl font-semibold leading-tight text-white">
            {userName}
          </p>
          <p className="text-sm uppercase text-white">{course}</p>
        </div>
      </div>
    </>
  );
};

export default Userfeed;
