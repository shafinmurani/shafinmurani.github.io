import "./App.css";
import NavBar from "./components/navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ paddingBottom: "5rem" }} className="App">
        <NavBar />

        <CssBaseline />
      </div>
    </ThemeProvider>
  );
}

export default App;
