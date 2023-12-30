"use client";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

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
            <div className="bg-white p-2 rounded-md rounded-tl-none shadow-md">
              <h1 className="font-semibold ">Phase 1</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                eveniet quod dignissimos unde consequatur eaque sapiente eos
                vero sequi praesentium!
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="bg-white p-2 rounded-md rounded-tr-none shadow-md">
              <h1 className="font-semibold ">Phase 2</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                eveniet quod dignissimos unde consequatur eaque sapiente eos
                vero sequi praesentium!
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="bg-white p-2 rounded-md rounded-tl-none shadow-md">
              <h1 className="font-semibold ">Phase 3</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                eveniet quod dignissimos unde consequatur eaque sapiente eos
                vero sequi praesentium!
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <div className="bg-white p-2 rounded-md rounded-tr-none shadow-md">
              <h1 className="font-semibold ">Phase 4</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                eveniet quod dignissimos unde consequatur eaque sapiente eos
                vero sequi praesentium!
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimeLine;
