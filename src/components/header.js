import {
  ThemeProvider,
  createMuiTheme,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { useMediaQuery } from "react-responsive";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

const Header = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
    },
  });
  const desktopStyle = {
    backgroundColor: "#0D2A2A",
    color: "white",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  };
  const mobileStyle = {
    backgroundColor: "#0D2A2A",
    color: "white",
    padding: "2rem",
    display: "flex",
    fontSize: "1.4rem",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  };
  const mobileLinkStyle = {
    fontSize: "1rem",
    color: "white",
    textDecoration: "none",
    fontWeight: "light",
    marginTop: "1rem",
  };
  const desktopLinkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "light",
  };
  return (
    <Router basename="/">
      <div style={isDesktop ? desktopStyle : mobileStyle}>
        <ThemeProvider theme={theme}>
          <Typography
            style={
              isDesktop
                ? { fontSize: "1.4rem" }
                : { fontSize: "1.4rem", fontWeight: "bold" }
            }
            variant="h5"
          >
            <Link style={desktopLinkStyle} to="/">
              Shafin Murani
            </Link>
          </Typography>
          <Link style={isDesktop ? desktopLinkStyle : mobileLinkStyle} to="/">
            Home
          </Link>
          <Link
            style={isDesktop ? desktopLinkStyle : mobileLinkStyle}
            to="about"
          >
            About me
          </Link>
          <Link
            style={isDesktop ? desktopLinkStyle : mobileLinkStyle}
            to="contact"
          >
            Contact me
          </Link>
        </ThemeProvider>
      </div>
      <RouteManager />
    </Router>
  );
};

const RouteManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default Header;
