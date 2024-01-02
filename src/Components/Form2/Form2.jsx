import React, { useState } from "react";
import { PiTelegramLogoFill } from "react-icons/pi";

const Form2 = () => {
  const [inputType, setInputType] = useState("text");
  const handletype = () => {
    setInputType("date");
  };
  return (
    <section className="bg-white w-full sm:w-3/4 lg:w-1/2 shadow-md rounded-md p-10">
      <form action="" className="w-full flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type=""
            className="w-full bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 p-3 rounded-md"
            placeholder="First Name"
          />
          <input
            type="text"
            className="w-full bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 p-3 rounded-md"
            placeholder="Last Name"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type="email"
            className="w-full bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 p-3 rounded-md"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 p-3 rounded-md"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type={inputType}
            className="w-full bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 p-3 rounded-md"
            onFocus={handletype}
            placeholder="Birth Date"
          />
          <input
            type="number"
            className="w-full bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 p-3 rounded-md"
            placeholder="Age"
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            className="w-full h-32 bg-primary bg-opacity-10 border-l-2 border-primary border-opacity-70 p-3 rounded-md"
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
