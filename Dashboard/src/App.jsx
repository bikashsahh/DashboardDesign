import React from "react";

import { CssBaseline, Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import ProgressBar from "./components/ProgressBar";
import ClaimForm from "./components/ClaimForm";

const App = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <ProgressBar
         currentStep={4} />
        <ClaimForm />
      </Box>
    </Box>
  );
};

export default App;
