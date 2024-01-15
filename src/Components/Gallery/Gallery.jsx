"use client";
import React, { useState } from "react";
import bg1 from "@/../public/bg1.jpg";
import bg2 from "@/../public/bg2.jpg";
import bg3 from "@/../public/bg3.jpg";
import bg4 from "@/../public/bg4.jpg";
import bg5 from "@/../public/bg5.jpeg";
import bg6 from "@/../public/bg6.jpg";
import bg7 from "@/../public/bg7.jpg";
import bg8 from "@/../public/bg8.jpg";
import bg9 from "@/../public/bg9.jpeg";
import bg10 from "@/../public/bg10.jpg";
import bg11 from "@/../public/bg11.jpeg";
import Image from "next/image";

const Gallery = () => {
  const images = [
    { src: bg1, alt: "Image 1" },
    { src: bg6, alt: "Image 6" },
    { src: bg2, alt: "Image 2" },
    { src: bg7, alt: "Image 7" },
    { src: bg3, alt: "Image 3" },
    { src: bg8, alt: "Image 8" },
    { src: bg4, alt: "Image 4" },
    { src: bg9, alt: "Image 9" },
    { src: bg5, alt: "Image 5" },
    { src: bg10, alt: "Image 10" },
    { src: bg11, alt: "Image 11" },
  ];

  return (
    <section className="w-full max-w-5xl  mb-10 gap-2 md:gap-5 columns-2 md:columns-3 space-y-2 md:space-y-5">
      {images.map((image, index) => (
        <div key={index} className="relative group cursor-pointer">
          <Image
            src={image.src}
            alt={image.alt}
            layout="responsive"
            className="object-cover w-full h-full rounded md:rounded-lg "
          />
          <div className="absolute rounded md:rounded-lg inset-0 bg-black bg-opacity-50 hidden group-hover:flex items-center justify-center">
            <p className="text-white font-bold">{image.alt}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
