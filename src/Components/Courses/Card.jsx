import React from 'react'


const Card = ({image,courseName,ownPrice,actualPrice}) => {
  return (
    <>
      <div className="rounded shadow-md bg-gray-50 hover:scale-105 duration-300 sm:w-1/3 md:w-1/4">
          <img src={image} loading="lazy" alt="image" className="rounded  " />
          <div className="p-2 ">
            <p>
              Rs.{ownPrice} /- <span className="text-red-500">Rs.{actualPrice}</span>
            </p>
            <p className="font-bold">{courseName}</p>
            <div className="sm:flex gap-2">
              <button className="mt-2 w-[100px] px-3 py-1 bg-[#5AE4A8] border-2 border-[#5AE4A8] text-white hover:bg-white hover:text-[#5AE4A8] font-semibold rounded-md duration-300">
                Purchase
              </button>
              <button className="mt-2 w-[100px] px-3 py-1 bg-white border-2 border-[#5AE4A8] text-[#5AE4A8] hover:bg-[#5AE4A8] hover:text-white font-semibold rounded-md duration-300">
                Syllabus
              </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card
