// ProgressBar.js
import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

const ProgressBar = ({ currentStep }) => {
  const steps = ["Preliminary", "Your Details", "KYC", "Parties", "Claim", "Review", "Payment"];

  return (
    <Stepper
      activeStep={currentStep - 1}
      alternativeLabel
      sx={{
        marginBottom: 4,
        "& .MuiStepLabel-label": { color: "#1565c0" },
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default ProgressBar;