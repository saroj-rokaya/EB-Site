import React from "react";

const PriceFinance = () => {
  return (
    <>
      <div className="flex justify-center bg-gray-100 flex-col gap-5 border w-full md:w-[48%] p-2 rounded-lg min-h-[36vh] ">
        <h1 className="text-2xl font-bold">Course Finance</h1>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p>Beginner+Advance Course</p>
            <p>Rs. 999</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Beginner</p>
            <p>Rs. 499</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceFinance;
