// import React from "react";
// import { CssBaseline, Box } from "@mui/material";
// import Sidebar from "./components/leftBox/Sidebar";
// import ProgressBar from "./components/RightBox/ProgressBar";
// import ClaimForm from "./components/RightBox/ClaimForm";
// import Header from "./components/RightBox/Header";

// import Dashboard from '@mui/icons-material/DashboardOutlined';
// import BusinessCenterOutlinedIcon from '@mui/icons-material/FolderOutlined';
// import AlignVerticalCenterOutlinedIcon from '@mui/icons-material/TimelineOutlined';
// import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
// import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
// import VolunteerActivismOutlinedIcon from '@mui/icons-material/GavelOutlined';


// const menuItems = [
//   { text: "Dashboard", icon: <Dashboard /> },
//   { text: "My Cases", icon: <BusinessCenterOutlinedIcon /> },
//   { text: "Activities", icon: <AlignVerticalCenterOutlinedIcon /> },
//   { text: "Calendar", icon: <CalendarMonthOutlinedIcon /> },
//   { text: "Files", icon: <DescriptionOutlinedIcon /> },
//   { text: "Open a Dispute", icon: <VolunteerActivismOutlinedIcon /> },
// ];

// const topImage = { src: "/jur.png", alt: "Jur" };
// const bottomImage = { src: "/law1.png", alt: "Get Justice" };

// const App = () => {
//   return (
//     <>
//       <CssBaseline />
//       <Box sx={{ display: "flex" }}>
//         {/* Sidebar */}
//         <Sidebar menuItems={menuItems} topImage={topImage} bottomImage={bottomImage} />
        
//         {/* Main Content */}
//         <Box sx={{ flexGrow: 1, padding: 3 }}>
//           {/* <Header /> */}
//           <ProgressBar currentStep={4} />
//           <ClaimForm />
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default App;


// // const App = () => {
// //   return (
//     // <Box sx={{ display: "flex", height: "100vh" }}>
//     //   <Header/>
//     //   <Box sx={{ flexGrow: 1, padding: 3 }}>
//     //     <ProgressBar
//     //      currentStep={4} />
//     //     <ClaimForm />
//     //   </Box>
//     // </Box>
// //   );
// // };

// // export default App;
import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LeftContainer from "./pages/left";
import RightContainer from "./pages/right";
import Dashboard from '@mui/icons-material/DashboardOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AlignVerticalCenterOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/GavelOutlined';

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleDrawer = () => {
    setOpenSidebar(!openSidebar);
  };

  const menuItems = [
    { text: "Dashboard", icon: <Dashboard /> },
    { text: "My Cases", icon: <BusinessCenterOutlinedIcon /> },
    { text: "Activities", icon: <AlignVerticalCenterOutlinedIcon /> },
    { text: "Calendar", icon: <CalendarMonthOutlinedIcon /> },
    { text: "Files", icon: <DescriptionOutlinedIcon /> },
    { text: "Open a Dispute", icon: <VolunteerActivismOutlinedIcon /> },
  ];

  const topImage = { src: "/jur.png", alt: "Jur" };
  const bottomImage = { src: "/law1.png", alt: "Get Justice" };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
        }}
      >
        <LeftContainer
          open={openSidebar}
          toggleDrawer={toggleDrawer}
          topImage={topImage}
          bottomImage={bottomImage}
          menuItems={menuItems}
        />
        <Box sx={{ flexGrow: 1 }}>
          <RightContainer toggleDrawer={toggleDrawer} />
        </Box>
      </Box>
    </>
  );
};

export default App;
