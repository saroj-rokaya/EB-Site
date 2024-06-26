import React from 'react'

const Userfeed = ({image,message,course,userName}) => {
  return (
    <>
    <div className="shadow-md  grid grid-cols-3 justify-center p-2 rounded-lg my-5 md:max-h-[30%] md:max-w-[45%]">
          <div className="col-span-1">
            <img src={image} alt="img" className="h-24" />
          </div>

          <div className="col-span-2 grid items-center">
            <h1 className="text-xl font-semibold border-black">{userName}</h1>
            <h2 className="text-md text-gray-700 font-semibold border-b border-black mb-2">{course}</h2>
            {message}
          </div>
        </div>
      
    </>
  )
}

export default Userfeed
