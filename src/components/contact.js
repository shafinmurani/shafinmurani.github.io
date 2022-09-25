import { Paper, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import {
  CallOutlined,
  Instagram,
  MailOutlineRounded,
} from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Contact() {
  return (
    <div style={{}}>
      <div
        style={{
          textAlign: "center",
          width: "60%",
          marginInline: "auto",
        }}
      >
        <h1>
          <em style={{ color: "#8685EF" }}>Contact me</em>.
        </h1>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            width: "80%",
            marginInline: "auto",
          }}
        >
          <motion.div
            style={{ height: "100%", width: "100%" }}
            whileHover={{ scale: 1.1 }}
          >
            <Button
              style={{
                width: "12rem",
                backgroundColor: "#aca9bb",
              }}
              startIcon={<MailOutlineRounded />}
              variant="contained"
              component="a"
              href="mailto:shafinmurani9@gmail.com"
            >
              EMAIL
            </Button>
          </motion.div>
          <motion.div
            style={{ height: "100%", width: "100%" }}
            whileHover={{ scale: 1.1 }}
          >
            <Button
              style={{
                backgroundColor: "#aca9bb",
                width: "12rem",
              }}
              startIcon={<CallOutlined />}
              variant="contained"
              component="a"
              href="tel:+91 9904610999"
            >
              Phone
            </Button>
          </motion.div>
          <motion.div
            style={{ height: "100%", width: "100%" }}
            whileHover={{ scale: 1.1 }}
          >
            <Button
              style={{
                backgroundColor: "#aca9bb",
                width: "12rem",
              }}
              startIcon={<Instagram></Instagram>}
              variant="contained"
              component="a"
              href="https://instagram.com/shafin_murani"
            >
              Instagram
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
