import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useMediaQuery } from "react-responsive";
import TwitterIcon from "@mui/icons-material/Twitter";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Contact() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          // orientation="vertical"
          variant={isDesktop ? "" : "fullWidth"}
          centered
          value={value}
          onChange={handleChange}
          aria-label="Contact Tabs"
        >
          <Tab label="Contact Information" {...a11yProps(0)} />
          <Tab label="Social Media" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div
          style={{
            width: "80%",
            marginInline: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            flexDirection: "column",
          }}
        >
          <Button
            href="tel:+91 9904610999"
            size="large"
            variant="contained"
            color="primary"
          >
            <CallIcon />
            Call Me
          </Button>
          <Button
            style={{ marginTop: "1rem" }}
            size="large"
            variant="contained"
            color="primary"
            href="mailto:shafinmurani9@gmail.com"
          >
            <EmailIcon /> Email
          </Button>
          <Button
            style={{ marginTop: "1rem" }}
            size="large"
            variant="contained"
            color="primary"
            href="https://wa.me/919904610999"
          >
            <WhatsAppIcon />
            WhatsApp
          </Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div
          style={{
            width: "80%",
            marginInline: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            flexDirection: "column",
          }}
        >
          <Grid
            justifyContent="center"
            alignItems="center"
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item>
              <Button
                href="https://instagram.com/shafin_murani"
                size="large"
                variant="contained"
                color="primary"
              >
                <InstagramIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button
                href="https://github.com/shafinmurani"
                // style={{ marginTop: "1rem" }}
                size="large"
                variant="contained"
                color="primary"
              >
                <GitHubIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button
                href="https://twitter.com/ShafinMurani"
                // style={{ marginTop: "1rem" }}
                size="large"
                variant="contained"
                color="primary"
              >
                <TwitterIcon />
              </Button>
            </Grid>
          </Grid>
        </div>
      </TabPanel>
    </Box>
  );
}
