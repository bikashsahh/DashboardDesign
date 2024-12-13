// ClaimForm.js
import React, { useState } from "react";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    contractValue: "",
    claimValue: "",
    placeProceedings: "",
    languageProceedings: "",
    statement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        backgroundColor: "#ffffff",
        padding: 3,
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        width: { xs: "90%", sm: "80%", md: "60%" },
      }}
    >
      <Typography variant="h6" gutterBottom>
        File your Claim
      </Typography>
      <TextField
        label="Contract Value (USD)"
        name="contractValue"
        value={formData.contractValue}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Claim Value (USD)"
        name="claimValue"
        value={formData.claimValue}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        select
        label="Place for Proceedings"
        name="placeProceedings"
        value={formData.placeProceedings}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      >
        <MenuItem value="Yes">Yes</MenuItem>
        <MenuItem value="No">No</MenuItem>
      </TextField>
      <TextField
        select
        label="Language for Proceedings"
        name="languageProceedings"
        value={formData.languageProceedings}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      >
        <MenuItem value="English">English</MenuItem>
        <MenuItem value="French">French</MenuItem>
      </TextField>
      <TextField
        label="Statement"
        name="statement"
        value={formData.statement}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        margin="normal"
        placeholder="Write your statement here..."
        required
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          marginTop: 2,
          backgroundColor: "#1565c0",
          "&:hover": { backgroundColor: "#0d47a1" },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default ClaimForm;