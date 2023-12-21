"use client";
import React, { useState } from "react";
import srn from "@/../public/srn.jpg";
import { CiSearch } from "react-icons/ci";
import { PiSquaresFour } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { TfiMenu } from "react-icons/tfi";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="w-full sticky top-0 z-50 ">
      <section className="w-full  bg-white flex justify-between md:justify-center items-center gap-8 py-4 px-2  border-b-2 border-black border-opacity-5 ">
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

          <div className="relative group">
            <IoMailOutline className="text-2xl text-black group-hover:cursor-pointer" />
            {/* <div className="w-3 h-3 bg-white absolute border-2 top-7 rotate-45 left-2"></div> */}

            <div className="w-60 absolute  flex-col gap-5 bg-white shadow-md p-2 rounded-md border-2 top-8 -left-24 hidden group-hover:flex z-50">
              <div className="flex gap-2 items-center justify-between">
                <div className="mask mask-squircle w-8 h-8">
                  <img
                    src="https://cdn.dribbble.com/users/8309782/screenshots/17449329/media/6232cca89209dba5998b6418aba87157.png?resize=400x0"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-sm">Hart Hagerty</h1>
                  <p className="text-sm opacity-50">United States</p>
                </div>
                <div>
                  <p className="text-xs text-blue-500 opacity-50">2m ago</p>
                </div>
              </div>

              <div className="flex gap-2 items-center justify-between">
                <div className="mask mask-squircle w-8 h-8">
                  <img
                    src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/58732105/original/aa.jpg"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-sm">Brice Swyre</h1>
                  <p className="text-sm opacity-50">China</p>
                </div>
                <div>
                  <p className="text-xs text-blue-500 opacity-50">2m ago</p>
                </div>
              </div>

              <div className="flex gap-2 items-center justify-between">
                <div className="mask mask-squircle w-8 h-8">
                  <img
                    src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/42b8cbad0e2b0fb5e49359700b8e3921-1680822965/Jevan_wade-01-01/draw-cartoon-gaming-social-media-profile-picture.jpg"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-sm">Marjy Ferencz</h1>
                  <p className="text-sm opacity-50">Russia</p>
                </div>
                <div>
                  <p className="text-xs text-blue-500 opacity-50">2m ago</p>
                </div>
              </div>
            </div>
          </div>

          <GoBell className="text-2xl text-black " />

          <Image
            src={srn}
            alt="logo"
            height={100}
            width={100}
            className="w-8 h-8 rounded-full border-2 border-opacity-30"
          />

          {menuOpen ? (
            <GrClose
              className="text-2xl text-black lg:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <TfiMenu
              className="text-2xl text-black lg:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </section>

      <Navbar menuOpen={menuOpen} />
    </header>
  );
};
