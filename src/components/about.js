import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
import CertCarousel from "./carousel";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function About() {
  return (
    <div id="about">
      <div
        style={{
          textAlign: "center",
          width: "60%",
          marginInline: "auto",
        }}
      >
        <h1>
          <em style={{ color: "#8685EF" }}>About me</em>.
        </h1>
        <div
          style={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Who am I?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I am Shafin Murani, A student and a freelance developer from
                India. I have a deep drive towards developing and tinkering with
                new pieces of technology.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>My Hobbies</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I maintain quite a few hobbies some make me a better person from
                inside out whereas some guide me towards happiness but one of my
                top priorities is not being the same person I was yesterday.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <h1>
          <em style={{ color: "#8685EF" }}>Projects</em>.
        </h1>{" "}
        <div style={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <motion.div
                style={{ height: "100%", width: "100%" }}
                whileHover={{ marginBottom: "2rem", scale: 1.1 }}
              >
                <Item>
                  <Typography variant="body1">Notes Application</Typography>
                  <br />
                  <br />
                  <Typography variant="caption2">
                    This is a notes application which I made. It utilizes
                    localStorage for persistence and is just a fun project I did
                    by myself
                  </Typography>
                  <br />
                  <br />
                  <Button
                    style={{ backgroundColor: "#ACA9BB" }}
                    component="a"
                    startIcon={<InsertLinkRoundedIcon />}
                    href="https://shafinmurani.github.io/notekeeper/"
                    variant="contained"
                    size="small"
                  >
                    Visit
                  </Button>
                </Item>
              </motion.div>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <motion.div
                style={{ height: "100%", width: "100%" }}
                whileHover={{ marginBottom: "2rem", scale: 1.1 }}
              >
                <Item>
                  <Typography variant="body1">VartaReVarta Magazine</Typography>
                  <br />
                  <br />
                  <Typography variant="caption2">
                    It is a local magazine organisation and I helped them get an
                    online presence.
                  </Typography>
                  <br />
                  <br />
                  <Button
                    style={{ backgroundColor: "#ACA9BB" }}
                    component="a"
                    startIcon={<InsertLinkRoundedIcon />}
                    href="https://vartarevarta.com"
                    variant="contained"
                    size="small"
                  >
                    Visit
                  </Button>
                </Item>
              </motion.div>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <motion.div
                style={{ height: "100%", width: "100%" }}
                whileHover={{ marginBottom: "2rem", scale: 1.1 }}
              >
                <Item>
                  <Typography variant="body1">Resume Generator</Typography>
                  <br />
                  <br />
                  <Typography variant="caption2">
                    Also one of my personal projects is a resume generator.
                  </Typography>
                  <br />
                  <br />
                  <Button
                    startIcon={<InsertLinkRoundedIcon />}
                    style={{ backgroundColor: "#ACA9BB" }}
                    component="a"
                    href="https://shafinmurani.github.io/resume-generator/"
                    variant="contained"
                    size="small"
                  >
                    {/* <InsertLinkRoundedIcon /> */}
                    Visit
                  </Button>
                </Item>
              </motion.div>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <motion.div
                style={{ height: "100%", width: "100%" }}
                whileHover={{ marginBottom: "2rem", scale: 1.1 }}
              >
                <Item>
                  <Typography variant="body1">Weather Application</Typography>
                  <br />
                  <br />
                  <Typography variant="caption2">
                    This is a weather application which I made. It utilizes
                    openWeather API and is just another fun project.
                  </Typography>
                  <br />
                  <br />
                  <Button
                    component="a"
                    startIcon={<InsertLinkRoundedIcon />}
                    href="https://shafinmurani.github.io/weather-app/"
                    style={{ backgroundColor: "#ACA9BB" }}
                    variant="contained"
                    size="small"
                  >
                    Visit
                  </Button>
                </Item>
              </motion.div>
            </Grid>
          </Grid>
        </div>
        <h1>
          <em style={{ color: "#8685EF" }}>Certifications</em>.
        </h1>
        <div style={{ width: "90%", marginInline: "auto" }}>
          <CertCarousel />
        </div>
      </div>
    </div>
  );
}
