import React from "react";
import srn from "@/../public/srn.jpg";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ContactCard = () => {
  return (
    <section className="w-fit h-fit p-5 flex flex-col gap-3 justify-center items-center bg-white shadow-md rounded-md">
      <div className="w-fit h-fit relative">
        <Image
          src={srn}
          alt="user"
          width={200}
          height={200}
          className="w-16 h-16 rounded-lg "
        />
        <span className="absolute -right-2 -bottom-2 bg-primary text-white text-xs p-1 rounded-md ">
          Dev
        </span>
      </div>

      <h1 className="text-lg font-bold">SORON</h1>
      <p className="text-center text-gray-500">
        Front-End Developer
        <br /> at{" "}
        <span className="text-secondary">
          App<span className="text-primary">sosis</span>
        </span>
      </p>

      <div>
        <section className="flex items-center gap-2 mb-2">
          <FaPhoneAlt className="text-xl bg-primary bg-opacity-10 p-1 text-primary rounded" />{" "}
          <span className="text-xs">+880 175228 1870</span>
        </section>
        <section className="flex items-center gap-2 mb-2">
          <IoMdMail className="text-xl bg-primary bg-opacity-10 p-1 text-primary rounded" />{" "}
          <span className="text-xs">srn@asd.com</span>
        </section>
      </div>
    </section>
  );
};

export default ContactCard;
