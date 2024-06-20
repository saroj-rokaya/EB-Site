import React from 'react'
import image from '../Assets/image.png'

const Learn = () => {
  return (
    <div className='max-w-[1240px] p-2 mx-auto min-h-[30vh] md:grid grid-cols-3 gap-5'>

        <div>
            <img className=' rounded-lg h-full md:w-[80%] p-2 mt-5' src={image} alt="" />
        </div>
        {/* //right side */}
        <div className=' col-span-2 flex flex-col gap-5 justify-center mt-5'>
        <p className='font-bold text-2xl text-black'>Learn the latest IT skills and stay ahead</p>
        <p className='text-justify'>Join us for access to fresh courses, helpful tech tips, and the latest industry news. Our newsletter keeps it simple just the essentials you need to stay ahead. Sign up now and stay in the loop!</p>
        <button className='bg-black  w-[120px] md:w-[150px] rounded-lg border-2 font-bold border-black text-white p-1.5 md:p-3 hover:border-2 hover:border-black hover:text-black duration-300 hover:bg-white'>Get Started</button>

        </div>
    </div>
  )
}

export default Learn