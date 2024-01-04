import Carousel from "@/Components/Carousel/Carousel";
import Carousel2 from "@/Components/Carousel/Carousel2";
import React from "react";

const page = () => {
  return (
    <section className="max-w-full flex flex-col gap-10 justify-center items-center mx-auto mt-5 py-10 px-5 md:px-20 lg:px-28 ">
      <Carousel />
      <Carousel2 />
    </section>
  );
};

export default page;
