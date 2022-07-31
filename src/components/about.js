import { Button, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import shafin from "../img/shafin.jpg";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createMuiTheme, ThemeProvider } from "@mui/material";
import CertCaeousel from "./carousel";

const About = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
    },
  });
  const Heading = createMuiTheme({
    typography: {
      fontFamily: ["NeonderTHaw", "cursive"].join(","),
    },
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const style = {
    color: "#854E60",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };
  const mobileStyle = {
    color: "#854E60",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
  };
  const imgStyle = {
    maxWidth: "10rem",
    marginTop: "2rem",
    borderRadius: "10rem",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ paddingBottom: "1rem" }}>
        <ThemeProvider theme={Heading}>
          <Typography
            variant="h3"
            style={{ color: "#8A1D00", textAlign: "center", marginTop: "1rem" }}
          >
            About me
          </Typography>
        </ThemeProvider>

        <ThemeProvider theme={theme}>
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            style={{
              marginTop: "2rem",
              width: "80%",
              marginInline: "auto",
              backgroundColor: "#092626",
              borderRadius: "1rem",
              border: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "white" }}>Who am I</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                // variant="caption"
                style={
                  isDesktop
                    ? {
                        color: "#fff",
                        // fontWeight: "normal",
                        // marginTop: "4rem",
                        width: "80%",
                        marginInline: "auto",
                        textAlign: "center",
                      }
                    : {
                        fontSize: "1rem",
                        color: "#fff",
                        // fontWeight: "normal",
                        // marginTop: "4rem",
                        width: "80%",
                        marginInline: "auto",
                        textAlign: "center",
                      }
                }
              >
                I am Shafin Murani, A student and a freelance developer from
                India. I have a deep drive towards developing and tinkering with
                new pieces of technology.
                <br />
                <br />
                As I see it privacy and anonimity of an individual or a
                community is really important hence, I dived into cyber
                security.
                <br />
                <br />
                As a cyber security point of view and where I stand in the field
                I believe in making lives of people private and secure from an
                angle that everyone overlooks.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            style={{
              marginTop: "1rem",
              width: "80%",
              marginInline: "auto",
              backgroundColor: "#092626",
              borderRadius: "1rem",
              border: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "white" }}>My projects</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                // variant="caption"
                style={
                  isDesktop
                    ? {
                        color: "#fff",
                        // fontWeight: "normal",
                        // marginTop: "4rem",
                        width: "80%",
                        marginInline: "auto",
                        textAlign: "center",
                      }
                    : {
                        fontSize: "1rem",
                        color: "#fff",
                        // fontWeight: "normal",
                        // marginTop: "4rem",
                        width: "80%",
                        marginInline: "auto",
                        textAlign: "center",
                      }
                }
              >
                I have worked on several projects for betterment of my skills.
                Here are the links to some on my best works :<br />
                <Button
                  style={{ marginTop: "1rem" }}
                  variant="contained"
                  href="https://vartarevarta.com"
                >
                  VartaReVarta Magazine Website
                </Button>
                <br />
                <Button
                  style={{ marginTop: "1rem" }}
                  variant="contained"
                  href="https://shafinmurani.github.io/weather-app"
                >
                  Weather Web application
                </Button>
                <br />
                <Button
                  style={{ marginTop: "1rem" }}
                  variant="contained"
                  href="https://shafinmurani.github.io/notekeeper"
                >
                  Notekeeping application(persistent)
                </Button>
                <br />
                <Button
                  style={{ marginTop: "1rem" }}
                  variant="contained"
                  href="https://shafinmurani.github.io/twitter-ui-clone"
                >
                  Twitter UI Clone
                </Button>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            style={{
              marginTop: "1rem",
              width: "80%",
              marginInline: "auto",
              backgroundColor: "#092626",
              borderRadius: "1rem",
              border: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "white" }}>My hobbies</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                // variant="caption"
                style={
                  isDesktop
                    ? {
                        color: "#fff",
                        // fontWeight: "normal",
                        // marginTop: "4rem",
                        width: "80%",
                        marginInline: "auto",
                        textAlign: "center",
                      }
                    : {
                        fontSize: "1rem",
                        color: "#fff",
                        // fontWeight: "normal",
                        // marginTop: "4rem",
                        width: "80%",
                        marginInline: "auto",
                        textAlign: "center",
                      }
                }
              >
                I maintain quite a few hobbies some make me a better person from
                inside out whereas some guide me towards happiness but one of my
                top priorities is not being the same person I was yesterday.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            style={{
              marginTop: "1rem",
              width: "80%",
              marginInline: "auto",
              backgroundColor: "#092626",
              borderRadius: "1rem",
              border: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "white" }}>More about me</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                // variant="caption"
                style={
                  isDesktop
                    ? {
                        color: "#fff",
                        // fontWeight: "normal",
                        // marginTop: "4rem",
                        width: "80%",
                        marginInline: "auto",
                        textAlign: "center",
                      }
                    : {
                        fontSize: "1rem",
                        color: "#fff",
                        // fontWeight: "normal",
                        // marginTop: "4rem",
                        width: "80%",
                        marginInline: "auto",
                        textAlign: "center",
                      }
                }
              >
                Just like every other person, I have my flaws but not letting
                them be my weakness is what I strive for.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div
            style={{
              width: "80%",
              marginTop: "2rem",
              marginInline: "auto",
              textAlign: "center",
            }}
          >
            <Typography>Here are some certificates I recieved</Typography>
            <div
              style={{
                maxWidth: "30rem",
                marginInline: "auto",
                marginTop: "2rem",
              }}
            >
              <CertCaeousel />
            </div>
          </div>
          <div
            style={{
              width: "80%",
              marginTop: "2rem",
              marginInline: "auto",
              textAlign: "center",
            }}
          >
            <Typography>
              Want to have a quick word with me? Check out the{" "}
              <Link to="/contact">contact page</Link>{" "}
            </Typography>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
};
export default About;
