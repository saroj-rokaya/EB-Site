import React from "react";

const PriceFinance = () => {
  return (
    <>
      <div className="flex justify-center flex-col gap-5 border md:w-[40%] p-2 bg-white rounded-lg min-h-[34vh] ">
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
