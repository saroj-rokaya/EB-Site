import React from "react";
import FAQs from "./FAQs.jsx";

const FAQBlock = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto min-h-[50%] flex flex-col p-2 gap-5 justify-between items-center">
        <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
        <FAQs />
        <FAQs />
        <FAQs />
        <FAQs />
        <FAQs />
        <FAQs />
        
      </div>
    </>
  );
};

export default FAQBlock;
