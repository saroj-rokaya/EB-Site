import React from "react";

const Contact = () => {
  return (
    <>
      <section className="body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.606744394646!2d85.37418097456681!3d27.707041525506625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a4ab434c529%3A0x2e164853495d40cd!2sGothatar%20English%20Secondary%20School!5e1!3m2!1sen!2snp!4v1722964285827!5m2!1sen!2snp"
              width="100%"
              height="100%"
              className="absolute inset-0"
              loading="lazy"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              // style={`filter: grayscale(1) contrast(1.2) opacity(0.4);`}
            ></iframe>
            <div className="bg-white  relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-bold tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">Near Gothatar Boarding Secondary School</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-bold tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-blue-500 cursor-pointer leading-relaxed">
                  rokayasaroj188@.com
                </a>
                <h2 className="title-font font-bold tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed cursor-pointer">+977-9849925392</p>
              </div>
            </div>
          </div>

          {/* //form section  */}
          <div className="lg:w-1/3 md:w-1/2 light-back rounded-xl p-5 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className=" text-2xl mb-1 font-bold dark-text title-font">Get in touch</h2>
            <p className="leading-relaxed mb-5 normal-text ">
              Want to learn more? Get in touch with us via the form below or
              reach out directly via email or phone.
            </p>
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm normal-text">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-transparent border-black  rounded border  text-base outline-none normal-text py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm normal-text" >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-transparent border-black  rounded border normal-text text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm normal-text ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-transparent border-black  rounded border normal-text 300 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className=" normal-back text-white font-semibold hover:dark-text border-0 py-2 px-6 focus:outline-none rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
