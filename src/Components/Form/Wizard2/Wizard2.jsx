"use client";
import React, { useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Wizard2 = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    step1: { firstName: "", lastName: "", nickName: "" },
    step2: { email: "", password: "", confirmPassword: "" },
    step3: { phone: "", permanentAddress: "", presentPassword: "" },
  });

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleChange = (step, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: { ...prevData[step], [field]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    handleNext();
  };

  return (
    <section className="sm:w-3/4 lg:w-1/2 h-72 flex bg-white shadow-md rounded-md p-3 md:p-5">
      {/* left */}
      <div className="md:w-16 flex flex-col  justify-between gap-5 ">
        <div className="flex flex-col items-center">
          <IoCheckmarkDoneCircle
            className={`${currentStep > 1 && "text-green-500"}`}
          />
          <h3 className="text-xs md:text-sm font-light  text-gray-500">
            step1
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <IoCheckmarkDoneCircle
            className={`${currentStep > 2 && "text-green-500"}`}
          />
          <h3 className="text-xs md:text-sm font-light  text-gray-500">
            step2
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <IoCheckmarkDoneCircle
            className={`${currentStep > 3 && "text-green-500"}`}
          />
          <h3 className="text-xs md:text-sm font-light  text-gray-500">
            step3
          </h3>
        </div>
      </div>

      {/* right */}
      <div className="w-full h-full  pl-5">
        {currentStep === 1 && (
          <form action="" className="h-full flex flex-col justify-between">
            <input
              type="text"
              name=""
              id=""
              placeholder="first name"
              className="p-3 shadow rounded-sm border-t outline-none"
              value={formData.step1.firstName}
              onChange={(e) =>
                handleChange("step1", "firstName", e.target.value)
              }
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="last name"
              className="p-3 shadow rounded-sm border-t outline-none"
              value={formData.step1.lastName}
              onChange={(e) =>
                handleChange("step1", "lastName", e.target.value)
              }
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="nick name"
              className="p-3 shadow rounded-sm border-t outline-none"
              value={formData.step1.nickName}
              onChange={(e) =>
                handleChange("step1", "nickName", e.target.value)
              }
            />
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="text-sm bg-blue-500 rounded py-1 px-3 text-white"
              >
                NEXT
              </button>
            </div>
          </form>
        )}

        {currentStep === 2 && (
          <form action="" className="h-full flex flex-col justify-between">
            <input
              type="email"
              name=""
              id=""
              placeholder="email"
              className="p-3 shadow rounded-sm border-t outline-none"
              value={formData.step2.email}
              onChange={(e) => handleChange("step2", "email", e.target.value)}
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="password"
              className="p-3 shadow rounded-sm border-t outline-none"
              value={formData.step2.password}
              onChange={(e) =>
                handleChange("step2", "password", e.target.value)
              }
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="confirm password"
              className="p-3 shadow rounded-sm border-t outline-none"
              value={formData.step2.confirmPassword}
              onChange={(e) =>
                handleChange("step2", "confirmPassword", e.target.value)
              }
            />
            <div className="flex justify-between">
              <button
                onClick={handlePrev}
                className="text-sm bg-black rounded py-1 px-3 text-white"
              >
                BACK
              </button>
              <button
                onClick={handleNext}
                className="text-sm bg-blue-500 rounded py-1 px-3 text-white"
              >
                NEXT
              </button>
            </div>
          </form>
        )}

        {currentStep === 3 && (
          <form action="" className="h-full flex flex-col justify-between">
            <input
              type="tel"
              name=""
              id=""
              placeholder="Phone"
              className="p-3 shadow rounded-sm border-t outline-none"
              value={formData.step3.phone}
              onChange={(e) => handleChange("step3", "phone", e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="permanent address"
              className="p-3 shadow rounded-sm border-t outline-none"
              value={formData.step3.permanentAddress}
              onChange={(e) =>
                handleChange("step3", "permanentAddress", e.target.value)
              }
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="present password"
              className="p-3 shadow rounded-sm border-t outline-none"
              value={formData.step3.presentPassword}
              onChange={(e) =>
                handleChange("step3", "presentPassword", e.target.value)
              }
            />
            <div className="flex justify-between">
              <button
                onClick={handlePrev}
                className="text-sm bg-black rounded py-1 px-3 text-white"
              >
                BACK
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="text-sm bg-green-500 rounded py-1 px-3 text-white"
              >
                SUBMIT
              </button>
            </div>
          </form>
        )}

        {currentStep === 4 && (
          <div className="w-full h-full flex justify-center items-center">
            <p className="text-center">
              {" "}
              Information <span className="text-green-500">
                successfully
              </span>{" "}
              submitted !
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Wizard2;
