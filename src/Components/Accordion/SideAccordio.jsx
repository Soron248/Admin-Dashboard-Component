"use client";
import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { TiHome } from "react-icons/ti";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillApi } from "react-icons/ai";
import { FaFlag } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

export default function AccordionFlush() {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <section className="w-full ">
      <div className="rounded-none   bg-white dark:border-neutral-600 dark:bg-neutral-800">
        <h2 className="mb-0" id="headingOne">
          <button
            className={`${
              activeElement === "element1" &&
              `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
            } group relative flex gap-2 w-full items-center rounded-none border-0 bg-white px-3 py-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
            type="button"
            onClick={() => handleClick("element1")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <AiFillApi /> Component
            <span
              className={`${
                activeElement === "element1"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-3 w-3 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element1"}
          className="!mt-0 !rounded-b-none !shadow-none"
        >
          <div className="px-3">
            <ul
              tabIndex={0}
              className=" flex flex-col gap-2 z-50  p-3   w-full top-10 bg-white"
            >
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/reusable/form"}>
                  <span className="text-sm">Form</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/reusable/form2"}>
                  <span className="text-sm">Form2</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/reusable/form_wizard"}>
                  <span className="text-sm">Wizard</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/reusable/wizard2"}>
                  <span className="text-sm">Wizard2</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/reusable/table"}>
                  <span className="text-sm">Table</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/reusable/calender"}>
                  <span className="text-sm">Calender</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/reusable/carousel"}>
                  <span className="text-sm">Carousel</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/reusable/editor"}>
                  <span className="text-sm">Editor</span>
                </Link>
              </li>
            </ul>
          </div>
        </TECollapse>
      </div>

      <div className="rounded-none   bg-white dark:border-neutral-600 dark:bg-neutral-800">
        <h2 className="mb-0" id="headingTwo">
          <button
            className={`${
              activeElement === "element2" &&
              `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
            } group relative flex gap-2 w-full items-center rounded-none border-0 bg-white px-3 py-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
            type="button"
            onClick={() => handleClick("element2")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <AiFillAppstore /> Company
            <span
              className={`${
                activeElement === "element2"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-3 w-3 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element2"}
          className="!mt-0 !rounded-b-none !shadow-none"
        >
          <div className="px-3">
            <ul
              tabIndex={0}
              className=" flex flex-col gap-2 z-50  p-3   w-full top-10 bg-white"
            >
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/company/profile"}>
                  <span className="text-sm">Profile</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/company/timeline"}>
                  <span className="text-sm">Timeline</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/company/timeline2"}>
                  <span className="text-sm">Timeline2</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/company/ticket/ticket-list"}>
                  <span className="text-sm">Ticket-List</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/company/ticket/ticket-details"}>
                  <span className="text-sm">Ticket-Details</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/company/invoice"}>
                  <span className="text-sm">Invoice</span>
                </Link>
              </li>
            </ul>
          </div>
        </TECollapse>
      </div>

      <div className="rounded-none   bg-white dark:border-neutral-600 dark:bg-neutral-800">
        <h2 className="accordion-header mb-0" id="headingThree">
          <button
            className={`${
              activeElement === "element3"
                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                : `transition-none rounded-b-[15px]`
            } group relative flex gap-2 w-full items-center rounded-none border-0 bg-white px-3 py-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
            type="button"
            onClick={() => handleClick("element3")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <FaFlag /> Page
            <span
              className={`${
                activeElement === "element3"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-3 w-3 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element3"}
          className="!mt-0 !shadow-none"
        >
          <div className="px-3">
            <ul
              tabIndex={0}
              className=" flex flex-col gap-2 z-50  p-3   w-full top-10 bg-white"
            >
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/authentication/login"}>
                  <span className="text-sm">Login</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/authentication/registration"}>
                  <span className="text-sm">Registration</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/authentication/contacts"}>
                  <span className="text-sm">Contacts</span>
                </Link>
              </li>
              <li className="flex w-auto gap-2 items-center cursor-pointer py-2 pr-10 hover:bg-primary hover:bg-opacity-5">
                <GoDotFill className="text-primary mr-2" />
                <Link href={"/authentication/gallery"}>
                  <span className="text-sm">Gallery</span>
                </Link>
              </li>
            </ul>
          </div>
        </TECollapse>
      </div>
    </section>
  );
}
