import React from "react";
import { Box, Typography } from "@mui/material";

const Payment = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      sx={{ backgroundColor: "#f5f5f5", padding: 3 }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "#333",
          marginBottom: 2,
        }}
      >
        Payment Form
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src="/construction.webp" // Fallback to placeholder if no imageSrc
        alt="Dummy Page"
        sx={{
          width: "40%",
          height: "auto",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
    </Box>
  );
};

export default Payment;
