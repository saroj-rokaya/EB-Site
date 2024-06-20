import React from 'react'

const SubjectCart = ({ icon, course, price, content }) => {
    return (
        <>
            {/* //card components */}
            <div className='relative  h-[60vh] bg-gray-100 rounded-lg  rounded-lx flex flex-col gap-5 my-5 p-5 justify-center items-center md:hover:scale-105 hover:bg-gray-200 shadow-md duration-300'>
                {icon}
                <h2 className='text-2xl font-bold text-center'>{course}</h2>
                <p className='font-bold text-4xl'>Rs.{price}</p>
                <p className='text-center'>{content}</p>
                <button className='bg-black rounded-lg border-2 font-bold border-black text-white p-1.5 md:p-3 hover:border-2 hover:border-black hover:text-black duration-300 hover:bg-white'>Buy Course</button>
                
            </div>
        </>
    )
}

export default SubjectCart