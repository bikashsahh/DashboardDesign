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
            <Typography variant="body2">Name: Bikash Sah</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Email: bikashsah2k25@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Role: Web Admin
            </Typography>
          </Paper>
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
