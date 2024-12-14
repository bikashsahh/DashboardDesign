// // import React, { useState } from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// // import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// // import { Box, Badge, Menu, MenuItem, List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

// // const Header = () => {
// //   // Dummy state for notifications and profile menu
// //   const [notifications, setNotifications] = useState([
// //     "New message from Admin",
// //     "Update your profile",
// //     "Reminder: Meeting at 3 PM",
// //   ]); // Dummy notifications
// //   const [anchorElNotifications, setAnchorElNotifications] = useState(null);
// //   const [anchorElProfile, setAnchorElProfile] = useState(null);

// //   // Handlers for notifications menu
// //   const handleNotificationsOpen = (event) => setAnchorElNotifications(event.currentTarget);
// //   const handleNotificationsClose = () => setAnchorElNotifications(null);

// //   // Handlers for profile menu
// //   const handleProfileOpen = (event) => setAnchorElProfile(event.currentTarget);
// //   const handleProfileClose = () => setAnchorElProfile(null);

// //   return (
// //     <AppBar 
// //     position="fixed" 
// //     color="default" 
// //     elevation={0} 
// //     sx={{ alignItems: 'flex-start', paddingLeft: 2, marginBottom : 10 }}
// //   >
// //     {/* <AppBar
// //       position="static"
// //     //   color="primary"
// //     //   elevation={3}
// //       sx={{
// //         paddingLeft: 2,
// //         backgroundColor: "white", // Modern dark color
// //       }}
// //     > */}
// //       <Toolbar sx={{ minHeight: 'auto', width: '100%' }}>
// //         {/* Logo Section */}
// //         <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
// //           <img
// //             src="/jur.png" // Replace with the actual path to your logo
// //             alt="Logo"
// //             style={{ marginRight: 8, height: 30 }} // Adjust height as needed
// //           />
// //           {/* <Typography variant="h6" sx={{ color: '#FFFFFF' }}>
// //             My Dashboard
// //           </Typography> */}
// //         </Box>

// //         {/* Icons Section */}
// //         <Box sx={{ display: 'flex', alignItems: 'center' }}>
// //           {/* Notifications Icon with Badge */}
// //           <IconButton
// //             sx={{
// //               color: '#1e88e5',
// //               '&:hover': { color: 'blue' }, // Hover effect
// //             }}
// //             onClick={handleNotificationsOpen}
// //           >
// //             <Badge badgeContent={notifications.length} color="error">
// //               <NotificationsOutlinedIcon />
// //             </Badge>
// //           </IconButton>

// //           <Menu
// //             anchorEl={anchorElNotifications}
// //             open={Boolean(anchorElNotifications)}
// //             onClose={handleNotificationsClose}
// //             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
// //             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
// //           >
// //             <List>
// //               {notifications.map((notification, index) => (
// //                 <ListItem key={index} divider>
// //                   <ListItemText primary={notification} />
// //                 </ListItem>
// //               ))}
// //             </List>
// //             <MenuItem onClick={handleNotificationsClose} sx={{ justifyContent: 'center', fontWeight: 'bold' }}>
// //               Clear All
// //             </MenuItem>
// //           </Menu>

// //           {/* Account Icon with Menu */}
// //           <IconButton
// //             sx={{
// //               color: '#1e88e5',
// //               '&:hover': { color: 'blue' }, // Hover effect
// //             }}
// //             onClick={handleProfileOpen}
// //           >
// //             <AccountCircleOutlinedIcon />
// //           </IconButton>

// //           <Menu
// //             anchorEl={anchorElProfile}
// //             open={Boolean(anchorElProfile)}
// //             onClose={handleProfileClose}
// //             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
// //             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
// //           >
// //             <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
// //             <MenuItem onClick={handleProfileClose}>Settings</MenuItem>
// //             <Divider />
// //             <MenuItem onClick={handleProfileClose} sx={{ color: 'red' }}>
// //               Logout
// //             </MenuItem>
// //           </Menu>
// //         </Box>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Header;
// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Badge,
//   Menu,
//   MenuItem,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   Box,
//   Typography,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// const Header = ({ toggleDrawer }) => {
//   // State for notifications and profile menu
//   const [notifications] = useState([
//     'New message from Admin',
//     'Update your profile',
//     'Reminder: Meeting at 3 PM',
//   ]); // Dummy notifications
//   const [anchorElNotifications, setAnchorElNotifications] = useState(null);
//   const [anchorElProfile, setAnchorElProfile] = useState(null);

