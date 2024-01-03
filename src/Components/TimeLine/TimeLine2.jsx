"use client";
import Image from "next/image";
import React from "react";
import srn from "@/../public/srn.jpg";

const TimeLine2 = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>
        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
            1 Aug, 2023
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-black">
              <svg
                className="flex-shrink-0 w-4 h-4 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
              Created "Preline in React" task
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Find more detailed insctructions here.
            </p>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <Image
                className="flex-shrink-0 w-4 h-4 rounded-full"
                src={srn}
                alt="Image Description"
                width={200}
                height={200}
              />
              James Collins
            </button>
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-black">
              Release v5.2.0 quick bug fix 🐞
            </h3>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <span className="flex flex-shrink-0 justify-center items-center w-4 h-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                A
              </span>
              Alex Gregarov
            </button>
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-black">
              Marked "Install Charts" completed
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Finally! You can check it out here.
            </p>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <Image
                className="flex-shrink-0 w-4 h-4 rounded-full"
                src={srn}
                alt="Image Description"
                width={200}
                height={200}
              />
              James Collins
            </button>
          </div>
        </div>

        <div className="ps-2 my-2">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
            31 Jul, 2023
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-black">
              Take a break ⛳️
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Just chill for now... 😉
            </p>
          </div>
        </div>

        <div
          id="hs-timeline-collapse"
          className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-timeline-collapse-content"
        >
          <div className="ps-2 my-2 first:mt-0">
            <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
              30 Jul, 2023
            </h3>
          </div>

          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
              <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
              </div>
            </div>

            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                Final touch ups
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Double check everything and make sure we're ready to go.
              </p>
            </div>
          </div>
        </div>

        <div className="ps-[7px] flex gap-x-3">
          <button
            type="button"
            className="hs-collapse-toggle hs-collapse-open:hidden text-start inline-flex items-center gap-x-1 text-sm text-blue-600 font-medium decoration-2 hover:underline dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            id="hs-timeline-collapse-content"
            data-hs-collapse="#hs-timeline-collapse"
          >
            <svg
              className="flex-shrink-0 w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            Show older
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeLine2;
