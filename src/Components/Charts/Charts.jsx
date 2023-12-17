"use client";
import React from "react";
import LineChart from "./all/LineChart";
import AreaChart from "./all/AreaChart";
import BarChart from "./all/BarChart";
import CountUp from "react-countup";

const Charts = ({ name, count, poll, type }) => {
  return (
    <section className="w-80 sm:w-96 h-36 bg-white rounded-md shadow-md flex gap-3 px-3 py-5">
      <div className="w-full flex flex-col gap-2 items-start justify-center">
        <h3 className="font-bold">{name}</h3>
        <h1 className="text-xl font-bold text-primary">
          <CountUp end={count} start={0} duration={5} />
        </h1>
        <p className="text-sm text-green-500">{poll}</p>
      </div>

      <div className="w-full">
        {type === "line" ? (
          <LineChart />
        ) : type === "area" ? (
          <AreaChart />
        ) : type === "bar" ? (
          <BarChart />
        ) : null}
      </div>
    </section>
  );
};

export default Charts;
