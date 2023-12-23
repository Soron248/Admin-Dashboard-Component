"use client";
import Image from "next/image";
import React from "react";
import srn from "@/../public/srn.jpg";
import map from "@/../public/location.png";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const ProfileLeft = () => {
  return (
    <>
      <section className="w-full flex gap-5 justify-center items-center flex-col mb-10">
        <Image
          src={srn}
          width={300}
          height={300}
          alt="user image"
          className="w-36 h-36 rounded-full border-2 border-opacity-20"
        />
        <div className="text-center">
          <h1 className="font-semibold ">Eftekhar Jahan Soron</h1>
          <p className="text-sm text-gray-500">Font-End Developer</p>
        </div>
      </section>

      <section className="flex flex-col gap-3 px-10 mb-10">
        <div>
          <p className="text-sm font-light text-gray-500">Email Address</p>
          <h2>Soron@gmail.com</h2>
        </div>
        <div>
          <p className="text-sm font-light text-gray-500">Phone</p>
          <h2>+088 01752 281 870</h2>
        </div>
        <div>
          <p className="text-sm font-light text-gray-500">Address</p>
          <h2>Nikunja 2,Khilkhet, Dhaka North</h2>
        </div>
        <div>
          <Link
            href={
              "https://www.google.com/maps/@23.8340554,90.414332,2096m/data=!3m1!1e3?entry=ttu"
            }
          >
            <Image
              src={map}
              alt="map"
              width={300}
              height={300}
              className="w-full rounded-lg"
            />
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-3 px-10 ">
        <div>
          <p className="text-sm font-light text-gray-500 mb-3">
            Social Profile
          </p>
          <div className="flex gap-5">
            <FaFacebook className="text-xl cursor-pointer text-blue-500" />
            <AiFillTwitterCircle className="text-xl cursor-pointer text-sky-400" />
            <FaLinkedin className="text-xl cursor-pointer text-sky-700" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileLeft;
