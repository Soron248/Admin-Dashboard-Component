"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import UserForm from "../Form/UserForm";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Setting" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <section className="w-full flex flex-col md:flex-row gap-5 justify-between mb-10">
          <div className="text-left">
            <h1 className="font-semibold text-gray-600 ">Full Name</h1>
            <p className="text-sm text-gray-500 font-light">
              Eftekhar Jahan Soron
            </p>
          </div>
          <div className="text-left">
            <h1 className="font-semibold text-gray-600 ">Mobile</h1>
            <p className="text-sm text-gray-500 font-light">01752281870</p>
          </div>
          <div className="text-left">
            <h1 className="font-semibold text-gray-600 ">Email</h1>
            <p className="text-sm text-gray-500 font-light">Soron@gmail.com</p>
          </div>
          <div className="text-left">
            <h1 className="font-semibold text-gray-600 ">Location</h1>
            <p className="text-sm text-gray-500 font-light">Dhaka</p>
          </div>
        </section>

        <section>
          <div className="text-gray-500 mb-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae
              dolores obcaecati nisi sapiente, tenetur ipsa eos inventore
              explicabo voluptatibus officia, dicta nihil fugit blanditiis,
              itaque libero corrupti vitae unde? Quos molestiae possimus ipsam,
              dignissimos natus ad doloremque consequatur ab culpa. Provident
              quae modi ut laudantium voluptatibus eos, ullam eius?
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-600 mb-3">
              Working Progress
            </h2>
            <div>
              <p className="text-sm text-gray-500 font-light">E-Commerce </p>
              <Box sx={{ width: "50%" }}>
                <LinearProgress
                  variant="determinate"
                  color="success"
                  value={80}
                  sx={{
                    height: "10px",
                    borderRadius: "50px",
                    marginBottom: "15px",
                  }}
                />
              </Box>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-light">SAAS </p>
              <Box sx={{ width: "50%" }}>
                <LinearProgress
                  variant="determinate"
                  value={50}
                  sx={{
                    height: "10px",
                    borderRadius: "50px",
                    marginBottom: "15px",
                  }}
                />
              </Box>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-light">ERP </p>
              <Box sx={{ width: "50%" }}>
                <LinearProgress
                  variant="determinate"
                  color="secondary"
                  value={20}
                  sx={{
                    height: "10px",
                    borderRadius: "50px",
                    marginBottom: "15px",
                  }}
                />
              </Box>
            </div>
          </div>
        </section>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <UserForm />
      </CustomTabPanel>
    </Box>
  );
}
