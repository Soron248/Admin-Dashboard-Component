"use client";
import React, { useState } from "react";

const UserForm = () => {
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
      <form onSubmit={handleSubmit} className="w-full  px-5 py-5">
        <div className="mb-4">
          <label
            className="block text-gray-500 text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Full Name
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
            className="block text-gray-500 text-sm font-semibold mb-2"
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
            className="block text-gray-500 text-sm font-semibold mb-2"
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
            className="block text-gray-500 text-sm font-semibold mb-2"
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
            className="block text-gray-500 text-sm font-semibold mb-2"
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

        <div className="mb-16">
          <label
            className="block text-gray-500 text-sm font-semibold mb-2"
            htmlFor="age"
          >
            Location
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
              Select Location
            </option>
            <option value="18-25">Dhaka</option>
            <option value="26-35">Mymensingh</option>
            <option value="36-45">Rangpur</option>
          </select>
        </div>

        <div className="flex justify-center items-center md:justify-start">
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-2 rounded-sm focus:outline-none"
          >
            Update Profile
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
