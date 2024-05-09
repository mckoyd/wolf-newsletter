import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";
import { useAppStyles } from "../styles/app.styles";
import { Grid } from "@mui/material";

const App: React.FC = () => {
  const { classes } = useAppStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent={"center"}
      alignItems={"center"}
      className={classes.app}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Grid>
  );
};

export default App;
