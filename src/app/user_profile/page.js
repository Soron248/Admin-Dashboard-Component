import React from "react";
import ProfileRight from "@/Components/Profile/ProfileRight";
import ProfileLeft from "@/Components/Profile/ProfileLeft";

const page = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-5 py-10 px-5 md:px-20 lg:px-28 overflow-x-hidden ">
      <div className="w-full lg:w-1/3 h-auto bg-white rounded-md shadow-md py-10">
        <ProfileLeft />
      </div>

      <div className="w-full lg:w-2/3 h-fit bg-white rounded-md shadow-md">
        <ProfileRight />
      </div>
    </section>
  );
};

export default page;
