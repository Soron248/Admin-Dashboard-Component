"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import c1 from "@/../public/c1.webp";
import c2 from "@/../public/c2.webp";
import c3 from "@/../public/c3.jpeg";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

const images = [c1, c2, c3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Image One", "Image Two", "Image Three"];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const autoSlide = () => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 4000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  };

  useEffect(autoSlide, []); // Start auto slide on component mount

  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 h-56 sm:h-72 md:h-96 bg-white shadow-sm rounded-lg overflow-hidden relative ">
      {images.map((img, index) => (
        <div key={index}>
          <Image
            alt={`image-${index + 1}`}
            src={img}
            width={500}
            height={500}
            objectFit="cover"
            className={`absolute  w-full h-full top-0 left-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          />
          {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-white font-bold">
            <h1 className="text-2xl ">{titles[index + 1]}</h1>
          </div> */}
        </div>
      ))}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 left-5 z-10 cursor-pointer text-white text-opacity-70 text-4xl font-bold"
        onClick={prevImage}
      >
        <MdArrowBackIos />
      </div>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-3 z-10 cursor-pointer text-white text-opacity-70 text-4xl font-bold"
        onClick={nextImage}
      >
        <MdArrowForwardIos />
      </div>
    </div>
  );
};

export default Carousel;
