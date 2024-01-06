"use client";
import React from "react";
import dynamic from "next/dynamic";

const Form2 = dynamic(() => import("@/Components/Form2/Form2"), { ssr: false });

const page = () => {
  return (
    <section className="max-w-full flex justify-center items-center mx-auto mt-5 py-10 px-5 md:px-20 lg:px-28 ">
      <Form2 />
    </section>
  );
};

export default page;
