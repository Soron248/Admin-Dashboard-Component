import React from "react";
import dynamic from "next/dynamic";

// Import the Carousel component dynamically to handle client-side rendering
const DynamicCarousel = dynamic(
  () => import("@/Components/Carousel/Carousel"),
  { ssr: false }
);
const DynamicNewCarousel = dynamic(
  () => import("@/Components/Carousel/Carousel2"),
  { ssr: false }
);

const page = () => {
  return (
    <section className="max-w-full flex flex-col gap-10 justify-center items-center mx-auto mt-5 py-10 px-5 md:px-20 lg:px-28 ">
      <DynamicCarousel />
      <DynamicNewCarousel />
    </section>
  );
};

export default page;
