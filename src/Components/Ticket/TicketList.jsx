"use client";
import React from "react";
import CountUp from "react-countup";
import TicketTable from "@/Components/Table/TicketTable";

const TicketList = () => {
  return (
    <section className="w-full bg-white shadow-md rounded-md p-5 md:p-10">
      <div className="flex flex-col md:flex-row gap-5 md:justify-between items-center mb-10">
        <h1 className="text-lg md:text-2xl text-secondary font-semibold">
          TICKETs
        </h1>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-5 text-sm md:text-lg">
          <section className="flex gap-3 bg-sky-100 p-2 rounded-md text-sky-700 border-b hover:shadow-lg shadow border-sky-700">
            <span className="font-semibold">Total</span>
            <CountUp end={2200} start={0} duration={5} />
          </section>
          <section className="flex gap-3 bg-yellow-100 p-2 rounded-md text-yellow-700 border-b hover:shadow-lg shadow border-yellow-700">
            <span className="font-semibold">Progress</span>
            <CountUp end={1200} start={0} duration={5} />
          </section>
          <section className="flex gap-3 bg-green-100 p-2 rounded-md text-green-700 border-b hover:shadow-lg shadow border-green-700">
            <span className="font-semibold">Opened</span>
            <CountUp end={600} start={0} duration={5} />
          </section>
          <section className="flex gap-3 bg-red-100 p-2 rounded-md text-red-700 border-b hover:shadow-lg shadow border-red-700">
            <span className="font-semibold">Closed</span>
            <CountUp end={400} start={0} duration={5} />
          </section>
        </div>
      </div>

      <div>
        <TicketTable />
      </div>
    </section>
  );
};

export default TicketList;
