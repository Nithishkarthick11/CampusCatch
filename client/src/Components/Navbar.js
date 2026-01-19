import React, { useState } from "react";
import { setConstraint } from "../constraints";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const token = window.localStorage.getItem("token");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttonStyle = {
    fontSize: "16px",
    fontWeight: 600,
    textTransform: "none",
    color: "white",
    px: 1.2,
    borderRadius: "12px",
    position: "relative",
    transition: "0.25s",

    "&:hover": {
      background: "rgba(255,255,255,0.10)",
      transform: "translateY(-1px)",
    },

    "&::after": {
      content: '""',
      position: "absolute",
      left: "20%",
      bottom: "5px",
      width: "0%",
      height: "2px",
      background: "linear-gradient(90deg, #A855F7, #22D3EE)",
      transition: "0.25s",
      borderRadius: "20px",
    },

    "&:hover::after": {
      width: "60%",
    },
  };

  const signout = () => {
    setConstraint(false);
    console.log("Signed out !");
    localStorage.clear();
    window.location.href = "/log-in";
  };

  return (
    // ✅ OUTER WRAPPER (Sticky + Blur)
    <Stack
      width="100%"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        backdropFilter: "blur(14px)",
        background: "rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.18)",
        px: { xs: 1, sm: 2 },
        py: 1.2,
      }}
    >
      {/* ✅ INNER NAVBAR BOX */}
      <Stack
        width="100%"
        maxWidth="1440px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={{ xs: 3, sm: 5, md: 5 }}
        zIndex={20}
        gap={1}
     sx={{
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.50)",
  backgroundColor: "#000000",
}}
      >
       
        <Link to="/">
          <Stack maxWidth="180px">
            <img src="favicon.png" alt="logo" width="100%" />
          </Stack>
        </Link>

        {/* ✅ NAV LINKS */}
        <Stack
          direction="row"
          gap={"22px"}
          display={{ xs: "none", md: "flex" }}
          alignItems="center"
        >
          {/* HOME */}
          <motion.div
            whileHover={{ scale: [null, 1.05, 1.05] }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button component={Link} to="/" sx={buttonStyle} disableRipple>
              Home
            </Button>
          </motion.div>

          {/* ITEMS BROWSER DROPDOWN */}
          <Stack>
            <motion.div
              whileHover={{ scale: [null, 1.05, 1.05] }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={buttonStyle}
                endIcon={<BsFillCaretDownFill size="13px" />}
                disableRipple
              >
                Items Browser
              </Button>
            </motion.div>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                sx: {
                  mt: 1,
                  borderRadius: "16px",
                  background: "rgba(0,0,0,0.85)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "white",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
                  overflow: "hidden",
                },
              }}
            >
              <MenuItem
                component={Link}
                to={token ? "/LostItems" : "/log-in"}
                onClick={handleClose}
                sx={{
                  color: "white",
                  "&:hover": {
                    background: "rgba(255,255,255,0.10)",
                  },
                }}
              >
                Lost Items
              </MenuItem>

              <MenuItem
                component={Link}
                to={token ? "/FoundItems" : "/log-in"}
                onClick={handleClose}
                sx={{
                  color: "white",
                  "&:hover": {
                    background: "rgba(255,255,255,0.10)",
                  },
                }}
              >
                Found Items
              </MenuItem>
            </Menu>
          </Stack>

          {/* ONLY WHEN LOGGED IN */}
          {token && (
            <>
              {/* POST ITEM */}
              <motion.div
                whileHover={{ scale: [null, 1.05, 1.05] }}
                transition={{ duration: 0.3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  component={Link}
                  to="/postitem"
                  sx={buttonStyle}
                  disableRipple
                >
                  Post Item
                </Button>
              </motion.div>

              {/* MY LISTINGS */}
              <motion.div
                whileHover={{ scale: [null, 1.05, 1.05] }}
                transition={{ duration: 0.3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  component={Link}
                  to="/mylistings"
                  sx={buttonStyle}
                  disableRipple
                >
                  My Listings
                </Button>
              </motion.div>
            </>
          )}
        </Stack>

        {/* ✅ RIGHT SIDE BUTTONS */}
        <Stack direction="row" gap={1.2} alignItems="center">
          {token ? (
            <motion.div whileTap={{ scale: 0.97 }}>
              <Button
                variant="contained"
                onClick={signout}
                sx={{
                  textTransform: "none",
                  px: "22px",
                  borderRadius: "14px",
                  fontWeight: 700,
                  display: { xs: "none", md: "flex" },
                  background: "linear-gradient(90deg, #EF4444, #F97316)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  "&:hover": {
                    opacity: 0.95,
                    transform: "translateY(-1px)",
                  },
                }}
                size="small"
                disableRipple
              >
                Logout
              </Button>
            </motion.div>
          ) : (
            <Stack direction="row" gap={"14px"} display={{ xs: "none", md: "flex" }}>
              {/* LOGIN */}
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/log-in"
                  sx={{
                    textTransform: "none",
                    px: "22px",
                    borderRadius: "14px",
                    fontWeight: 700,
                    background: "linear-gradient(90deg, #A855F7, #22D3EE)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                    "&:hover": {
                      opacity: 0.95,
                      transform: "translateY(-1px)",
                    },
                  }}
                  size="small"
                  disableRipple
                >
                  Login
                </Button>
              </motion.div>

              {/* SIGNUP */}
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/sign-up"
                  sx={{
                    textTransform: "none",
                    px: "22px",
                    borderRadius: "14px",
                    fontWeight: 700,
                    background: "linear-gradient(90deg, #F97316, #EC4899)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                    "&:hover": {
                      opacity: 0.95,
                      transform: "translateY(-1px)",
                    },
                  }}
                  size="small"
                  disableRipple
                >
                  Sign Up
                </Button>
              </motion.div>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Navbar;