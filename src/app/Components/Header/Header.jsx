"use client";
import React, { useState } from "react";
import srn from "@/../public/srn.jpg";
import { CiSearch } from "react-icons/ci";
import { PiSquaresFour } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { TfiMenu } from "react-icons/tfi";
import Image from "next/image";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <section className="w-full bg-white flex justify-between md:justify-center items-center gap-8 py-4 px-2  border-b-2 border-black border-opacity-5">
        <h1 className="text-2xl font-bold text-secondary">
          App<span className="font-light text-primary">sosis</span>
        </h1>

        <div className="w-1/2 sm:flex items-center gap-3 hidden ">
          <CiSearch className="text-2xl text-gray-700" />
          <input
            type="text"
            placeholder="Search here..."
            className="outline-none w-full placeholder:text-gray-500"
          />
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <PiSquaresFour className="text-2xl text-black " />
          <IoMailOutline className="text-2xl text-black " />
          <GoBell className="text-2xl text-black " />

          <Image
            src={srn}
            alt="logo"
            height={100}
            width={100}
            className="w-8 h-8 rounded-full border-2 border-opacity-30"
          />

          <TfiMenu
            className="text-2xl text-black lg:hidden cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </section>
    </>
  );
};
