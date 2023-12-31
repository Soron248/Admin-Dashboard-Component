import Image from "next/image";
import React from "react";
import login from "@/../public/login.jpg";

const Registration = () => {
  return (
    <section className="w-full md:w-1/2 h-96 flex bg-white shadow-md rounded-md overflow-hidden">
      <div className="w-1/3 h-full hidden md:block">
        <Image
          src={login}
          alt="logo"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>

      <div className="w-full md:w-2/3 h-full p-5 flex flex-col justify-between">
        <h1 className="text-2xl font-bold text-secondary cursor-pointer">
          App<span className="font-light text-primary">sosis</span>
        </h1>

        <div>
          <label
            className="block text-black text-sm font-semibold mb-2"
            htmlFor="name"
          >
            User Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label
            className="block text-black text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none "
            placeholder="Email"
            required
          />
        </div>
        <div>
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none "
            required
            placeholder="Password"
          />
        </div>

        <div>
          <button
            type="submit"
            className="border-2 text-primary border-primary font-semibold px-2 py-1 focus:outline-none"
          >
            Sign Up
          </button>
        </div>
        <p className="text-sm text-gray-500">
          Already user?{" "}
          <span className="text-blue-500 cursor-pointer">Sign in</span>
        </p>
      </div>
    </section>
  );
};

export default Registration;
