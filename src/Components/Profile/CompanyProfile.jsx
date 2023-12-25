import Image from "next/image";
import React from "react";
import logo from "@/../public/logo.webp";
import CompanyRight from "./CompanyRight";

const CompanyProfile = () => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-5 md:gap-10">
      <div className="w-full md:w-1/3 h-fit p-5  flex flex-col justify-center items-center gap-5 bg-white rounded-md shadow-md">
        <Image
          src={logo}
          alt="logo"
          width={300}
          height={300}
          className="w-48 h-52"
        />
        <h1 className="text-xl text-secondary font-semibold md:text-3xl">
          Company Name
        </h1>
        <p className="text-center mb-5 text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est deleniti
          quidem debitis dignissimos soluta amet ut voluptates voluptas.
          Cupiditate, dignissimos.
        </p>
      </div>

      <div className="w-full md:w-2/3 h-fit  flex flex-col md:flex-row  gap-5 bg-white rounded-md shadow-md">
        <CompanyRight />
      </div>
    </section>
  );
};

export default CompanyProfile;
