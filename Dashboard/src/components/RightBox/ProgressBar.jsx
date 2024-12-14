// import React, { useState } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import StepLine from "../commonPages/StepLine"; // Ensure StepLine is implemented correctly
// import { useNavigate } from "react-router-dom";
// import MobileStepper from '@mui/material/MobileStepper';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import { useTheme } from '@mui/material/styles';

// const ProgressBar = ({ steps, initialStep }) => {
//   const [currentStep, setCurrentStep] = useState(initialStep); // Initialize currentStep with the prop
//   const navigate = useNavigate();
//   const theme = useTheme();

//   const handleNext = () => {
//     setCurrentStep((prevActiveStep) => {
//       const nextStep = prevActiveStep + 1;
//       navigateToStep(nextStep);
//       return nextStep;
//     });
//   };

//   const handleBack = () => {
//     setCurrentStep((prevActiveStep) => {
//       const prevStep = prevActiveStep - 1;
//       navigateToStep(prevStep);
//       return prevStep;
//     });
//   };

//   const navigateToStep = (index) => {
//     if (index === 0) navigate("/preliminary");
//     else if (index === 1) navigate("/yourdetails");
//     else if (index === 2) navigate("/kyc");
//     else if (index === 3) navigate("/parties");
//     else if (index === 5) navigate("/review");
//     else if (index === 6) navigate("/payment");
//     else navigate("/");
//   };

//   const handleStepClick = (index) => {
//     setCurrentStep(index);
//     navigateToStep(index);
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
//       <Box
//         display="flex"
//         alignItems="center"
//         justifyContent="space-between"
//         sx={{
//           width: "100%",
//           padding: { xs: "0 20px", sm: "0 30px" },
//           flexWrap: "wrap",
//         }}
//       >
//         {steps.map((step, index) => {
//           const isCompleted = index < currentStep;
//           const isActive = index === currentStep;

//           return (
//             <Box
//               key={index}
//               display="flex"
//               flexDirection="column"
//               alignItems="center"
//               justifyContent="center"
//               flex={1}
//               onClick={() => handleStepClick(index)} // Navigate on click
//               sx={{
//                 cursor: "pointer", // Pointer cursor for interactivity
//               }}
//             >
//               {/* Step Number */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Typography fontWeight="bold" fontSize="22px" mr={1}>
//                   0{index + 1}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   fontWeight={isActive ? "bold" : "normal"}
//                   color={isCompleted || isActive ? "#000" : "gray"}
//                   sx={{
//                     fontSize: { xs: "12px", sm: "14px" },
//                   }}
//                 >
//                   {step.label}
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   alignContent: "center",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   width: "100%",
//                 }}
//               >
//                 {index === 0 ? (
//                   <Box
//                     flex={1}
//                     height="3px"
//                     mx={1}
//                     sx={{
//                       backgroundColor: isCompleted
//                         ? "#1a73e8"
//                         : isActive
//                         ? "#1a73e8"
//                         : "#e0e0e0",
//                       borderStyle: isActive ? "dotted" : "solid",
//                       display: { xs: "none", sm: "block" },
//                       width: "100%",
//                       m: 0,
//                       p: 0,
//                       visibility: "hidden",
//                     }}
//                   />
//                 ) : (
//                   <StepLine isCompleted={isCompleted} isActive={isActive} />
//                 )}
//                 <Box
//                   sx={{
//                     width: { xs: 28, sm: 32 },
//                     height: { xs: 28, sm: 32 },
//                     borderRadius: "50%",
//                     backgroundColor: isCompleted
//                       ? "#1a73e8"
//                       : isActive
//                       ? "#fff"
//                       : "#f0f0f0",
//                     border: isActive ? "2px solid #1a73e8" : "none",
//                     color: isCompleted ? "#fff" : "#000",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontWeight: "bold",
//                     fontSize: { xs: "12px", sm: "14px" },
//                     marginLeft: 1,
//                     marginRight: 1,
//                   }}
//                 >
//                   {isCompleted ? "✔" : index + 1}
//                 </Box>
//                 {index === 6 ? (
//                   <Box
//                     flex={1}
//                     height="3px"
//                     mx={1}
//                     sx={{
//                       backgroundColor: isCompleted
//                         ? "#1a73e8"
//                         : isActive
//                         ? "#1a73e8"
//                         : "#e0e0e0",
//                       borderStyle: isActive ? "dotted" : "solid",
//                       display: { xs: "none", sm: "block" },
//                       width: "100%",
//                       m: 0,
//                       p: 0,
//                       visibility: "hidden",
//                     }}
//                   />
//                 ) : (
//                   <StepLine isCompleted={isCompleted} isActive={isActive} />
//                 )}
//               </Box>
//               {/* Step Label */}
//               <Box ml={1} textAlign="center">
//                 {step.time && (
//                   <Typography
//                     variant="caption"
//                     color="gray"
//                     sx={{ fontSize: { xs: "10px", sm: "12px" } }}
//                   >
//                     {step.time}
//                   </Typography>
//                 )}
//               </Box>
//             </Box>
//           );
//         })}
//       </Box>

//       <MobileStepper
//         variant="dots"
//         steps={steps.length}
//         position="static"
//         activeStep={currentStep}
//         sx={{ maxWidth: 400, flexGrow: 1 }}
//         nextButton={
//           <Button size="small" onClick={handleNext} disabled={currentStep === steps.length - 1}>
//             Next
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={currentStep === 0}>
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//   );
// };

