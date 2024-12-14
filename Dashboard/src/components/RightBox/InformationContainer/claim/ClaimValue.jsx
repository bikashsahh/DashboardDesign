import React, { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import { styled } from "@mui/system";

// Custom styled TextField
const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #1e83ff",
    },
  },
});

const ClaimValue = () => {
  const [contractValue, setContractValue] = useState("");
  const [claimValue, setClaimValue] = useState("");
  const [currency, setCurrency] = useState("USD");

  // Function to format numbers in Indian numbering system
  const formatNumberWithCommas = (value) => {
    if (!value) return "";
    const parts = value.replace(/,/g, "").split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    return parts.join(".");
  };

  const handleContractValueChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    if (!isNaN(value)) {
      setContractValue(formatNumberWithCommas(value));
      setClaimValue((parseFloat(value) * 1.5).toFixed(2));
    } else {
      setContractValue("");
      setClaimValue("");
    }
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <Box sx={{ width: "360px", display: "flex", flexDirection: "column" }}>
      {/* Header Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <CalculateOutlinedIcon style={{ fontSize: "30px", color: "#1e83ff" }} />
        <Typography
          variant="h6"
          style={{ color: "#7A8FA9", fontWeight: "bold" }}
        >
          Claim Value
        </Typography>
      </Box>

      {/* Input Fields */}
      <Box sx={{ display: "flex", flexDirection: "column", padding: "20px" }}>
        {/* Contract Value Input */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomTextField
            variant="standard"
            label="Contract Value"
            type="text"
            value={contractValue}
            onChange={handleContractValueChange}
            fullWidth
            margin="normal"
            sx={{ backgroundColor: "#f4f5fc" }}
          />
          {/* Currency Selection */}
          <FormControl
            variant="filled"
            sx={{ width: "120px", marginLeft: "2px" }}
          >
            {/* <InputLabel>Currency</InputLabel> */}
            <Select
              value={currency}
              onChange={handleCurrencyChange}
              // label="Currency"
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Claim Value Input */}
        <CustomTextField
          label="Claim Value"
          type="text"
          value={formatNumberWithCommas(claimValue)}
          fullWidth
          margin="normal"
          sx={{ backgroundColor: "#f4f5fc" }}
          InputProps={{
            endAdornment: <Typography>{currency}</Typography>,
          }}
          disabled
        />

        {/* Helper Text */}
        <Typography variant="body2" color="#ffab45" sx={{ fontWeight: "500" }}>
          {contractValue
            ? `150% of Contract Value`
            : "Enter Contract Value to Calculate Claim"}
        </Typography>
      </Box>
    </Box>
  );
};

export default ClaimValue;
