import Wave from "react-wavify";
import { Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { ArrowDownwardRounded } from "@mui/icons-material";
import shafin from "../img/shafin.jpg";
export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div
      style={{
        backgroundColor: "transparent",
        position: "relative",
        width: "100%",
        zTndex: 0,
        overflowX: "hidden",
      }}
    >
      <Wave
        style={{
          height: "90vh",
          zIndex: 5,
          margin: 0,
          transform: "rotate(180deg)",
          left: 0,
        }}
        fill="#3D3B4A"
        paused={false}
        options={{
          height: 20,
          amplitude: 45,
          speed: 0.1,
          points: 5,
        }}
      />
      <div
        style={
          !isTabletOrMobile
            ? {
                position: "absolute",
                top: "-10rem",
                left: "50%",
                transform: "translate(-50%,50%)",
                textAlign: "center",
                width: "60%",
                paddingLeft: "7%",
                paddingRight: "5%",
              }
            : {
                position: "absolute",
                top: "-10rem",
                left: "50%",
                transform: "translate(-50%,50%)",
                textAlign: "center",
                width: "70%",
                paddingLeft: "7%",
                paddingRight: "5%",
              }
        }
      >
        <img
          src={shafin}
          style={{ maxWidth: "10rem", borderRadius: "50%" }}
        ></img>
        <h1>
          Hi, I'm <em style={{ color: "#8685EF" }}>Shafin Murani</em>.
        </h1>
        <h3>
          A <em style={{ color: "#8685EF" }}>Web Developer</em> and Computer
          Science student from Gujarat, India.
        </h3>
        <Button
          startIcon={<ArrowDownwardRounded />}
          variant="contained"
          onClick={() => {
            window.scrollTo({
              top: 600,
              behavior: "smooth",
            });
          }}
          style={{ backgroundColor: "#ACA9BB" }}
        >
          Know More
        </Button>
      </div>
    </div>
  );
}
