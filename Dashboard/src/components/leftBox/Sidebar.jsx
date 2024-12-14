
import React from "react";
import { Box, List, ListItem, ListItemText, styled } from "@mui/material";

const IconImg = styled("img")({
  width: 160,
  height: 100,
  display: "block",
  margin: "auto",
  marginTop: 0,
  marginBottom: 10,
});

const Sidebar = ({ topImage, bottomImage, menuItems }) => {
  return (
    <Box
      sx={{
        width: 240,
        backgroundColor: "#fff",
        height: "100vh",
        padding: 2,
        boxShadow: "none",
      }}
    >
      <IconImg src={topImage.src} alt={topImage.alt} />
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            {item.icon}
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                sx: { ml: 2, color: "#7a90a9", fontWeight: "bold" },
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box
        component="img"
        src={bottomImage.src}
        alt={bottomImage.alt}
        sx={{
          width: "80%",
          height: "auto",
          borderRadius: "5%",
          display: "block",
          margin: "20px auto 0 auto",
        }}
      />
    </Box>
  );
};

export default Sidebar;
