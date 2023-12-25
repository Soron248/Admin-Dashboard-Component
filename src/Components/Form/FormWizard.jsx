"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
  "Create Campaign",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1 || step === 3;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <form className="w-full bg-white rounded-md shadow-md px-5 py-8">
            <div className="mb-4">
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none "
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="age"
              >
                Age
              </label>
              <select
                id="age"
                name="age"
                className="w-full px-3 py-2 border bg-white rounded-md focus:outline-none "
                required
              >
                <option value="" defaultValue>
                  Select Age
                </option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
              </select>
            </div>
          </form>
        );
      case 1:
        return (
          <form className="w-full bg-white rounded-md shadow-md px-5 py-8">
            <div className="mb-4">
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none "
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="age"
              >
                Age
              </label>
              <select
                id="age"
                name="age"
                className="w-full px-3 py-2 border bg-white rounded-md focus:outline-none "
                required
              >
                <option value="" defaultValue>
                  Select Age
                </option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
              </select>
            </div>
          </form>
        );
      case 2:
        return (
          <form className="w-full bg-white rounded-md shadow-md px-5 py-8">
            <div className="mb-4">
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none "
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="age"
              >
                Age
              </label>
              <select
                id="age"
                name="age"
                className="w-full px-3 py-2 border bg-white rounded-md focus:outline-none "
                required
              >
                <option value="" defaultValue>
                  Select Age
                </option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
              </select>
            </div>
          </form>
        );
      case 3:
        // Placeholder mini form for the 4th step
        return (
          <form className="w-full bg-white rounded-md shadow-md px-5 py-8">
            <div className="mb-4">
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none "
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black text-sm font-semibold mb-2"
                htmlFor="age"
              >
                Age
              </label>
              <select
                id="age"
                name="age"
                className="w-full px-3 py-2 border bg-white rounded-md focus:outline-none "
                required
              >
                <option value="" defaultValue>
                  Select Age
                </option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
              </select>
            </div>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption" className="hidden md:inline">
                <span>Optional</span>
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                <span className="hidden md:inline">{label}</span>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <div className="w-full text-center py-10 font-semibold text-xl">
              All steps <span className="text-green-500">completed !</span>
            </div>
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Typography component="div" sx={{ mt: 2, mb: 1 }}>
            {renderStepContent(activeStep)}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
