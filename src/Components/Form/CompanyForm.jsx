"use client";
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const CompanyForm = () => {
  const [selected, setSelected] = useState(["S1"]);
  const [selectedIcon, setSelectedIcon] = useState(["ma-box"]);
  const [selectedAdvnc, setSelectedAdvnc] = useState(["lorem10"]);
  return (
    <>
      <form className="w-full  px-5 py-5">
        <div className="mb-4">
          <label
            className="block text-gray-500 text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Company Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-500 text-sm font-semibold mb-2"
            htmlFor="logo"
          >
            Logo
          </label>
          <input
            type="file"
            id="logo"
            name="logo"
            className="w-full px-3 py-2 border rounded-md focus:outline-none "
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-500 text-sm font-semibold mb-2"
            htmlFor="message"
          >
            Description
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:outline-none "
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-500 text-sm font-semibold mb-2"
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
            className="block text-gray-500 text-sm font-semibold mb-2"
            htmlFor="age"
          >
            Add Advantages
          </label>
          <TagsInput
            tagProps={{ className: "bg-blue-500 text-white" }}
            value={selectedAdvnc}
            onChange={setSelectedAdvnc}
            name="advantages"
            placeHolder="enter advantages"
          />
          <em className="text-sm text-gray-500">press enter to add new tag</em>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-500 text-sm font-semibold mb-2"
            htmlFor="age"
          >
            Add Icon
          </label>
          <TagsInput
            value={selectedIcon}
            onChange={setSelectedIcon}
            name="icon"
            placeHolder="enter icon"
          />
          <em className="text-sm text-gray-500">press enter to add new tag</em>
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none "
            required
          />
        </div>

        <div className="mb-16">
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none "
            required
          />
        </div>

        <div className="flex justify-center items-center md:justify-start">
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-2 rounded-sm focus:outline-none"
          >
            Update Company
          </button>
        </div>
      </form>
    </>
  );
};

export default CompanyForm;
