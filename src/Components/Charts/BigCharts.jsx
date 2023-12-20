"use client";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  {
    name: "Page A",
    OR: 4000,
    RP: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    OR: 3000,
    RP: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    OR: 2000,
    RP: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    OR: 2780,
    RP: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    OR: 1890,
    RP: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    OR: 2390,
    RP: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    OR: 3490,
    RP: 4300,
    amt: 2100,
  },
];

const BigCharts = () => {
  return (
    <section className="w-auto md:w-2/3 h-96 flex flex-col gap-5 bg-white rounded-md shadow-md p-5 resize overflow-auto">
      <div className="w-full flex justify-between">
        <div>
          <h1 className="font-semibold text-lg">Buisiness Campaign</h1>
          <p className="font-light text-gray-500">
            Overview of Buisiness Campaign
          </p>
        </div>

        <div className="flex gap-3 md:gap-5">
          <p className="flex items-center text-primary">
            <GoDotFill /> Open Rate{" "}
          </p>
          <p className="flex items-center text-green-400">
            <GoDotFill /> Recurring Payments{" "}
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="75%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="75%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip contentStyle={{ borderRadius: "10%" }} />
          <Legend />
          <Area
            type="monotone"
            dataKey="OR"
            stroke="#8884d8"
            fillOpacity={1}
            strokeWidth={2}
            fill="url(#colorUv)"
            dot={true}
          />
          <Area
            type="monotone"
            dataKey="RP"
            stroke="#82ca9d"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPv)"
            dot={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
};

export default BigCharts;
