import React, { useState } from "react";
import { PiTelegramLogoFill } from "react-icons/pi";
import { TagsInput } from "react-tag-input-component";

const Form2 = () => {
  const [inputType, setInputType] = useState("text");
  const [selected, setSelected] = useState(["React Js"]);

  const handletype = () => {
    setInputType("date");
  };

  return (
    <section className="bg-white w-full sm:w-3/4 lg:w-1/2 shadow-md rounded-md p-10">
      <h1 className="text-2xl md:text-4xl font-semibold text-secondary mb-5">
        Action Form
      </h1>
      <form action="" className="w-full flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type=""
            className="w-full bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 p-3 outline-none rounded-md"
            placeholder="First Name"
          />
          <input
            type="text"
            className="w-full bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 p-3 outline-none rounded-md"
            placeholder="Last Name"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type="email"
            className="w-full bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 p-3 outline-none rounded-md"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 p-3 outline-none rounded-md"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type={inputType}
            className="w-full bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 p-3 outline-none rounded-md"
            onFocus={handletype}
            placeholder="Birth Date"
          />
          <input
            type="number"
            className="w-full bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 p-3 outline-none rounded-md"
            placeholder="Age"
          />
        </div>

        <div>
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="services"
            classNames={{
              tagsInput: "custom-tags-input",
              tag: "custom-tag",
              remove: "custom-remove",
              suggestions: "custom-suggestions",
            }}
            placeHolder="enter your skills"
          />
          <em className="text-sm font-light text-gray-500">
            press enter to add new tag
          </em>
        </div>

        <div className="relative ">
          <select
            data-hs-select='{
      "placeholder": "Select Tech Field...",
      "toggleTag": "<button type=\"button\"></button>",
      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 light:focus:outline-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
      "dropdownClasses": "mt-2 z-50 w-full max-h-[300px] p-1 space-y-0.5 bg-white border border-primary border-opacity-50 rounded-lg overflow-hidden overflow-y-auto dark:bg-slate-900 dark:border-gray-700",
      "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-primary hover:bg-opacity-10 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
      "optionTemplate": "<div className=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
    }'
          >
            <option value="">Choose</option>
            <option>Name</option>
            <option>Email address</option>
            <option>Description</option>
            <option>User ID</option>
          </select>

          <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
            <svg
              class="flex-shrink-0 w-4 h-4 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m7 15 5 5 5-5" />
              <path d="m7 9 5-5 5 5" />
            </svg>
          </div>
        </div>

        <div>
          <textarea
            placeholder="Description"
            className="w-full h-32 bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 p-3 outline-none rounded-md"
          ></textarea>
        </div>
        <div className="w-full flex  justify-center">
          <button
            type="submit"
            className="bg-primary flex items-center gap-3 text-white py-2 px-3 rounded-sm"
          >
            <PiTelegramLogoFill />
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form2;
