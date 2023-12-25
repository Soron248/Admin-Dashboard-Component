import React from "react";
import { FaBarcode } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaClover } from "react-icons/fa6";
import { LuBuilding } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const CompProfileTab = () => {
  return (
    <>
      <div className="w-full md:w-1/2 h-full flex flex-col  ">
        <h1 className="font-semibold bg-gradient-to-r from-primary pl-2 py-1 text-white">
          OUR SERVICES
        </h1>
        <p className=" my-4 text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni minima
          perferendis eaque, voluptatibus fugiat est nihil explicabo eius aut
          alias.
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="w-32 h-32 border-2 border-primary border-opacity-40 rounded-md flex justify-center items-center">
              Service1
            </div>
            <div className="w-32 h-32 border-2 border-primary border-opacity-40 rounded-md flex justify-center items-center">
              Service2
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-32 h-32 border-2 border-primary border-opacity-40 rounded-md flex justify-center items-center">
              Service3
            </div>
            <div className="w-32 h-32 border-2 border-primary border-opacity-40 rounded-md flex justify-center items-center">
              Service4
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold bg-gradient-to-r from-primary pl-2 py-1 text-white">
            OUR ADVANTAGES
          </h1>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-3">
              <FaBarcode className="text-primary rotate-90" /> Lorem ipsum dolor
              sit amet.
            </span>
            <span className="flex items-center gap-3">
              <FaBarcode className="text-primary rotate-90" /> Lorem ipsum dolor
              sit amet.
            </span>
            <span className="flex items-center gap-3">
              <FaBarcode className="text-primary rotate-90" /> Lorem ipsum dolor
              sit amet.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-semibold bg-gradient-to-r from-primary pl-2 py-1 text-white">
            Result
          </h1>
          <div className="flex gap-2">
            <span className="rounded-md bg-yellow-100 p-2">
              <IoShieldCheckmark className="text-2xl text-yellow-600" />
            </span>
            <span className="rounded-md bg-green-100 p-2">
              <FaClover className="text-2xl text-green-600" />
            </span>
            <span className="rounded-md bg-blue-100 p-2">
              <LuBuilding className="text-2xl text-blue-600" />
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-semibold bg-gradient-to-r from-primary pl-2 py-1 text-white">
            CONTACT US
          </h1>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl text-green-600" /> +088 01752 281
              870
            </span>
            <span className="flex items-center gap-3">
              <IoMdMail className="text-xl text-red-600" /> Comp.asd@gmail.com
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompProfileTab;
