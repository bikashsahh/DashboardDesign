import React from "react";
import Container from "@mui/material/Container";
import Header from "../components/RightBox/Header";
import ProgressBar from "../components/RightBox/ProgressBar";
import Claim from "../components/RightBox/InformationContainer/Claim";

const RightContainer = ({ toggleDrawer }) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header toggleDrawer={toggleDrawer} />
      {/* <ProgressBar currentStep={3} /> */}
      <Claim />
    </Container>
  );
};

export default RightContainer;