// export default function App() {
//   const steps = [
//     { label: "Preliminary", time: "Approx 5 Min" },
//     { label: "Your Details", time: "Approx 5 Min" },
//     { label: "KYC", time: "Approx 5 Min" },
//     { label: "Parties", time: "Approx 5 Min" },
//     { label: "Claim", time: "Approx 5 Min" },
//     { label: "Review", time: "Approx 5 Min" },
//     { label: "Payment", time: "Approx 5 Min" },
//   ];

//   return (
//     <Box p={3}>
//       <ProgressBar steps={steps} initialStep={4} />
//     </Box>
//   );
// }
import React, { useState } from "react";
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import StepLine from "../commonPages/StepLine"; // Ensure StepLine is implemented correctly
import { useNavigate } from "react-router-dom";
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const ProgressBar = ({ steps, initialStep }) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small

  const handleNext = () => {
    setCurrentStep((prevActiveStep) => {
      const nextStep = prevActiveStep + 1;
      navigateToStep(nextStep);
      return nextStep;
    });
  };

  const handleBack = () => {
    setCurrentStep((prevActiveStep) => {
      const prevStep = prevActiveStep - 1;
      navigateToStep(prevStep);
      return prevStep;
    });
  };

  const navigateToStep = (index) => {
    if (index === 0) navigate("/preliminary");
    else if (index === 1) navigate("/yourdetails");
    else if (index === 2) navigate("/kyc");
    else if (index === 3) navigate("/parties");
    else if (index === 5) navigate("/review");
    else if (index === 6) navigate("/payment");
    else navigate("/");
  };

  const handleStepClick = (index) => {
    setCurrentStep(index);
    navigateToStep(index);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      {/* Conditionally render ProgressBar for larger screens */}
      {!isSmallScreen && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: "100%",
            padding: { xs: "0 20px", sm: "0 30px" },
            flexWrap: "wrap",
          }}
        >
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;

            return (
              <Box
                key={index}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                flex={1}
                onClick={() => handleStepClick(index)} // Navigate on click
                sx={{
                  cursor: "pointer", // Pointer cursor for interactivity
                }}
              >
                {/* Step Number */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography fontWeight="bold" fontSize="22px" mr={1}>
                    0{index + 1}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={isActive ? "bold" : "normal"}
                    color={isCompleted || isActive ? "#000" : "gray"}
                    sx={{
                      fontSize: { xs: "12px", sm: "14px" },
                    }}
                  >
                    {step.label}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {index === 0 ? (
                    <Box
                      flex={1}
                      height="3px"
                      mx={1}
                      sx={{
                        backgroundColor: isCompleted
                          ? "#1a73e8"
                          : isActive
                          ? "#1a73e8"
                          : "#e0e0e0",
                        borderStyle: isActive ? "dotted" : "solid",
                        display: { xs: "none", sm: "block" },
                        width: "100%",
                        m: 0,
                        p: 0,
                        visibility: "hidden",
                      }}
                    />
                  ) : (
                    <StepLine isCompleted={isCompleted} isActive={isActive} />
                  )}
                  <Box
                    sx={{
                      width: { xs: 28, sm: 32 },
                      height: { xs: 28, sm: 32 },
                      borderRadius: "50%",
                      backgroundColor: isCompleted
                        ? "#1a73e8"
                        : isActive
                        ? "#fff"
                        : "#f0f0f0",
                      border: isActive ? "2px solid #1a73e8" : "none",
                      color: isCompleted ? "#fff" : "#000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: { xs: "12px", sm: "14px" },
                      marginLeft: 1,
                      marginRight: 1,
                    }}
                  >
                    {isCompleted ? "✔" : index + 1}
                  </Box>
                  {index === 6 ? (
                    <Box
                      flex={1}
                      height="3px"
                      mx={1}
                      sx={{
                        backgroundColor: isCompleted
                          ? "#1a73e8"
                          : isActive
                          ? "#1a73e8"
                          : "#e0e0e0",
                        borderStyle: isActive ? "dotted" : "solid",
                        display: { xs: "none", sm: "block" },
                        width: "100%",
                        m: 0,
                        p: 0,
                        visibility: "hidden",
                      }}
                    />
                  ) : (
                    <StepLine isCompleted={isCompleted} isActive={isActive} />
                  )}
                </Box>
                {/* Step Label */}
                <Box ml={1} textAlign="center">
                  {step.time && (
                    <Typography
                      variant="caption"
                      color="gray"
                      sx={{ fontSize: { xs: "10px", sm: "12px" } }}
                    >
                      {step.time}
                    </Typography>
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>
      )}

      {/* Conditionally render MobileStepper for smaller screens */}
      {isSmallScreen && (
        <MobileStepper
          variant="dots"
          steps={steps.length}
          position="static"
          activeStep={currentStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={currentStep === steps.length - 1}>
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={currentStep === 0}>
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      )}
    </Box>
  );
};

export default function App() {
  const steps = [
    { label: "Preliminary", time: "Approx 5 Min" },
    { label: "Your Details", time: "Approx 5 Min" },
    { label: "KYC", time: "Approx 5 Min" },
    { label: "Parties", time: "Approx 5 Min" },
    { label: "Claim", time: "Approx 5 Min" },
    { label: "Review", time: "Approx 5 Min" },
    { label: "Payment", time: "Approx 5 Min" },
  ];

  return (
    <Box p={3}>
      <ProgressBar steps={steps} initialStep={4} />
    </Box>
  );
}
