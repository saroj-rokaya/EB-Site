import React from "react";

const Contact = () => {
  return (
    <>
  
    {/* //form and contact section */}
      <div className="max-w-[1240px] mx-auto p-2 bg-gray-100 min-h-[50vh] md:flex  gap-10 justify-center items-center">
        <div className="md:w-[50%]  flex gap-5 flex-col justify-center items-center min-h-[50vh]">
          <h1 className="font-bold text-2xl">Get in touch</h1>
          <p>
            Ready to level up your tech skills? At ER-Skills, we offer live
            classes and video courses designed to empower programmers and tech
            enthusiasts alike. Have questions or want to learn more? Get in
            touch with us today via the form below or reach out directly via
            email or phone. Let's kickstart your learning journey together!
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.606744394646!2d85.37418097456681!3d27.707041525506625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a4ab434c529%3A0x2e164853495d40cd!2sGothatar%20English%20Secondary%20School!5e1!3m2!1sen!2snp!4v1719216872043!5m2!1sen!2snp"
            width="600"
            height="300"
            className="border-none max-w-full max-h-[50vh]"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* //form section */}
        <div className="md:w-[50%] outline-none flex gap-2 flex-col items-center min-h-[65vh]">
          <h1 className="font-bold text-2xl mb-10">Contact us directly</h1>

          <div className="md:flex gap-2 md:w-full w-[100%]  justify-evenly items-center ">
            <label htmlFor="name" className="w-[25%]">
              Full Name*
            </label>
            <div>
              <input
                type="text"
                className="rounded-md p-2 outline-none md:w-[280px] w-[100%]"
              />
            </div>
          </div>
          <div className="md:flex gap-2 md:w-full w-[100%]  justify-evenly items-center ">
            <label htmlFor="email" className="w-[25%]">
              Email*
            </label>
            <div>
              <input
                type="email"
                className="rounded-md p-2 outline-none md:w-[280px] w-[100%]"
              />
            </div>
          </div>
          <div className="md:flex gap-2 md:w-full w-[100%]  justify-evenly items-center ">
            <label htmlFor="tel" className="w-[25%]">
              Phone Number
            </label>
            <div>
              <input
                type="tel"               
                className="rounded-md p-2 outline-none md:w-[280px] w-[100%]"
              />
            </div>
          </div>
          <div className="md:flex gap-2 md:w-full w-[100%]  justify-evenly items-center ">
            <label htmlFor="address" className="w-[25%]">
              Address
            </label>
            <div>
              <input
                type="text"
                className="rounded-md p-2 outline-none md:w-[280px] w-[100%]"
              />
            </div>
          </div>
          <div className="md:flex gap-2 md:w-full w-[100%]  justify-evenly items-center ">
            <label htmlFor="textarea" className="w-[25%]">
              Message
            </label>
            <div>
              <input
                type="text"
                role="textbox"
                className="rounded-md p-2 outline-none md:w-[280px] w-[100%]"
              />
            </div>
          </div>
          
          <div className="md:flex gap-2 md:w-full w-[100%]  justify-evenly items-center ">
            <button className="bg-[#5AE4A8] text-white hover:bg-white border hover:border-[#5AE4A8] hover:text-[#5AE4A8] w-[50%] p-2 rounded-lg duration-300 mt-5 ">
              Submit
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Contact;
