import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Sidebar from "../components/leftBox/Sidebar";

const LeftContainer = ({ open, toggleDrawer, topImage, bottomImage, menuItems }) => {
  return (
    <>
      {/* Drawer for smaller screens */}
      <Drawer
        open={open}
        onClose={toggleDrawer}
        variant="temporary"
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
      >
        <Sidebar topImage={topImage} bottomImage={bottomImage} menuItems={menuItems} />
      </Drawer>

      {/* Permanent sidebar for larger screens */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          width: 240,
          backgroundColor: "#fff",
          height: "100vh",
        }}
      >
        <Sidebar topImage={topImage} bottomImage={bottomImage} menuItems={menuItems} />
      </Box>
    </>
  );
};

export default LeftContainer;
