import React, { useState } from "react";
import { Typography, Box, Button, TextField } from "@mui/material";
import MyCard from "./MyCard";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Statement = () => {
  const [isWriting, setIsWriting] = useState(false);
  const [statement, setStatement] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected PDF file:", file.name); // Handle the uploaded file here
    }
  };

  const handleTextChange = (event) => {
    setStatement(event.target.value);
  };

  const handleWriteClick = () => {
    setIsWriting(true); // Switch to the "write" mode
  };

  return (
    <MyCard
      title="Statement"
      Icon={<ReceiptLongOutlinedIcon style={{ fontSize: "30px", color: "#1e83ff" }} />}
    >
      <Box
        sx={{
          backgroundColor: "#f4f5fc",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {/* Display "Write your statement" button at the top */}
        {!isWriting && (
          <Button
            onClick={handleWriteClick}
            sx={{ textTransform: "none", color: "black", fontSize: "14px" }}
          >
            Write your statement
          </Button>
        )}
{!isWriting && (
          <Button
            onClick={handleWriteClick}
            sx={{ textTransform: "none", color: "black", fontSize: "14px" ,marginTop:'-30px' , marginBottom:'-30px'}}
          >
            or
          </Button>
        )}
        {/* If not in writing mode, show the PDF upload button below */}
        {!isWriting && (
          <Button
            component="label"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <CloudUploadIcon style={{ fontSize: "30px", color: "#1e83ff" }} />
            <Typography fontSize={10} fontWeight={500} color="black">
              Upload a PDF
            </Typography>
            {/* Hidden input for file upload */}
            <input
              type="file"
              accept=".pdf"
              hidden
              onChange={handleFileChange}
            />
          </Button>
        )}

        {/* When in writing mode, show the text field */}
        {isWriting && (
          <>
            <Typography variant="body1" sx={{ fontWeight: 500, color: "#555" }}>
              Write your statement below:
            </Typography>

            <TextField
              multiline
              rows={4}
              variant="outlined"
              value={statement}
              onChange={handleTextChange}
              sx={{
                width: "100%",
                maxWidth: "500px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              }}
              placeholder="Write your statement here"
            />
          </>
        )}
      </Box>
    </MyCard>
  );
};

export default Statement;
