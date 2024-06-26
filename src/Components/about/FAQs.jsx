import React, { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const FAQs = () => {
  const[answer,setAnswer]=useState("hidden")
  const faqs = [
    {
      id: 1,
      question: "What types of courses does EB-Skills offer?",
      answer:
        "We offer courses in various programming languages and computer skills, including web development, React JS, Flutter, and Core Python.",
    },
    {
      id: 2,
      question: "Do I get a certificate after completing a course?",
      answer:
        "Yes, you will receive a certificate of completion for each course you finish.",
    },
    {
      id: 2,
      question: "Are there any prerequisites for the courses?",
      answer:
        "Most courses are designed for beginners, but some may require basic knowledge in specific areas. Check the course details for more information.",
    },
    {
      id: 2,
      question: "Can I access the course materials after completion?",
      answer:
        "Yes, you will have lifetime access to all course materials and resources.",
    },
    {
      id: 2,
      question: "What kind of support is available if I have questions?",
      answer:
        "You can access live Q&A sessions, a community forum, and direct support from instructors.",
    },
    {
      id: 2,
      question: "Can I get a refund if I am not satisfied with a course?",
      answer:
        "Yes, we offer a 30-day money-back guarantee if you are not satisfied with your course.",
    },
  ];

  return (
    <>
      <div className=" w-full flex justify-center items-center flex-col">
        <div className="w-full p-2 flex ">
          <button
            onClick={()=>setAnswer(!answer)}
            className={` mx-2 w-6 h-6 flex justify-center items-center rounded-full`}>
            <IoMdArrowDropdownCircle />
          </button>
          {faqs.map((faq)=>faq.question)}
        </div>
        <div className={`${answer?"block":"hidden"}answer w-full p-2 ml-20 border-l border-black shadow-sm rounded-b-lg`}>
        {faqs.map((faq)=>faq.answer)}
        </div>
      </div>
    </>
  );
};

export default FAQs;
