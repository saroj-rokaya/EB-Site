import React, { useState } from "react";
import {
  BsQuestionCircleFill,
  BsCaretDownFill,
  BsCaretUpFill,
} from "react-icons/bs";

const FAQs = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        {/* questions section */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`flex items-center justify-between w-full px-[2%] py-5 border border-b-0  rounded-t-xl  gap-3 focus:text-[#5AE4A8]`}
        >
          <span className="flex items-center">
            <BsQuestionCircleFill className="mr-2" />
            {question}
          </span>
          {isOpen ? <BsCaretUpFill /> : <BsCaretDownFill />}
        </button>
        {/* answer section */}
        <div
          className={`px-[5%] py-5 border border-b-0 bg-gray-100  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <p>{answer}</p>
        </div>
      </div>
    </>
  );
};

export default FAQs;
