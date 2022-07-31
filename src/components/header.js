import {
  ThemeProvider,
  createMuiTheme,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Stack,
  IconButton,
  Paper,
} from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { useMediaQuery } from "react-responsive";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import { Menu, MenuItem } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const routes = [
  { name: "Home", path: "/" },
  { name: "About me", path: "/about" },
  { name: "Contact Me", path: "/contact" },
];
const Header = () => {
  const [itterator, setItterator] = React.useState(0);
  const [value, setValue] = React.useState("Home");
  const pathName = window.location.pathname;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (itterator == 0) {
    if (pathName == "/") {
      setValue("Home");
    } else if (pathName == "/contact") {
      setValue("Contact Me");
    } else if (pathName == "/about") {
      setValue("About Me");
    }
    setItterator(1);
  }
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const [checked, setChecked] = React.useState(false);
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Router basename="/">
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Toolbar
            style={
              isMobile
                ? {
                    textAlign: "center",
                  }
                : {}
            }
          >
            <Typography
              component={Link}
              to="/"
              onClick={() => {
                setValue(0);
              }}
              style={{ flex: 1, color: "unset", textDecoration: "none" }}
            >
              Shafin Murani
            </Typography>
            <Stack flexDirection="row">
              {isDesktop || isTablet
                ? routes.map((val, key) => {
                    return (
                      <Button
                        component={Link}
                        to={val.path}
                        style={{ color: "unset", marginInline: "0.3rem" }}
                      >
                        {val.name}
                      </Button>
                    );
                  })
                : ""}
            </Stack>
          </Toolbar>
        </AppBar>
        <RouteManager />
        {isMobile ? (
          <Paper
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
            }}
            elevation={3}
          >
            <BottomNavigation
              style={{ height: "4rem" }}
              // showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction
                component={Link}
                to="/"
                label="Home"
                value="Home"
                icon={<HomeIcon />}
              />
              <BottomNavigationAction
                component={Link}
                to="/about"
                value="About me"
                label="About Me"
                icon={<InfoIcon />}
              />
              <BottomNavigationAction
                component={Link}
                to="/contact"
                label="Contact Me"
                value="Contact Me"
                icon={<ContactPageIcon />}
              />
            </BottomNavigation>
          </Paper>
        ) : (
          ""
        )}
      </ThemeProvider>
    </Router>
  );
};

const RouteManager = () => {
  return (
    <div style={{ marginBottom: "4rem" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Header;
