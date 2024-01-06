"use client";
import Card from "@/Components/Card/Card";
import BigCharts from "@/Components/Charts/BigCharts";
import Charts from "@/Components/Charts/Charts";
import { FaMoneyCheck } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import Table from "@/Components/Table/Table";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Acordion from "@/Components/Accordion/Acordion";

const DynamicRoundCharts = dynamic(
  () => import("@/Components/Charts/RoundCharts"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="w-full py-10 px-5 md:px-20 lg:px-28 overflow-x-hidden ">
      <h1 className="mb-5 md:mb-10 text-lg md:text-xl font-semibold">
        Welcome to Dashboard
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 md:gap10 mb-10 md:mb-10">
        <div className="w-full sm:w-1/4 h-36 flex flex-col  gap-3">
          <div className="w-full  h-full bg-white rounded-md shadow-md flex justify-between items-center gap-3 px-10">
            <FaMoneyCheck className="text-4xl text-yellow-500" />
            <div className="flex flex-col items-end">
              <p className="font-semibold text-sm ">$3249</p>
              <h3 className="font-light text-gray-500">Total Revenue</h3>
            </div>
          </div>

          <div className="w-full h-full bg-white rounded-md shadow-md flex justify-between items-center gap-3 px-10">
            <BiMoneyWithdraw className="text-4xl text-rose-500" />
            <div className="flex flex-col items-end">
              <p className="font-semibold text-sm ">$687</p>
              <h3 className="font-light text-gray-500">Ad. Expense</h3>
            </div>
          </div>
        </div>

        <Charts
          name={"New Customers"}
          count={3897}
          poll={"+3.3% "}
          type={"line"}
        />
        <Charts
          name={"New Orders"}
          count={35084}
          poll={"+2.8%"}
          type={"area"}
        />
        <Charts name={"Growth"} count={89.87} poll={"+2.8%"} type={"bar"} />
      </div>

      <div className="w-full flex justify-center items-center gap-10 md:gap-16 flex-col md:flex-row mb-10 md:mb-10">
        <Card />
        <BigCharts />
      </div>

      <div className="w-full md:h-96 flex justify-center items-center gap-10 md:gap-16 flex-col md:flex-row mb-10 md:mb-10">
        <Table />
        {isClient && <DynamicRoundCharts />}
      </div>

      <div className="w-full flex justify-center items-center gap-10 md:gap-16 flex-col md:flex-row mb-10 md:mb-10">
        <Acordion />
      </div>
    </main>
  );
}
