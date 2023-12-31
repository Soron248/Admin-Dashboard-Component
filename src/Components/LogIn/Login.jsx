import Image from "next/image";
import React from "react";
import login from "@/../public/login.jpg";

const Login = () => {
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
        <p className="text-sm text-gray-500">
          Welcome back! Log in to your account.
        </p>
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
          <div className="flex">
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="skills"
                value="javascript"
                className="form-checkbox text-green-500"
              />
              <span className="ml-2 cursor-pointer select-none">
                Remember me
              </span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-primary font-semibold text-white px-3 py-1 rounded-sm focus:outline-none"
          >
            Login
          </button>
        </div>
        <p className="text-sm text-gray-500">
          Not a user?{" "}
          <span className="text-blue-500 cursor-pointer">Sign up</span>
        </p>
      </div>
    </section>
  );
};

export default Login;
