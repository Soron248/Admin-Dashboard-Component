"use client";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import srn from "@/../public/srn.jpg";
import Image from "next/image";

const TimeLine = () => {
  return (
    <div className="md:flex">
      <Timeline position="alternate" className="md:flex-col">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="bg-white p-3 rounded-md rounded-tl-none shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={srn}
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-10 h-10 rounded-full border-2"
                />
                <h1 className="font-semibold ">Phase 1</h1>
              </div>
              <p className="text-gray-500 mb-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                eveniet quod dignissimos unde consequatur eaque sapiente eos
                vero sequi praesentium!
              </p>
              <span className="py-1 px-2 bg-blue-500 text-white rounded-full">
                Details
              </span>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="bg-white p-3 rounded-md rounded-tr-none shadow-md">
              <div className="flex items-center justify-end gap-3 mb-3">
                <h1 className="font-semibold ">Phase 1</h1>
                <Image
                  src={srn}
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-10 h-10 rounded-full border-2"
                />
              </div>
              <p className="text-gray-500 mb-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                eveniet quod dignissimos unde consequatur eaque sapiente eos
                vero sequi praesentium!
              </p>
              <span className="py-1 px-2 bg-blue-500 text-white rounded-full">
                Details
              </span>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="bg-white p-3 rounded-md rounded-tl-none shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={srn}
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-10 h-10 rounded-full border-2"
                />
                <h1 className="font-semibold ">Phase 1</h1>
              </div>
              <p className="text-gray-500 mb-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                eveniet quod dignissimos unde consequatur eaque sapiente eos
                vero sequi praesentium!
              </p>
              <span className="py-1 px-2 bg-blue-500 text-white rounded-full">
                Details
              </span>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <div className="bg-white p-3 rounded-md rounded-tr-none shadow-md">
              <div className="flex items-center justify-end gap-3 mb-3">
                <h1 className="font-semibold ">Phase 1</h1>
                <Image
                  src={srn}
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-10 h-10 rounded-full border-2"
                />
              </div>
              <p className="text-gray-500 mb-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                eveniet quod dignissimos unde consequatur eaque sapiente eos
                vero sequi praesentium!
              </p>
              <span className="py-1 px-2 bg-blue-500 text-white rounded-full">
                Details
              </span>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimeLine;
