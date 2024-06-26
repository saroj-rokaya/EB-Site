import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Chart = () => {
  const data = [
    { name: "Running", value: 7 },
    { name: "Completed", value: 12 },
    { name: "Upcoming", value: 3 },
  ];
  const COLORS = ["#FF0000", "#00C49F", "#d9dde0"];
  return (
    <>
      <div className="flex bg-white justify-between p-2 items-center md:w-[40%] border rounded-lg shadow-sm mx-auto">
        <div className="md:w-[40%]">
          <ResponsiveContainer max-width="100%" height={200}>
            <PieChart width={800} height={300}>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                // style={{height:"20%"}}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex gap-10 justify-center items-center">
          <div className="flex flex-col gap-4 ">
            <p>
              <span className="font-bold text-2xl text-red-500">- </span>Running
            </p>
            <p>
              <span className="font-bold text-2xl text-green-500">- </span>
              Completed
            </p>
            <p>
              <span className="font-bold text-2xl text-gray-300">- </span>
              Upcoming
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-3 ">
            <p>7</p>
            <p>12</p>
            <p>3</p>
          </div>
        </div>
      </div>     
    </>
  );
};

export default Chart;
