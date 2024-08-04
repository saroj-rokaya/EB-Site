import React from "react";
import image from "../../../Assets/testimonials/insteadOfPhoto.png";
import Userfeed from "./Userfeed.jsx";
const Testimonials = () => {
  return (
    <>
      <div className="min-h-[20vh] max-w-[1240px] mx-auto flex flex-col gap-2 bg-gray-100 justify-center items-center">
        <p className="text-2xl font-bold">Testimonials</p>
        <p> Subscribe easy tutorials and all time support</p>
      </div>
      <section className="max-w-[1240px] mx-auto bg-gray-100 ">
        <div className=" flex flex-col items-center pb-12 justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-cemter ">
          <Userfeed
            image={image}
            userName="Paras Dhami"
            course="React Js Course"
            message="I recently completed the React JS course with EB-Skills and I couldn't be happier with my experience. The course was well-organized and the instructor made everything easy to understand. The practical projects were great for hands-on learning. I feel much more confident in my React skills now. Thank you, EB-Skills!"
          />
          <Userfeed
            image={image}
            userName="Suraj Thapa"
            course="Web Development Course"
            message="I recently completed the 3-month web development course with EB-Skills, and it was fantastic. The course was well-organized, and the instructors made complex topics easy to understand. The hands-on projects were really helpful in building my skills. I now feel much more confident in my web development abilities. Thank you, EB-Skills! - Suraj Thapa"
          />
          <Userfeed
            image={image}
            userName="Roshani Thapa"
            course="Flutter"
            message="I recently completed the 1-month Flutter development course with EB-Skills, and it was an excellent experience. The course was well-structured, and the instructor explained everything in simple, easy-to-understand language. The hands-on projects were very helpful in solidifying my knowledge. I now feel much more confident in my Flutter development skills. Thank you, EB-Skills! - Roshani Thapa"
          />
          <Userfeed
            image={image}
            userName="Roshan Kumal"
            course="Python"
            message="I recently completed Python course with EB-Skills, and it was an outstanding experience. The course was well-organized, and the instructor made complex concepts easy to grasp. The hands-on exercises were particularly useful in reinforcing my understanding. I now feel much more confident in my Python programming skills. Thank you, EB-Skills! - Roshan Kumal"
          />
        </div>
      </section>

      {/* <div className="sm:flex justify-center bg-gray-100 p-2 items-center max-w-[1240px] mx-auto flex-wrap gap-5">
        <Userfeed
          image={image}
          userName="Paras Dhami"
          course="React Js Course"
          message="I recently completed the React JS course with EB-Skills and I couldn't be happier with my experience. The course was well-organized and the instructor made everything easy to understand. The practical projects were great for hands-on learning. I feel much more confident in my React skills now. Thank you, EB-Skills!"
        />
        <Userfeed
          image={image}
          userName="Suraj Thapa"
          course="Web Development Course"
          message="I recently completed the 3-month web development course with EB-Skills, and it was fantastic. The course was well-organized, and the instructors made complex topics easy to understand. The hands-on projects were really helpful in building my skills. I now feel much more confident in my web development abilities. Thank you, EB-Skills! - Suraj Thapa"
        />
        <Userfeed
          image={image}
          userName="Roshani Thapa"
          course="Flutter"
          message="I recently completed the 1-month Flutter development course with EB-Skills, and it was an excellent experience. The course was well-structured, and the instructor explained everything in simple, easy-to-understand language. The hands-on projects were very helpful in solidifying my knowledge. I now feel much more confident in my Flutter development skills. Thank you, EB-Skills! - Roshani Thapa"
        />
        <Userfeed
          image={image}
          userName="Roshan Kumal"
          course="Python"
          message="I recently completed the 2-month Core Python course with EB-Skills, and it was an outstanding experience. The course was well-organized, and the instructor made complex concepts easy to grasp. The hands-on exercises were particularly useful in reinforcing my understanding. I now feel much more confident in my Python programming skills. Thank you, EB-Skills! - Roshan Kumal"
        />
      </div> */}
    </>
  );
};

export default Testimonials;
