import React from 'react'
import SubjectCart from './SubjectCart'
import { FaCode } from "react-icons/fa";
import { BsShieldLock, BsDatabaseCheck } from "react-icons/bs";



const Courses = ({ icon, course, price, content }) => {
    return (
        <>
            <div className='flex flex-col items-center'>
                <div className=' max-w-[1240px] p-2  md:flex gap-5 justify-center items-center '>

                    <SubjectCart
                        icon={<FaCode className=' border-b-2 border-black p-2 absolute top-[-30px] h-14 md:h-16 w-14 md:w-16 rounded-full rotate-12' />}
                        course="Web Development"
                        price={999}
                        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ipsa consequatur reprehenderit!"

                    />
                    <SubjectCart
                        icon={<BsShieldLock className='border-b-2 border-black p-2 absolute top-[-30px] h-14 md:h-16 w-14 md:w-16 rounded-full rotate-12' />}
                        course="Cyber Security"
                        price={999}
                        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ipsa consequatur reprehenderit!"
                    />
                    <SubjectCart
                        icon={<BsDatabaseCheck className='border-b-2 border-black p-2 absolute top-[-30px] h-14 md:h-16 w-14 md:w-16 rounded-full rotate-12' />}
                        course="Database"
                        price={999}
                        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ipsa consequatur reprehenderit!"

                    />

                </div>
            </div>
        </>
    )
}

export default Courses