//   // Handlers for notifications menu
//   const handleNotificationsOpen = (event) =>
//     setAnchorElNotifications(event.currentTarget);
//   const handleNotificationsClose = () => setAnchorElNotifications(null);

//   // Handlers for profile menu
//   const handleProfileOpen = (event) => setAnchorElProfile(event.currentTarget);
//   const handleProfileClose = () => setAnchorElProfile(null);

//   return (
//     <AppBar
//       position="fixed"
//       color="default"
//       elevation={0}
//       sx={{ alignItems: 'flex-start', paddingLeft: 2, zIndex: 1201 }}
//     >
//       <Toolbar sx={{ minHeight: 'auto', width: '100%' }}>
//         {/* Left Section: Drawer Toggle */}
//         <IconButton
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           onClick={() => toggleDrawer(true)} // Triggering the drawer
//           sx={{ marginRight: 2 }}
//         >
//           <MenuIcon />
//         </IconButton>

//         {/* Logo Section */}
//         <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//           <img
//             src="/jur.png" // Replace with your actual logo path
//             alt="Logo"
//             style={{
//               height: 30,
//             }}
//           />
//         </Box>

//         {/* Right Section: Notifications & Profile */}
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           {/* Notifications Icon */}
//           <IconButton
//             sx={{
//               color: '#1e88e5',
//               '&:hover': { color: 'blue' }, // Hover effect
//             }}
//             onClick={handleNotificationsOpen}
//           >
//             <Badge badgeContent={notifications.length} color="error">
//               <NotificationsOutlinedIcon />
//             </Badge>
//           </IconButton>

//           <Menu
//             anchorEl={anchorElNotifications}
//             open={Boolean(anchorElNotifications)}
//             onClose={handleNotificationsClose}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//           >
//             <List>
//               {notifications.map((notification, index) => (
//                 <ListItem key={index} divider>
//                   <ListItemText primary={notification} />
//                 </ListItem>
//               ))}
//             </List>
//             <MenuItem
//               onClick={handleNotificationsClose}
//               sx={{ justifyContent: 'center', fontWeight: 'bold' }}
//             >
//               Clear All
//             </MenuItem>
//           </Menu>

//           {/* Profile Icon */}
//           <IconButton
//             sx={{
//               color: '#1e88e5',
//               '&:hover': { color: 'blue' }, // Hover effect
//             }}
//             onClick={handleProfileOpen}
//           >
//             <AccountCircleOutlinedIcon />
//           </IconButton>

