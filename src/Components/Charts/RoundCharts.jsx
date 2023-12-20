"use client";
import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RoundCharts = () => {
  const chartSize = 300;

  const [width, setWidth] = useState("25%");
  const [height, setHeight] = useState("100%");

  // const handleResize = () => {
  //   setWidth("50%");
  //   setHeight("200px");
  // };

  return (
    <div
      className="w-full md:w-1/4 h-full  bg-white shadow-md rounded-md flex flex-col items-center justify-center p-5"
      style={{ width, height, resize: "both", overflow: "hidden" }}
      // onMouseUp={handleResize}
    >
      <div className="w-full text-left">
        <h1 className="font-semibold text-lg">Our Visitors</h1>
        <p className="font-light text-gray-500">
          Different Devices Used to Visit
        </p>
      </div>
      <PieChart width={chartSize} height={chartSize}>
        <Tooltip contentStyle={{ borderRadius: "10%", fontSize: "10px" }} />
        <Pie
          data={data}
          cx={chartSize / 2}
          cy={chartSize / 2}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend wrapperStyle={{ fontSize: "10px" }} />
      </PieChart>
    </div>
  );
};

export default RoundCharts;
