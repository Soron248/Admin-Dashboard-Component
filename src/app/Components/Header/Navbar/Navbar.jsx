"use client";
import React, { useState, useEffect } from "react";
import { IoCubeOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

export const Navbar = ({ menuOpen }) => {
  return (
    <section
      className={`w-full bg-white  lg:flex ${
        menuOpen ? "sm:flex" : "hidden"
      } justify-center items-center  py-5 px-10 shadow-sm border-b-2 border-black border-opacity-5`}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-3 lg:gap-10 xl:gap-14">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-2 hover:text-primary cursor-pointer focus:text-primary"
          >
            <IoCubeOutline className="text-xl" />
            <span className="text-sm">DASHBOARD</span>
          </div>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-2 hover:text-primary cursor-pointer focus:text-primary"
          >
            <IoCubeOutline className="text-xl" />
            <span className="text-sm">Name</span>
            <IoIosArrowDown className="text-sm" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content flex flex-col gap-2 z-10  p-3  shadow-md rounded-box w-fit top-10 bg-white"
          >
            <li className="flex gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
              <GoDotFill className="text-primary mr-2" />
              <span className="text-sm">profile</span>
            </li>
            <li className="flex gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
              <GoDotFill className="text-primary mr-2" />
              <span className="text-sm">setting</span>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-2 hover:text-primary cursor-pointer focus:text-primary"
          >
            <IoCubeOutline className="text-xl" />
            <span className="text-sm">Name</span>
            <IoIosArrowDown className="text-sm" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content flex flex-col gap-2 z-10  p-3  shadow-md rounded-box w-fit top-10 bg-white"
          >
            <li className="flex gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
              <GoDotFill className="text-primary mr-2" />
              <span className="text-sm">profile</span>
            </li>
            <li className="flex gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
              <GoDotFill className="text-primary mr-2" />
              <span className="text-sm">setting</span>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-2 hover:text-primary cursor-pointer focus:text-primary"
          >
            <IoCubeOutline className="text-xl" />
            <span className="text-sm">Name</span>
            <IoIosArrowDown className="text-sm" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content flex flex-col gap-2 z-10  p-3  shadow-md rounded-box w-fit top-10 bg-white"
          >
            <li className="flex gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
              <GoDotFill className="text-primary mr-2" />
              <span className="text-sm">profile</span>
            </li>
            <li className="flex gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
              <GoDotFill className="text-primary mr-2" />
              <span className="text-sm">setting</span>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-2 hover:text-primary cursor-pointer focus:text-primary"
          >
            <IoCubeOutline className="text-xl" />
            <span className="text-sm">Name</span>
            <IoIosArrowDown className="text-sm" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content flex flex-col gap-2 z-10  p-3  shadow-md rounded-box w-fit top-10 bg-white"
          >
            <li className="flex gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
              <GoDotFill className="text-primary mr-2" />
              <span className="text-sm">profile</span>
            </li>
            <li className="flex gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
              <GoDotFill className="text-primary mr-2" />
              <span className="text-sm">setting</span>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-2 hover:text-primary cursor-pointer focus:text-primary"
          >
            <IoCubeOutline className="text-xl" />
            <span className="text-sm">Name</span>
            <IoIosArrowDown className="text-sm" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content flex flex-col gap-2 z-10  p-3  shadow-md rounded-box w-fit top-10 bg-white"
          >
            <li className="flex gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
              <GoDotFill className="text-primary mr-2" />
              <span className="text-sm">profile</span>
            </li>
            <li className="flex gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
              <GoDotFill className="text-primary mr-2" />
              <span className="text-sm">setting</span>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-2 hover:text-primary cursor-pointer focus:text-primary"
          >
            <IoCubeOutline className="text-xl" />
            <span className="text-sm">Name</span>
            <IoIosArrowDown className="text-sm" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content flex flex-col gap-2 z-10  p-3  shadow-md rounded-box w-fit top-10 bg-white"
          >
            <li className="flex gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
              <GoDotFill className="text-primary mr-2" />
              <span className="text-sm">profile</span>
            </li>
            <li className="flex gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
              <GoDotFill className="text-primary mr-2" />
              <span className="text-sm">setting</span>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-2 hover:text-primary cursor-pointer focus:text-primary"
          >
            <IoCubeOutline className="text-xl" />
            <span className="text-sm">Name</span>
            <IoIosArrowDown className="text-sm" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content flex flex-col gap-2 z-10  p-3  shadow-md rounded-box w-fit top-10 bg-white"
          >
            <li className="flex gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
              <GoDotFill className="text-primary mr-2" />
              <span className="text-sm">profile</span>
            </li>
            <li className="flex gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
              <GoDotFill className="text-primary mr-2" />
              <span className="text-sm">setting</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
