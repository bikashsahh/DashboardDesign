import React from "react";
import Container from "@mui/material/Container";
// import Header from "../components/rightBox/Header";
import ProgressBar from "../components/rightBox/ProgressBar";
import Claim from "../components/rightBox/Claim";
import { Route, Routes } from "react-router-dom";
import Kyc from "../components/CommonPages/Kyc";
import Parties from "../components/CommonPages/Parties";
import Payment from "../components/CommonPages/Payment";
import Review from "../components/CommonPages/Review";
import YourDetails from "../components/CommonPages/YourDetails";
import Preliminary from "../components/CommonPages/Preliminary";
import Header from "../components/RightBox/Header";

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
      <ProgressBar currentStep={3} />

      <Routes>
        <Route path="/" element={<Claim />}></Route>
        <Route path="/preliminary" element={<Preliminary />}></Route>
        <Route path="/kyc" element={<Kyc />}></Route>
        <Route path="/parties" element={<Parties />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/yourdetails" element={<YourDetails />}></Route>
      </Routes>
    </Container>
  );
};

export default RightContainer;
