import React from 'react'
import { FaFacebook,FaGithub,FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";



const Footer = () => {
  return (
    <div>
        <div className='m-2 bg-gray-100 md:flex justify-between gap-5'>
            {/* left section */}
            <div className='md:w-[50%] my-5 flex flex-col gap-5'>
                <h1 className='font-bold text-2xl'>Rokaya ji</h1>
                <p>Start your journey towards becoming a tech expert with us. Enroll in our courses today and take the first step towards a brighter future in technology</p>
                <ul className='flex justify-center items-center rounded-full gap-10'>
                    <li className='hover:text-white hover:bg-black hover:scale-105 rounded-full p-2'><FaFacebook className='h-6 w-6 md:h-8 md:w-8'/></li>
                    <li className='hover:text-white hover:bg-black hover:scale-105 rounded-full p-2'><AiFillInstagram className='h-6 w-6 md:h-8 md:w-8'/></li>
                    <li className='hover:text-white hover:bg-black hover:scale-105 rounded-full p-2'><FaGithub className='h-6 w-6 md:h-8 md:w-8'/></li>
                    <li className='hover:text-white hover:bg-black hover:scale-105 rounded-full p-2'><FaLinkedin className='h-6 w-6 md:h-8 md:w-8'/></li>
                </ul>
            </div>
                {/* //right section/ */}
            <div className=' md:w-[50%] m-2 flex justify-between'>
                <ul className='flex flex-col gap-5'>
                    <li className='font-bold text-lg'>Short Link</li>
                    <li className='cursor-pointer hover:underline'>Home</li>
                    <li className='cursor-pointer hover:underline'>About</li>
                    <li className='cursor-pointer hover:underline'>Courses</li>
                    <li className='cursor-pointer hover:underline'>Contact</li>
                </ul>
                <ul className='flex flex-col gap-5'>
                    <li className='font-bold text-lg'>Support</li>
                    <li className='cursor-pointer hover:underline'>Pricing</li>
                    <li className='cursor-pointer hover:underline'>Documentation</li>
                    <li className='cursor-pointer hover:underline'>Guide</li>
                    <li className='cursor-pointer hover:underline'>Api Status</li>
                </ul>
                <ul className='flex flex-col gap-5'>
                    <li className='font-bold text-lg'>Company</li>
                    <li className='cursor-pointer hover:underline'>About</li>
                    <li className='cursor-pointer hover:underline'>Blog</li>
                    <li className='cursor-pointer hover:underline'>Job</li>
                    <li className='cursor-pointer hover:underline'>Careers</li>
                </ul>
                
                
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto py-5 m-2 border-t border-black text-center'>&copy;2024 || Saroj rokaya ||</div>

    </div>
  )
}

export default Footer