//           <Menu
//             anchorEl={anchorElProfile}
//             open={Boolean(anchorElProfile)}
//             onClose={handleProfileClose}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//           >
//             <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
//             <MenuItem onClick={handleProfileClose}>Settings</MenuItem>
//             <Divider />
//             <MenuItem onClick={handleProfileClose} sx={{ color: 'red' }}>
//               Logout
//             </MenuItem>
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import {
//   Box,
//   Badge,
//   Menu,
//   MenuItem,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   Typography,
// } from "@mui/material";

// const Header = () => {
//   // Dummy state for notifications and profile menu
//   const [notifications, setNotifications] = useState([
//     "New message from Admin",
//     "Update your profile",
//     "Reminder: Meeting at 3 PM",
//   ]); // Dummy notifications
//   const [anchorElNotifications, setAnchorElNotifications] = useState(null);
//   const [anchorElProfile, setAnchorElProfile] = useState(null);

//   // Handlers for notifications menu
//   const handleNotificationsOpen = (event) => setAnchorElNotifications(event.currentTarget);
//   const handleNotificationsClose = () => setAnchorElNotifications(null);

//   // Handlers for profile menu
//   const handleProfileOpen = (event) => setAnchorElProfile(event.currentTarget);
//   const handleProfileClose = () => setAnchorElProfile(null);

//   return (
//     <AppBar
//       position="fixed"
//       color="default"
//       elevation={0}
//       sx={{
//         paddingX: 2, // Add some horizontal padding
//         backgroundColor: "black",
//         boxShadow: "none",
    
//         marginBottom:"500",
//         // boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Light shadow for modern feel

//       }}
//     >
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           minHeight: 64, // Consistent height
//         }}
//       >
//         {/* Left Section: Logo */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           {/* <img */}
//             {/* // src="/jur.png" // Replace with your logo path
//             // alt="Logo"
//             // style={{ height: 40, marginRight: 8 }} // Adjust logo size */}
//           {/* /> */}
//           <Typography
//             variant="h6"
//             sx={{ color: "#1e88e5", fontWeight: "bold" }}
//           >
//             {/* Dashboard */}
//           </Typography>
//         </Box>

//         {/* Right Section: Notifications and Profile */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent : "",
//             gap: 2, // Spacing between icons
//           }}
//         >
//           {/* Notifications Icon */}
//           <IconButton
//             sx={{
//               color: "#1e88e5",
//               "&:hover": { color: "blue" }, // Hover effect
//             }}
//             onClick={handleNotificationsOpen}
//           >
//             <Badge badgeContent={notifications.length} color="error">
//               <NotificationsOutlinedIcon />
//             </Badge>
//           </IconButton>

//           {/* Notifications Menu */}
//           <Menu
//             anchorEl={anchorElNotifications}
//             open={Boolean(anchorElNotifications)}
//             onClose={handleNotificationsClose}
//             anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//             transformOrigin={{ vertical: "top", horizontal: "right" }}
//           >
//             <List>
//               {notifications.map((notification, index) => (
//                 <ListItem key={index} divider>
//                   <ListItemText primary={notification} />
//                 </ListItem>
//               ))}
//             </List>
//             <MenuItem
//               onClick={() => {
//                 setNotifications([]); // Clear notifications
//                 handleNotificationsClose();
//               }}
//               sx={{ justifyContent: "center", fontWeight: "bold" }}
//             >
//               Clear All
//             </MenuItem>
//           </Menu>

//           {/* Profile Icon */}
//           <IconButton
//             sx={{
//               color: "#1e88e5",
//               "&:hover": { color: "blue" }, // Hover effect
//             }}
//             onClick={handleProfileOpen}
//           >
//             <AccountCircleOutlinedIcon />
//           </IconButton>

//           {/* Profile Menu */}
//           <Menu
//             anchorEl={anchorElProfile}
//             open={Boolean(anchorElProfile)}
//             onClose={handleProfileClose}
//             anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//             transformOrigin={{ vertical: "top", horizontal: "right" }}
//           >
//             <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
//             <MenuItem onClick={handleProfileClose}>Settings</MenuItem>
//             <Divider />
//             <MenuItem onClick={handleProfileClose} sx={{ color: "red" }}>
//               Logout
//             </MenuItem>
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography, Badge, Popover, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Header = ({ toggleDrawer }) => {
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget); // Open notification popup
  };

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget); // Open profile popup
  };

  const handleCloseNotification = () => {
    setNotificationAnchorEl(null); // Close notification popup
  };

  const handleCloseProfile = () => {
    setProfileAnchorEl(null); // Close profile popup
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "none",
        marginBottom: -3,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
          sx={{
            mr: 2,
            display: { xs: "block", sm: "none" }, // Show on mobile only
          }}
        >
          <MenuIcon
            sx={{
              color: "#1784ff",
            }}
          />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} /> {/* Takes up all available space to push icons to the right */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Align icons and text vertically
            width: "auto",
          }}
        >
          {/* Notification Icon with a Badge for count */}
          <IconButton onClick={handleNotificationClick} sx={{ mr: 1 }}>
            <Badge color="secondary" badgeContent={5} variant="dot" invisible={false}>
              <NotificationsNoneOutlinedIcon sx={{ color: "#1e83ff" }} />
            </Badge>
          </IconButton>

          {/* Profile Icon with Name */}
          <IconButton onClick={handleProfileClick} sx={{ mr: 1 }}>
            <PersonOutlineOutlinedIcon sx={{ color: "#1e83ff" }} />
          </IconButton>
          
        </Box>

        {/* Notification Popover */}
        <Popover
          open={Boolean(notificationAnchorEl)}
          anchorEl={notificationAnchorEl}
          onClose={handleCloseNotification}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Notifications
            </Typography>
            <Typography variant="body2">You have 5 new notifications.</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Dummy notification 1.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Dummy notification 2.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Dummy notification 3.
            </Typography>
          </Paper>
        </Popover>

        {/* Profile Popover */}
        <Popover
          open={Boolean(profileAnchorEl)}
          anchorEl={profileAnchorEl}
          onClose={handleCloseProfile}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Profile
            </Typography>
            <Typography variant="body2">Name: John Doe</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Email: johndoe@example.com
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Role: Admin
            </Typography>
          </Paper>
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
