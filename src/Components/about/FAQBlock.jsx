import React from "react";
import FAQs from "./FAQs.jsx";

const FAQBlock = () => {
  const questionsAns = [
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
      id: 3,
      question: "Are there any prerequisites for the courses?",
      answer:
        "Most courses are designed for beginners, but some may require basic knowledge in specific areas. Check the course details for more information.",
    },
    {
      id: 4,
      question: "Can I access the course materials after completion?",
      answer:
        "Yes, you will have lifetime access to all course materials and resources.",
    },
    {
      id: 5,
      question: "What kind of support is available if I have questions?",
      answer:
        "You can access live Q&A sessions, a community forum, and direct support from instructors.",
    },
    {
      id: 5,
      question: "Can I get a refund if I am not satisfied with a course?",
      answer:
        "Yes, we offer a 30-day money-back guarantee if you are not satisfied with your course.",
    },
  ]
  return (
    <>
      <div className="max-w-[1240px] mx-auto min-h-[50%] px-2">
        <h1 className="text-2xl font-bold mb-5 text-center">Frequently Asked Questions</h1>
        {questionsAns.map((items, index) => (
          <FAQs key={index} question={items.question} answer={items.answer}/>
        ))}
      </div>
    </>
  );
};

export default FAQBlock;
