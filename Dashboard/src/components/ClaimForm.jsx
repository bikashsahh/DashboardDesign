import React from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TranslateIcon from "@mui/icons-material/Translate";
import DescriptionIcon from "@mui/icons-material/Description";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddIcon from "@mui/icons-material/Add";

const ClaimForm = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        File your Claim. <Typography variant="body2">(Approx 5 Minutes)</Typography>
      </Typography>

      {/* Form Layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4,
          mb: 4,
        }}
      >
        {/* Claim Value */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CalculateIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Claim Value
            </Typography>
          </Box>
          <TextField
            label="Contract Value"
            fullWidth
            InputProps={{ endAdornment: <Typography>USD</Typography> }}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Claim Value"
            fullWidth
            InputProps={{ endAdornment: <Typography>USD</Typography> }}
            sx={{ mt: 2 }}
            disabled
          />
          <Typography color="orange" sx={{ mt: 1 }}>
            150% of Contract Value
          </Typography>
        </Box>

        {/* Place */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOnIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Place
            </Typography>
          </Box>
          <TextField
            label="Select the Place for proceedings"
            fullWidth
            sx={{ mt: 2 }}
          />
          <FormLabel sx={{ mt: 2 }}>Is the place mentioned in the agreement?</FormLabel>
          <RadioGroup row sx={{ mt: 1 }}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>

        {/* Language */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TranslateIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Language
            </Typography>
          </Box>
          <TextField
            label="Select the language for proceedings"
            fullWidth
            sx={{ mt: 2 }}
          />
          <FormLabel sx={{ mt: 2 }}>Is the language mentioned in the agreement?</FormLabel>
          <RadioGroup row sx={{ mt: 1 }}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>
      </Box>

      {/* Upload Sections */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4,
        }}
      >
        {/* Statement */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DescriptionIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Statement
            </Typography>
          </Box>
          <Box
            sx={{
              border: "1px dashed #ccc",
              borderRadius: 2,
              p: 2,
              textAlign: "center",
              mt: 2,
            }}
          >
            <Typography>Write your Statement Here or</Typography>
            <Button
              startIcon={<CloudUploadIcon />}
              variant="outlined"
              sx={{ mt: 2 }}
            >
              Upload a PDF
            </Button>
          </Box>
        </Box>

        {/* Agreement Under Disputes */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DescriptionIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Agreement under Disputes
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 2,
              flexWrap: "wrap",
            }}
          >
            {["Upload the Contract", "Arbitration Agreement"].map((label) => (
              <Box
                key={label}
                sx={{
                  border: "1px dashed #ccc",
                  borderRadius: 2,
                  p: 2,
                  textAlign: "center",
                  flex: "1 1 45%",
                }}
              >
                <Typography>{label}</Typography>
                <Typography variant="caption" color="gray">
                  Max 2MB, PDF
                </Typography>
                <Button
                  startIcon={<CloudUploadIcon />}
                  variant="outlined"
                  sx={{ mt: 2 }}
                >
                  Upload
                </Button>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Additional Documentation */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DescriptionIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Additional Documentation
            </Typography>
          </Box>
          <Box
            sx={{
              border: "1px dashed #ccc",
              borderRadius: 2,
              p: 2,
              textAlign: "center",
              mt: 2,
            }}
          >
            <Typography>Upload the Contract</Typography>
            <Typography variant="caption" color="gray">
              Max 2MB, PDF
            </Typography>
            <Button
              startIcon={<CloudUploadIcon />}
              variant="outlined"
              sx={{ mt: 2 }}
            >
              Upload
            </Button>
            <Button
              startIcon={<AddIcon />}
              variant="text"
              sx={{ mt: 2, width: "100%" }}
            >
              Add More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ClaimForm;
