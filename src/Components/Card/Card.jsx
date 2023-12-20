"use client";
import React, { useState } from "react";

const Card = () => {
  const [width, setWidth] = useState("33.333333%");
  const [height, setHeight] = useState("384px ");

  // const handleResize = () => {
  //   setWidth("50%");
  //   setHeight("200px");
  // };
  return (
    <div
      className="card w-auto md:w-1/3 md:h-96 bg-white shadow-md rounded-md"
      style={{ width, height, resize: "both", overflow: "auto" }}
      // onMouseUp={handleResize}
    >
      <figure className="px-5 pt-5">
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/379/380/original/professional-business-team-flat-illustration-confident-businessmen-and-businesswomen-cartoon-characters-successful-company-staff-corporate-personnel-office-workers-directors-board-vector.jpg"
          alt="Shoes"
          className="w-full h-full rounded-xl shadow-md"
          width={300}
          height={100}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex flex-col items-start lg:flex-row lg:items-center justify-between">
          <p>Development new rules</p>
          <div className="badge  text-white bg-primary  font-light">
            {" "}
            Technology{" "}
          </div>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, this is a consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut{" "}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Read More</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
