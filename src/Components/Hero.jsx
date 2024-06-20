import React from 'react'
import { ReactTyped } from "react-typed";


const Hero = () => {
    return (
        <div className='flex justify-center items-center gap-5 flex-col min-h-[50vh] mx-auto bg-gray-100'>
            <p className='text-xl md:text-2xl '>Learn With Us</p>
            <h1 className='text-2xl md:text-4xl font-bold '>Grow With Us</h1>
            <p className='text-xl md:text-2xl'>
                Learn
                <ReactTyped
                    strings={[
                        "Web Development",
                        "App Development",
                        "Cyber Security",
                    ]}
                    className='pl-[8px]'
                    typeSpeed={80}
                    backSpeed={80}
                    loop
                ></ReactTyped>

            </p>
            <button className='bg-black rounded-lg border-2 font-bold border-black text-white p-1.5 md:p-3 hover:border-2 hover:border-black hover:text-black duration-300 hover:bg-white'>Get Started</button>
        </div>
    )
}

export default Hero