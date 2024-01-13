"use client";
import Image from "next/image";
import React from "react";
import srn from "@/../public/srn.jpg";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const TicketDetails = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row  gap-5 md:gap-10">
      <div className="w-full lg:w-4/5 flex flex-col gap-5 md:gap-10">
        <section className="w-full bg-white shadow-md rounded-md p-5">
          <h1 className="text-2xl mb-5">Ticket Name</h1>
          <p className="text-gray-500 font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui cumque
            dicta neque nemo labore? Quidem praesentium nesciunt consectetur
            esse maxime odit? Consequatur at dolor nesciunt, possimus nulla
            dolorem omnis sit itaque molestias asperiores autem temporibus
            necessitatibus similique ad doloremque magnam voluptate quisquam?
            Ratione ducimus asperiores non at quibusdam ex sint?
          </p>
        </section>

        <section className="w-full bg-white shadow-md rounded-md p-5">
          <h1 className="text-2xl mb-5">Ticket Replies</h1>
          <div className="flex gap-5 sm:items-center mb-10">
            <Image
              src={srn}
              alt="user"
              width={200}
              height={200}
              className="w-16 h-16 rounded-lg border"
            />
            <div>
              <h2 className="font-bold text-gray-600 text-lg">User Name</h2>
              <p className="font-light text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                voluptate facilis eius pariatur earum maiores quae ipsa,
                perferendis suscipit dolore, officia enim repellat aliquam.
                Inventore expedita alias itaque ullam officiis!
              </p>
            </div>
          </div>

          <div className="flex gap-5 sm:items-center mb-10">
            <Image
              src={srn}
              alt="user"
              width={200}
              height={200}
              className="w-16 h-16 rounded-lg border"
            />
            <div>
              <h2 className="font-bold text-gray-600 text-lg">User Name</h2>
              <p className="font-light text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                voluptate facilis eius pariatur earum maiores quae ipsa,
                perferendis suscipit dolore, officia enim repellat aliquam.
                Inventore expedita alias itaque ullam officiis!
              </p>
            </div>
          </div>

          <div className="flex gap-5 sm:items-center mb-10">
            <Image
              src={srn}
              alt="user"
              width={200}
              height={200}
              className="w-16 h-16 rounded-lg border"
            />
            <div>
              <h2 className="font-bold text-gray-600 text-lg">User Name</h2>
              <p className="font-light text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                voluptate facilis eius pariatur earum maiores quae ipsa,
                perferendis suscipit dolore, officia enim repellat aliquam.
                Inventore expedita alias itaque ullam officiis!
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full lg:w-1/5 flex flex-col gap-5 md:gap-10">
        <section className="w-full bg-white shadow-md rounded-md p-5">
          <h1 className="text-2xl mb-5">Ticket Info</h1>
          <div className="flex gap-2 justify-between lg:flex-col xl:flex-row mb-5">
            <p className="bg-green-100 text-green-700 px-3 py-1 rounded-badge text-center">
              opened
            </p>
            <p className="text-blue-500 font-light">Jan 31,2024 9:49</p>
          </div>
          <div className=" mb-5">
            <p className="text-gray-600">Ticket Creator</p>
            <p className="text-gray-500 text-sm font-light">User Name</p>
          </div>
          <div className=" mb-5">
            <p className="text-gray-600">Support Staff</p>
            <p className="text-gray-500 text-sm font-light">Agent Name</p>
          </div>

          <button className="bg-primary px-3 py-1 rounded text-white">
            Update
          </button>
        </section>

        <section className="w-full bg-white shadow-md rounded-md p-5">
          <div className="flex justify-center items-center flex-col gap-2 mb-10">
            <h1 className="font-bold text-gray-600 text-lg">User Info</h1>
            <Image
              src={srn}
              alt="user"
              width={200}
              height={200}
              className="w-28 h-28 rounded-full border"
            />
            <h2 className="text-xl">Jhon</h2>
            <p className="text-blue-500">Jhon@asd.com</p>
          </div>

          <div className="flex justify-between pb-8 border-b-2">
            <section className="flex flex-col items-center">
              <p className="text-gray-500 font-semibold text-lg">4</p>
              <p>total</p>
            </section>
            <section className="flex flex-col items-center">
              <p className="text-gray-500 font-semibold text-lg">6</p>
              <p>open</p>
            </section>
            <section className="flex flex-col items-center">
              <p className="text-gray-500 font-semibold text-lg">2</p>
              <p>closed</p>
            </section>
          </div>

          <div className="flex justify-between pt-5">
            <section className="flex items-center gap-2">
              <BiSolidMessageSquareDetail className="text-xl" /> Message
            </section>
            <section className="flex items-center gap-2">
              <CgProfile className="text-xl" /> Profile
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TicketDetails;
