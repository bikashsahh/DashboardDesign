import React from "react";
import { Box } from "@mui/material";

const StepLine = ({isCompleted, isActive, open}) => {
  return (
    <Box
      flex={1}
      height="3px"
      mx={1}
      sx={{
        backgroundColor: isCompleted
          ? "#1a73e8"
          : isActive
          ? "#1a73e8"
          : "#e0e0e0",
        // borderStyle: isActive ? "dotted" : "",
        display: { xs: "none", sm: "block" },
        width:'100%',
        m:0,
        p:0,
      }}
    ></Box>
  );
};

export default StepLine;
