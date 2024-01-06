import Image from "next/image";
import React from "react";
import srn from "@/../public/srn.jpg";
import Link from "next/link";
import { AiFillSetting } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import SideAccordio from "@/Components/Accordion/SideAccordio";
import { TiHome } from "react-icons/ti";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillApi } from "react-icons/ai";
import { FaFlag } from "react-icons/fa6";

const Sidebar = ({ menuOpen, toggleMenu }) => {
  return (
    <section className="sideheight w-10 md:w-16 hover:w-60 group transition-all duration-300 absolute top-0 left-0  z-10 mt-[65.5px] bg-white shadow-md  ">
      <div className="sidebarimg w-full h-1/4 flex justify-center pt-3 ">
        <div className="w-fit h-fit flex justify-center items-center gap-3">
          <Link href={"/user_profile"}>
            <Image
              src={srn}
              alt="user"
              width={100}
              height={100}
              className="w-8 h-8 md:w-12 md:h-12 group-hover:w-14 group-hover:h-14 transition-all duration-300 rounded-full border-2 cursor-pointer"
            />
          </Link>
          <h1 className="text-2xl hidden group-hover:block font-bold text-secondary">
            SORON
          </h1>
        </div>
      </div>

      <div className="w-full h-2/4  flex overflow-y-auto">
        <div className="w-full flex flex-col items-center pt-4 gap-8 group-hover:hidden">
          <AiFillApi />
          <AiFillAppstore />
          <FaFlag />
        </div>
        <div className="w-full hidden group-hover:block">
          <SideAccordio />
        </div>
      </div>

      <div className="w-full h-1/4 text-xl  p-3 flex justify-center group-hover:justify-between items-end">
        <AiFillSetting className="hidden group-hover:block cursor-pointer" />
        <IoMail className=" hidden group-hover:block cursor-pointer" />
        <FaPowerOff className="hover:text-red-500 cursor-pointer" />
      </div>
    </section>
  );
};

export default Sidebar;
