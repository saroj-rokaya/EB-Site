import React from 'react'

const Newsletter = () => {
    return (
        <>
            <div>
                <div className=" max-w-[1240px] mx-auto  md:flex justify-between items-center">
                    <div className='my-10 md:w-[50%] h-[100%] flex flex-col justify-center items-center'>
                        <h1 className='font-bold md:text-3xl text-2xl text-center'>Want to learn latest IT skills?</h1>
                        <p>SignUp to our newsletter and up to date.</p>
                    </div>
                    {/* right section */}
                    <div className='my-10 md:w-[50%] h-[100%] flex flex-col justify-center'>
                        <div className=' flex justify-center items-center gap-5'>
                            <input placeholder='Email' className='p-1.5 md:p-3 rounded-lg outline-none border-2 border-[#5AE4A8]' type="search" name="search" id="search" />
                        <button className='bg-[#5AE4A8]  w-[120px] md:w-[150px] rounded-lg border-2 font-bold border-[#5AE4A8] text-white p-1.5 md:p-3 hover:border-2 hover:border-[#5AE4A8] hover:text-[#5AE4A8] duration-300 hover:bg-white'>Subscribe</button>
                        </div>
                        <p className='text-center'>We care about the protection of your data read our <br /> <span className='font-bold hover:underline cursor-pointer'>privacy policy</span></p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Newsletter