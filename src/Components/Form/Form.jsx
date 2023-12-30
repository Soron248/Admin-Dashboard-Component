"use client";
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const Form = () => {
  const [selected, setSelected] = useState(["S1"]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    skills: [],
    password: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevData[name], value]
            : prevData[name].filter((skill) => skill !== value)
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form Data:", formData);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white rounded-md shadow-md px-5 py-8"
      >
        <div className="mb-4">
          <label
            className="block text-black text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none "
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-semibold mb-2"
            htmlFor="age"
          >
            Age
          </label>
          <select
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border bg-white rounded-md focus:outline-none "
            required
          >
            <option value="" defaultValue>
              Select Age
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            {/* Add more age ranges as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2">
            Gender
          </label>
          <div className="flex">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="form-radio text-pink-500"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2">
            Skills
          </label>
          <div className="flex">
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="skills"
                value="javascript"
                checked={formData.skills.includes("javascript")}
                onChange={handleChange}
                className="form-checkbox text-green-500"
              />
              <span className="ml-2">JavaScript</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="skills"
                value="react"
                checked={formData.skills.includes("react")}
                onChange={handleChange}
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2">React</span>
            </label>
            {/* Add more skills as needed */}
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none "
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:outline-none "
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-semibold mb-2"
            htmlFor="age"
          >
            Add Service
          </label>
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="services"
            placeHolder="enter services"
          />
          <em className="text-sm text-gray-500">press enter to add new tag</em>
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-semibold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none "
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-semibold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-black text-sm font-semibold">Date</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimePicker"]}>
              <DemoItem>
                <TimePicker defaultValue={dayjs("2022-04-17T15:30")} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2">
            Color
          </label>
          <input
            type="color"
            id="color"
            className="w-full md:w-10 rounded px-3 py-2 md:px-1 md:py-1 "
            required
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-2 rounded-sm focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
