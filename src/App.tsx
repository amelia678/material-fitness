import React from "react";
import "./App.css";

import { TextField, Typography, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography variant="h3" gutterBottom align="center">
          Meditations
        </Typography>
        <TextField></TextField>
        <Typography variant='body1'>here is some dummy text</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
