"use client";
import React from "react";
import Image from "next/image";
import c1 from "@/../public/c1.webp";
import c2 from "@/../public/c2.webp";
import c3 from "@/../public/c3.jpeg";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const Carousel2 = () => {
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2  bg-white shadow-lg rounded-lg overflow-hidden relative ">
      <TECarousel showControls showIndicators ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <Image
              src={c1}
              className="block w-full h-56 sm:h-72 md:h-96"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5  py-5 text-center text-white ">
              <h5 className="text-lg md:xl">First slide label</h5>
              <p className="hidden md:block">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <Image
              src={c2}
              className="block w-full h-56 sm:h-72 md:h-96"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5  py-5 text-center text-white">
              <h5 className="text-lg md:xl">Second slide label</h5>
              <p className="hidden md:block">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <Image
              src={c3}
              className="block w-full h-56 sm:h-72 md:h-96"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5  py-5 text-center text-white ">
              <h5 className="text-lg md:xl">Third slide label</h5>
              <p className="hidden md:block">
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </div>
  );
};

export default Carousel2;
