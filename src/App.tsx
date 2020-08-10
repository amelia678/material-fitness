import React, { useState } from "react";
import "./App.css";

import {
  TextField,
  Typography,
  ThemeProvider,
  FormGroup,
  Container,
} from "@material-ui/core";
import theme from "./theme/theme";

function App() {
  const [meditation, setMeditation] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography variant="h3" gutterBottom align="center">
          Meditations
        </Typography>
        <Container>
          <form>
            <FormGroup>
              <TextField
                name="meditation"
                value={meditation}
                margin="normal"
                label="How long did you meditate?"
                onChange={(e) => setMeditation((e.target.value))}
              ></TextField>
            </FormGroup>
          </form>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
