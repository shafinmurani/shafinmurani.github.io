import { Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import shafin from "../img/shafin.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createMuiTheme, ThemeProvider } from "@mui/material";
const Home = () => {
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
    color: "#8D7257",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };
  const mobileStyle = {
    color: "#8D7257",
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
  return (
    <>
      <div style={{ paddingBottom: "2rem" }}>
        <ThemeProvider theme={Heading}>
          <Typography
            variant="h3"
            style={{ color: "#753600", textAlign: "center", marginTop: "2rem" }}
          >
            Welcome
          </Typography>
        </ThemeProvider>
        <div style={isDesktop ? style : mobileStyle}>
          <img style={imgStyle} src={shafin} />
          <div>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", marginTop: "2rem" }}
              >
                Shafin Murani
              </Typography>
              <Typography
                variant="h6"
                style={
                  isDesktop
                    ? { fontWeight: "light", marginTop: "0.2rem" }
                    : {
                        fontWeight: "light",
                        marginTop: "0.2rem",
                        fontSize: "1.4rem",
                      }
                }
              >
                Full-stack Developer, Ethical Hacker
              </Typography>
            </ThemeProvider>
          </div>
        </div>
        <ThemeProvider theme={theme}>
          <Accordion
            defaultExpanded
            style={{
              marginTop: "6rem",
              width: "80%",
              marginInline: "auto",
              backgroundColor: "#36454F",
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
                        fontSize: "1.3rem",
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
        </ThemeProvider>
      </div>
    </>
  );
};
export default Home;
