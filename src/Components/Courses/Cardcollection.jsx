import React from "react";
import Card from "./Card.jsx";
import image from "../../Assets/image.png";
import Chart from "./Chart.jsx";
import PriceFinance from "./PriceFinance.jsx";
import "tailwindcss/tailwind.css";

const Cardcollection = () => {
  return (
    <>
      <div className=" max-w-[1240px] md:min-h-[50vh]  mx-auto md:flex flex-wrap p-2 justify-between items-center">
        <Chart />
        <PriceFinance />
      </div>

      <div className="max-w-[1240px] mx-auto flex justify-between item-center p-2 my-10 ">
        <p className="text-2xl font-bold">All Courses</p>
        <div>
          <select className="border-2 rounded">
            <option className=" bg-red-500" value="Running">
              Running
            </option>
            <option className=" bg-green-500" value="Completed">
              Completed
            </option>
            <option className=" bg-gray-300" value="Upcoming">
              Upcoming
            </option>
          </select>
        </div>
      </div>

      {/* card section */}
      <div className=" max-w-[1240px] mx-auto p-2 flex gap-10 flex-wrap justify-center items-center">
        <Card
          image={image}
          courseName={"Web Development Course"}
          ownPrice={999}
          actualPrice={16500}
        />
        <Card
          image={image}
          courseName={"Javascript"}
          ownPrice={999}
          actualPrice={16500}
        />
        <Card
          image={image}
          courseName={"React"}
          ownPrice={999}
          actualPrice={16500}
        />
        <Card
          image={image}
          courseName={"Ethical Hacking"}
          ownPrice={999}
          actualPrice={16500}
        />
        <Card
          image={image}
          courseName={"Node Js"}
          ownPrice={999}
          actualPrice={16500}
        />
        <Card
          image={image}
          courseName={"Next Js"}
          ownPrice={999}
          actualPrice={16500}
        />
        <Card
          image={image}
          courseName={"Frontend Development"}
          ownPrice={999}
          actualPrice={16500}
        />
        <Card
          image={image}
          courseName={"QA (Quality Assurance)"}
          ownPrice={999}
          actualPrice={16500}
        />
        <Card
          image={image}
          courseName={"HR Manager"}
          ownPrice={999}
          actualPrice={16500}
        />
        <Card
          image={image}
          courseName={"AI BootCamp"}
          ownPrice={999}
          actualPrice={16500}
        />
      </div>
    </>
  );
};

export default Cardcollection;
