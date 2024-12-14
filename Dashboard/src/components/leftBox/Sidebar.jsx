// // import React, { useState } from 'react';
// // import {
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemIcon,
// //   ListItemText,
// //   Typography,
// //   Box,
// //   IconButton,
// //   useMediaQuery,
// //   useTheme
// // } from '@mui/material';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import CloseIcon from '@mui/icons-material/Close';
// // import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
// // import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
// // import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
// // import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
// // import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
// // import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';

// // const Sidebar = () => {
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
// //   const [mobileOpen, setMobileOpen] = useState(false);

// //   const menuItems = [
// //     { text: 'Dashboard', icon: <DashboardOutlinedIcon /> },
// //     { text: 'My Cases', icon: <FolderOutlinedIcon /> },
// //     { text: 'Activities', icon: <TimelineOutlinedIcon /> },
// //     { text: 'Calendar', icon: <CalendarTodayOutlinedIcon /> },
// //     { text: 'Files', icon: <DescriptionOutlinedIcon /> },
// //     { text: 'Open a Dispute', icon: <GavelOutlinedIcon /> }
// //   ];

// //   const handleDrawerToggle = () => {
// //     setMobileOpen(!mobileOpen);
// //   };

// //   const drawerWidth = 250;

// //   const drawerContent = (
// //     <>
// //       <Box
// //         sx={{
// //           padding: 2,
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'space-between'
// //         }}
// //       >
// //        <Box
// //           component="img"
// //           src="/jur.png"
// //           // alt="Justice Illustration"
// //           sx={{
// //             width: '60%',
// //             marginTop: -2,
// //             marginLeft : 5,
// //             borderRadius: '5%'
// //           }}
// //         />
// //         {isMobile && (
// //           <IconButton
// //             edge="end"
// //             color="inherit"
// //             onClick={handleDrawerToggle}
// //             sx={{ color: '#000000' }}
// //           >
// //             {/* <CloseIcon /> */}
// //           </IconButton>
// //         )}
// //       </Box>
// //       <List>
// //         {menuItems.map((item, index) => (
// //           <ListItem
// //             button
// //             key={index}
// //             sx={{
// //               '&:hover': {
// //                 backgroundColor: '#f0f0f0',
// //                 color: '#000000'
// //               },
// //               padding: '12px 20px'
// //             }}
// //           >
// //             <ListItemIcon sx={{ color: '#1e88e5' }}>{item.icon}</ListItemIcon>
// //             <ListItemText
// //               primary={item.text}
// //               primaryTypographyProps={{
// //                 fontSize: '1rem',
// //                 color: '#000000',
// //                 fontFamily: 'Arial, sans-serif',
// //                 fontWeight: '500'
// //               }}
// //             />
// //           </ListItem>
// //         ))}
// //       </List>
// //       <Box
// //         sx={{
// //           padding: 2,
// //           marginTop: '5',
// //           textAlign: 'center'
// //         }}
// //       >
       
// //         <Box
// //           component="img"
// //           src="/law1.png"
// //           alt="Justice Illustration"
// //           sx={{
// //             width: '100%',
// //             marginTop: 2,
// //             borderRadius: '5%'
// //           }}
// //         />
// //       </Box>
// //     </>
// //   );

// //   return (
// //     <>
// //       {isMobile && (
// //         <IconButton
// //           color="inherit"
// //           aria-label="open drawer"
// //           edge="start"
// //           onClick={handleDrawerToggle}
// //           sx={{
// //             position: 'fixed',
// //             top: 10,
// //             left: 10,
// //             zIndex: theme.zIndex.drawer + 1,
// //             color: '#1e88e5'
// //           }}
// //         >
// //           <MenuIcon />
// //         </IconButton>
// //       )}

// //       <Drawer
// //         variant={isMobile ? 'temporary' : 'permanent'}
// //         open={isMobile ? mobileOpen : true}
// //         onClose={handleDrawerToggle}
// //         ModalProps={{ keepMounted: true }}
// //         sx={{
// //           width: drawerWidth,
// //           flexShrink: 0,
// //           [`& .MuiDrawer-paper`]: {
// //             width: drawerWidth,
// //             boxSizing: 'border-box',
// //             background: '#ffffff',
// //             color: '#000000',
// //             height: '100%',
// //             position: 'fixed'
// //           }
// //         }}
// //       >
// //         {drawerContent}
// //       </Drawer>
// //     </>
// //   );
// // };

// // export default Sidebar;

// import React from "react";
// import { Box, List, ListItem, ListItemText, styled } from "@mui/material";

// const IconImg = styled('img')({
//   width: 160,
//   height: 100,
//   display: 'block',
//   margin: 'auto',
//   marginTop: 0,
//   padding: 0,
//   marginBottom: 10,
// });

// const Img = styled('img')({
//   width: 200,
//   height: 300,
//   display: 'block',
//   margin: 'auto',
//   marginTop : 40,
//   marginBottom: 20,
//   borderRadius: "5%"
// });

// const Sidebar = ({ menuItems, topImage, bottomImage }) => {
//   return (
//     <Box
//       sx={{
//         width: 240,
//         backgroundColor: "#fff",
//         height: "100vh",
//         padding: 2,
//         boxShadow: "none",
//       }}
//     >
//       {topImage && <IconImg src={topImage.src} alt={topImage.alt} />}
//       <List>
//         {menuItems.map((item, index) => (
//           <ListItem button key={index}>
//             {item.icon && React.cloneElement(item.icon, { sx: { color: "#84b2e3" } })}
//             <ListItemText
//               primary={item.text}
//               primaryTypographyProps={{
//                 sx: {
//                   ml: 2,
//                   color: "#7a90a9",
//                   fontWeight: "bold",
//                 },
//               }}
//             />
//           </ListItem>
//         ))}
//       </List>
//       {bottomImage && <Img src={bottomImage.src} alt={bottomImage.alt} />}
//     </Box>
//   );
// };

// export default Sidebar;
import React from "react";
import { Box, List, ListItem, ListItemText, styled } from "@mui/material";
import { Dashboard } from "@mui/icons-material";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AlignVerticalCenterOutlinedIcon from "@mui/icons-material/AlignVerticalCenterOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";

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
