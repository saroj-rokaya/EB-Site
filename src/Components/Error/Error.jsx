import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="flex items-center h-full p-16  ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl  text-[#5AE4A8]">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to="/"
              className="font-semibold rounded bg-[#5AE4A8]"
            >
              <button className="bg-[#5AE4A8] sm:text-md text-sm text-white hover:bg-white border-2 hover:border-[#5AE4A8] hover:text-[#5AE4A8] w-[50%] px-2 py-4 rounded-lg duration-300 mt-5 ">
              Back to homepage
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
