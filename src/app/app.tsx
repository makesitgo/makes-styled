import React from "react";
import { Global, ThemeProvider } from "@emotion/react";

import Sandbox from "../sandbox";

import styles from "../styles";
import theme from "../theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      <Sandbox />
    </ThemeProvider>
  );
}

export default App;
